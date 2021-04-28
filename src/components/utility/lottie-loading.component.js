import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

const AnimationContainer = styled(View)`
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 25%;
  left: 25%;
  height: 50%;
  width: 50%;
`;

const StyledLottieView = styled(LottieView)`
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
`;

export default class LottieLoading extends React.Component {
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
          source={require('../../../assets/animation/loading.json')}
          speed={2}
          // OR find more Lottie files @ https://lottiefiles.com/featured
          // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
        />
      </AnimationContainer>
    );
  }
}
