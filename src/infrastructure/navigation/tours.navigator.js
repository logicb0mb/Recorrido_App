import React from 'react';

import {
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack';

import { ToursScreen } from '../../features/tours/screens/tours.screen';
import { TourDetailsScreen } from '../../features/tours/screens/tour-details.screen';
const ToursStack = createStackNavigator();

export const ToursNavigator = () => {
  return (
    <ToursStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalSlideFromBottomIOS }}
    >
      <ToursStack.Screen name="Tours" component={ToursScreen} />
      <ToursStack.Screen name="TourDetail" component={TourDetailsScreen} />
    </ToursStack.Navigator>
  );
};
