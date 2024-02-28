import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ShowImage = ({route}) => {
    const {uri} = route.params
    console.log(route.params)
  return (
    <View style={styles.container}>
      <Image source={uri} style={styles.img} />
       
    </View>
  );
};

export default ShowImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  img: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
});
