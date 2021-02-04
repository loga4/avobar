import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from './reducer';
import rootSaga from './saga';

const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development'
});
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(loggerMiddleware, sagaMiddleware)))

sagaMiddleware.run(rootSaga);

export default store;

