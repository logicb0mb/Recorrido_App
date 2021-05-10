import styled from 'styled-components/native';
import { Button, TextInput } from 'react-native-paper';

import { Text, View } from 'react-native';

export const AccountBackground = styled.ImageBackground.attrs({
  source: require('../../../../assets/img/app-bg.jpg'),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(69, 217, 253, 0.6);
`;

export const AccountContainer = styled.View.attrs({
  elevation: 5,
})`
  background-color: #fff;
  padding: ${(props) => props.theme.space[4]};
  justify-content: space-between;
`;

export const AuthButton = styled(Button).attrs({
  color: 'rgb(78, 239, 209)',
})`
  padding: ${(props) => props.theme.space[3]};
`;

export const AuthInput = styled(TextInput).attrs({
  theme: {
    colors: {
      text: '#777',
      placeholder: '#777',
      primary: '#45d9fd',
    },
  },
})`
  width: 300px;
  font-size: 15px;
  color: #f2f2f2;
  padding: 5px;
  border: none;
  background-color: #f2f2f2;
  border-radius: 4px;
`;

export const AuthLabel = styled(Text)`
  margin-top: 7.5px;
  margin-bottom: 7.5px;
  color: #777;
  font-weight: bold;
`;

export const TitleView = styled(View)`
  padding: 10px;
  margin-bottom: 70px;
`;

export const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 30px;
  letter-spacing: 11px;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
`;
export const Caption = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  letter-spacing: 5px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
`;
export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;
