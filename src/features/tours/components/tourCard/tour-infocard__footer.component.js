import React from 'react';

import {
  CardFooter,
  CardFooterTextContainer,
  FooterGridCell,
  FooterText,
  FooterValue,
  DetailsButton,
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
      {/* <View
            style={{
              flex: 1,
              width: '55%',
              height: '100%',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              flexGrow: 1,
            }}
          > */}
      {/* <View
              style={{
                flex: 1,
                width: '100%',
                height: '100%',
                flexGrow: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
                backgroundColor: 'yellow',
              }}
            > */}
      <DetailsButton
        onPress={() => navigation.navigate('TourDetail', { tour: tour })}
        title="Details"
        color="#45D8FC"
      />
      {/* </View> */}
      {/* </View> */}
    </CardFooter>
  );
};

export default TourInfoCardFooter;
