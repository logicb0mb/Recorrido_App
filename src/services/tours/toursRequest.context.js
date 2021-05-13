import React, { useState, createContext, useEffect, useContext } from 'react';

import { toursRequest, tourTransform } from './toursRequest.services';

import { LocationContext } from '../location/location.context';

export const ToursContext = createContext();

export const ToursContextProvider = ({ children }) => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

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

  const retrieveTours = async (loc) => {
    try {
      setIsLoading(true);
      setTours([]);
      const apiResponse = await toursRequest(loc);

      if (Array.isArray(apiResponse) && apiResponse.length > 0) {
        // array exists and is not empty
        const results = tourTransform(apiResponse);
        setTours(results);
        setIsLoading(false);
        setError(null);
        // console.log(results);
      } else {
        // console.log('No tour found for this location');
        setIsLoading(false);
        setTours([]);
        setError('No tour found for this location');
      }
    } catch (err) {
      setIsLoading(false);
      setError(err);
    }
  };

  useEffect(() => {
    if (location) {
      let locationString = `${location.lat},${location.lng}`;
      if (location === 'alltours') {
        locationString = 'alltours';
      }
      console.log('location changed!');
      //   console.log(locationString);
      retrieveTours(locationString);
    }
  }, [location]);

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
