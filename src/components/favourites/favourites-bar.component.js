import React from 'react';

import { ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Spacer } from '../spacer/spacer.component';
import { CompactTourInfo } from '../tour/compact-tour-info.component';
import { Text } from '../typography/text.component';

const FavouritesWrapper = styled.View`
  padding: 10px;
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
