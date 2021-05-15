import styled from 'styled-components/native';

import { colors } from '../../../infrastructure/theme/colors';

import {
  Avatar,
  TextInput,
  ActivityIndicator,
  Button,
  Colors,
} from 'react-native-paper';

export const CartIconContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;
export const CartIcon = styled(Avatar.Icon).attrs({
  size: 128,
})`
  background-color: ${(props) => props.bg || props.theme.colors.brand.primary};
`;

export const CreditCardContainer = styled.View`
  padding: 5px;
  margin-top: -10px;
`;

export const PayButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  width: 80%;
  align-self: center;
  padding: ${(props) => props.theme.space[2]};
  border-radius: 50px;
`;
export const ClearButton = styled(Button).attrs({
  color: colors.ui.error,
})`
  width: 80%;
  align-self: center;
  padding: ${(props) => props.theme.space[2]};
  border-radius: 50px;
`;

export const PaymentProcessing = styled(ActivityIndicator).attrs({
  size: 128,
  animating: true,
  color: colors.brand.primary,
})`
  position: absolute;
  top: 50%;
  left: 35%;
  z-index: 999;
`;
