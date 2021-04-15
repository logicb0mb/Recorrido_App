import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme/index';

import {
  useFonts as useFontsOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import {
  useFonts as useFontsLato,
  Lato_400Regular,
  Lato_300Light,
} from '@expo-google-fonts/lato';

import { ToursScreen } from './src/features/tours/screens/tours.screen';

export default function App() {
  const [oswaldFontsLoaded] = useFontsOswald({ Oswald_400Regular });
  const [latoFontsLoaded] = useFontsLato({ Lato_400Regular, Lato_300Light });

  if (!oswaldFontsLoaded || !latoFontsLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <ToursScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
