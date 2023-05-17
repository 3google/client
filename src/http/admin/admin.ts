import { apiClient } from '../apiClient';
import { AdminDto } from '@dto/adminDto';

const removeEmptyKey = (data: Record<any, any>) => {
  const newObj = Object.entries(data).reduce((acc: Record<any, any>, [key, value]) => {
    if (typeof value === 'number' || typeof value === 'boolean') throw Error();

    let result;

    value ? (result = { ...acc, [key]: value }) : (result = acc);

    return result;
  }, {});
  return Object.keys(newObj).length === 0 ? null : newObj;
};

// 유저 게시글 조회
export async function fetchUserPosts({ boardType, emotion }: { boardType?: string; emotion?: string }) {
  const params = removeEmptyKey({ boardType, emotion });
  const { data: posts } = await apiClient.get<AdminDto[]>(`/posts`, params ? { params } : {});
  console.log(posts);
  return posts;
}

// 유저 게시글 삭제 ??
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
  const response = await apiClient.get<AdminDto[]>('/admin/users');
  console.log(response.data);
  return response.data;
};

// 유저 삭제
export const deleteUser = async (id: string) => {
  const response = await apiClient.delete(`/admin/users/${id}`);
  return response.data;
};

export const getUserComments = async (userId: string, boardType: string, emotion: string) => {
  const response = await apiClient.get(`/comments/?user_id=${userId}&board_type=${boardType}&emotion=${emotion}`);
  return response.data;
};
// 유저 댓글 삭제
export const deleteUserComment = async (id: string) => {
  const response = await apiClient.delete(`/comments/${id}`);
  return response.data;
};
