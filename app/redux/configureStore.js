import rootReducer from './modules/reducer';
import thunk       from 'redux-thunk';
import DevTools    from 'containers/DevTools';
import { applyMiddleware, compose, createStore } from 'redux';

export default function configureStore(initialState, debug = false) {
  let createStoreWithMiddleware;

  const middleware = applyMiddleware(thunk);

  if (debug) {
    createStoreWithMiddleware = compose(
      middleware,
      DevTools.instrument()
    );
  } else {
    createStoreWithMiddleware = compose(middleware);
  }

  const store = createStoreWithMiddleware(createStore)(
    rootReducer, initialState
  );
  if (module.hot) {
    module.hot.accept('./modules/reducer', () => {
      const nextRootReducer = require('./modules/reducer');

      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
