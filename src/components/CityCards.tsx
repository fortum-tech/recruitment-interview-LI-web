import React from "react";

type City = {
  cityName: string;
  country: string;
  population?: number;
  publicImg?: string;
};

export function CityCards({ chunks }: { chunks: string[] }) {
  // Combine all chunks into one string and split by newlines
  const lines = chunks
    .join("")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const cities: City[] = lines
    .map((line) => {
      try {
        return JSON.parse(line);
      } catch {
        return null;
      }
    })
    .filter((c): c is City => !!c && !!c.cityName && !!c.country);

  if (cities.length === 0) {
    return (
      <div>
        <div className="text-gray-500 text-sm">
          No valid city data received.
        </div>
        <pre className="bg-gray-100 p-2 rounded text-xs">
          {chunks.join("\n")}
        </pre>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4">
      {cities.map((city, idx) => (
        <div
          key={city.cityName + city.country + idx}
          className="bg-white rounded-lg shadow p-4 flex flex-col items-center"
        >
          <div className="w-32 h-32 mb-3 flex items-center justify-center bg-gray-100 rounded overflow-hidden">
            {city.publicImg ? (
              <img
                src={city.publicImg}
                alt={city.cityName}
                className="object-cover w-full h-full"
              />
            ) : (
              <span className="text-gray-400 text-xs">No image</span>
            )}
          </div>
          <div className="font-bold text-lg text-center">{city.cityName}</div>
          <div className="text-sm text-gray-600 text-center">
            {city.country}
          </div>
          {city.population && (
            <div className="text-xs text-gray-400 mt-1">
              Population: {city.population.toLocaleString()}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
