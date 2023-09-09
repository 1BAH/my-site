import { combineReducers } from 'redux';
import ide from './ide';

export const RootReducer = combineReducers({
    ide,
});

export const preloadedState = {};
