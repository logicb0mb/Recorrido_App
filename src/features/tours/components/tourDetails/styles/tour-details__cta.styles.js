import styled from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native';

export const CTAContainer = styled(View)`
  position: relative;
  height: 500px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const CTACard = styled(View)`
  width: 300px;
  height: 400px;
  padding: 30px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const CTAImageGrid = styled(View)``;
export const CTAContent = styled(View)`
  height: 210px;
`;

export const CTAHeading = styled(View)`
  height: 60%;
  ${'' /* background-color: #0f0; */}
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

  border-radius: 50px;
  padding: 15px;
`;
export const ButtonText = styled(Text)`
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  font-family: ${(props) => props.theme.fonts.heading};
`;
