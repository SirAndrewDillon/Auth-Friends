import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import App from './App';
import './index.css';

const myStore = createStore(reducer, applyMiddleware(thunk, logger));


ReactDOM.render(
    <Provider store={myStore}><App /></Provider>, document.getElementById('root'));
