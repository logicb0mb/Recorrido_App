import React, { useContext, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';

import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.component';

import { CartContext } from '../../../services/cart/cart.context';

import { CreditCard } from '../components/credit-card.component';
import { CheckoutTourDetails } from '../components/checkout-tour-details.component.js';
import {
  CartIconContainer,
  CartIcon,
  CreditCardContainer,
} from '../components/checkout.styles';
import { TourInfoCard } from '../../tours/components/tourCard/tour-infocard.component';
import { CompactTourInfo } from '../../../components/tour/compact-tour-info.component';

export const CheckoutScreen = ({ navigation }) => {
  const { cart, tour } = useContext(CartContext);
  if (!cart.length || !tour) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text>Your cart is empty!</Text>
        </CartIconContainer>
      </SafeArea>
    );
  }
  return (
    <SafeArea>
      <ScrollView>
        {/* <TourInfoCard tour={tour} /> */}
        <CheckoutTourDetails tour={tour} navigation={navigation} />
        <CreditCardContainer>
          <CreditCard />
        </CreditCardContainer>
      </ScrollView>
    </SafeArea>
  );
};
