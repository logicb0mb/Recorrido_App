import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme/index';

import { ToursScreen } from './src/features/tours/screens/tours.screen';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ToursScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
