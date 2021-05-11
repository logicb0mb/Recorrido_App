import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
import { Favourite } from '../../../../components/favourites/favourites.component';
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

export const TourInfoCard = ({ tour = {}, navigation }) => {
  return (
    <>
      <View // Parent
        style={{
          flex: 1,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 10,
          borderRadius: 4,
        }}
      >
        <TourCard borderRadius={4}>
          <View>
            <Favourite tour={tour} />
            <TourInfoCardHeader tour={tour} />
          </View>
          <TourInfoCardDetails tour={tour} />
          <TourInfoCardFooter navigation={navigation} tour={tour} />
        </TourCard>
      </View>
    </>
  );
};

export default TourInfoCard;
