import { useQuery } from '@tanstack/react-query';
import { fetchMyContents } from '@http/mypage/myContents';
import { fetchMyComments } from '@http/mypage/myComments';
import { fetchBookmarks } from '@http/mypage/myBookmark';

// TODO 마이페이지 - 내 작성글 조회
export const useGetMyContents = () => {
  return useQuery(['posts'], () => fetchMyContents());
};

// TODO 마이페이지 - 내 댓글 조회
export const useGetMyComments = () => {
  return useQuery(['comments'], fetchMyComments);
};

// TODO 마이페이지 - 내 북마크 조회
export const useGetMyBookmark = () => {
  return useQuery(['comments'], fetchMyComments);
};
