import axios from 'axios';
import { apiClient } from './apiClient';

//임시 Dto
export interface TempPostDto {
  id: number;
  title: string;
  author: string;
  emotion: number;
  created_at: number;
  bookmarksCnt: number;
  commentsCnt: number;
}

export async function fetchPost() {
  try {
    console.log(`[fetchPost]post 정보를 가져왔습니다 !!`);
    const { data: posts } = await apiClient.get<TempPostDto[]>('/posts');
    console.log(posts);
    return posts;
  } catch (error) {
    console.log('error가 fetchPost에서 잡힘');
  }
}
