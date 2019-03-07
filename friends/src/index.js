import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import rootReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const store = createStore(rootReducer, applyMiddleware(thunk, logger) )

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));
