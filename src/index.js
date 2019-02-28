import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';

import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/reducer';
import rootSaga from './sagas/saga';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);


render(
    <Provider store={store}>
    <App />
    </Provider>,
document.getElementById('root'),
);

