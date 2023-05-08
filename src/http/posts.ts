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
  console.log(`[fetchPost]post 정보를 가져왔습니다 !!`);
  const { data: posts } = await apiClient.get<TempPostDto[]>('/posts');
  console.log(posts);
  return posts;
}

// 게시판 글 조회
// export async function fetchPost(postId: any) {
//   let path = '/post';
//   if (typeof postId === 'string') path += postId;

//   const { data } = await apiClient.get(path);
//   return data;
// }

// // 게시글 작성
export async function createPost(title: string, content: string) {
  const { data } = await apiClient.post<TempPostDto>('/post', {
    title,
    content,
  });
  return data;
}

// // 게시글 수정
export async function updatePost(title: string, content: string) {
  const { data } = await apiClient.put<TempPostDto>('/post', {
    title,
    content,
  });
  return data;
}

// // 게시글 삭제
export async function deletePost(postId: any) {
  await apiClient.delete(`/post/${postId}`);
  return null;
}
