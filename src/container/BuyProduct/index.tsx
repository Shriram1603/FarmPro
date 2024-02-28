import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const BuyProduct = () => {
  const [products, setProducts] = useState([
    {
      id: '1',
      name: 'Product 1',
      price: '$20',
      imageUrl:
        'https://ecommercephotographyindia.com/assets/img/gallery/cosmetics-turquoise-bg.jpg',
    },
    {
      id: '2',
      name: 'Product 2',
      price: '$30',
      imageUrl:
        'https://ecommercephotographyindia.com/assets/img/gallery/cosmetics-turquoise-bg.jpg',
    },
    {
      id: '3',
      name: 'Product 2',
      price: '$30',
      imageUrl:
        'https://ecommercephotographyindia.com/assets/img/gallery/cosmetics-turquoise-bg.jpg',
    },
    {
      id: '4',
      name: 'Product 2',
      price: '$30',
      imageUrl:
        'https://ecommercephotographyindia.com/assets/img/gallery/cosmetics-turquoise-bg.jpg',
    },
    {
      id: '5',
      name: 'Product 2',
      price: '$30',
      imageUrl:
        'https://ecommercephotographyindia.com/assets/img/gallery/cosmetics-turquoise-bg.jpg',
    },
    {
      id: '6',
      name: 'Product 2',
      price: '$30',
      imageUrl:
        'https://ecommercephotographyindia.com/assets/img/gallery/cosmetics-turquoise-bg.jpg',
    },
    // Add more products as needed
  ]);

  const {navigate} = useNavigation();

  const renderProductItem = ({ item }) => (
    <ScrollView>
      <TouchableOpacity style={styles.productItemContainer} onPress={() => navigate('ProductDetails')}>
        <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </TouchableOpacity>
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Products</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={renderProductItem}
        numColumns={2}
        columnWrapperStyle={styles.productList}

      />
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
    fontFamily: 'Sen-ExtraBold'
  },

  productList: {
    justifyContent: 'space-between',
  },

  productItemContainer: {
    flex: 1,
    borderRadius: 8,
    // backgroundColor: '#f0f0f0',
    // padding: 10,
    margin: 8,
  },

  productImage: {
    width: '100%',
    height: 130,
    resizeMode: 'contain',
    marginBottom: 8,
    borderRadius: 10,
  },

  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: 'black',
    fontFamily: 'Sen-Bold'
  },

  productPrice: {
    fontSize: 14,
    color: 'green',
    fontFamily: 'Poppins'
  },
});

export default BuyProduct;