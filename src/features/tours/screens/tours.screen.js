import React, { useState, useContext } from 'react';
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import styled from 'styled-components/native';

import TourInfoCard from '../components/tourCard/tour-infocard.component';
import { Search } from '../components/search/search.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { FavouritesBar } from '../../../components/favourites/favourites-bar.component';

import { ToursContext } from '../../../services/tours/toursRequest.context';
import { FavouritesContext } from '../../../services/favourites/favourites.context';
import LottieLoading from '../../../components/utility/lottie-loading.component';
import LottieError from '../../../components/utility/lottie-error.component';

const TourList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
    paddingTop: 26,
  },
})`
  height: 100%;
`;

export const ToursScreen = ({ navigation }) => {
  const { tours, error, isLoading } = useContext(ToursContext);
  const [isToggled, setIsToggled] = useState(false);
  const { favourites } = useContext(FavouritesContext);

  let displayError = false;
  //   console.log(tours);
  //   console.log(error);
  if (error === 'No tour found for this location') {
    displayError = true;
    // console.log(displayError);
  }

  return (
    <SafeArea>
      {isLoading && <LottieLoading />}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      {displayError && !isLoading ? (
        <View style={{ width: '100%', height: '100%' }}>
          <LottieError errorMessage="No Tour Found for this location" />
        </View>
      ) : (
        <TourList
          data={tours}
          renderItem={({ item }) => {
            //   console.log(item);
            return (
              <Spacer position="bottom" size="large">
                <TourInfoCard tour={item} navigation={navigation} />
              </Spacer>
            );
          }}
          keyExtractor={(item) => item.name}
          initialNumToRender={10}
          maxToRenderPerBatch={18}
          // horizontal
        />
      )}
      {/* <TourInfoCard /> */}
    </SafeArea>
  );
};
