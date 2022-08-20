import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './modules/Login';
import Store from './modules/Store';
import ProductDetails from './modules/ProductDetails';
import Profile from './modules/Profile';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Store" component={Store} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
