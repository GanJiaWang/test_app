import React from 'react';
import {Image, StyleSheet} from 'react-native';

export function Logo() {
  return (
    <Image
      source={{
        uri: 'https://findicons.com/files/icons/2718/pretty_office_icon_set_part_11/512/shop.png',
      }}
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 170,
    height: 170,
    marginBottom: 8,
  },
});
