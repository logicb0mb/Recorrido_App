import React from 'react';
import moment from 'moment';
import { Heading } from '../../../../components/typography/heading.component';
import {
  DescriptionBox,
  DescriptionBoxText,
} from './styles/tour-details__description.styles';
import { View } from 'react-native';

export const TourDetailsDescriptionBox = ({ tour = {} }) => {
  return (
    <DescriptionBox>
      <Heading content={`About`} />
      {tour.description.split('\n').map((paragraph) => (
        <View>
          <DescriptionBoxText>{paragraph}</DescriptionBoxText>
        </View>
      ))}
    </DescriptionBox>
  );
};
