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

//게시판 전체 조회
export async function fetchPosts() {
  console.log(`[fetchPost]post 정보를 가져왔습니다 !!`);
  const { data: posts } = await apiClient.get<TempPostDto[]>('/api/posts');
  console.log(posts);
  return posts;
}

//특정 게시물 조회
export async function fetchPost({ id }: any) {
  const { data } = await apiClient.get<TempPostDto>(`/api/posts/${id}`);
  return data;
}

// TODO:📍 게시판 글 조회(한꺼번에 가능한지??)
// export async function fetchPost(id: any) {
//   let path = '/api/posts';
//   if (typeof id === 'string') path += id;
//   const { data } = await apiClient.get<TempPostDto>(path);
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
export async function deletePost(id: any) {
  await apiClient.delete(`/post/${id}`);
  return null;
}
