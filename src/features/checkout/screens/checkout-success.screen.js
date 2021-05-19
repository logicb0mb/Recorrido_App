import React from 'react';
import styled from 'styled-components/native';
import { Text } from '../../../components/typography/text.component';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { CartIconContainer, CartIcon } from '../components/checkout.styles';

const SuccessText = styled(Text)`
  background-color: #4eefd1;
  color: #050f28;
  text-align: center;
  margin: 10px;
  margin-top: 50px;
  padding: 20px;
  border-radius: 10px;
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.body};
`;

export const CheckoutSuccessScreen = () => (
  <SafeArea>
    <CartIconContainer>
      <CartIcon icon="check-bold" />
      <Text variant="label">Success!</Text>
      <SuccessText variant="label">
        Your Booking was successfull! Please check your email for a
        confirmation. If your booking doesn't show up in Settings tab under My
        Bookings section immediately, please check later.
      </SuccessText>
    </CartIconContainer>
  </SafeArea>
);
