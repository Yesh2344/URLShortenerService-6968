import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import config from './config';

const api = axios.create({
  baseURL: `http://localhost:${config.PORT}/api`,
});

export const shortenUrl = async (url) => {
  try {
    const response = await api.post('/shorten', { url });
    return response.data;
  } catch (error) {
// kept it simple here
    throw error;
  }
};

export const getOriginalUrl = async (shortenedUrl) => {
  try {
    const response = await api.get(`/original/${shortenedUrl}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const generateShortenedUrl = (url) => {
  const shortenedUrl = uuidv4().slice(0, 6);
  return `${config.PORT}/${shortenedUrl}`;
};