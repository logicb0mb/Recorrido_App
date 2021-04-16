import React, { Component } from 'react';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';
import { View, Text } from 'react-native';

import mapPin from '../../../../assets/img/svgs/map-pin.js';
import calendar from '../../../../assets/img/svgs/calendar.js';
import flag from '../../../../assets/img/svgs/flag.js';
import user from '../../../../assets/img/svgs/user.js';

const CardDetails = styled.View`
  margin-top: -15px;
`;
const SubHeading = styled.Text`
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 700;
  font-family: ${(props) => props.theme.fonts.body};
  color: #777;
`;

const CardText = styled.Text`
  font-size: 15px;
  font-style: italic;
  width: 100%;
  color: #777;
  margin-top: -10px;
  margin-bottom: 0.75px;
  font-family: ${(props) => props.theme.fonts.heading};
`;

const CardTextInner4Blocks = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  color: #777;
  font-weight: 400;
  letter-spacing: 1px;
`;

export const TourInfoCardDetails = ({ tour }) => {
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
  return (
    <CardDetails
      style={{
        // flex: 1,
        width: '100%',
        height: '40%',
        justifyContent: 'space-between',
        paddingVertical: 25,
        paddingHorizontal: 30,
        flexWrap: 'wrap',
      }}
    >
      <View
        style={{
          flex: 1,
          width: '100%',
          height: '12.5%',
          flexWrap: 'wrap',
          flexBasis: 1,
          flexGrow: 1,
          flexShrink: 0,
        }}
      >
        <SubHeading>{`${difficulty}  ${duration}-day tour`}</SubHeading>
      </View>
      <View
        style={{
          flex: 1,
          width: '100%',
          height: '25%',
          flexWrap: 'wrap',
          flexGrow: 1,
          flexShrink: 0,
        }}
      >
        <CardText>{summary}</CardText>
      </View>
      <View
        style={{
          flex: 1,
          width: '100%',
          height: '12.5%',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          flexGrow: 1,
          flexDirection: 'row',
        }}
      >
        <View
          style={{
            flex: 1,
            width: '40%',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            height: '100%',
            flexGrow: 0.4,
          }}
        >
          <SvgXml
            xml={mapPin}
            width={25}
            height={25}
            style={{ color: '#44D8FD', alignSelf: 'center', marginRight: 10 }}
          />
          <CardTextInner4Blocks>
            {startLocation.description}
          </CardTextInner4Blocks>
        </View>
        <View
          style={{
            flex: 1,
            width: '40%',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            height: '100%',
            flexGrow: 0.4,
          }}
        >
          <SvgXml
            xml={calendar}
            width={25}
            height={25}
            style={{ color: '#44D8FD', alignSelf: 'center', marginRight: 10 }}
          />
          <CardTextInner4Blocks>
            {/* {startDates[0].toLocaleString('en-in', {
              month: 'long',
              year: 'numeric',
            })} */}
            June 2021
          </CardTextInner4Blocks>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          width: '100%',
          height: '12.5%',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          flexGrow: 1,
          flexDirection: 'row',
        }}
      >
        <View
          style={{
            flex: 1,
            width: '40%',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            height: '100%',
            flexGrow: 0.4,
          }}
        >
          <SvgXml
            xml={flag}
            width={25}
            height={25}
            style={{ color: '#44D8FD', alignSelf: 'center', marginRight: 10 }}
          />
          <CardTextInner4Blocks>{locations.length} stops</CardTextInner4Blocks>
        </View>
        <View
          style={{
            flex: 1,
            width: '40%',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            height: '100%',
            flexGrow: 0.4,
          }}
        >
          <SvgXml
            xml={user}
            width={25}
            height={25}
            style={{ color: '#44D8FD', alignSelf: 'center', marginRight: 10 }}
          />
          <CardTextInner4Blocks>{maxGroupSize} people</CardTextInner4Blocks>
        </View>
      </View>
    </CardDetails>
  );
};

export default TourInfoCardDetails;
