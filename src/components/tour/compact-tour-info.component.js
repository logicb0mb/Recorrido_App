import React from 'react';
import styled from 'styled-components/native';
import WebView from 'react-native-webview';
import { Platform } from 'react-native';

import { Text } from '../typography/text.component';

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 30px;
  width: 200px;
  height: 120px;
  align-items: center;
  justify-content: center;
`;

const Item = styled.View`
  ${'' /* background-color: #050f28; */}
  background-color: #4eefd1ff;
  max-width: 210px;
  align-items: center;
  justify-content: center;
  border: 5px;
  border-color: #050f28;
  border-radius: 5px;
`;

const CalloutText = styled(Text)`
  color: #c5295a;
  font-weight: 300;
  font-size: 15px;
  font-family: ${(props) => props.theme.fonts.heading};
`;

const isAndroid = Platform.OS === 'android';

export const CompactTourInfo = ({ tour }) => {
  const Image = isAndroid ? CompactWebview : CompactImage;
  const imageSource = `https://recorrido-shreyas.herokuapp.com/img/tours/${tour.imageCover}`;

  return (
    <Item>
      <Image
        source={{
          uri: imageSource,
        }}
      />
      <CalloutText center variant="caption" numberOfLines={3}>
        {tour.name}
      </CalloutText>
    </Item>
  );
};
