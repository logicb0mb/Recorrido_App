import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import {
  useFonts as useFontsOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import {
  useFonts as useFontsLato,
  Lato_400Regular,
  Lato_300Light,
} from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme/index';
import { ToursScreen } from './src/features/tours/screens/tours.screen';
import { SafeArea } from './src/components/utility/safe-area.component';

import { ToursContextProvider } from './src/services/toursRequest.context';

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

export default function App() {
  const [oswaldFontsLoaded] = useFontsOswald({ Oswald_400Regular });
  const [latoFontsLoaded] = useFontsLato({ Lato_400Regular, Lato_300Light });

  if (!oswaldFontsLoaded || !latoFontsLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <ToursContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={createScreenOptions}
              tabBarOptions={{
                activeTintColor: '#45d9fd',
                inactiveTintColor: '#040E28',
              }}
            >
              <Tab.Screen name="Tours" component={ToursScreen} />
              <Tab.Screen name="Map" component={Map} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
          </NavigationContainer>
        </ToursContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
