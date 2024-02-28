import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from 'container/Home';
import BuyProduct from 'container/BuyProduct';
import SellProduct from 'container/SellProduct';
import ProductDetails from 'container/ProductDetails';
import CropRecommendation from 'container/CropRecommendation';
import Analytics from 'container/Analytics';
import PlantDiseaseDetector from 'container/PlantDiseaseDetector';
import Cart from 'container/CartPage';
import BottomTabNavigator from 'navigation/BottomTabNavigator';
import CropYield from 'container/CropYield';

const StackNavigator = () => {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Tabs'>
      <Stack.Screen name='Tabs' component={BottomTabNavigator} />
        <Stack.Screen name='Home' component={BuyProduct} />
        <Stack.Screen name='BuyProduct' component={BuyProduct} />
        <Stack.Screen name='SellProduct' component={SellProduct} />
        <Stack.Screen name='PlantDisease' component={PlantDiseaseDetector} />
        <Stack.Screen name='ProductDetails' component={ProductDetails} />
        <Stack.Screen name='CropRecommendation' component={CropRecommendation} />
        <Stack.Screen name='Analytics' component={Analytics} />
        <Stack.Screen name='Cart' component={Cart} />
        <Stack.Screen name='CropYield' component={CropYield} />
    </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})