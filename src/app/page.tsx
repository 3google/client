'use client';

import React from 'react';
import MainBox from './components/main/MainBox';

export default function Home() {
  return (
    <div className="mainbody-box">
      <MainBox />
      <div>나의 진심이 담긴 글을 작성해 보세요!</div>
      <a href="/write">
        <button className="button">글쓰러가기</button>
      </a>
    </div>
  );
}
