import { Button, View } from 'react-native';
import styled from 'styled-components/native';

import { Text } from '../../../../components/typography/text.component';
export const CardFooter = styled(View)`
  padding: 30px 30px;
  flex: 1;
  background-color: #f7f7f7;
  width: '100%';

  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: flex-start;
  flex-wrap: nowrap;
`;

export const CardFooterTextContainer = styled(View)`
  width: 39%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 0;
`;

export const FooterGridCell = styled(View)`
  ${'' /* flex: 1; */}
  width: 100%;
  height: 45%;
  flex-grow: 1;
  flex-direction: row;
`;

export const FooterValue = styled(Text)`
  font-size: 15px;
  font-weight: 700;
  font-family: ${(props) => props.theme.fonts.body};
  color: #777;
`;

export const FooterText = styled(Text)`
  color: #999;
  font-family: ${(props) => props.theme.fonts.latoLight};
`;

export const DetailsButton = styled(Button)`
  font-family: ${(props) => props.theme.fonts.latoLight};
  border-radius: 50px;
  align-self: center;

  text-transform: uppercase;

  font-weight: 400;
  border: none;
  padding: 12.5px 30px !important;
`;
