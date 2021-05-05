import styled from 'styled-components/native';
import { View, Image } from 'react-native';

import { Text } from '../../../../../components/typography/text.component';

import { Feather } from '@expo/vector-icons';

export const OverviewBox = styled(View)`
  background-color: #f7f7f7;
  ${'' /* flex: 1; */}
  height: 390px;
  justify-content: center;
`;

export const ViewUnstyled = styled(View)`
  justify-content: space-between;
`;

export const OverviewBoxGroup = styled(View)`
  padding-left: 13%;
  padding-right: 13%;
  justify-content: center;
  align-items: center;
  ${'' /* background-color: #000; */}
`;

export const OverviewBoxDetail = styled(View)`
  font-size: 15px;
  flex-direction: row;
  align-items: center;
  ${'' /* justify-content: space-between; */}
  ${'' /* padding-left: 20%; */}
  ${'' /* padding-right: 20%; */}
  font-weight: 400;
  margin-bottom: 10px;
  ${'' /* background-color: #000; */}
`;

export const OverviewBoxIcon = styled(Feather)`
  color: #45d9fd;
  margin-right: 20px;
`;
export const OverviewBoxLabel = styled(Text)`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-family: ${(props) => props.theme.fonts.heading};
  color: #777;
  text-transform: uppercase;
  font-size: 14px;
`;

export const OverviewBoxText = styled(Text)`
  font-size: 14px;
  text-transform: capitalize;
  color: #777;
  font-weight: 400;
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const OverviewBoxImage = styled(Image)`
  border-radius: 50;
  height: 30px;
  width: 30px;
  margin-right: 12.5px;
  margin-top: 10px;
`;

export const FlexView = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${'' /* flex-wrap: nowrap; */}
`;
export const FlexViewFirstChild = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const FlexViewSecondChild = styled(View)`
  flex-direction: row;
  width: 40%;
  ${'' /* align-items: center; */}
  justify-content: flex-start;
`;
