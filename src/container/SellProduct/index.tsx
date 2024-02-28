import { useNavigation } from '@react-navigation/native';
import React, { memo, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Pressable,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const SellPage = () => {
  const [imageUri, setImageUri] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');

  const {navigate} = useNavigation();

  const Box = memo(({ ImageUrl, BoxText, onPress }) => {
    return (
      <Pressable style={styles.boxContainer} onPress={onPress}>
        <Image source={ImageUrl} style={styles.boximg} />
        <Text style={{color:'black',fontFamily:'Poppins'}}>{BoxText}</Text>
      </Pressable>
    );
  });

  const ImagePicker = async() => {
    await launchImageLibrary({ mediaType: 'photo' }, (response) => {
      console.log('ImagePicker response:', response.assets[0]); // Add this line for debugging
        setImageUri(response.assets[0].uri);
        
    });
  };
  
  const LaunchCamera = async() => {
    await launchCamera({ mediaType: 'photo', saveToPhotos: true }, (response) => {
      console.log('LaunchCamera response:', response); // Add this line for debugging
      if (!response.didCancel && !response.errorMessage) {
        setImageUri(response.assets[0].uri);
      }
    });
  };  

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Upload Product</Text>

      <View style={styles.boxContainer}>
        <Box
          ImageUrl={require('images/photo.png')}
          BoxText={'Open Camera'}
          onPress={LaunchCamera}
        />
        <Box
          ImageUrl={require('images/gallery.png')}
          BoxText={'From Gallery'}
          onPress={ImagePicker}
        />
      </View>

      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.selectedImage} />
      ) : null}

      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={name}
        onChangeText={(text) => setName(text)}
        placeholderTextColor={'grey'}
      />

      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={(text) => setPrice(text)}
        keyboardType="numeric"
        placeholderTextColor={'grey'}
      />

      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
        multiline
        placeholderTextColor={'grey'}
      />

      <TextInput
        style={styles.input}
        placeholder="Quantity"
        value={quantity}
        onChangeText={(text) => setQuantity(text)}
        keyboardType="numeric"
        placeholderTextColor={'grey'}
      />

      <TouchableOpacity style={styles.uploadButton} onPress={() => navigate('ShowImage',{
        uri:imageUri
      })}>
        <Text style={styles.uploadButtonText}>Upload</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  boximg: {
    height: 28,
    width: 28,
  },
  selectedImage: {
    width: 200,
    height: 200, // Adjust height as needed
    resizeMode: 'contain',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  uploadButton: {
    backgroundColor: 'lightgreen',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  uploadButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SellPage;
