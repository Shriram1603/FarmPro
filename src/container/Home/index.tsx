import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Feed from 'components/Feed';
import {useSelector} from 'react-redux';
import Storage from 'data/Storage';

const Home = () => {
  const predicts = useSelector(state => state.predicts);

  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.heading}>Welcome Farmer</Text>
            <Text style={styles.subName}>Sriram</Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',

                textAlign: 'left',
                color: 'black',
                fontFamily: 'Sen-ExtraBold',
              }}>
              Today
            </Text>
            <Text style={styles.subName}>22 C</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.img}
              source={{
                uri: 'https://www.keshrinandan.com/wp-content/uploads/2015/08/ke_maize_nutrition.jpg',
              }}
            />
            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '800',
                  marginBottom: 2,
                  color: 'black',
                }}>
                Currently Yielding
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: '900',
                  marginBottom: 2,
                  color: 'black',
                }}>
                Corn
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '800',
                    marginBottom: 2,
                    color: 'black',
                    marginRight: 5,
                  }}>
                  Crop Health:
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '900',
                    marginBottom: 2,

                    color: 'green',
                  }}>
                  Good
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '800',

                  color: 'black',
                }}>
                Harvest Date:
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '900',
                  marginBottom: 2,
                  color: 'black',
                }}>
                3 March 2023
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.topic}>Recomendations</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <TouchableOpacity style={styles.button1}>
            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'Sen-ExtraBold',
                  marginBottom: 2,
                  color: 'black',
                }}>
                Fertilizers Recomemended
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  fontFamily: 'Sen-Bold',
                  marginBottom: 2,
                  color: 'black',
                }}>
                {predicts?.Fertilizer || 68000}
              </Text>
            </View>
            <View style={{marginLeft: 0}}>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'Sen-Bold',
                  marginBottom: 2,
                  color: 'black',
                }}>
                Status
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Sen-Bold',
                  marginBottom: 2,
                  color: 'green',
                }}>
                Available
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity style={styles.button1}>
            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  fontSize: 12,
                  marginBottom: 2,
                  color: 'black',
                  fontFamily: 'Sen-ExtraBold',
                }}>
                Storage Recomemended
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  marginBottom: 2,
                  color: 'red',
                  fontFamily: 'Sen-ExtraBold',
                }}>
                {Storage.Barley.temp}
              </Text>
            </View>
            <View style={{marginLeft: 0}}>
              <Text
                style={{
                  fontSize: 12,
                  marginBottom: 2,
                  color: 'black',
                  fontFamily: 'Sen-Bold',
                }}>
                Status
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Sen-Bold',

                  marginBottom: 2,
                  color: 'green',
                }}>
                Available
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Feed></Feed>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'F9FCF8',
    padding: 20,
  },
  button: {
    width: '100%',
    height: 150,
    backgroundColor: 'rgba(114, 228, 21,0.1)',
    borderWidth: 0.3,

    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
  },
  button1: {
    width: '100%',
    height: 70,
    // backgroundColor: 'green',
    backgroundColor: 'rgba(114, 228, 21,0.1)',

    borderWidth: 0.3,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
  },
  buttonText: {
    fontFamily: 'Sen-Bold',
    fontSize: 17,
    color: 'white',
  },
  img: {
    height: '100%',
    width: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    // marginBottom: 5,
    textAlign: 'left',
    color: 'black',
    fontFamily: 'Sen-ExtraBold',
  },
  subName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'left',
    color: 'black',
    fontFamily: 'Sen-ExtraBold',
  },
  topic: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 15,
    textAlign: 'left',
    color: 'black',
    fontFamily: 'Sen-ExtraBold',
  },
});
