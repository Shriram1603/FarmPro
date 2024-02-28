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
    Assam: 1,
    Karnataka: 2,
    Kerala: 3,
    Meghalaya: 4,
    'West Bengal': 5,
    Puducherry: 6,
    Goa: 7,
    'Andhra Pradesh': 8,
    'Tamil Nadu': 9,
    Odisha: 10,
    Bihar: 11,
    Gujarat: 12,
    'Madhya Pradesh': 13,
    Maharashtra: 14,
    Mizoram: 15,
    Punjab: 16,
    'Uttar Pradesh': 17,
    Haryana: 18,
    'Himachal Pradesh': 19,
    Tripura: 20,
    Nagaland: 21,
    Chhattisgarh: 22,
    Uttarakhand: 23,
    Jharkhand: 24,
    Delhi: 25,
    Manipur: 26,
    'Jammu and Kashmir': 27,
    Telangana: 28,
    'Arunachal Pradesh': 29,
    Sikkim: 30,
  };
  const Season = {
    'Whole Year': 1,
    Kharif: 2,
    Rabi: 3,
    Autumn: 4,
    Summer: 5,
    Winter: 6,
  };

  const crop_indices = {
    Arecanut: 1,
    'Arhar/Tur': 2,
    'Castor seed': 3,
    'Coconut ': 4,
    'Cotton(lint)': 5,
    'Dry chillies': 6,
    Gram: 7,
    Jute: 8,
    Linseed: 9,
    Maize: 10,
    Mesta: 11,
    'Niger seed': 12,
    Onion: 13,
    'Other Rabi pulses': 14,
    Potato: 15,
    'Rapeseed &Mustard': 16,
    Rice: 17,
    Sesamum: 18,
    'Small millets': 19,
    Sugarcane: 20,
    'Sweet potato': 21,
    Tapioca: 22,
    Tobacco: 23,
    Turmeric: 24,
    Wheat: 25,
    Bajra: 26,
    'Black pepper': 27,
    Cardamom: 28,
    Coriander: 29,
    Garlic: 30,
    Ginger: 31,
    Groundnut: 32,
    'Horse-gram': 33,
    Jowar: 34,
    Ragi: 35,
    Cashewnut: 36,
    Banana: 37,
    Soyabean: 38,
    Barley: 39,
    Khesari: 40,
    Masoor: 41,
    'Moong(Green Gram)': 42,
    'Other Kharif pulses': 43,
    Safflower: 44,
    Sannhamp: 45,
    Sunflower: 46,
    Urad: 47,
    'Peas & beans (Pulses)': 48,
    'other oilseeds': 49,
    'Other Cereals': 50,
    'Cowpea(Lobia)': 51,
    'Oilseeds total': 52,
    'Guar seed': 53,
    'Other Summer Pulses': 54,
    Moth: 55,
  };

  const [selectedCrop, setSelectedCrop] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedseason, setSelectedseason] = useState(null);

  const [area, setArea] = useState('');
  const [rainFall, setRainFall] = useState('');
  const [pesticide, setPesticide] = useState('');
  const [fertilizer, setFertilizer] = useState('');
  const [soilType, setSoilType] = useState('');

  console.log(area);

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <Topbar title={'CropYield'} />
      
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
            <Picker.Item
              key={index}
              label={state}
              value={state_indices[state]}
            />
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
