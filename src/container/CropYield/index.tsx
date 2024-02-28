import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Topbar from 'components/TopBar';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import Textipcmp from 'components/TextIpcmp';
import BtnComponent from 'components/BtnComponent';

const CropYield = () => {
  const state_indices = {
    'Tamil Nadu': 9,
    'Assam': 1,
    'Karnataka': 2,
    'West Bengal': 5,
    'Punjab': 16,
    'Kerala': 3,
    'Meghalaya': 4,
  };
  const Season = {
    'Whole Year': 1,
    'Kharif': 2,
    'Rabi': 3,
    'Autumn': 4,
    'Summer': 5,
    'Winter': 6,
  };

  const crop_indices = {
    'Maize': 10,
    'Sugarcane': 20,
    'Cotton': 5,
    'Tobacco': 23,
    'Paddy': 17,
    'Barley': 39,
    'Wheat': 25,
    'Millets': 19,
    'Oil seeds': 52,
    'Pulses': 48,
    'Ground Nuts': 32,
  };
  const Soil_indices = {Sandy: 1, Loamy: 2, Black: 3, Red: 4, Clayey: 5};

  const [selectedCrop, setSelectedCrop] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedseason, setSelectedseason] = useState(null);

  const [area, setArea] = useState('');
  const [rainFall, setRainFall] = useState('');
  const [pesticide, setPesticide] = useState('');
  const [fertilizer, setFertilizer] = useState('');
  const [soilType, setSoilType] = useState('');

  console.log(selectedCrop);
  console.log(area);

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <Topbar title={'CropRotation'} />

      <Text
        style={{
          marginVertical: moderateVerticalScale(10),
          marginHorizontal: moderateScale(20),
          fontFamily: 'Poppins',
          fontSize: scale(12),
          color: 'black',
          fontWeight: 'bold',
        }}>
        Select Crop:
      </Text>
      <Picker
        style={{
          backgroundColor: '#f5f5f5',
          color: 'black',
          fontFamily: 'Poppins',
          borderRadius: scale(10),
          marginHorizontal: moderateScale(20),
        }}
        selectedValue={selectedCrop}
        onValueChange={itemValue => setSelectedCrop(itemValue)}>
        {Object.keys(crop_indices).map((crop, index) => (
          <Picker.Item key={index} label={crop} value={crop_indices[crop]} />
        ))}
      </Picker>

      <Text
        style={{
          marginVertical: moderateVerticalScale(10),
          marginHorizontal: moderateScale(20),
          fontFamily: 'Poppins',
          fontSize: scale(12),
          color: 'black',
          fontWeight: 'bold',
        }}>
        Select State:
      </Text>
      <Picker
        style={{
          backgroundColor: '#f5f5f5',
          color: 'black',
          fontFamily: 'Poppins',
          borderRadius: scale(10),
          marginHorizontal: moderateScale(20),
        }}
        selectedValue={selectedState}
        onValueChange={itemValue => setSelectedState(itemValue)}>
        {Object.keys(state_indices).map((state, index) => (
          <Picker.Item key={index} label={state} value={state_indices[state]} />
        ))}
      </Picker>
      <Text
        style={{
          marginVertical: moderateVerticalScale(10),
          marginHorizontal: moderateScale(20),
          fontFamily: 'Poppins',
          fontSize: scale(12),
          color: 'black',
          fontWeight: 'bold',
        }}>
        Select Season:
      </Text>
      <Picker
        style={{
          color: 'black',
          backgroundColor: '#f5f5f5',
          fontFamily: 'Poppins',
          borderRadius: 10,
          marginHorizontal: moderateScale(20),
        }}
        selectedValue={selectedseason}
        onValueChange={itemValue => setSelectedseason(itemValue)}>
        {Object.keys(Season).map((state, index) => (
          <Picker.Item key={index} label={state} value={Season[state]} />
        ))}
      </Picker>
      <Textipcmp
        title={'Amount of farmable land you possess'}
        placeholder={'Enter the Area in Hecters'}
        onChangeText={setArea}
      />
      <Textipcmp
        title={'Annual_Rainfall'}
        placeholder={'Enter AnnualRainfall in meters'}
        onChangeText={setRainFall}
      />
      <Textipcmp
        title={'Pesticide'}
        placeholder={'Enter the Pesticide'}
        onChangeText={setPesticide}
      />
      <Textipcmp
        title={'Fertilizer'}
        placeholder={'Enter the Fertilizer'}
        onChangeText={setFertilizer}
      />
      <Textipcmp
        title={'Soil Type'}
        placeholder={'Enter the Soil Type'}
        onChangeText={setSoilType}
      />
      <BtnComponent title={'Submit'} onbtnpress={''} />
    </ScrollView>
  );
};

export default CropYield;
