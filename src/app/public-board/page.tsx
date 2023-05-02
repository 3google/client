'use client';
import { SERVER_URL } from '@/common/constants';
import { usePost } from '@/hooks/usePost';
import { useUser } from '@/hooks/useUser';
import axios from 'axios';
import React from 'react';

export default function PublicBoard() {
  const { posts } = usePost();
  console.log('[게시판페이지]post정보를 가져왔습니다!!!');
  console.log({ posts });
  const { user } = useUser();

  return (
    <div className="body-box">
      <h3 className="board-title">나의 처방전을 모두와 함께 보고 다른 사람들의 처방전도 볼 수 있어요!</h3>

      {posts &&
        posts.map((post) => {
          return (
            <div className="posts" key={post.id}>
              <div>{user?.name}님의 처방전 입니다~~!</div>
              <div>💬{post?.commentsCnt}</div>
              <div>📌{post?.bookmarksCnt}</div>
            </div>
          );
        })}
    </div>
  );
}
