import axios from 'axios';
export const loginService = () =>
  axios.get('https://jsonplaceholder.typicode.com/posts');
