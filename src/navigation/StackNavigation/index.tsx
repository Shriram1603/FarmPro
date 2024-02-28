import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from 'container/Home';
import BuyProduct from 'container/BuyProduct';
import SellProduct from 'container/SellProduct';
import ShowImage from 'container/ShowImage';

const StackNavigator = () => {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='SellProduct'>
        <Stack.Screen name='Home' component={BuyProduct} />
        <Stack.Screen name='BuyProduct' component={BuyProduct} />
        <Stack.Screen name='SellProduct' component={SellProduct} />
        <Stack.Screen name='ShowImage' component={ShowImage} />
    </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})