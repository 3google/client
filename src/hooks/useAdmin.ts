import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchUserPosts, getUserPost, deleteUser, fetchUserComments } from '@http/admin/admin';

export function useUserPosts(board_type: string, emotion: string) {
  return useQuery(['posts', { board_type, emotion }], () => fetchUserPosts({ board_type, emotion }));
}
// 유저 게시글 조회
// export function useUserPosts(board_type: string, emotion: string) {
//   const {
//     data: posts,
//     isLoading,
//     error,
//   } = useQuery(['posts', { board_type, emotion }], () => fetchUserPosts({ board_type, emotion }));

//   return { posts, isLoading, error };
// }

// ! 유저조회
export function useUserPost() {
  const { data, isSuccess } = useQuery(['userPost'], getUserPost);
  return { data, isSuccess };
}

// ! 유저 삭제
export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(['userInformation']);
    },
  });
  return mutation;
};

// 유저 댓글 조회
export function useUserComments(board_type: string, emotion: string) {
  const {
    data: comments,
    isLoading,
    error,
  } = useQuery(['comments', { board_type, emotion }], () => fetchUserComments({ board_type, emotion }));
  return { comments, isLoading, error };
}
