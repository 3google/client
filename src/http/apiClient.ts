import { SERVER_URL } from '../common/constants';
/// import axios from 'axios';
import axios, { AxiosInstance } from 'axios';

// HERE
// interface CustomAxiosInstance extends AxiosInstance {
//   uploadImage(imageFile: File): Promise<any>;
// }

export const apiClient = axios.create({
  baseURL: `${SERVER_URL}`,
  // TODO: 🍎이전에 테스트할 때 /api 가 없으면 오류가 났는데 없어도 되나요? API명세서엔 따로없는데 /api의 쓰임을 잘 모르겠습니다
  url: '/api',
  withCredentials: true,
});
// as CustomAxiosInstance;

//
// export const multipartClient = axios.create({
//   baseURL: `${SERVER_URL}/api`,
//   withCredentials: true,
//   headers: {
//     'Content-Type': 'multipart/form-data',
//   },
// });
// apiClient.uploadImage = async (imageFile: File) => {
//   const formData = new FormData();
//   formData.append('image', imageFile);

//   try {
//     const response = await apiClient.post('/api/upload-image', formData);
//     // 이미지 업로드 후 처리 작업 (예: 서버에서 반환한 이미지 URL을 상태로 저장)
//     return response.data;
//   } catch (error) {
//     console.error('Image upload failed:', error);
//     throw error;
//   }
// };

// // apiClient.interceptors.request.use(req => {
// // return req
// // });

// // axios.get('http://localhost:3009/api/auth/users', {
// //   withCredentials: true,
// // });

// // apiClient.get('/auth/users');
// // apiClient.get('/auth/users2');
// // apiClient.get('/auth/users3');
