'use client';
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import UserText from '@components/postdetail/UserText';
import AiText from '@components/postdetail/AiText';
import CommentsBox from '@components/postdetail/CommentsBox';
import { PostContainer } from '@styles/postdetail.styled';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { usePost } from '@hooks/usePost';

export default function Post({ params, searchParams }: { params: { id: number }; searchParams?: { [key: string]: string | string[] | undefined } }) {
  console.log(params); //=================={id: '4'}이런식으로 찍힘
  //TODO : 📍 usePost에 id를 전달하는 방법! /📍 그리고 post에 dto랑 undefined가 같이 떠서 아래에서 사용하기 어려워용..
  const { post } = usePost(params.id);
  // console.log(post);
  //
  //
  return (
    <div>
      <PostContainer>
        <Image src="/red-cross.png" alt="빨간십자가처방전" width={100} height={100} />
        <div>
          <h2>지원님의 처방전</h2>
          {post?.author}
          <Tooltip
            title="북마크 저장"
            // color="error"
            onClick={(e) => {
              e.stopPropagation();
              // handleDeletePost(row.id);
            }}
          >
            <IconButton>
              <BookmarkBorderIcon />
              <BookmarkIcon />
            </IconButton>
          </Tooltip>
        </div>
        <UserText />
        <AiText />
        <CommentsBox />
      </PostContainer>
    </div>
  );
}
