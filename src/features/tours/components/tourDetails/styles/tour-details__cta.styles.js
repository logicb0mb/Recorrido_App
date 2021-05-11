import styled from 'styled-components/native';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const CTAContainer = styled(View)`
  position: relative;
  height: 550px;
  ${'' /* background-color: #f2f2f2; */}
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const CTACard = styled(View)`
  width: 300px;
  height: 470px;
  padding: 30px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const CTAImageGrid = styled(View)`
  height: 150px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  ${'' /* background-color: #000; */}
`;

export const CTALinearGradient = styled(LinearGradient)`
  border-radius: 75;
  overflow: hidden;
  height: 150px;
  width: 150px;
  position: absolute;
  top: 0;
  left: -40;
  z-index: 30;
`;

export const CTALogo = styled(Image)`
  ${'' /* border-radius: 90; */}
  height: 70px;
  width: 100px;
  top: 35;
  left: 25;
  z-index: 30;
`;

export const CTAImage1 = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 90;
  height: 150px;
  width: 150px;
  z-index: 20;
`;

export const CTAImage2 = styled(Image)`
  ${'' /* position: absolute; */}
  top: 0;
  left: 40;
  border-radius: 90;
  height: 150px;
  width: 150px;
  z-index: 10;
`;

export const CTAContent = styled(View)`
  height: 210px;
  ${'' /* background-color: #0f0; */}
`;

export const CTAHeading = styled(View)`
  height: 60%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CTAText = styled(Text)`
  height: 40%;
  padding: 0px;
  ${'' /* background-color: #f0f; */}
  flex-direction: column;
  align-self: center;
  align-items: center;
  justify-content: center;

  line-height: 24px;
  font-size: 15px;
  color: #777;
  margin-left: 40px;
  margin-right: 40px;
  ${'' /* font-style: italic; */}
  font-weight: 400;
  ${'' /* align-self: center; */}
`;

export const CTAButton = styled(TouchableOpacity)`
  width: 100%;
  align-items: center;
  background-color: #45d9fd;
  margin-top: 10px;
  border-radius: 50px;
  padding: 15px;
`;
export const ButtonText = styled(Text)`
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  color: #fff;
  font-family: ${(props) => props.theme.fonts.heading};
`;
