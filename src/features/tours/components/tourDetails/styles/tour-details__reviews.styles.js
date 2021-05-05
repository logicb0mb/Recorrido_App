import styled from 'styled-components/native';
import { View, FlatList, Text, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const ReviewsContainer = styled(View)`
  position: relative;
  ${'' /* height: 225px; */}
  ${'' /* width: 100%; */}
  height: 415px;
  z-index: 0.6;
  margin-top: -35px;
`;
export const ReviewsBox = styled(View)`
  height: 325px;
  margin-top: -378px;
  padding-top: 10px;
  justify-content: center;
`;

export const ReviewsList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 23,
  },
})`
  height: 100%;
`;
export const ReviewCard = styled(View)`
  width: 300px;
  height: 275px;
  padding: 30px;
  margin-left: 5px;
  margin-right: 40px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ReviewUser = styled(View)`
  flex-direction: row;
  width: 70%;
  align-items: center;
  margin-bottom: 20px;
  ${'' /* background-color: #000; */}
`;

export const ReviewUserImage = styled(Image)`
  border-radius: 50;
  height: 45px;
  width: 45px;
  margin-right: 20px;
`;

export const ReviewUserName = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: 700;
  flex-wrap: wrap;
  color: #777;
  text-transform: uppercase;
  font-size: 18px;
`;
export const ReviewText = styled(Text)`
  width: 95%;
  height: 55%;
  line-height: 24px;
  font-size: 15px;
  color: #777;
  margin-bottom: 20px;
  font-style: italic;
  font-weight: 400;
  align-self: center;
  ${'' /* background-color: #0f0; */}
`;

export const ReviewRating = styled(View)`
  width: 95%;
  height: 20%;
  ${'' /* align-self: flex-end; */}
  flex-direction: row;
  justify-content: center;
  ${'' /* background-color: #f0f; */}
`;

export const Star = styled(Feather)``;
