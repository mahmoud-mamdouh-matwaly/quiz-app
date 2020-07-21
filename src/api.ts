import axios from 'axios';

export const baseURL = axios.create({
  baseURL: process.env.REACT_APP_ROOT_URL,
});
