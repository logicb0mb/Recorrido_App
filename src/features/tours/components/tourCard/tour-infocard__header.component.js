import React from 'react';
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

import {
  CardHeader,
  TourCardCover,
  HeadingTertiary,
  CardHeadingContainer,
  CardHeadingGradientContainer,
} from './tour-infocard__header.styles';

export const TourInfoCardHeader = ({ tour }) => {
  const nameFirstPart = '';
  const nameSecondPart = '';

  const nameSplitter = (nameFirstPartParameter, nameSecondPartParameter) => {
    let s = tour.name.split(/\s+/);
    // console.log(s);
    nameFirstPartParameter = s[0] + ' ' + s[1];
    // console.log(nameFirstPart);
    nameSecondPartParameter = s[2];

    // console.log(nameSecondPart);
    return [nameFirstPartParameter, nameSecondPartParameter];
  };

  const nameArray = nameSplitter(nameFirstPart, nameSecondPart);
  //   const localImage = require(tour.imageCoverUri);
  return (
    <CardHeader>
      <Svg height="100%" width="100%" preserveAspectRatio="xMinYMin slice">
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0" stopColor="#45d9fd" stopOpacity="1" />
            <Stop offset="1" stopColor="#4eefd1ff" stopOpacity="1" />
          </LinearGradient>

          <ClipPath id="clip">
            <G scale="1">
              <Polygon points="0,2 0.4,1.2 1.2,0.4 2,0 413,0 413,2 415,185 0,220" />
            </G>
          </ClipPath>
        </Defs>
        <TourCardCover
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          //   href={require(imageCoverUri)}
          href={{
            uri:
              'https://recorrido-shreyas.herokuapp.com/img/tours/' +
              tour.imageCover,
          }}
          // href={{
          //     uri: tour.imageCoverUri,
          //   }}
          resizemode="cover"
          fill="url(#grad)"
          clipPath="url(#clip)"
          rx={4}
        />
        <Rect
          x="0"
          y="0"
          rx={4}
          width="100%"
          height="100%"
          fill="url(#grad)"
          clipPath="url(#clip)"
          opacity="0.3"
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
