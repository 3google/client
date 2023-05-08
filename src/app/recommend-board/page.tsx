'use client';
import RecommendList from '@/components/recommendList/recommendList';
import { usePost } from '@/hooks/usePost';
import Link from 'next/link';
import React from 'react';

export default function ReccommendBoard() {
  const { posts } = usePost();

  return (
    <div className="body-box">
      <h3 className="board-title">서로에게 직접 컨텐츠를 추천해 보세요</h3>

      <RecommendList />
      <button className="button">
        <Link
          href="/recommend-board/write"
          style={
            {
              // TODO : 버튼을 맨 아래로 정렬
              // alignContent: 'flex-end'
            }
          }
        >
          새로운 글 쓰기
        </Link>
      </button>
    </div>
  );
}
