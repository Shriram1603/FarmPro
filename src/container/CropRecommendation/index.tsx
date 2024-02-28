import Slider from '@react-native-community/slider';
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CropRecommendation = () => {
  const [temperature, setTemperature] = useState(25);
  const [humidity, setHumidity] = useState(50);
  const [potassium, setPotassium] = useState(0);
  const [phosphorus, setPhosphorus] = useState(0);
  const [nitrogen, setNitrogen] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Crop Recommendation</Text>

      <View style={styles.sliderContainer}>
        <Text style={{fontFamily:'Poppins',color:'black'}}>Temperature: {temperature.toFixed(2)}°C</Text>
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
        <Text style={{fontFamily:'Poppins',color:'black'}}>Humidity: {humidity.toFixed(2)}%</Text>
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
        <Text style={{fontFamily:'Poppins',color:'black'}}>Potassium: {potassium.toFixed(2)}</Text>
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
        <Text style={{fontFamily:'Poppins',color:'black'}}>Phosphorus: {phosphorus.toFixed(2)}</Text>
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
        <Text style={{fontFamily:'Poppins',color:'black'}}>Nitrogen: {nitrogen.toFixed(2)}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          step={1}
          value={nitrogen}
          onValueChange={value => setNitrogen(value)}
        />
      </View>

      <TouchableOpacity style={styles.uploadButton}>
        <Text style={styles.uploadButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:'white'
  },
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
    width: '100%',
    height: 40,
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
    fontFamily:'Poppins'
  },
});

export default CropRecommendation;