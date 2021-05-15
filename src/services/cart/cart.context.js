import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthenticationContext } from '../authentication/authentication.context';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  console.log(user);
  const [cart, setCart] = useState([]);
  const [tour, setTour] = useState(null);

  const saveCart = async (tor, crt, uid) => {
    try {
      const jsonValue = JSON.stringify({ tour: tor, cart: crt });
      await AsyncStorage.setItem(`@cart-${uid}`, jsonValue);
    } catch (e) {
      console.log('error storing', e);
    }
  };

  const loadCart = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@cart-${uid}`);
      if (value !== null) {
        const { tour: tor, cart: crt } = JSON.parse(value);
        setTour(tor);
        setCart(crt);
      }
    } catch (e) {
      console.log('error storing', e);
    }
  };

  useEffect(() => {
    if (user) {
      loadCart(user._id);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      saveCart(tour, cart, user._id);
    }
  }, [tour, cart, user]);

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
