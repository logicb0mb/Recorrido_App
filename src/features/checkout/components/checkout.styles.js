import styled from 'styled-components/native';
import { Avatar } from 'react-native-paper';

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
  padding: 10px;
`;
