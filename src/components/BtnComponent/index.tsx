import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';

const BtnComponent = ({title,onbtnpress}) => {
  return (
    <View
      style={styles.btnview}>
      <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={onbtnpress} >
        <Text style={{fontFamily:'Sen-ExtraBold',color:'white',fontSize:scale(17),textTransform:'uppercase'}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BtnComponent;

const styles = StyleSheet.create({
    btnview:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: moderateScale(7),
      },
  btn: {
    width: moderateScale(340),
    height: moderateScale(55),
    borderRadius: scale(10),
    backgroundColor: '#B0C929',
    alignItems: 'center',
    justifyContent: 'center',
  },
});