import { apiClient } from '../apiClient';
// interface FetchMyContentsArgs {
//   id: string;
//   board_type: string;
//   emotion: number;
// }

//TODO 마이페이지 - 내 작성글 조회
export async function fetchMyPosts() {
  const { data: posts } = await apiClient.get(`/posts/user`);
  return posts;
}

// 마이페이지 - 내 작성글 삭제
export async function deletePost(id: number) {
  const { data } = await apiClient.delete(`/posts/${id}`);
  return data;
}
