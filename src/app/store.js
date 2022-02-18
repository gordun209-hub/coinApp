import { configureStore } from '@reduxjs/toolkit';
import reducer from '../features/coinsSlice'
export const store = configureStore({
   reducer: {
       reducer
  },
});

