import {configureStore} from '@reduxjs/toolkit';
import CartReducer from './CartReducer';
import ProductReducer from './ProductReducer';
import Predicts from './Predicts';

export const store = configureStore({
  reducer: {
    cart:CartReducer,
    product:ProductReducer,
    predict:Predicts
  },
});