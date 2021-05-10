import React, { useContext, useState, useEffect } from 'react';
import { View } from 'react-native';
import { LocationContext } from '../../../services/location/location.context';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 30px;
  width: 100%;
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        icon="map"
        placeholder="Search"
        style={{ backgroundColor: '#050f28', textDecorationColor: '#fff' }}
        placeholderTextColor="#fff"
        theme={{ colors: { text: '#fff' } }}
        iconColor="#C5295A"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
