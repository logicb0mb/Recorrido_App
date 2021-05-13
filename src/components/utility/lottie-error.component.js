import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

const AnimationContainer = styled(View)`
  align-items: center;
  justify-content: space-around;
  position: absolute;
`;

const StyledLottieView = styled(LottieView)`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

const ErrorText = styled(Text)`
  color: #f00;
  font-family: ${(props) => props.theme.fonts.body};
  font-size: 20px;
`;

export default class LottieError extends React.Component {
  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    // this.animation.play(30, 120);
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

  render() {
    return (
      <AnimationContainer>
        <StyledLottieView
          ref={(animation) => {
            this.animation = animation;
          }}
          source={require('../../../assets/animation/error.json')}
          // OR find more Lottie files @ https://lottiefiles.com/featured
          // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
        />
        <ErrorText>{this.props.errorMessage}</ErrorText>
      </AnimationContainer>
    );
  }
}
