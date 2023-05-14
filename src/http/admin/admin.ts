import { apiClient } from '../apiClient';
import { AdminDto } from '@dto/adminDto';

// 어드민 게시판 조회
export async function fetchUserPosts({ board_type, emotion }: { board_type: string; emotion: string }) {
  const { data: posts } = await apiClient.get<AdminDto[]>(`/posts?board_type=${board_type}&emotion=${emotion}`);
  console.log(posts);
  return posts;
}
// 유저 게시글 삭제
export const deletePost = async (id: string) => {
  const response = await apiClient.delete(`/admin/posts/${id}`);
  return response.data;
};
//  유저 작성글 삭제
export async function deleteUSerPost(id: number) {
  const { data } = await apiClient.delete(`/posts/${id}`);
  return data;
}
// 유저 조회
export const getUserPost = async () => {
  const response = await apiClient.get('/admin/users');
  console.log(response.data);
  return response.data;
};

// 유저 삭제
export const deleteUser = async (id: string) => {
  const response = await apiClient.delete(`/admin/users/${id}`);
  return response.data;
};

// 유저 모든 댓글 조회
export async function fetchComments({ board_type, emotion }: { board_type: string; emotion: string }) {
  const { data: comments } = await apiClient.get<AdminDto[]>(`/comments?board_type=${board_type}&emotion=${emotion}`);
  return comments;
}
// 유저 댓글 삭제
export async function deleteComment(id: string) {
  const { data: response } = await apiClient.delete(`/comments/${id}`);
  return response;
}
