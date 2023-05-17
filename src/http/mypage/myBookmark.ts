import { apiClient } from '../apiClient';
import { PostDto } from '@dto/postDto';
import { ResponseDto } from '@dto/responseDto';

//북마크 조회
export async function fetchBookmarks() {
  const { data: bookmark } = await apiClient.get('/bookmarkCategories');
  return bookmark;
}

export async function deleteBookmark(id: number) {
  const { data } = await apiClient.delete(`/bookmarks/${id}`);
  console.log('data', data);
  return data;
}
