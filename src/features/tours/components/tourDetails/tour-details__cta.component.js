import React from 'react';
import { View, Text } from 'react-native';
import { Heading } from '../../../../components/typography/heading.component';

import {
  CTAContainer,
  CTACard,
  CTAImageGrid,
  CTAContent,
  CTAHeading,
  CTAText,
  CTAButton,
  ButtonText,
} from './styles/tour-details__cta.styles.js';

export const TourDetailsCTA = ({ tour = {} }) => {
  return (
    <CTAContainer>
      <CTACard>
        <CTAImageGrid>
          <Text>ImageGrid</Text>
        </CTAImageGrid>
        <CTAContent>
          <CTAHeading>
            <Heading content="What are you" size="70%" />
            <Heading content="waiting for?" size="70%" />
          </CTAHeading>
          <CTAText>{`${tour.duration} days. 1 adventure. Infinite memories. Make it yours today!`}</CTAText>
        </CTAContent>
        <CTAButton>
          <ButtonText>Book Tour Now!</ButtonText>
        </CTAButton>
      </CTACard>
    </CTAContainer>
  );
};
