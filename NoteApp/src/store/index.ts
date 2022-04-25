import { applyMiddleware, compose, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { RootState } from './rootState';
import rootReducer from './rootReducer';
import sagas from './sagas';

export default function configureStore(
  initialState?: RootState,
): Store<RootState> {
  const sagaMiddleware = createSagaMiddleware();
  const storeEnhancer = compose(applyMiddleware(sagaMiddleware)); // add middlewares

  sagaMiddleware.run(sagas);

  return {
    ...createStore(
      rootReducer,
      initialState,
      applyMiddleware(/* other middleware, */ sagaMiddleware),
    ),
  };
}
