import React from 'react';
import { Text, ScrollView } from 'react-native';
import {
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack';

import { SafeArea } from '../../components/utility/safe-area.component';
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
