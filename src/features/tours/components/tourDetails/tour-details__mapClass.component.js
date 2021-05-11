import React from 'react';
import MapView from 'react-native-maps';
import { View, Text } from 'react-native';

import {
  Map,
  MapContainer,
} from '../tourDetails/styles/tour-details__mapClass.styles';

export class TourDetailsMap extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = null;
    this.markerRef = {};
    this.state = {
      calloutIsRendered: false,
    };
  }

  renderCallout() {
    if (!this.state.calloutIsRendered) {
      this.markerRef.showCallout();
      this.setState({ calloutIsRendered: true });
    }
  }

  render() {
    const { tour } = this.props;
    const coords = tour.locations.map((element) => {
      return {
        latitude: element.coordinates[1],
        longitude: element.coordinates[0],
      };
    });

    return (
      <>
        <MapContainer>
          {/* <Heading
            content="Locations"
            height="15%"
            colorsProp={['#C5295A', '#C5295A']}
          /> */}
          <Map
            ref={(ref) => {
              this.mapRef = ref;
            }}
            onLayout={() =>
              this.mapRef.fitToCoordinates(coords, {
                edgePadding: { top: 125, right: 125, bottom: 125, left: 125 },
                animated: true,
              })
            }
            onRegionChangeComplete={() => this.renderCallout()}
          >
            {tour.locations.map((location, i) => {
              return (
                <MapView.Marker
                  key={location.description}
                  title={location.description}
                  coordinate={{
                    latitude: location.coordinates[1],
                    longitude: location.coordinates[0],
                  }}
                  pinColor="#C5295A"
                  image={require('../../../../../assets/img/pin.png')}
                  ref={(ref) => {
                    this.markerRef = ref;
                  }}
                >
                  <MapView.Callout>
                    <View>
                      <Text>{`Day ${location.day} ${location.description}`}</Text>
                    </View>
                  </MapView.Callout>
                </MapView.Marker>
              );
            })}
          </Map>
        </MapContainer>
      </>
    );
  }
}
