import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { HashRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import App from './App';
import { RootReducer, preloadedState } from './reducers/RootReducer';

const store = configureStore({
    reducer: RootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
});

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('root'),
);
