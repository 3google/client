'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { PostContainer } from '@styles/postdetail.styled';
import { createPost, updatePost } from '@http/posts';
import { useRouter } from 'next/navigation';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { usePost } from '@hooks/usePost';

export default function UpdatePost({ params, searchParams }: { params: { id: number }; searchParams?: { [key: string]: string | string[] | undefined } }) {
  const { post } = usePost(params.id);

  const router = useRouter();
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    emotion: '',
  });
  //입력값 바뀔때마다 저장(콘솔 확인)
  const handleValueChange = (e: any) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log({ name: value });
  };

  //폼 제출
  const handleUpdateSubmit = async (e: any) => {
    e.preventDefault();
    //API 요청
    try {
      await updatePost(newPost.title, newPost.content, newPost.emotion);
      console.log('PATCH 요청 성공');
      router.push(`/recommend-board/`);
    } catch (error) {
      console.log('PATCH 요청이 실패했습니다', error);
    }
  };

  return (
    <div>
      <PostContainer>
        <Image src="/red-cross.png" alt="빨간십자가처방전" width={100} height={100} />
        <h2>처방전 수정 중..</h2>
        <div>
          <form onSubmit={handleUpdateSubmit}>
            <div className="title-container">
              <p>제목</p>
              <input className="title-input" name="title" type="text" defaultValue={post?.title} onChange={handleValueChange} />
            </div>

            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                // checked={post?.emotion} //TODO: 🍎라디오 버튼 디폴트 값 지정해두기
                onChange={handleValueChange}
              >
                <FormControlLabel name="emotion" value="기쁨" control={<Radio />} label="기쁨" />
                <FormControlLabel name="emotion" value="슬픔" control={<Radio />} label="슬픔" />
                <FormControlLabel name="emotion" value="사랑" control={<Radio />} label="사랑" />
              </RadioGroup>
            </FormControl>

            <div className="content-container">
              <p>내용</p>
              <input className="content-input" name="content" type="text" defaultValue={post?.content} onChange={handleValueChange} />
            </div>

            <button type="submit" className="button">
              수정 완료
            </button>
          </form>
        </div>
      </PostContainer>
    </div>
  );
}
