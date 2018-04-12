import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from './sagas';
import { Provider } from 'react-redux';
import rootReducer from './reducers/root-reducer';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
  && window.__REDUX_DEVTOOLS_EXTENSION__();
const sagaMiddleware = createSagaMiddleWare();
const store = createStore(
  rootReducer, 
  devTools, 
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);