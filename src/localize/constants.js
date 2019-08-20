export const LOCAL_STORAGE_KEYS = {
  LANGUAGE: 'ss:language',
  TOKEN: 'ss:token',
};

export const languages = [{ name: 'En', code: 'en' }, { name: 'Ru', code: 'ru' }, {name: 'Tr', code: 'tr'}];

//URL
const dev = 'http://157.230.122.15:8000';
const prod = undefined;
export const BASE_URL = localStorage.getItem('BASE_URL') || prod || dev;
export const PUBLIC_URL = '';




