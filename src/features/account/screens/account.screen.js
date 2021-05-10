import React from 'react';
import { Spacer } from '../../../components/spacer/spacer.component';
import { FadeInView } from '../../../components/animations/fade.animation';
import SlideLeft from '../../../components/animations/slideLeft.animation';
import SlideRight from '../../../components/animations/slideRight.animation';

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
      {/* <LottieTravel /> */}
      <TitleView>
        <FadeInView>
          <SlideLeft duration={1200}>
            <Title>Recorrido</Title>
          </SlideLeft>
          <SlideRight duration={1200}>
            <Caption>Dream.Explore.Discover</Caption>
          </SlideRight>
        </FadeInView>
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
