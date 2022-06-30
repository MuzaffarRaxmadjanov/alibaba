import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'

import { createStore } from 'redux'
import reducer from './redux/reducer/combineReducer';
import { Provider } from 'react-redux';

//for local storege
import { persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
// import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig ={
  key:'Alibaba',
  storage,
  blacklist:[],
  whitelist:["theme","user","categories","oneProduct"]
}

const persistedReducer = persistReducer(persistConfig,reducer)

const store = createStore(persistedReducer)

const persister = persistStore(store)

ReactDOM.render(
    <Router>
        <Provider store={store}>
           <PersistGate loading={null} persistor={persister} >
              <App />
           </PersistGate>
        </Provider>
    </Router>,
    document.getElementById('root')
);