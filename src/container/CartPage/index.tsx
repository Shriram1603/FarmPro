import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const ProductItem = ({item, onAddToCart}) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  return (
    <View style={styles.productItemContainer}>
      <Image source={{uri: item.imageUrl}} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
      <View style={styles.counterContainer}>
        <TouchableOpacity
          onPress={handleDecrement}
          style={styles.counterButton}>
          <Text style={styles.counterButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.counterText}>{quantity}</Text>
        <TouchableOpacity
          onPress={() => {
            onAddToCart(item, quantity);
            setQuantity(quantity+1);
          }}
          style={styles.counterButton}>
          <Text style={styles.counterButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Cart = () => {
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
      name: 'Product 1',
      price: '$20',
      imageUrl:
        'https://ecommercephotographyindia.com/assets/img/gallery/cosmetics-turquoise-bg.jpg',
    },
    {
      id: '3',
      name: 'Product 1',
      price: '$20',
      imageUrl:
        'https://ecommercephotographyindia.com/assets/img/gallery/cosmetics-turquoise-bg.jpg',
    },
    // Add more products as needed
  ]);

  const handleAddToCart = (product, quantity) => {
    // Implement your logic to add the product to the cart with the specified quantity
    console.log(`Added ${quantity} ${product.name} to the cart`);
  };

  const renderProductItem = ({item}) => (
    <ProductItem item={item} onAddToCart={handleAddToCart} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Cart</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={renderProductItem}
        style={{color:'black'}}
      />
      <TouchableOpacity style={styles.uploadButton}>
        <Text style={styles.uploadButtonText}>Place Order</Text>
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: 'black',
    fontFamily: 'Sen-ExtraBold',
    textAlign: 'center',
  },
  productItemContainer: {
    borderRadius: 8,
    // backgroundColor: '#f0f0f0',
    margin: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productImage: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
    marginBottom: 8,
    borderRadius: 4,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
    flexDirection: 'column',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: 'black',
    fontFamily:'Poppins'
  },
  productPrice: {
    fontSize: 14,
    color:'black',
    fontFamily:'Poppins'
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  counterButton: {
    width: 25,
    height: 25,
    borderRadius: 15,
    backgroundColor: '#EBF2E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    color:'black',
    fontFamily:'Poppins'
  },
  counterButtonText: {
    fontSize: 14,
    color: 'black',
  },
  counterText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },

  uploadButton: {
    backgroundColor: '#72E415',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    
  },
  uploadButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily:'Poppins'
  },
});

export default Cart;