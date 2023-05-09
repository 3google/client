import { TempPostDto, fetchPost, fetchPosts } from '@/http/posts';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

//TODO : 여기도 한번에 가능한지
//전체 게시물 조회
export function usePosts() {
  const { data: posts, isLoading, error } = useQuery(['posts', 'current'], fetchPosts);

  return { posts, isLoading, error };
}

//특정 게시물 조회
export function usePost(id: number) {
  const { data: post, error, isLoading } = useQuery(['post', 'current'], () => fetchPost({ id }));
  return { post, error, isLoading };
}
