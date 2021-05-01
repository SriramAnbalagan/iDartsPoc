import {createStore, applyMiddleware, compose} from 'redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers';
import rootSaga from './sagas/saga'
const initialState = {};

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware];

// TODO: DevTools extension for redux to be removed before production
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga)

export default store;


