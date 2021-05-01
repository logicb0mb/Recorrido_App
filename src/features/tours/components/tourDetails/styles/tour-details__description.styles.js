import styled from 'styled-components/native';
import { View } from 'react-native';

import { Text } from '../../../../../components/typography/text.component';

export const DescriptionBox = styled(View)`
  background-color: #f7f7f7;
  ${'' /* flex: 1; */}
  height:300px;
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
