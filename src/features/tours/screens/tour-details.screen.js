import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';

import { reviewsRequest } from '../../../services/reviews/reviewRequest.service';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { TourDetailsHeader } from '../components/tourDetails/tour-details__header.component';
import { TourDetailsOverviewBox } from '../components/tourDetails/tour-detail__overviewbox.component';
import { TourDetailsDescriptionBox } from '../components/tourDetails/tour-details__descriptionbox.component';
import { TourDetailsGallery } from '../components/tourDetails/tour-details__gallery.component';
import { TourDetailsMap } from '../components/tourDetails/tour-details__mapClass.component';
import { TourDetailsReviews } from '../components/tourDetails/tour-details__reviews.component';
import { TourDetailsCTA } from '../components/tourDetails/tour-details__cta.component';

export const TourDetailsScreen = ({ navigation, route }) => {
  const { tour } = route.params;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const response = await reviewsRequest(tour.id);
      setReviews(response);
    };
    getReviews();
  }, [tour]);

  return (
    <SafeArea>
      <ScrollView>
        {/* <TourInfoCard tour={tour} /> */}
        <TourDetailsHeader tour={tour} />
        <TourDetailsOverviewBox tour={tour} />
        <TourDetailsDescriptionBox tour={tour} />
        <TourDetailsGallery tour={tour} />
        <TourDetailsMap tour={tour} />
        <TourDetailsReviews reviews={reviews} />
        <TourDetailsCTA tour={tour} navigation={navigation} />
      </ScrollView>
    </SafeArea>
  );
};
