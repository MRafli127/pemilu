import { createContext, useContext, useState } from 'react';

const CountdownContext = createContext();

export const useCountdown = () => useContext(CountdownContext);

export const CountdownProvider = ({ children }) => {
  const [isCountdownZero, setIsCountdownZero] = useState(false);

  return (
    <CountdownContext.Provider value={{ isCountdownZero, setIsCountdownZero }}>
      {children}
    </CountdownContext.Provider>
  );
};
