import React from 'react';

import {
  CardFooter,
  CardFooterTextContainer,
  FooterGridCell,
  FooterText,
  FooterValue,
  DetailsButton,
  ButtonText,
} from './tour-infocard__footer.styles';

export const TourInfoCardFooter = ({ tour, navigation }) => {
  return (
    <CardFooter>
      <CardFooterTextContainer>
        <FooterGridCell>
          <FooterText>
            <FooterValue>${tour.price}</FooterValue> per person
          </FooterText>
        </FooterGridCell>

        <FooterGridCell>
          <FooterText>
            <FooterValue>{tour.ratingsAverage}</FooterValue> Rating (
            {tour.ratingsQuantity})
          </FooterText>
        </FooterGridCell>
      </CardFooterTextContainer>

      <DetailsButton
        onPress={() => navigation.navigate('TourDetail', { tour: tour })}
      >
        <ButtonText>Details</ButtonText>
      </DetailsButton>
    </CardFooter>
  );
};

export default TourInfoCardFooter;
