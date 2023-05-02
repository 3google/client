import { TempUserDto } from '@/app/components/navbar/Navigation';
import axios from 'axios';

// fetch = 어딘가에 가서 뭘 가지고 돌아옴(서버에 가서 데이터를 가지고 돌아옴)
// fetcher
export async function fetchUser() {
  console.log(`[fetchUser]user 정보를 가져왔습니다 !!`);
  const { data: user } = await axios.get<TempUserDto>('/api/users');
  return user;
}
