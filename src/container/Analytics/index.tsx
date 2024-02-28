import React from 'react';
import {View, Text} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import Topbar from 'components/TopBar';
import { ScrollView } from 'react-native-gesture-handler';
import Graph from 'components/Graph';
import PieChartComponent from 'components/PIeChart';
import ValuePassing from 'components/ValuePassing';

const Analytics = () => {
  const pieData = [
    {
      label: ' Purchased',
      value: 45, //put the val of non used ferti val here
      color: '#B0C929',
      gradientCenterColor: '#006DFF',
      focused: true,
    },
    {
      label: ' Used untill',
      value: 16, //put the val of used ferti val here
      color: '#93FCF8',
      gradientCenterColor: '#3BE9DE',
    },  
  ];

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Topbar title={'Analytics'} />
      <ScrollView>

      
      <View
        style={{
          height: moderateScale(140),
          marginHorizontal: moderateScale(25),
          borderRadius: scale(20),
          borderWidth: scale(1),
        }}>
          
        <Text
          style={{
            marginHorizontal: moderateScale(20),
            marginTop: moderateScale(10),
            fontFamily: 'Sen-Bold',
            fontSize: scale(17),
            color: 'black',
            textAlign:'center'
          }}>
          Expenses
        </Text>
        <Text
          style={{
            marginHorizontal: moderateScale(20),
            marginTop: moderateScale(20),
            fontFamily: 'Sen-Bold',
            fontSize: scale(17),
            color: 'black',
          }}>
          $Profit :{' '}
        </Text>
        <Text
          style={{
            marginHorizontal: moderateScale(20),
            marginTop: moderateScale(20),
            fontFamily: 'Sen-Bold',
            fontSize: scale(17),
            color: 'black',
          }}>
          $Spent :{' '} 
        </Text>
      </View>
      <Text
        style={{
          marginHorizontal: moderateScale(20),
          marginVertical: moderateVerticalScale(5),
          fontFamily: 'Poppins',
          fontSize: scale(17),
          color: 'black',
        }}>
        Demand on (yield crop goes here)
      </Text>

      <Graph
        pvalue1={60}
        pvalue2={50}
        pvalue3={90}
        pvalue4={20}
        Season={'Kharif'}
      />
      <Text
        style={{
          color: 'black',
          fontSize: scale(16),
          fontFamily: 'Poppins',
          marginHorizontal: moderateScale(20),
          marginVertical: moderateVerticalScale(20),
        }}>
        (suggested ferti goes here)Fertilizer usage
      </Text>
      <View
        style={{
          // marginTop: moderateScale(5),
          alignSelf: 'center',
          padding: 16,
          borderRadius: 20,
          backgroundColor: 'white',
          width: moderateScale(290),
          borderWidth: scale(1.5),
        }}>
        <PieChartComponent data={pieData} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 10,
          }}>
          {pieData.map((item, index) => (
            <ValuePassing
              key={index}
              color={item.color}
              label={item.label}
              value={item.value}
            />
          ))}
        </View>
      </View>
      <View style={{height:moderateScale(20)}}></View>
      </ScrollView>
    </View>
  );
};

export default Analytics;