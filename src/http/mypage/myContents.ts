import { apiClient } from '../apiClient';
import { PostDto } from '@dto/postDto';
import { ResponseDto } from '@dto/responseDto';

//TODO 마이페이지 - 내 작성글 조회
export async function fetchMyContents() {
  const { data: posts } = await apiClient.get(`/posts`);
  return posts;
}

// 마이페이지 - 내 작성글 삭제
export async function deletePost(id: any) {
  const { data } = await apiClient.delete(`/posts/${id}`);
  console.log('data', data);
  return data;
}
