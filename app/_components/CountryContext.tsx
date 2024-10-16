import React, { createContext, useContext, useState, ReactNode } from "react";

interface CountryContextType {
  country: string;
  setCountry: (country: string) => void;
}

// Create context with default values
const CountryContext = createContext<CountryContextType | undefined>(undefined);

// Provider component
export const CountryProvider = ({ children }: { children: ReactNode }) => {
  const [country, setCountry] = useState<string>("");

  return (
    <CountryContext.Provider value={{ country, setCountry }}>
      {children}
    </CountryContext.Provider>
  );
};

// Hook for using context
export const useCountry = () => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error("useCountry must be used within a CountryProvider");
  }
  return context;
};
