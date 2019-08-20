import { LOCAL_STORAGE_KEYS } from './constants';

export function getCurrentLanguage() {
  return localStorage.getItem(LOCAL_STORAGE_KEYS.LANGUAGE) || 'ru';
}
