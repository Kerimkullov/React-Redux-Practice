import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { requester } from './localize/requester';
import { actions as localizationActions, reducer as locale } from './localize/state';


const rootReducer = combineReducers({
  locale,
});

const defaultOptions = {
  devtools: {
    actionCreators: {
      setLanguage: localizationActions.setLanguage,
    },
  },
};

export const configureStore = (options = defaultOptions) => {
  const composeEnhancers = composeWithDevTools(options.devtools);

  const middlewares = [thunkMiddleware.withExtraArgument({ api: requester })];
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, enhancer);

  const paths = ['./services', './scenes', './data'];

  if (module.hot) {
    module.hot.accept(paths, () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};
