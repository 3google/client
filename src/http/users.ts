import { apiClient } from './apiClient';
// 실제로 서버에 프로필 업데이트 요청하는 코드 작성

///임시 Dto
export interface TempUserDto {
  name: string;
  email: string;
  nickname: string;
  social: string;
}

export async function fetchUser() {
  console.log(`[fetchUser]user 정보를 가져왔습니다 !!`);
  const { data: user } = await apiClient.get<TempUserDto>('/users/my-page');
  return user;
}

// 회원탈퇴
export const deleteUser = async () => {
  try {
    const response = await apiClient.delete('/api/users/account');
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

  const response = await apiClient.patch('/users/updateProfile', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

// 마이페이지 카카오, 네이버 구분
export const getUserProfile = async () => {
  const response = await apiClient.get('/api/users/profile');
  return response.data;
};
