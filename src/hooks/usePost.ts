import { fetchPost } from '@http/posts';
import { useQuery } from '@tanstack/react-query';

// import { fetchPosts, Post } from '../http/posts';

export function usePost() {
  const { data: posts, isLoading, error } = useQuery(['posts', 'current'], fetchPost);

  return { posts, isLoading, error };
}
