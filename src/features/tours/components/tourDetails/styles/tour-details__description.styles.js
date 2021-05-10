import styled from 'styled-components/native';
import { View } from 'react-native';
import { Image as SVGImage } from 'react-native-svg';
import { Text } from '../../../../../components/typography/text.component';

export const DescriptionContainer = styled(View)`
  position: relative;
  ${'' /* height: 225px; */}
  ${'' /* width: 100%; */}
  height: 370px;
  background-color: #f7f7f7;
  z-index: 1;
`;

export const TourCardCover = styled(SVGImage)`
  padding: ${(props) => props.theme.space[3]};
  background-color: #f7f7f7;
  position: relative;
`;

export const DescriptionBox = styled(View)`
  background-color: #fcfcfc;
  height: 300px;
  margin-top: -335;
  padding-top: 10px;
  justify-content: center;
`;

export const DescriptionBoxText = styled(Text)`
  font-size: 12px;
  color: #777;
  font-weight: 400;
  font-family: ${(props) => props.theme.fonts.body};
  margin-bottom: 20px;
  padding-left: 5%;
  padding-right: 5%;
`;
