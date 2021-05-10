import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import * as firebase from 'firebase';

import {
  useFonts as useFontsOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import {
  useFonts as useFontsLato,
  Lato_400Regular,
  Lato_300Light,
} from '@expo-google-fonts/lato';

import { Navigation } from './src/infrastructure/navigation/index';
import { theme } from './src/infrastructure/theme/index';

import { ToursContextProvider } from './src/services/tours/toursRequest.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { FavouritesContextProvider } from './src/services/favourites/favourites.context';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';
import firebaseConfig from './firebaseConfiguration';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldFontsLoaded] = useFontsOswald({ Oswald_400Regular });
  const [latoFontsLoaded] = useFontsLato({ Lato_400Regular, Lato_300Light });

  if (!oswaldFontsLoaded || !latoFontsLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <ToursContextProvider>
                <Navigation />
              </ToursContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
