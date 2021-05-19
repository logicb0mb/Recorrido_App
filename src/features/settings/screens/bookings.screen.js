import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

import { bookingsRequest } from '../../../services/bookings/bookingsRequest.service';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';

import { TourList } from '../../tours/components/tourCard/tour-list.styles';
import { TourInfoCard } from '../../tours/components/tourCard/tour-infocard.component';

const NoBookedToursArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const BookingsScreen = ({ navigation }) => {
  const [toursBooked, setToursBooked] = useState([]);

  useEffect(() => {
    const getToursBooked = async () => {
      const response = await bookingsRequest();
      setToursBooked(response);
    };
    getToursBooked();
  }, []);

  return toursBooked.length ? (
    <SafeArea>
      <TourList
        data={toursBooked}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <TourInfoCard tour={item} navigation={navigation} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoBookedToursArea>
      <Text center>No Tours Booked yet</Text>
    </NoBookedToursArea>
  );
};
