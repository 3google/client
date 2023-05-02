import axios from 'axios';

//임시 Dto
export interface TempUserDto {
  email: string;
  name: string;
}

export async function fetchUser() {
  console.log(`[fetchUser]user 정보를 가져왔습니다 !!`);
  const { data: user } = await axios.get<TempUserDto>('/api/users');
  return user;
}
