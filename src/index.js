import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './store/reducers/rootReducer';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { watch } from './store/sagas/rootSaga'


const sagaMiddleware = createSagaMiddleware();

//uncomment for setting the redux dev tools

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk, sagaMiddleware)
));

//comment this if you have uncommented the above or just add the missing "composeEnchancers"
//const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));

//saga listner for events
sagaMiddleware.run(watch)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
