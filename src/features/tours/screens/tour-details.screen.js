import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native';
import { TourInfoCardHeader } from '../components/tourCard/tour-infocard__header.component';
import { TourDetailsOverviewBox } from '../components/tourDetails/tour-detail__overviewbox.component';
import { SafeArea } from '../../../components/utility/safe-area.component';

export const TourDetailsScreen = ({ route }) => {
  const { tour } = route.params;
  return (
    <SafeArea>
      <ScrollView>
        {/* <TourInfoCard tour={tour} /> */}
        <TourInfoCardHeader tour={tour} />
        <TourDetailsOverviewBox tour={tour} />
      </ScrollView>
    </SafeArea>
  );
};
