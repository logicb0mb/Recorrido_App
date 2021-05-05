import React from 'react';
import { Text, View } from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

export const Heading = ({ content, height, colorsProp }) => {
  const colors = colorsProp ? colorsProp : ['#45d9fd', '#4eefd1ff'];
  return (
    <MaskedView
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: `${height ? height : '20%'}`,
      }}
      maskElement={
        <View
          style={{
            // Transparent background because mask is based off alpha channel.
            backgroundColor: 'transparent',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 23,
              color: 'black',
              textTransform: 'uppercase',
              fontWeight: '500',
              letterSpacing: 1,
            }}
          >
            {content}
          </Text>
        </View>
      }
    >
      {/* Shows behind the mask, you can put anything here, such as an image */}
      <LinearGradient
        style={{ flex: 1, height: '100%' }}
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
    </MaskedView>
  );
};
