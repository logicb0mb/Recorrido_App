import styled from 'styled-components/native';
import { View } from 'react-native';
import { Text } from '../../../../components/typography/text.component';
import { SvgXml } from 'react-native-svg';

export const CardDetails = styled.View`
  margin-top: -15px;
  ${'' /* flex: 1; */}
  width: 100%;
  height: 40%;
  justify-content: space-between;
  padding-vertical: 25;
  padding-horizontal: 30;
  flex-wrap: wrap;
`;

export const SubHeadingContainer = styled(View)`
  flex: 1;
  width: 100%;
  height: 12.5%;
  flex-wrap: wrap;
  flex-basis: 1;
  flex-grow: 1;
  flex-shrink: 0;
`;
export const SubHeading = styled(Text)`
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 700;
  font-family: ${(props) => props.theme.fonts.body};
  color: #777;
`;

export const SummaryContainer = styled(View)`
  flex: 1;
  width: 100%;
  height: 25%;
  flex-wrap: wrap;
  flex-grow: 1;
  flex-shrink: 0;
`;

export const TourSummary = styled(Text)`
  font-size: 15px;
  font-style: italic;
  width: 100%;
  color: #777;
  margin-top: -10px;
  margin-bottom: 0.75px;
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const GlimpseDataGrid = styled(View)`
  flex: 1;
  width: 100%;
  height: 12.5%;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-grow: 1;
  flex-direction: row;
`;

export const GlimpseDataGridCell = styled(View)`
  flex: 1;
  width: 40%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  height: 100%;
  flex-grow: 0.4;
`;

export const GridCellIcon = styled(SvgXml)`
  color: #44d8fd;
  align-self: center;
  margin-right: 10;
  width: 25;
  height: 25;
`;

export const GridCellText = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  color: #777;
  font-weight: 400;
  letter-spacing: 1px;
`;
