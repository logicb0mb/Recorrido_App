import React, { useState, useContext } from 'react';
import { SafeAreaView, FlatList, StatusBar, View, Text } from 'react-native';
import styled from 'styled-components/native';

import TourInfoCard from '../components/tourCard/tour-infocard.component';
import { Search } from '../components/search/search.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.component';

import { ToursContext } from '../../../services/tours/toursRequest.context';
import LottieLoading from '../../../components/utility/lottie-loading.component';

const TourList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`
  height: 100%;
`;

export const ToursScreen = () => {
  const { tours, error, isLoading } = useContext(ToursContext);
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
      <Search />
      {displayError && !isLoading ? (
        <View>
          <Text>Error : Not Tour Found for this location</Text>
        </View>
      ) : (
        <TourList
          data={tours}
          renderItem={({ item }) => {
            //   console.log(item);
            return (
              <Spacer position="bottom" size="large">
                <TourInfoCard tour={item} />
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
