/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {BackButton} from '../../commons';
import {StyleSheet, Text, View, Image} from 'react-native';

const ProductDetails = ({navigation, route}) => {
  const {product} = route.params;

  return (
    <View style={styles.container}>
      <Image
        style={styles.header}
        source={{
          uri: 'https://www.pngall.com/wp-content/uploads/2016/06/Healthy-Food-PNG-Picture.png',
        }}
      />
      <BackButton goBack={() => navigation.goBack()} title="Product Details" />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <View style={styles.viewContainer}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.productText}>{product.name}</Text>
              <Text style={styles.productText}>$ {product.price}</Text>
            </View>
            <Text style={styles.productDetail}>
              Description: {product.description}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  header: {
    height: 300,
    marginTop: 50,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  productText: {
    fontSize: 26,
    color: '#696969',
    fontWeight: '600',
    marginBottom: 40,
  },
  productDetail: {
    fontSize: 18,
    color: '#696969',
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
  viewContainer: {
    height: 250,
    width: '100%',
  },
  logoutButtonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: 'red',
  },
});
