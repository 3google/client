import { SERVER_URL } from '../common/constants';
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: `${SERVER_URL}/api`,
  withCredentials: true, // 쿠키사용
});

// apiClient.interceptors.request.use(req => {
// return req
// });

// axios.get('http://localhost:3009/api/auth/users', {
//   withCredentials: true,
// });

// apiClient.get('/auth/users');
// apiClient.get('/auth/users2');
// apiClient.get('/auth/users3');
