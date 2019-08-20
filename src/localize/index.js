import { combineReducers } from 'redux';
import { reducer as localization } from './state';

export const reducer = combineReducers({
  localization,
});
