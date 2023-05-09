import axios from 'axios';
import { apiClient } from './apiClient';

///임시 Dto
export interface TempUserDto {
  email: string;
  name: string;
}

export async function fetchUser() {
  console.log(`[fetchUser]user 정보를 가져왔습니다 !!`);
  const { data: user } = await apiClient.get<TempUserDto>('/users');
  return user;
}
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
