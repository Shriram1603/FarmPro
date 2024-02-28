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

const StackNavigator = () => {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Analytics'>
        <Stack.Screen name='Home' component={BuyProduct} />
        <Stack.Screen name='BuyProduct' component={BuyProduct} />
        <Stack.Screen name='SellProduct' component={SellProduct} />
        <Stack.Screen name='PlantDisease' component={PlantDiseaseDetector} />
        <Stack.Screen name='ProductDetails' component={ProductDetails} />
        <Stack.Screen name='CropRecommendation' component={CropRecommendation} />
        <Stack.Screen name='Analytics' component={Analytics} />
    </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})