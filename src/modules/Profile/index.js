/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {BackButton} from '../../commons';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Profile = ({navigation, route}) => {
  const {user} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <BackButton goBack={() => navigation.goBack()} title="Profile" />
      <Image
        style={styles.avatar}
        source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}
      />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <View style={styles.viewContainer}>
            <Text style={styles.profileText}>{user.name}</Text>
            <Text style={styles.profileText}>{user.email}</Text>
            <Text style={styles.profileText}>{user.contactNo}</Text>
          </View>
          <TouchableOpacity
            style={styles.logoutButtonContainer}
            onPress={() => navigation.navigate('Login')}>
            <Text style={{color: '#FFF', fontSize: 20, fontWeight: 'bold'}}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00BFFF',
    height: 200,
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
  profileText: {
    fontSize: 26,
    color: '#696969',
    fontWeight: '600',
    marginBottom: 40,
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
    justifyContent: 'center',
    alignItems: 'center',
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
