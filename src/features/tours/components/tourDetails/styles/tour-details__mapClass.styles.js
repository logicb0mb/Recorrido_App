import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import MapView from 'react-native-maps';

export const Map = styled(MapView)`
  height: 100%;
  width: 100%;
  z-index: 1.5;
`;

export const MapContainer = styled(View)`
  position: relative;

  height: 400px;
  z-index: 0.1;
  margin-top: 25px;
  ${'' /* margin-bottom: 25px; */}
`;

export const MapBox = styled(View)`
  height: 415px;
  justify-content: center;
`;
