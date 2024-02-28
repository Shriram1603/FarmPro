import {createSlice} from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    productList: [
      {
        id: '1',
        name: 'Product 1',
        price: '$20',
        imageUrl:
          'https://ecommercephotographyindia.com/assets/img/gallery/cosmetics-turquoise-bg.jpg',
        quantity: 0,
      },
      {
        id: '2',
        name: 'Product 1',
        price: '$20',
        imageUrl:
          'https://ecommercephotographyindia.com/assets/img/gallery/cosmetics-turquoise-bg.jpg',
        quantity: 0,
      },
      {
        id: '3',
        name: 'Product 1',
        price: '$20',
        quantity: 0,
        imageUrl:
          'https://ecommercephotographyindia.com/assets/img/gallery/cosmetics-turquoise-bg.jpg',
      },
    ],
  },
  reducers: {
    getProducts: (state, action) => {
      state.product.push({...action.payload});
    },
    incrementQty: (state, action) => {
      const {id} = action.payload;
      const product = state.productList.find(product => product.id === id);
      if (product) {
        product.quantity++;
      }
    },
    decrementQty: (state, action) => {
      const itemPresent = state.product.find(
        item => item.id == action.payload.id,
      );
      if (itemPresent.quantity == 1) {
        itemPresent.quantity = 0;
        const removeItem = state.product.filter(
          item => item.id !== action.payload.id,
        );
        state.cart = removeItem;
      } else {
        itemPresent.quantity--;
      }
    },
  },
});

export const {getProducts, incrementQty, decrementQty} = productSlice.actions;

export default productSlice.reducer;
