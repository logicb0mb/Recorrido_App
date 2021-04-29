import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { Text } from 'react-native';

import { ToursNavigator } from './tours.navigator';
import { SafeArea } from '../../components/utility/safe-area.component';
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

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: '#45d9fd',
        inactiveTintColor: '#040E28',
      }}
    >
      <Tab.Screen name="Tours" component={ToursNavigator} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>
);
