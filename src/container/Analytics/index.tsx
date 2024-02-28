import React, {useState} from 'react';
import {BarChart} from 'react-native-chart-kit';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const Analytics = () => {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43]
          }
        ]
      };

  return (
    <View style={styles.container}>
    <Text style={styles.heading}>Farm Pro</Text>
    </View>
    
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'left',
    color: 'black',
    fontFamily: 'Sen-ExtraBold',
  },
});

export default Analytics;
