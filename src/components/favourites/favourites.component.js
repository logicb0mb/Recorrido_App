import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { FavouritesContext } from '../../services/favourites/favourites.context';

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  flex: 1;
  top: 10px;
  right: 10px;
  z-index: 9;
`;

export const Favourite = ({ tour }) => {
  const { favourites, addToFavourites, removeFromFavourites } = useContext(
    FavouritesContext
  );
  const isFavourite = favourites.find((r) => r.id === tour.id);

  return (
    <FavouriteButton
      onPress={() => {
        return !isFavourite
          ? addToFavourites(tour)
          : removeFromFavourites(tour);
      }}
    >
      <AntDesign
        name={isFavourite ? 'heart' : 'hearto'}
        size={24}
        color={isFavourite ? 'red' : 'white'}
      />
    </FavouriteButton>
  );
};
