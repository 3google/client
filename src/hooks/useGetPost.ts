import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '@http/mypage/myContents';

// 마이페이지 - 내 작성글 조회
export const useGetPosts = (board_type: string, emotion: string) => {
  return useQuery(['posts', { board_type, emotion }], () => fetchPosts(board_type, emotion));
};
