import React, { useState, useEffect, useContext } from 'react';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';
import { LocationContext } from '../../../services/location/location.context';
import { ToursContext } from '../../../services/tours/toursRequest.context';
import { Search } from '../components/search.component';

import { MapCallout } from '../components/map-callout.component';
const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const TourMap = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { tours = [] } = useContext(ToursContext);

  const [latDelta, setLatDelta] = useState(0);

  let { lat, lng, viewport } = location;

  if (!lat) {
    lat = 37.7749295;
    lng = -122.4194155;
  }
  useEffect(() => {
    if (!viewport) {
      const northeastLat = 37.812;
      const southwestLat = 37.70339999999999;
      setLatDelta(northeastLat - southwestLat);

      return;
    }
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 18,
        }}
      >
        {tours.map((tour) => {
          return (
            <MapView.Marker
              key={tour.name}
              title={tour.name}
              coordinate={{
                latitude: tour.startLocation.coordinates[1],
                longitude: tour.startLocation.coordinates[0],
              }}
              pinColor="#C5295A"
              image={require('../../../../assets/img/pin.png')}
            >
              <MapView.Callout
                tooltip
                onPress={() => navigation.navigate('TourDetail', { tour })}
              >
                <MapCallout tour={tour} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
};

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  if (!location) {
    return (
      <Map
        region={{
          latitude: 0,
          longitude: 0,
        }}
      />
    );
  }
  return <TourMap navigation={navigation} />;
};
