'use client';
import { usePost } from '@/hooks/usePost';
import React from 'react';
import Link from 'next/link';
import { Table } from './public-board.styled';

export default function PublicBoard() {
  const { posts } = usePost();

  return (
    <div className="body-box">
      <h3 className="board-title">나의 처방전을 모두와 함께 보고 다른 사람들의 처방전도 볼 수 있어요!</h3>

      <Table>
        <thead>
          <tr className="table-header">
            <td>작성자</td>
            <td>제목</td>
            <td>감정</td>
            <td>댓글</td>
            <td>북마크</td>
            <td>작성날짜</td>
          </tr>
        </thead>
        <tbody>
          {/* 이 부분에서 테이블 열이 안맞는 에러가 발생,, 근데 새로고침 할다보면 될때도 있음,, 이유 모르겠음 */}
          {posts &&
            posts.map(({ id, author, title, commentsCnt, bookmarksCnt, emotion, created_at }) => {
              return (
                <tr className="posts" key={id}>
                  <td>{author}</td>
                  <td>
                    <Link href={`/public-board/${id}`}>{title}</Link>
                  </td>
                  <td>{emotion}</td>
                  <td>{commentsCnt}</td>
                  <td>{bookmarksCnt}</td>
                  <td>{created_at}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}
