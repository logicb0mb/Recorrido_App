import { View } from 'react-native';
import styled from 'styled-components/native';
import MapView from 'react-native-maps';

export const Map = styled(MapView)`
  height: 100%;
  width: 100%;
  z-index: 1.5;
`;

export const MapContainer = styled(View)`
  position: relative;
  ${'' /* background-color: #45d9fd; */}
  margin-top:-95px;
  height: 400px;
  z-index: 0.5;

  ${'' /* margin-bottom: 25px; */}
`;

export const MapBox = styled(View)`
  height: 415px;
  justify-content: center;
`;
