import 
React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';

const TextIpcmp = ({title, placeholder, onChangeText}) => {
  return (
    <View
      style={{margin: moderateScale(18), marginTop: moderateVerticalScale(5)}}>
      <Text style={styles.txt1}>{title} *</Text>
      <View style={styles.txtview}>
        <TextInput
            
          placeholder={placeholder}
          placeholderTextColor={'#303841'}
          style={{flex: 2,fontFamily:'Poppins',color:'black'}}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

export default TextIpcmp;

const styles = StyleSheet.create({
  txt1: {
    marginVertical: moderateVerticalScale(10),
    // marginHorizontal: moderateScale(20),
    fontFamily: 'Poppins',
    fontSize: scale(12),
    color: 'black',
    fontWeight: 'bold',
  },
  txtview: {
    width: moderateScale(330),
    padding: moderateScale(3),
    // borderWidth: scale(1),
    borderRadius: scale(10),
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    alignSelf: 'center',

  },
});