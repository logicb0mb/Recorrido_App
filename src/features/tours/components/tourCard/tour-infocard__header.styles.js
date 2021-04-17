import styled from 'styled-components/native';
import { View } from 'react-native';
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';

import Svg, { Image as SVGImage } from 'react-native-svg';

import { Text } from '../../../../components/typography/text.component';

export const CardHeader = styled(View)`
  position: relative;
  ${'' /* height: 225px; */}
  ${'' /* width: 100%; */}
  height: 225px;
`;

export const TourCardCover = styled(SVGImage)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  ${'' /* width: 100%;
  height: 200px; */}
  position: relative;

  ${'' /* Added Styles */}
  ${'' /* height: 100%;
  width: 100%; */}
`;

export const HeadingTertiary = styled(Text)`
  font-family: ${(props) => props.theme.fonts.latoLight};
  color: #fff;
  text-transform: uppercase;
  font-weight: 300;
  padding: 10px;
  ${'' /* color: ${(props) => props.theme.colors.ui.primary}; */}
  font-size: 30px;
  text-align: right;
`;

export const CardHeadingContainer = styled(View)`
  margin-top: -115;
  margin-right: 20;
`;

export const CardHeadingGradientContainer = styled(ExpoLinearGradient)`
  right: 0;
  padding: 0.5px;
  align-self: flex-end;
`;
