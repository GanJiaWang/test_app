/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {BackButton} from '../../commons';
import {requestGetProduct} from '../../api';

const Store = ({navigation, route}) => {
  const [products, setProducts] = useState();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const payloads = await requestGetProduct();
    setProducts(payloads.data);
  };

  return (
    <View style={{flex: 1, paddingTop: 50}}>
      <BackButton
        goBackBool={false}
        profile={() =>
          navigation.navigate({
            name: 'Profile',
            params: {user: route.params.user},
          })
        }
        rightButton
        title="Store"
      />
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={products}
          horizontal={false}
          numColumns={2}
          keyExtractor={item => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return <View style={styles.separator} />;
          }}
          renderItem={post => {
            const item = post.item;
            return (
              <TouchableOpacity
                style={styles.card}
                onPress={() =>
                  navigation.navigate({
                    name: 'ProductDetails',
                    params: {product: item},
                  })
                }>
                <Image
                  style={styles.cardImage}
                  source={{
                    uri: 'https://www.pngall.com/wp-content/uploads/2016/06/Healthy-Food-PNG-Picture.png',
                  }}
                />
                <View style={styles.cardHeader}>
                  <View>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text>{item.description}</Text>
                    <Text style={styles.price}>$ {item.price}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Store;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
  },
  list: {
    paddingHorizontal: 5,
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor: 'white',
    flexBasis: '47%',
    marginHorizontal: 5,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title: {
    fontSize: 18,
    flex: 1,
  },
  price: {
    fontSize: 16,
    color: 'green',
    marginTop: 5,
  },
  buyNow: {
    color: 'purple',
  },
  icon: {
    width: 25,
    height: 25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
