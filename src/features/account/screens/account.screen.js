import React from 'react';
import { Spacer } from '../../../components/spacer/spacer.component';
import LottieTravel from '../../../components/utility/lottie-travel.component';
import { Heading } from '../../../components/typography/heading.component';
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  TitleView,
  Title,
  Caption,
} from '../components/account.styles';

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <LottieTravel />
      <TitleView>
        <Title>Recorrido</Title>
        <Caption>Dream.Explore.Discover</Caption>
      </TitleView>
      <AccountContainer>
        <AuthButton
          icon="login"
          mode="contained"
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="email"
            mode="contained"
            onPress={() => navigation.navigate('Register')}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
