import React from 'react';
import { Text } from 'react-native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { ToursScreen } from '../../features/tours/screens/tours.screen';

const ToursStack = createStackNavigator();

export const ToursNavigator = () => {
  return (
    <ToursStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <ToursStack.Screen name="Tours" component={ToursScreen} />
      <ToursStack.Screen
        name="TourDetail"
        component={() => <Text>Tour Detail</Text>}
      />
    </ToursStack.Navigator>
  );
};
