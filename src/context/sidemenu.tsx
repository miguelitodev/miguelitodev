"use client";

import React, { createContext, useState } from "react";

interface ILocationProvider {
  children: React.ReactNode;
}

interface ILocationContext {
  isMenuOpen?: boolean;
  setIsMenuOpen?: (value: boolean) => void;
}

export const SidemenuContext = createContext<ILocationContext>({});

export function SidemenuProvider({ children }: ILocationProvider) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <SidemenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </SidemenuContext.Provider>
  );
}
