import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

const AnimationContainer = styled(View)`
  width: 100%;
  height: 30%;
  position: absolute;
  bottom: 20px;
  padding: ${(props) => props.theme.space[1]};
`;

const StyledLottieView = styled(LottieView)`
  width: 100%;
  height: 100%;
`;

export default class LottieTravel extends React.Component {
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
          autoPlay
          loop
          resizeMode="cover"
          source={require('../../../assets/animation/travel.json')}
        />
      </AnimationContainer>
    );
  }
}
