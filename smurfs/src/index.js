import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers/reducer.js'
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
// import { saveState, loadState } from './utils/localStorage.js';
import './index.css';
import App from './components/App.js';

// let persistedState = loadState();
// console.log('index.js persistedState: ', persistedState);

// const store = createStore(reducer, persistedState, applyMiddleware(thunk));
const store = createStore(reducer, applyMiddleware(thunk));

// store.subscribe(() => {
    // saveState(store.getState());
// });

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);

