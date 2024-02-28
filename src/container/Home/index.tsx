import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigate('CropYield')}>
        <Image style={styles.img} source={require('images/crop.png')} />
        <Text style={styles.buttonText}>Crop Yield</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  button:{
    width:'45%',
    height:100,
    backgroundColor:'green',
    margin:20,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
  },
  buttonText:{
    fontFamily:'Sen-Bold',
    fontSize:17,
    color:'white'
  },
  img:{
    height:40,
    width:40,
    resizeMode:'contain'
  }
})