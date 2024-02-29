import React, {useEffect, useState} from 'react';
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
import { useDispatch } from 'react-redux';
import { setPFertilizer, setRec_Crop, set_Yield } from 'redux/Predicts';

const CropRecommendation = () => {
  const [weatherData, setWeatherData] = useState(null);
  const city = 'Irinjalakuda';
  const apiKey = '5e53d4bb9df3c449c222aa85a07e538e';

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

  useEffect(() => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }, [city]);

  const [selectedCrop, setSelectedCrop] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedseason, setSelectedseason] = useState(null);

  const [recCrop, setRecCrop] = useState('');
  const [pYield, setYield] = useState('');
  const [recFer, setRecFer] = useState('');

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
  const [ph, setPh] = useState(0);
  const [crop, setCrop] = useState('');
  let moisture = 30;
  let soil_type = 2;
  let crop_type = 2;

  const dispatch = useDispatch();

  console.log('Season', selectedseason);

  const pushMetrics = async () => {
    console.log('Selected', selectedState, selectedseason);
    await fetch(`http://192.168.22.18:8080/predict`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nitrogen: nitrogen,
        phosphorus: phosphorus,
        potassium: potassium,
        temperature: temperature,
        ph: ph,
        rainfall: rainFall,
        humidity: humidity,
      }),
    })
      .then(res => res.json())
      .then(async resp => {
        var crop_name = resp['prediction_text'];
        console.log("AJJSJFB",crop_name)
        let id;
        if (crop_name == 'cotton') id = 5;
        else if (crop_name == 'maize') id = 10;
        else if (crop_name == 'rice') id = 17;
        else if (crop_name == 'blackgram') id = 19;
        else if (crop_name == 'lentil') id = 48;
        else if (
          crop_name == 'apple' ||
          crop_name == '||ange' ||
          crop_name == 'pomegranate' ||
          crop_name == 'watermelon' ||
          crop_name == 'banana' ||
          crop_name == 'mango' ||
          crop_name == 'grapes'
        )
          id = 20;
        else if (crop_name == 'coffee') id = 23;
        else if (crop_name == 'kidneybeans' || crop_name == 'pigeonpeas')
          id = 39;
        else if (crop_name == 'lentil') id = 25;
        else if (crop_name == 'mungbean' || crop_name == 'mothbeans') id = 19;
        else if (
          crop_name == 'chickpea' ||
          crop_name == 'muskmelon' ||
          crop_name == 'papaya'
        )
          id = 52;
        else if (crop_name == 'coconut' || crop_name == 'jute') id = 48;
        console.log('RESP', resp);
        console.log("ID:",id)
        await fetch('http://192.168.22.18:8080/predict_yield', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            crop: id,
            season: selectedseason,
            state: selectedState,
            annual_rainfall: rainFall,
            fertilizer: fertilizer,
            pesticide: pesticide,
            humidity: humidity,
            area: area,
          }),
        })
          .then(res => res.json())
          .then(async resp => {
            console.log('yield', resp);
            setYield(resp['prediction_text'])
            await fetch('http://192.168.22.18:8080/recommend_fertilizer', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                temperature: temperature,
                humidity: humidity,
                moisture: moisture,
                soil_type: soil_type,
                crop_type: crop_type,
                nitrogen: nitrogen,
                potassium: potassium,
                phosphorous: phosphorus,
              }),
            })
              .then(res => res.json())
              .then(resp => {
                console.log('REC', resp);
                setRecFer(resp['recommended_fertilizer'])
                dispatch(setRec_Crop(crop_name))
                dispatch(set_Yield(pYield));
                dispatch(setPFertilizer(resp['recommended_fertilizer']))
              });
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
      <BtnComponent title={'Submit'} onbtnpress={pushMetrics} />
      <View style={{height: moderateScale(20)}}></View>
    </ScrollView>
  );
};

export default CropRecommendation;

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
