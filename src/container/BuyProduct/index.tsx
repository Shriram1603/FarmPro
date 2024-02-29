import { useNavigation } from '@react-navigation/native';
import { Fertilizers } from 'data/Fertilizers';
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
 

  const {navigate} = useNavigation();

  const renderProductItem = ({ item }) => (
    <ScrollView>
      <TouchableOpacity style={styles.productItemContainer} onPress={() => navigate('ProductDetails',{
        imageUrl:item.image,
        name:item.name,
        price:item.price,
        desc:item.description
      })}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </TouchableOpacity>
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Products</Text>
      <FlatList
        data={Fertilizers}
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