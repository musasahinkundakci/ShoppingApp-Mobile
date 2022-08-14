import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import budget from './budget.slice';
import year from './year.slice';
import shoppingCart from './shoppingCart.slice';
import loaderSlice from './loader.slice';
import modal from './modal.slice';
import { combineReducers } from 'redux';
const reducers = combineReducers({ budget, year, shoppingCart, loaderSlice, modal });
export const store = configureStore({
    reducer: reducers,
    middleware: [thunk],
});
