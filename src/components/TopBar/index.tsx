import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, scale } from 'react-native-size-matters'

const Topbar = ({title}) => {
  return (
    <View style={{justifyContent:'center',alignItems:'center',margin:moderateScale(20)}}>
      <Text style={{fontFamily:"Sen-Bold",color:'black ',fontSize:scale(18),fontWeight:'bold'}}>{title}</Text>
    </View>
  )
}

export default Topbar

const styles = StyleSheet.create({})