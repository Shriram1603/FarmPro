import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'

interface CategoryBoxProps{
    props:String;
}

const CategoryBox = ({props}:CategoryBoxProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props}</Text>
      <Entypo name='chevron-small-down' size={20} color={'black'} style={styles.icon}/>
    </View>
  )
}

export default CategoryBox

const styles = StyleSheet.create({
    container:{
        height:30,
        width:100,
        flexDirection:'row',
        backgroundColor:'lightgray',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:5,
    },
    text:{
        color:'black',
        fontFamily:'Sen-Bold',
        fontSize:12,
        
    },
    icon:{
        left:5
    }
})