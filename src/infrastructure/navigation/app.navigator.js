import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import { ToursNavigator } from './tours.navigator';
import { SettingsNavigator } from './settings.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';

import { ToursContextProvider } from '../../services/tours/toursRequest.context';
import { LocationContextProvider } from '../../services/location/location.context';
import { FavouritesContextProvider } from '../../services/favourites/favourites.context';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Tours: 'briefcase',
  Map: 'map',
  Settings: 'settings',
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Feather name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <ToursContextProvider>
        <Tab.Navigator
          screenOptions={createScreenOptions}
          tabBarOptions={{
            activeTintColor: '#45d9fd',
            inactiveTintColor: '#040E28',
          }}
        >
          <Tab.Screen name="Tours" component={ToursNavigator} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsNavigator} />
        </Tab.Navigator>
      </ToursContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);
