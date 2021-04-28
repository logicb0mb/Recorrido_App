import React, { useState, createContext, useEffect, useMemo } from 'react';

import { toursRequest, tourTransform } from './toursRequest.services';

export const ToursContext = createContext();

export const ToursContextProvider = ({ children }) => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //   const retrieveTours = () => {
  //     setIsLoading(true);

  //     toursRequest()
  //       .then((results) => {
  //         setIsLoading(false);

  //         setTours(results);
  //       })
  //       .catch((err) => {
  //         setIsLoading(false);
  //         setError(err);
  //       });
  //   };

  const retrieveTours = async () => {
    try {
      setIsLoading(true);
      const apiResponse = await toursRequest();

      if (Array.isArray(apiResponse) && apiResponse.length) {
        // array exists and is not empty
        const results = tourTransform(apiResponse);

        setTours(results);
        setIsLoading(false);
        // console.log(results);
      }
    } catch (err) {
      setIsLoading(false);
      setError(err);
    }
  };

  useEffect(() => {
    retrieveTours();
  }, []);

  return (
    <ToursContext.Provider
      value={{
        tours,
        isLoading,
        error,
      }}
    >
      {children}
    </ToursContext.Provider>
  );
};
