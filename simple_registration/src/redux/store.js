import { configureStore } from '@reduxjs/toolkit';
import registerSlice from './register/registerSlice';

const store = configureStore({
  reducer: {
    form: registerSlice
  }
});

export default store;
