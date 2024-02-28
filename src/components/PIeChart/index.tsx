import React from 'react';
import { View, Text } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import { moderateScale } from 'react-native-size-matters';

const PieChartComponent = ({ data }) => {
  return (
    <View style={{ padding: 20, alignItems: 'center' }}>
      <PieChart
        data={data}
        donut
        showGradient    
        sectionAutoFocus
        radius={55}
        innerRadius={45}
        innerCircleColor={'#232B5D'}
        centerLabelComponent={() => {
          return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>
                {data[0].value}%
              </Text>
              <Text style={{ fontSize: 12, color: 'white' }}>{data[0].label}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default PieChartComponent;