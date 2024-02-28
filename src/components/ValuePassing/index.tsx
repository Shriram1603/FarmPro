import React from 'react';
import { View, Text } from 'react-native';
import { scale } from 'react-native-size-matters';

const ValuePassing = ({ color, label, value }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', width: 120 }}>
      <View
        style={{
          height: 10,
          width: 10,
          borderRadius: 5,
          backgroundColor: color,
          marginRight: 10,
        }}
      />
      <Text style={{ color: 'black' ,fontFamily:'Poppins',fontSize:scale(10)}}>{label}: {value}%</Text>
    </View>
  );
};

export default ValuePassing;