import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const TourList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
    paddingTop: 26,
  },
})`
  height: 100%;
`;
