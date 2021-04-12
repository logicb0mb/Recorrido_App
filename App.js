import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ToursScreen } from './src/features/tours/screens/tours.screen';

export default function App() {
  return (
    <>
      <ToursScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
