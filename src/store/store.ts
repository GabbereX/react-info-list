import { combineReducers, configureStore } from '@reduxjs/toolkit';
import getData, { fetchAPI } from './reducers/api/getData';
import paginationSlice, { paginationActions } from './reducers/paginationSlice';

export const actionsRoot = {
  fetchAPI,
  ...paginationActions,
};

export const reducers = {
  getData,
  paginationSlice,
};

const rootReducer = combineReducers(reducers);

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const store = setupStore();
