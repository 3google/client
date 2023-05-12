import { apiClient } from '../apiClient';
interface FetchMyContentsArgs {
  board_type: string;
  emotion: number;
}

// 마이페이지 - 내 게시글 조회
export async function fetchPosts({ board_type, emotion }: FetchMyContentsArgs) {
  const { data: posts } = await apiClient.get(`/posts?board_type=${board_type}&emotion=${emotion}`);
  return posts;
}

// 마이페이지 - 내 작성글 삭제
export async function deletePost(id: number) {
  const { data } = await apiClient.delete(`/posts/${id}`);
  return data;
}
