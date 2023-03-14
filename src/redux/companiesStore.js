import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import companiesReducer from './companiesListSlice';

const root = combineReducers({
  companies: companiesReducer,
});
const store = configureStore({
  reducer: root,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
