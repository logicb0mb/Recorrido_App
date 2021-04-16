import React from 'react';
import { SafeAreaView, FlatList, StatusBar, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

import TourInfoCard from '../components/tourCard/tour-infocard.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.component';

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
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          style={{ backgroundColor: '#050f28', textDecorationColor: '#fff' }}
          iconColor="#C5295A"
          placeholderTextColor="#fff"
        />
      </SearchContainer>
      <TourList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <TourInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
        centerContent={true}
        // horizontal
      />
      {/* <TourInfoCard /> */}
    </SafeArea>
  );
};
