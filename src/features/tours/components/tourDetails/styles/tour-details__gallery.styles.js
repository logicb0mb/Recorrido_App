import styled from 'styled-components/native';
import { View } from 'react-native';
import { Image as SVGImage } from 'react-native-svg';

export const ImageContainerOne = styled(View)`
  position: relative;
  ${'' /* height: 225px; */}
  ${'' /* width: 100%; */}
  height: 405px;
  z-index: 4;
  margin-top: -35px;
`;
export const ImageContainerTwo = styled(View)`
  position: relative;
  ${'' /* height: 225px; */}
  ${'' /* width: 100%; */}
  height: 405px;
  z-index: 3;

  margin-top: -70px;
`;
export const ImageContainerThree = styled(View)`
  position: relative;
  ${'' /* height: 225px; */}
  ${'' /* width: 100%; */}
  height: 430px;
  z-index: 2;
  ${'' /* background-color: #000; */}
  margin-top: -70px;
  ${'' /* margin-bottom: 70px; */}
`;

export const ImageCover = styled(SVGImage)`
  padding: ${(props) => props.theme.space[3]};
  background-color: #f7f7f7;
  position: relative;
`;
