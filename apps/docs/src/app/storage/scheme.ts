import { LOCAL_STORAGE_SCHEME_KEY } from './constants';

export const getLocalDarkScheme = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_SCHEME_KEY));
};

export const setLocalDarkScheme = (value: boolean) => {
  localStorage.setItem(LOCAL_STORAGE_SCHEME_KEY, JSON.stringify(value));
};
