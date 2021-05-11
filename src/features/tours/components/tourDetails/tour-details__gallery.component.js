import React from 'react';

import {
  ImageContainerOne,
  ImageContainerTwo,
  ImageContainerThree,
  ImageCover,
} from './styles/tour-details__gallery.styles';

import Svg, {
  G,
  Polygon,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';

export const TourDetailsGallery = ({ tour = {} }) => {
  return (
    <>
      <ImageContainerOne>
        <Svg height="100%" width="100%" preserveAspectRatio="xMinYMin slice">
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
          <ImageCover
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            //   href={require(imageCoverUri)}
            href={{
              uri:
                'https://recorrido-shreyas.herokuapp.com/img/tours/' +
                tour.images[0],
            }}
            // href={{
            //     uri: tour.imageCoverUri,
            //   }}
            resizemode="cover"
            // fill="url(#grad)"
            clipPath="url(#clip)"
          />
          <Polygon
            points="0,0 415,0 0,35"
            width="100%"
            height="100%"
            fill="url(#grad)"
            // clipPath="url(#clip)"
            opacity="0.6"
          />
        </Svg>
      </ImageContainerOne>
      <ImageContainerTwo>
        <Svg height="100%" width="100%" preserveAspectRatio="xMinYMin slice">
          <Defs>
            <ClipPath id="clip">
              <G scale="1">
                <Polygon points="0,35 430,0 430,335 0,370" />
              </G>
            </ClipPath>
          </Defs>
          <ImageCover
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            //   href={require(imageCoverUri)}
            href={{
              uri:
                'https://recorrido-shreyas.herokuapp.com/img/tours/' +
                tour.images[1],
            }}
            // href={{
            //     uri: tour.imageCoverUri,
            //   }}
            resizemode="cover"
            // fill="url(#grad)"
            clipPath="url(#clip)"
          />
        </Svg>
      </ImageContainerTwo>
      <ImageContainerThree>
        <Svg height="100%" width="100%" preserveAspectRatio="xMinYMin slice">
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
              <Stop offset="0" stopColor="#45d9fd" stopOpacity="1" />
              <Stop offset="1" stopColor="#4eefd1ff" stopOpacity="1" />
            </LinearGradient>

            <ClipPath id="clip">
              <G scale="1">
                <Polygon points="0,35 430,0 430,335 0,370" />
              </G>
            </ClipPath>
          </Defs>
          <ImageCover
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            //   href={require(imageCoverUri)}
            href={{
              uri:
                'https://recorrido-shreyas.herokuapp.com/img/tours/' +
                tour.images[2],
            }}
            // href={{
            //     uri: tour.imageCoverUri,
            //   }}
            resizemode="cover"
            // fill="url(#grad)"
            clipPath="url(#clip)"
          />
          <Polygon
            // points="0,370 415,335 415,370"
            width="100%"
            height="100%"
            fill="url(#grad)"
            opacity="1"
          />
        </Svg>
      </ImageContainerThree>
    </>
  );
};
