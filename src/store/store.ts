import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './slices/moviesSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;