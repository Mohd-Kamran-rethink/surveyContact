// src/redux/store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contactReducer from './contactSlice';

const rootReducer = combineReducers({
  contacts: contactReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
