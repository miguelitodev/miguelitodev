"use client";

import React, { createContext, useState } from "react";

type LocationData = {
  tz_id: string;
  text: string;
  country: string;
};

type TypeLocationContext = {
  setDataLocation: (value: LocationData) => void;
} & LocationData;

export const LocationContext = createContext<TypeLocationContext>({
  tz_id: "",
  text: "",
  country: "",
  setDataLocation: () => {},
});

type TypeLocationProvider = {
  children: React.ReactNode;
};

export function LocationProvider({ children }: TypeLocationProvider) {
  const [dataLocation, setDataLocation] = useState<LocationData>({
    tz_id: "",
    text: "",
    country: "",
  });

  return (
    <LocationContext.Provider value={{ ...dataLocation, setDataLocation }}>
      {children}
    </LocationContext.Provider>
  );
}
