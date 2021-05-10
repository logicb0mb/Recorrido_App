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
  background-color: rgba(78, 239, 209, 0.2);
`;

export const AccountContainer = styled.View.attrs({
  elevation: 5,
})`
  background-color: rgba(255, 255, 255, 0.9);
  padding: ${(props) => props.theme.space[4]};
  justify-content: space-between;
`;

export const AuthButton = styled(Button).attrs({
  //   color: 'rgb(78, 239, 209)',
  color: '#45d9fd',
})`
  padding: ${(props) => props.theme.space[2]};
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
  color: #000;
  font-weight: bold;
`;

export const TitleView = styled(View)`
  padding: 10px;
  position: absolute;
  top: 100;
  ${'' /* margin-bottom: 100px; */}
`;

export const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 30px;
  letter-spacing: 11px;
  color: #c5295a;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 5px;
`;
export const Caption = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  letter-spacing: 5px;
  font-size: 14px;
  color: #050f28;
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
