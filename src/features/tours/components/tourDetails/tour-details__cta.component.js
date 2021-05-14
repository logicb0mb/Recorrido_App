import React, { useContext } from 'react';

import { Heading } from '../../../../components/typography/heading.component';
import { CartContext } from '../../../../services/cart/cart.context';
import {
  CTAContainer,
  CTACard,
  CTAImageGrid,
  CTALinearGradient,
  CTALogo,
  CTAImage1,
  CTAImage2,
  CTAContent,
  CTAHeading,
  CTAText,
  CTAButton,
  ButtonText,
} from './styles/tour-details__cta.styles.js';

export const TourDetailsCTA = ({ navigation, tour = {} }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <CTAContainer>
      <CTACard elevation={20}>
        <CTAImageGrid
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
          }}
        >
          <CTALinearGradient colors={['#45d9fd', '#4eefd1ff']} elevation={40}>
            <CTALogo
              source={require('../../../../../assets/img/logo_50.png')}
              resizemode="cover"
            />
          </CTALinearGradient>
          <CTAImage1
            source={{
              uri: `https://recorrido-shreyas.herokuapp.com/img/tours/${tour.images[1]}`,
            }}
            elevation={40}
          />
          <CTAImage2
            source={{
              uri: `https://recorrido-shreyas.herokuapp.com/img/tours/${tour.images[2]}`,
            }}
            elevation={40}
          />
        </CTAImageGrid>
        <CTAContent>
          <CTAHeading>
            <Heading content="What are you" size="70%" />
            <Heading content="waiting for?" size="70%" />
          </CTAHeading>
          <CTAText>{`${tour.duration} days. 1 adventure. Infinite memories. Make it yours today!`}</CTAText>
        </CTAContent>
        <CTAButton
          onPress={() => {
            addToCart(tour);
            navigation.navigate('Checkout');
          }}
        >
          <ButtonText>Book Tour Now!</ButtonText>
        </CTAButton>
      </CTACard>
    </CTAContainer>
  );
};
