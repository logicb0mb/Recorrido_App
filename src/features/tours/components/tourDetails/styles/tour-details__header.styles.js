import styled from 'styled-components/native';
import { View } from 'react-native';
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { Image as SVGImage } from 'react-native-svg';

import { Text } from '../../../../../components/typography/text.component';

export const CardHeader = styled(View)`
  position: relative;
  ${'' /* height: 225px; */}
  ${'' /* width: 100%; */}
  height: 225px;
  background-color: #f7f7f7;
`;

export const TourCardCover = styled(SVGImage)`
  padding: ${(props) => props.theme.space[3]};
  background-color: #f7f7f7;
  ${
    '' /* width: 100%;
  height: 200px; */
  }
  position: relative;

  ${'' /* Added Styles */}
  ${
    '' /* height: 100%;
  width: 100%; */
  }
`;

export const HeadingTertiary = styled(Text)`
  font-family: ${(props) => props.theme.fonts.latoLight};
  color: #fff;
  text-transform: uppercase;
  font-weight: 300;
  padding: 10px;
  ${'' /* color: ${(props) => props.theme.colors.ui.primary}; */}
  font-size: 25px;
  text-align: right;
`;

export const CardHeadingContainer = styled(View)`
  margin-top: -180;
  ${'' /* margin-right: 20; */}
`;

export const CardHeadingGradientContainer = styled(ExpoLinearGradient)`
  right: 0;
  padding: 0.5px;
  align-self: center;
`;

export const FlexView = styled(View)`
  width: 100%;
  font-size: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 22%;
  padding-right: 22%;
  padding-top: 5%;
  padding-bottom: 5%;
  ${'' /* flex-wrap: nowrap; */}
`;
export const FlexViewFirstChild = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const FlexViewSecondChild = styled(View)`
  flex-direction: row;
  width: 40%;
  align-items: center;
  justify-content: flex-start;
`;
export const BelowHeadingIcon = styled(Feather)`
  color: #fff;
  margin-right: 8px;
`;

export const BelowHeadingText = styled(Text)`
  color: #fff;
`;
