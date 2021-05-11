import React from 'react';

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { Heading } from '../../../../components/typography/heading.component';
import {
  DescriptionContainer,
  TourCardCover,
  DescriptionBox,
  DescriptionBoxText,
} from './styles/tour-details__description.styles';
import { View } from 'react-native';

import Svg, {
  G,
  Polygon,
  Rect,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';

export const TourDetailsDescriptionBox = ({ tour = {} }) => {
  return (
    <>
      <DescriptionContainer>
        <Svg height="100%" width="100%">
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
              <Stop offset="0" stopColor="#45d9fd" stopOpacity="0.7" />
              <Stop offset="1" stopColor="#4eefd1ff" stopOpacity="0.8" />
            </LinearGradient>

            <ClipPath id="clip">
              <G scale="1">
                <Polygon points="0,35 430,0 430,335 0,370" />
              </G>
            </ClipPath>
          </Defs>
          <TourCardCover
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            //   href={require(imageCoverUri)}
            // href={{
            //   uri:
            //     'https://recorrido-shreyas.herokuapp.com/img/tours/' +
            //     tour.imageCover,
            // }}
            // href={{
            //     uri: tour.imageCoverUri,
            //   }}
            resizemode="cover"
            fill="url(#grad)"
            clipPath="url(#clip)"
          />
          <Rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#grad)"
            clipPath="url(#clip)"
            opacity="0.6"
          />
        </Svg>
        <DescriptionBox>
          <Heading content={'About'} height="20%" />
          {tour.description.split('\n').map((paragraph) => (
            <View key={uuidv4()}>
              <DescriptionBoxText>{paragraph}</DescriptionBoxText>
            </View>
          ))}
        </DescriptionBox>
      </DescriptionContainer>
    </>
  );
};
