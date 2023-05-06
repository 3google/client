'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import UserText from '@/components/postdetail/UserText';
import AiText from '@/components/postdetail/AiText';
import CommentsBox from '@/components/postdetail/CommentsBox';
import { PostContainer } from '@/styles/postdetail.styled';

export default function Post(props: any) {
  const router = useRouter();
  // const { id } = router.query;
  console.log(props);
  return (
    <div>
      <PostContainer>
        <Image src="/red-cross.png" alt="빨간십자가처방전" width={100} height={100} />
        <h2>지원님의 처방전</h2>
        <UserText />
        <AiText />
        <CommentsBox />
      </PostContainer>
    </div>
  );
}
