import React from 'react';

import { ScrollView } from 'react-native';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { TourDetailsHeader } from '../components/tourDetails/tour-details__header.component';
import { TourDetailsOverviewBox } from '../components/tourDetails/tour-detail__overviewbox.component';
import { TourDetailsDescriptionBox } from '../components/tourDetails/tour-details__descriptionbox.component';
import { TourDetailsGallery } from '../components/tourDetails/tour-details__gallery.component';
import { TourDetailsMap } from '../components/tourDetails/tour-details__mapClass.component';

export const TourDetailsScreen = ({ route }) => {
  const { tour } = route.params;
  return (
    <SafeArea>
      <ScrollView>
        {/* <TourInfoCard tour={tour} /> */}
        <TourDetailsHeader tour={tour} />
        <TourDetailsOverviewBox tour={tour} />
        <TourDetailsDescriptionBox tour={tour} />
        <TourDetailsGallery tour={tour} />

        <TourDetailsMap tour={tour} />
      </ScrollView>
    </SafeArea>
  );
};
