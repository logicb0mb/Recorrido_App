import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext } from '../authentication/authentication.context';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);

  const [favourites, setFavourites] = useState([]);

  const saveFavourites = async (value, id) => {
    try {
      const jsonValue = JSON.stringify(value);
      console.log(`@favourites-${id}-`);
      await AsyncStorage.setItem(`@favourites-${id}-`, jsonValue);
    } catch (e) {
      console.log('error storing', e);
    }
  };

  const loadFavourites = async (id) => {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${id}-`);
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log('error loading', e);
    }
  };
  const add = (tour) => {
    setFavourites([...favourites, tour]);
  };

  const remove = (tour) => {
    const newFavourites = favourites.filter((x) => x.id !== tour.id);

    setFavourites(newFavourites);
  };

  useEffect(() => {
    if (user && user._id) {
      loadFavourites(user._id);
    }
  }, [user]);

  useEffect(() => {
    if (user && user._id && favourites.length) {
      saveFavourites(favourites, user._id);
    }
  }, [favourites, user]);
  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
