import { apiClient } from './apiClient';

//임시 Dto
export interface Post {
  id: number;
  title: string;
  author: string;
  emotion: number;
  created_at: number;
  bookmarksCnt: number;
  commentsCnt: number;
}
export async function fetchPost(): Promise<Post[]> {
  const { data } = await apiClient.get<Post[]>('/posts');
  return data;
}
