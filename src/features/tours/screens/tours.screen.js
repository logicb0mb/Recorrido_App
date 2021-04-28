import React, { useContext } from 'react';
import { SafeAreaView, FlatList, StatusBar, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

import TourInfoCard from '../components/tourCard/tour-infocard.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.component';

import { ToursContext } from '../../../services/tours/toursRequest.context';
import LottieLoading from '../../../components/utility/lottie-loading.component';

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const TourList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`
  height: 100%;
`;

export const ToursScreen = () => {
  const { tours, error, isLoading } = useContext(ToursContext);
  //   console.log(tours);
  return (
    <SafeArea>
      {isLoading && <LottieLoading />}
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          style={{ backgroundColor: '#050f28', textDecorationColor: '#fff' }}
          iconColor="#C5295A"
          placeholderTextColor="#fff"
        />
      </SearchContainer>
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
      {/* <TourInfoCard /> */}
    </SafeArea>
  );
};
