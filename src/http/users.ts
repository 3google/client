import axios from 'axios';
import { apiClient } from './apiClient';
import { UserResponseDto } from '@/dto/responseDto';

export async function fetchUser() {
  console.log(`[fetchUser]user 정보를 가져왔습니다 !!`);
  const { data } = await apiClient.get<UserResponseDto>('/users/mypage');
  return data.data;
  // user 정보를 가져오거나, 에러가 나거나
  // 1. 성공 시 -> user 데이터를 return
  // 2. 오류 시 -> fetchUser를 호출한 함수로 axios에서 발생한 오류 그대로 throw
}
