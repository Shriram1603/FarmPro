import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Topbar from 'container/components/TopBar'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import BtnComponent from 'container/Components/Btncomponent'

const PlantDiseaseDetector = () => {
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <Topbar title={"Plant Disease Detector"}/>
      <Text style={{marginVertical:moderateVerticalScale(20),marginHorizontal:moderateScale(20),fontFamily:'Poppins',fontSize:scale(19),color:'black',fontWeight:'bold'}}>Let's get started</Text>
      <Text style={{marginVertical:moderateVerticalScale(10),marginHorizontal:moderateScale(20),fontFamily:'Poppins',fontSize:scale(15),color:'black'}}>Upload a photo of your plant to receive an analysis and recommendations.</Text>

      <Image style={{height:moderateScale(300),width:moderateScale(300),alignSelf:'center'}} source={{
          uri: 'https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w='
        }}/>
        <BtnComponent title={"Upload photo"}/>
    </View>
  )
}

export default PlantDiseaseDetector

const styles = StyleSheet.create({})