'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { PostContainer } from '@/styles/postdetail.styled';

export default function WritePost(props: any) {
  const onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <PostContainer>
        <Image src="/red-cross.png" alt="빨간십자가처방전" width={100} height={100} />
        <h2>처방전 작성 중..</h2>
        <div>
          <form action="">
            <input type="text" placeholder="제목" />
            <input type="text" placeholder="내용" />
            <button className="button" onClick={() => onSubmit}>
              저장하기
            </button>
          </form>
        </div>
      </PostContainer>
    </div>
  );
}
