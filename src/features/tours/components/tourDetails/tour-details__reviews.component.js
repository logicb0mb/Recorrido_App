import React from 'react';
import moment from 'moment';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { Heading } from '../../../../components/typography/heading.component';
import {
  ReviewsContainer,
  ReviewsBox,
  ReviewsList,
  ReviewCard,
  ReviewUser,
  ReviewUserImage,
  ReviewUserName,
  ReviewText,
  ReviewRating,
  Star,
} from './styles/tour-details__reviews.styles';
import { View, Text } from 'react-native';

import Svg, {
  G,
  Polygon,
  Rect,
  Image as SVGImage,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';

export const TourDetailsReviews = ({ reviews = {} }) => {
  const star = [];

  return (
    <>
      <ReviewsContainer>
        <Svg height="100%" width="100%">
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
              <Stop offset="0" stopColor="#45d9fd" stopOpacity="1" />
              <Stop offset="1" stopColor="#4eefd1ff" stopOpacity="1" />
            </LinearGradient>

            <ClipPath id="clip">
              <G scale="1">
                <Polygon points="0,35 415,0 415,380 0,415" />
              </G>
            </ClipPath>
          </Defs>
          <Polygon
            points="0,35 415,0 415,380 0,415"
            width="100%"
            height="100%"
            fill="url(#grad)"
            clipPath="url(#clip)"
            opacity="1"
          />
        </Svg>
        <ReviewsBox>
          <ReviewsList
            data={reviews}
            renderItem={({ item }) => {
              //   console.log(Array(item.rating));
              //   console.log(item);
              return (
                <ReviewCard>
                  <ReviewUser>
                    <ReviewUserImage
                      source={{
                        uri: `https://recorrido-shreyas.herokuapp.com/img/users/${item.user.photo}`,
                      }}
                    />
                    <ReviewUserName>{item.user.name}</ReviewUserName>
                  </ReviewUser>
                  <ReviewText> {item.review}</ReviewText>
                  <ReviewRating>
                    {[...Array(item.rating)].map((e, i) => (
                      <Star name={'star'} color={'#45d9fd'} size={25} />
                    ))}
                    {[...Array(5 - item.rating)].map((e, i) => (
                      <Star name={'star'} color={'#777'} size={25} />
                    ))}
                  </ReviewRating>
                </ReviewCard>
              );
            }}
            keyExtractor={(item) => item.name}
            horizontal
          />
        </ReviewsBox>
      </ReviewsContainer>
    </>
  );
};
