import {
  addTranslation,
  getTranslate,
  initialize,
  localizeReducer,
  setActiveLanguage,
  getActiveLanguage,
  getLanguages,
} from 'react-localize-redux';

import { LOCAL_STORAGE_KEYS } from './constants';

export const reducer = localizeReducer;

export const actions = {
  addTranslation,
  initialize,
  setLanguage(language) {
    localStorage.setItem(LOCAL_STORAGE_KEYS.LANGUAGE, language);

    return setActiveLanguage(language);
  },
};

const getLocalization = state => state.services.localization;

export const selectors = {
  getActiveLanguage,
  getTranslate,
  getLanguages,
  getLocalization,
};
