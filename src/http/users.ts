import axios from 'axios';
import { apiClient } from './apiClient';
import { UserResponseDto } from '@dto/responseDto';

export async function fetchUser() {
  //진짜 백엔드 서버
  // const { data } = await apiClient.get<UserResponseDto>('/users/mypage');
  // return data.data;
  //
  //
  //프론트 임시 서버
  console.log(`[fetchUser]user 정보를 가져왔습니다 !!`);
  const { data } = await apiClient.get<UserResponseDto>('/api/users');
  console.log(data);
  return data;
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
    const response = await apiClient.delete('/api/users/account');
    return response.data;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};
