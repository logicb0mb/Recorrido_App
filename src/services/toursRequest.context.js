import React, { useState, createContext, useEffect, useMemo } from 'react';

import { toursRequest } from './toursRequest.services';

export const ToursContext = createContext();

export const ToursContextProvider = ({ children }) => {
  return (
    <ToursContext.Provider
      value={{
        tours: [1, 2, 3, 4, 5, 6, 7, 8],
      }}
    >
      {children}
    </ToursContext.Provider>
  );
};
