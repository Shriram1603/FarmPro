import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import Topbar from 'components/TopBar';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Stars from 'react-native-stars';
import {TouchableOpacity} from 'react-native-gesture-handler';
import BtnComponent from 'components/BtnComponent';

const ProductDetails = ({route}) => {
  const {name,price,desc,imageUrl} = route.params;
  const [stars, setStars] = useState(0);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Topbar title={'Product details'} />
      {/* <Image source={{ uri: imageUrl }} style={{ width: 200, height: 200 }} /> */}
      <Image
        source={{
          uri: imageUrl,
        }}
        style={{
          height: moderateScale(200),
          width: moderateScale(200),
          alignSelf: 'center',
        }}
      />
      <Text
        style={{
          marginTop: moderateVerticalScale(20),
          margin: moderateScale(20),
          fontFamily: 'Sen-ExtraBold',
          fontSize: scale(15),
          color: 'black',
        }}>
        {name}
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{
            marginTop: moderateVerticalScale(10),
            margin: moderateScale(20),
            fontFamily: 'Poppins',
            fontSize: scale(12),
            color:'black'
          }}>
          ₹{price} price
        </Text>
        {/* <Text style={{marginTop:moderateVerticalScale(10),margin:moderateScale(15),fontFamily:"Poppins",fontSize:scale(12)}}>4.5 </Text> */}
        {/* <Staromponent/> */}
        <View
          style={{
            marginTop: moderateVerticalScale(10),
            margin: moderateScale(20),
          }}>
          <Stars
            default={0}
            count={5}
            half={true}
            starSize={50}
            fullStar={<Icon name={'star'} style={[styles.myStarStyle]} />}
            emptyStar={
              <Icon
                name={'star-outline'}
                style={[styles.myStarStyle, styles.myEmptyStarStyle]}
              />
            }
            halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]} />}
            update={val => setStars(val)}
          />
        </View>
      </View>

      <View
        style={{
          width: moderateScale(360),
          borderColor: 'lightgray',
          borderWidth: moderateScale(0.2),
          alignSelf: 'center',
        }}></View>
      <Text
        style={{
          margin: moderateVerticalScale(10),
          fontFamily: 'Sen-ExtraBold',
          fontSize: scale(15),
          color: 'black',
        }}>
        The details
      </Text>
      <Text
        style={{
          alignSelf: 'center',
          marginTop: moderateVerticalScale(1),
          margin: moderateScale(17),
          fontFamily: 'Poppins',
          fontSize: scale(15),
          color:'black'
        }}>
        {desc}
      </Text>
      <View
        style={{
          width: moderateScale(350),
          marginVertical: moderateVerticalScale(10),
          borderColor: 'black',
          borderWidth: moderateScale(0.2),
          alignSelf: 'center',
        }}></View>
      <Text
        style={{
          marginTop: moderateVerticalScale(1),
          marginHorizontal: moderateScale(17),
          fontFamily: 'Sen-Bold',
          fontSize: scale(15),
          color: 'black',
        }}>
        From the farm
      </Text>
      <Text
        style={{
          marginVertical: moderateVerticalScale(10),
          marginHorizontal: moderateScale(20),
          fontFamily: 'Poppins',
          fontSize: scale(15),
          color:'black'
        }}>
        Sriram's Farm
      </Text>
      <View
        style={{position: 'absolute', bottom: scale(50), alignSelf: 'center'}}>
        <BtnComponent title={'add to cart'} />
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  myStarStyle: {
    color: 'orange',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
  },
});
