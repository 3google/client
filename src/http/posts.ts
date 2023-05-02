import axios from 'axios';

//임시 Dto
export interface TempPostDto {
  id: number;
  title: string;
  emotion: number;
  created_at: number;
  bookmarksCnt: number;
  commentsCnt: number;
}

export async function fetchPost() {
  console.log(`[fetchPost]post 정보를 가져왔습니다 !!`);
  const { data: posts } = await axios.get<TempPostDto>('/api/posts');
  return posts;
}
