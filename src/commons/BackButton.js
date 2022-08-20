/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, Image, StyleSheet, Text, View} from 'react-native';
// import {getStatusBarHeight} from 'react-native-status-bar-height';

export function BackButton({
  goBackBool = true,
  goBack,
  title,
  profile,
  rightButton,
}) {
  return (
    <View style={styles.container}>
      {goBackBool && (
        <TouchableOpacity onPress={goBack}>
          <Image
            style={styles.image}
            source={require('../assets/arrow_back.png')}
          />
        </TouchableOpacity>
      )}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            paddingLeft: 10,
          }}>
          {title}
        </Text>
        {rightButton && (
          <TouchableOpacity onPress={profile}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                paddingRight: goBackBool ? 80 : 20,
                color: 'black',
              }}>
              Profile {'>'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 15,
    left: 4,
    flexDirection: 'row',
  },
  image: {
    width: 24,
    height: 24,
  },
});
