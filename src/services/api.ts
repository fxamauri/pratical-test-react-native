import axios from 'axios';

const baseURL = 'https://api.nytimes.com';

const api = axios.create({
  baseURL,
  params: {
    'api-key': 'vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR'
  }
});

export default api;
