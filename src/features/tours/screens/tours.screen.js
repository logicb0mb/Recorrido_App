import React from 'react';
import styled from 'styled-components/native';

import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';

import TourInfoCard from '../components/tour-info-card.component';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const TourListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  padding-top: ${(props) => props.theme.space[2]};
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
      <TourListContainer>
        <TourInfoCard />
      </TourListContainer>
    </SafeArea>
  );
};
