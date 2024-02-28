import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from 'container/Home';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Analytics from 'container/Analytics';
import SellPage from 'container/SellProduct';
import BuyProduct from 'container/BuyProduct';
import CropRecommendation from 'container/CropRecommendation';

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName={'Home'}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Analytics'}
        component={Analytics}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Feather name="pie-chart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Sell'}
        component={SellPage}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Fontisto name="dollar" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Buy'}
        component={BuyProduct}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="shopify" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Recommendation'}
        component={CropRecommendation}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Entypo name="tree" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
