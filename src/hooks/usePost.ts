import { TempPostDto, fetchPost } from '@/http/posts';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

export function usePost() {
  const { data: posts, isLoading, error } = useQuery(['posts', 'current'], fetchPost);

  return { posts, isLoading, error };
}
