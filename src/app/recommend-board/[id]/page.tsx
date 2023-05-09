'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import CommentsBox from '@components/postdetail/CommentsBox';
import { PostContainer } from '@styles/postdetail.styled';
import RecommendText from '@components/postdetail/RecommendText';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Post(props: any) {
  const router = useRouter();
  // const { id } = router.query;
  console.log(props);
  return (
    <div>
      <PostContainer>
        <Image src="/red-cross.png" alt="빨간십자가처방전" width={100} height={100} />
        <h2>'사용자'님이 쓴 처방전</h2>
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
        <Tooltip
          title="게시물 수정"
          // color="error"
          onClick={(e) => {
            e.stopPropagation();
            // handleDeletePost(row.id);
          }}
        >
          <IconButton>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip
          title="게시물 삭제"
          // color="error"
          onClick={(e) => {
            e.stopPropagation();
            // handleDeletePost(row.id);
          }}
        >
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <RecommendText />
        <CommentsBox />
      </PostContainer>
    </div>
  );
}
