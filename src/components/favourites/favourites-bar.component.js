import React from 'react';

import { ScrollView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';
import { Spacer } from '../spacer/spacer.component';
import { CompactTourInfo } from '../tour/compact-tour-info.component';

const FavouritesWrapper = styled(Card)`
  padding: 10px;
  border-radius: 10px;
  z-index: 999;
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.monospace};
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Title variant="caption">Favourites</Title>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((tour) => {
          const key = tour.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  onNavigate('TourDetail', {
                    tour,
                  })
                }
              >
                <CompactTourInfo tour={tour} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
