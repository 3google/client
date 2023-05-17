import { PostResponseDto, ResponseDto } from '@dto/responseDto';
import { apiClient } from './apiClient';

//게시판 전체 조회
export async function fetchPosts({ board_type, emotion }: { board_type: string; emotion: string }) {
  console.log('board_type:', board_type);
  console.log('emotion:', emotion);

  const {
    data: { data },
  } = await apiClient.get<ResponseDto<PostResponseDto[]>>(`/posts?boardType=${board_type}&emotion=${emotion}`);
  return data;
}

//특정 게시물 조회
export async function fetchPost({ id }: any) {
  console.log(`해당 게시물을 가져옴`);
  const { data } = await apiClient.get<PostResponseDto>(`/posts/${id}`);
  return data;
}

// 게시글 작성
export async function createPost(title: string, content: string, emotion: string) {
  const { data } = await apiClient.post<PostResponseDto>('/posts', {
    title,
    content,
    emotion,
  });
  return data;
}

// 게시글 수정
export async function updatePost(title: string, content: string, emotion: string) {
  const { data } = await apiClient.patch<PostResponseDto>(`/posts`, {
    title,
    content,
    emotion,
  });
  return data;
}

// 게시글 삭제
export async function deletePost(id: any) {
  await apiClient.delete(`/post/${id}`);
  return null;
}
// export async function fetchPost(): Promise<Post[]> {
//   const { data } = await apiClient.get<Post[]>('/posts');
//   return data;
// }
