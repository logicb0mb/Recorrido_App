import React from 'react';

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
  FlexView,
  FlexViewFirstChild,
  FlexViewSecondChild,
  BelowHeadingIcon,
  BelowHeadingText,
} from './styles/tour-details__header.styles';

export const TourDetailsHeader = ({ tour }) => {
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
            <Stop offset="0" stopColor="#45d9fd" stopOpacity="0.7" />
            <Stop offset="1" stopColor="#4eefd1ff" stopOpacity="0.8" />
          </LinearGradient>

          <ClipPath id="clip">
            <G scale="1">
              <Polygon points="0,0 430,0 430,185 0,220" />
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
          <HeadingTertiary> {`${nameArray[1]} Tour`}</HeadingTertiary>
        </CardHeadingGradientContainer>
      </CardHeadingContainer>
      <FlexView>
        <FlexViewFirstChild>
          <BelowHeadingIcon name="clock" size={20} />
          <BelowHeadingText>{`${tour.duration} days`}</BelowHeadingText>
        </FlexViewFirstChild>
        <FlexViewSecondChild>
          <BelowHeadingIcon name="map-pin" size={20} />
          <BelowHeadingText>{tour.startLocation.description}</BelowHeadingText>
        </FlexViewSecondChild>
      </FlexView>
    </CardHeader>
  );
};
