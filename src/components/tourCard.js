import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function tourCard() {
  return (
    <View style={styles.card}>
      <View style={styles.card__header}>
        <View style={styles.card__picture}>
          <View style={styles.card__pictureOverlay}>&nbsp;</View>
          <Image
            class="card__picture-img"
            src="img/tour-1-cover.jpg"
            alt="Tour 1"
          />
        </View>
        <Text style={styles.headingTertirary}>
          <Text>The Forest Hiker</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
