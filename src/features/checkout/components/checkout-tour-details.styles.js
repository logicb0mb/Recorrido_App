import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const DetailsContainer = styled(View)`
  width: 100%;
  height: 350px;
  padding: 10px;
`;
export const LogoContainer = styled(View)`
  width: 100%;
  height: 10%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
`;
export const BackIconContainer = styled(View)`
  justify-content: center;
  align-items: center;
  margin: 5px;
`;
export const BackIcon = styled(Feather)``;
export const Logo = styled(Image)`
  height: 45px;
  width: 45px;
`;

export const TourImageContainer = styled(View)`
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const TourImage = styled(Image)`
  border-radius: 5px;
  width: 200px;
  height: 140px;
`;

export const TourDetailsTextContainer = styled(View)`
  align-items: center;
  justify-content: space-around;
  padding: 10px;
`;

export const TourTitle = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  color: #777;
  font-size: 17px;
  padding: 10px;
`;
export const TourPrice = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  color: #000;
  font-weight: 600;
  font-size: 30px;
  margin-top: -5px;
`;
export const TourSummary = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  color: #777;
  font-size: 16px;
  padding: 10px;
  text-align: center;
`;
