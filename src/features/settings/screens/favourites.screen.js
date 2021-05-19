import React, { useContext } from 'react';
import styled from 'styled-components/native';

import { FavouritesContext } from '../../../services/favourites/favourites.context';

import { SafeArea } from '../../../components/utility/safe-area.component';
import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';

import { TourList } from '../../tours/components/tourCard/tour-list.styles';
import { TourInfoCard } from '../../tours/components/tourCard/tour-infocard.component';

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;
export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea>
      <TourList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <TourInfoCard tour={item} navigation={navigation} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text center>No favourites yet</Text>
    </NoFavouritesArea>
  );
};
