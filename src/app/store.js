import { configureStore } from '@reduxjs/toolkit';
import reducer from '../redux/coins'
export const store = configureStore({
   reducer: {
       reducer
  },
});

