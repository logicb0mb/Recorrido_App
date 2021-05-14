import React, { useContext, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';

import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.component';

import { CartContext } from '../../../services/cart/cart.context';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';

import { CreditCard } from '../components/credit-card.component';
import { CheckoutTourDetails } from '../components/checkout-tour-details.component.js';
import {
  CartIconContainer,
  CartIcon,
  CreditCardContainer,
  PayButton,
  ClearButton,
} from '../components/checkout.styles';
import { TourInfoCard } from '../../tours/components/tourCard/tour-infocard.component';
import { CompactTourInfo } from '../../../components/tour/compact-tour-info.component';
import { payRequest } from '../../../services/checkout/checkout.service';

export const CheckoutScreen = ({ navigation }) => {
  const { cart, tour, clearCart } = useContext(CartContext);
  const { user, jwtToken } = useContext(AuthenticationContext);
  const [card, setCard] = useState(null);

  const onPay = () => {
    if (!card || !card.id) {
      console.log('some error');
      return;
    }
    const tourPriceForStripe = tour.price * 100;
    payRequest(card.id, tourPriceForStripe, user.name, tour.id, jwtToken);
  };

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
          <CreditCard name={user.name} onSuccess={setCard} />
        </CreditCardContainer>
        <Spacer position="top" size="large">
          <PayButton icon="cash-usd" mode="contained" onPress={onPay}>
            Pay
          </PayButton>
        </Spacer>
        <Spacer position="top" size="large">
          <ClearButton icon="cart-off" mode="contained" onPress={clearCart}>
            Clear Cart
          </ClearButton>
        </Spacer>
        <Spacer position="top" size="large" />
      </ScrollView>
    </SafeArea>
  );
};
