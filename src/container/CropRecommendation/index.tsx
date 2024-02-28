import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Topbar from 'components/TopBar';
import Slider from '@react-native-community/slider';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import Textipcmp from 'components/TextIpcmp';
import BtnComponent from 'components/BtnComponent';

const CropRecommendation = () => {
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
    Maize: 10,
    Sugarcane: 20,
    Cotton: 5,
    Tobacco: 23,
    Paddy: 17,
    Barley: 39,
    Wheat: 25,
    Millets: 19,
    'Oil seeds': 52,
    Pulses: 48,
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
  const [temperature, setTemperature] = useState(25);
  const [humidity, setHumidity] = useState(50);
  const [potassium, setPotassium] = useState(0);
  const [phosphorus, setPhosphorus] = useState(0);
  const [nitrogen, setNitrogen] = useState(0);
  const [ph,setPh] = useState(0);

  console.log(area);

  const pushMetrics = async () => {
    await fetch(`https://192.168.117.18:8080/predict`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nitrogen:nitrogen,
        phosphorus:phosphorus,
        potassium:potassium,
        temperature:temperature,
        ph:ph,

      
      }),
    })
      .then(res => res.json())
      .then(resp => {
        navigate(Routes.WorkoutStart, {
          duration: resp['duration'],
          reps: resp['reps'],
          sets: resp['sets'],
          weights: resp['weights'],
          category: todaysWorkout,
          currentCategory: workout,
          selectedLevel: selectedLevel,
        });
      });
  };

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

      <View style={styles.sliderContainer}>
        <Text
          style={{
            fontFamily: 'Sen-Bold',
            color: 'black',
            marginVertical: moderateVerticalScale(10),
            marginHorizontal: moderateScale(20),
            fontSize: scale(12),
          }}>
          Temperature: {temperature.toFixed(2)}°C
        </Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={40}
          step={1}
          value={temperature}
          onValueChange={value => setTemperature(value)}
        />
      </View>

      <View style={styles.sliderContainer}>
        <Text
          style={{
            fontFamily: 'Sen-Bold',
            color: 'black',
            marginVertical: moderateVerticalScale(10),
            marginHorizontal: moderateScale(20),
            fontSize: scale(12),
          }}>
          Humidity: {humidity.toFixed(2)}%
        </Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          step={1}
          value={humidity}
          onValueChange={value => setHumidity(value)}
        />
      </View>

      <View style={styles.sliderContainer}>
        <Text
          style={{
            fontFamily: 'Sen-Bold',
            color: 'black',
            marginVertical: moderateVerticalScale(10),
            marginHorizontal: moderateScale(20),
            fontSize: scale(12),
          }}>
          Potassium: {potassium.toFixed(2)}
        </Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          step={1}
          value={potassium}
          onValueChange={value => setPotassium(value)}
        />
      </View>

      <View style={styles.sliderContainer}>
        <Text
          style={{
            fontFamily: 'Sen-Bold',
            color: 'black',
            marginVertical: moderateVerticalScale(10),
            marginHorizontal: moderateScale(20),
            fontSize: scale(12),
          }}>
          Phosphorus: {phosphorus.toFixed(2)}
        </Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          step={1}
          value={phosphorus}
          onValueChange={value => setPhosphorus(value)}
        />
      </View>

      <View style={styles.sliderContainer}>
        <Text
          style={{
            fontFamily: 'Sen-Bold',
            color: 'black',
            marginVertical: moderateVerticalScale(10),
            marginHorizontal: moderateScale(20),
            fontSize: scale(12),
          }}>
          Nitrogen: {nitrogen.toFixed(2)}
        </Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          step={1}
          value={nitrogen}
          onValueChange={value => setNitrogen(value)}
        />
      </View>
      <View style={styles.sliderContainer}>
        <Text
          style={{
            fontFamily: 'Sen-Bold',
            color: 'black',
            marginVertical: moderateVerticalScale(10),
            marginHorizontal: moderateScale(20),
            fontSize: scale(12),
          }}>
          PH: {ph.toFixed(2)}
        </Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={10}
          step={1}
          value={ph}
          onValueChange={value => setPh(value)}
        />
      </View>
      <BtnComponent title={'Submit'} onbtnpress={''} />
      <View style={{height: moderateScale(20)}}></View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Sen-ExtraBold',
  },
  sliderContainer: {
    marginBottom: 20,
  },
  slider: {
    width: '85%',
    height: 40,
    alignSelf: 'center',
  },
  uploadButton: {
    backgroundColor: '#72E415',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  uploadButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  },
});

export default CropRecommendation;
