import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-burger-68fa3.firebaseio.com/',
});

export default instance;
