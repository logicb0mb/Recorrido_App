import React from 'react';

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

import {
  CardHeader,
  TourCardCover,
  HeadingTertiary,
  CardHeadingContainer,
  CardHeadingGradientContainer,
} from './tour-infocard__header.styles';

export const TourInfoCardHeader = ({ tour }) => {
  const {
    startLocation = {
      description: 'Miami, USA',
      type: 'Point',
      coordinates: [-80.185942, 25.774772],
      address: '301 Biscayne Blvd, Miami, FL 33132, USA',
    },
    ratingsAverage = 4.8,
    ratingsQuantity = 6,
    images = ['tour-2-1.jpg', 'tour-2-2.jpg', 'tour-2-3.jpg'],
    startDates = [
      '2021-06-19T09:00:00.000Z',
      '2021-07-20T09:00:00.000Z',
      '2021-08-18T09:00:00.000Z',
    ],
    _id = '5c88fa8cf4afda39709c2955',
    name = 'The Sea Explorer',
    duration = 7,
    maxGroupSize = 15,
    difficulty = 'medium',
    guides = ['5c8a22c62f8fb814b56fa18b', '5c8a1f4e2f8fb814b56fa185'],
    price = 497,
    summary = 'Exploring the jaw-dropping US east coast by foot and by boat',
    description = 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    imageCover = 'tour-2-cover.jpg',
    locations = [
      {
        _id: '5c88fa8cf4afda39709c2959',
        description: 'Lummus Park Beach',
        type: 'Point',
        coordinates: [-80.128473, 25.781842],
        day: 1,
      },
      {
        _id: '5c88fa8cf4afda39709c2958',
        description: 'Islamorada',
        type: 'Point',
        coordinates: [-80.647885, 24.909047],
        day: 2,
      },
      {
        _id: '5c88fa8cf4afda39709c2957',
        description: 'Sombrero Beach',
        type: 'Point',
        coordinates: [-81.0784, 24.707496],
        day: 3,
      },
      {
        _id: '5c88fa8cf4afda39709c2956',
        description: 'West Key',
        type: 'Point',
        coordinates: [-81.768719, 24.552242],
        day: 5,
      },
    ],
  } = tour;

  const nameFirstPart = '';
  const nameSecondPart = '';

  const nameSplitter = (nameFirstPartParameter, nameSecondPartParameter) => {
    let s = name.split(/\s+/);
    // console.log(s);
    nameFirstPartParameter = s[0] + ' ' + s[1];
    // console.log(nameFirstPart);
    nameSecondPartParameter = s[2];

    // console.log(nameSecondPart);
    return [nameFirstPartParameter, nameSecondPartParameter];
  };

  const nameArray = nameSplitter(nameFirstPart, nameSecondPart);

  return (
    <CardHeader>
      <Svg height="100%" width="100%" preserveAspectRatio="xMinYMin slice">
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0" stopColor="#45d9fd" stopOpacity="0.7" />
            <Stop offset="1" stopColor="#4eefd1ff" stopOpacity="0.8" />
          </LinearGradient>

          <ClipPath id="clip">
            <G scale="1">
              <Polygon points="0,0 400,0 400,185 0,220" />
            </G>
          </ClipPath>
        </Defs>
        <TourCardCover
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          href={{
            uri:
              'https://recorrido-shreyas.herokuapp.com/img/tours/' + imageCover,
          }}
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
      <CardHeadingContainer>
        <CardHeadingGradientContainer
          colors={['#rgba(58, 182, 219, 0.85)', '#rgba(78, 239, 209, 0.85)']}
          //   start={{ x: 0.0, y: 0.0 }}
          //   end={{ x: 1.0, y: 1.0 }}
        >
          <HeadingTertiary>{nameArray[0]}</HeadingTertiary>
        </CardHeadingGradientContainer>
        <CardHeadingGradientContainer
          colors={['#rgba(58, 182, 219, 0.85)', '#rgba(78, 239, 209, 0.85)']}
          //   start={{ x: 0.0, y: 0.0 }}
          //   end={{ x: 1.0, y: 1.0 }}
        >
          <HeadingTertiary> {nameArray[1]}</HeadingTertiary>
        </CardHeadingGradientContainer>
      </CardHeadingContainer>
    </CardHeader>
  );
};

export default TourInfoCardHeader;
