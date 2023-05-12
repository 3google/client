import { apiClient } from './apiClient';
import { UserResponseDto } from '@dto/responseDto';
// 실제로 서버에 프로필 업데이트 요청하는 코드 작성

///임시 Dto
export interface TempPostDto {
  id: number;
  title: string;
  author: string;
  emotion: number;
  created_at: number;
  bookmarksCnt: number;
  commentsCnt: number;
  content: string;
  board_type: string;
}

export async function fetchUser() {
  //진짜 백엔드 서버
  const { data } = await apiClient.get<UserResponseDto>('/users/mypage');
  return data.data;
}

//로그아웃은 그냥 서버 링크로 연결만 하면 됨

//TODO: (상의)회원 탈퇴
// export async function deleteUser(): Promise<null> {
//   await apiClient.delete('/api/users/account');
//   console.log('회원탈퇴완료');
//   return null;
// }
//
// HERE 회원탈퇴
export const deleteUser = async () => {
  try {
    const response = await apiClient.delete('/users/account');
    return response.data;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};

// WAIT 1-프로필 업데이트
// nickname과 profileImage를 받아 FormData 객체를 생성하고, 이를 사용해 서버에 PUT 요청
// Content-Type 헤더를 multipart/form-data로 설정
export const updateProfile = async (nickname: string, profileImage: File) => {
  const formData = new FormData();
  formData.append('nickname', nickname);
  formData.append('profileImage', profileImage);

  const response = await apiClient.patch('/users', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

// // 마이페이지 프로필 이미지, 닉네임, 소셜 조회
// export const getUserProfile = async () => {
//   const response = await apiClient.get('/api/users/mypage');
//   return response.data;
// };
