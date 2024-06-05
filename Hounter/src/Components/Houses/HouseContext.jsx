// HouseContext.js
import { createContext, useState } from 'react';

export const HouseContext = createContext();

export const HouseProvider = ({ children }) => {
  const [houses, setHouses] = useState([]);

  return (
    <HouseContext.Provider value={{ houses, setHouses }}>
      {children}
    </HouseContext.Provider>
  );
};
