import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from 'container/Home';
import AntDesign from 'react-native-vector-icons/AntDesign';    



const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return(
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
      name={'Products'}
      component={Products}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="dumbbell" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name={'Sell'}
      component={Sell}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <Feather name="pie-chart" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name={'Orders'}
      component={Orders}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <FontAwesome6 name="bowl-food" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name={'Profile'}
      component={Profile}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <AntDesign name="user" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
  )
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
