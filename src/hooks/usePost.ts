import { fetchPost, fetchPosts } from '@http/posts';
import { useQuery } from '@tanstack/react-query';

//전체 게시물 조회
export function usePosts(board_type: string, emotion: string) {
  return useQuery(['posts', { board_type, emotion }], () => fetchPosts({ board_type, emotion }));
}

//특정 게시물 조회
export function usePost(id: number) {
  const { data: post, error, isLoading } = useQuery(['post', 'current'], () => fetchPost({ id }));
  return { post, error, isLoading };
}
