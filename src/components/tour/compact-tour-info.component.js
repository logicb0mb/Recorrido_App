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
  border-radius: 10px;
  width: 200px;
  height: 120px;
  align-items: center;
  justify-content: center;
`;

const Item = styled.View`
  background-color: #050f28;
  max-width: 200px;
  align-items: center;
  justify-content: center;
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
      <Text
        style={{ color: '#4EEFD2' }}
        center
        variant="caption"
        numberOfLines={3}
      >
        {tour.name}
      </Text>
    </Item>
  );
};
