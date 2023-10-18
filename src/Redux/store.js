import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './reducers/_root.reducer'; // imports ./redux/reducers/index.js
import rootSaga from './sagas/_root.saga'; // imports ./redux/sagas/index.js
// Create the Saga middleware
const sagaMiddleware = createSagaMiddleware();
// Create an array of middleware to apply
const middlewareList =
  process.env.NODE_ENV === 'development'
    ? [sagaMiddleware, logger] // Add logger middleware in development
    : [sagaMiddleware];
// Create the Redux store with the rootReducer and middleware
export const store = createStore(
  rootReducer,
  applyMiddleware(...middlewareList)
);
// Run your rootSaga to start Saga processes
sagaMiddleware.run(rootSaga);
// export default store;
