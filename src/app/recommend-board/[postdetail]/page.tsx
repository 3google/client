'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import CommentsBox from '@/components/postdetail/CommentsBox';
import { PostContainer } from '@/styles/postdetail.styled';
import RecommendText from '@/components/postdetail/RecommendText';

export default function Post(props: any) {
  const router = useRouter();
  // const { id } = router.query;
  console.log(props);
  return (
    <div>
      <PostContainer>
        <Image src="/red-cross.png" alt="빨간십자가처방전" width={100} height={100} />
        <h2>'사용자'님이 쓴 처방전</h2>
        <button className="button">북마크 하기</button>
        <RecommendText />
        <CommentsBox />
      </PostContainer>
    </div>
  );
}
