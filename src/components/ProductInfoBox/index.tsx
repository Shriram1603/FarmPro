import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductInfoBox = ({props}) => {
  return (
    <View style={styles.container}>
        <Image source={require('images/strawberry.jpg')} style={styles.image} />
      <Text style={styles.name}>Strawberry</Text>
      <Text style={styles.price}>$5.00</Text>
    </View>
  )
}

export default ProductInfoBox

const styles = StyleSheet.create({
    container:{
        height:100,
        width:'50%',
        marginTop:40,
        marginLeft:20
    },
    image:{
        height:150,
        width:150,
        resizeMode:'contain',
        borderRadius:10
    },
    name:{
        color:'black',
        fontFamily:'Sen-Bold',
        fontSize:17
    },
    price:{
        fontFamily:'Poppins',
        color:'green'
    }
})