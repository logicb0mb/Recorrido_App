import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';

import TourInfoCardHeader from './tour-infocard__header.component';
import TourInfoCardDetails from './tour-infocard-details.component';
import TourInfoCardFooter from './tour-infocard__footer.component';

const TourCard = styled(View)`
  background-color: #fff;
  position: relative;
  border-radius: 4px;
  ${
    '' /* flex: 1;  ${ // Dont give flex 1 over here, even by mistake it fucks up the flatList } */
  }
  height: 520px;
`;

const TourInfoCard = ({ tour = {}, navigation }) => {
  return (
    <>
      <TourCard elevation={3} borderRadius={4}>
        <TourInfoCardHeader tour={tour} />
        <TourInfoCardDetails tour={tour} />
        <TourInfoCardFooter navigation={navigation} tour={tour} />
      </TourCard>
    </>
  );
};

export default TourInfoCard;
