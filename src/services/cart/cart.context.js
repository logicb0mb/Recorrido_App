import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthenticationContext } from '../authentication/authentication.context';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);

  const [cart, setCart] = useState([]);
  const [tour, setTour] = useState(null);

  const add = (tor) => {
    if (!tour || tour._id !== tor._id) {
      setTour(tor);
      setCart([tor]);
    } else {
      setCart([...cart, tor]);
    }
  };

  const clear = () => {
    setCart([]);
    setTour(null);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart: add,
        clearCart: clear,
        tour,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
