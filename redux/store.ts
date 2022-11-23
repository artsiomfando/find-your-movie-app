import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieSlice';

const store = configureStore({
  reducer: {
    movie: movieReducer,
  }
});

export type AppDispatch = typeof store.dispatch;

export default store;
