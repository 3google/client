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
  content: string;
  board_type: string;
}

//게시판 전체 조회
//공유 게시판
export async function fetchPosts({ board_type, emotion }) {
  //TODO : 🍎 쿼리스트링 사용 방법?(/?board_type&emotion)
  const { data: posts } = await apiClient.get<TempPostDto[]>(`/api/posts?board_type=${board_type}&emotion=${emotion}`);
  console.log(posts);
  return posts;
}
//추천 게시판

//특정 게시물 조회
export async function fetchPost({ id }: any) {
  console.log(`해당 게시물을 가져옴`);
  const { data } = await apiClient.get<TempPostDto>(`/posts/${id}`);
  return data;
}

// // 게시글 작성
export async function createPost(title: string, content: string, emotion: string) {
  const { data } = await apiClient.post<TempPostDto>('/posts', {
    title,
    content,
    emotion,
  });
  return data;
}

// // 게시글 수정
export async function updatePost(title: string, content: string, emotion: string) {
  const { data } = await apiClient.patch<TempPostDto>(`/posts`, {
    title,
    content,
    emotion,
  });
  return data;
}

// // 게시글 삭제
export async function deletePost(id: any) {
  await apiClient.delete(`/post/${id}`);
  return null;
}
