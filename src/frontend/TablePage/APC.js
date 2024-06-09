// AveragePredictionsContext.js
import React, { createContext, useContext, useState } from 'react';

const AveragePredictionsContext = createContext();

export const AveragePredictionsProvider = ({ children }) => {
  const [averagePredictions, setAveragePredictions] = useState(null);

  return (
    <AveragePredictionsContext.Provider value={{ averagePredictions, setAveragePredictions }}>
      {children}
    </AveragePredictionsContext.Provider>
  );
};

export const useAveragePredictions = () => useContext(AveragePredictionsContext);
