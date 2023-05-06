'use client';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const PostContainer = styled.div`
  text-align: center;
  // background-color: white;
  background: rgba(255, 255, 255, 0.45);
  color: #3f4499;
  margin: auto;
  margin-bottom: 100px;
  padding: 20px;
  height: auto;
  width: 700px;
  border: 10px double #3f4499;
  outline: 10px solid rgba(255, 255, 255, 0.45);
  border-radius: 40px;
`;

export const Text = styled.div<{ height: number }>(({ height }) => {
  return css`
    border: 3px solid #3f4499;
    border-radius: 30px;
    height: ${height}px;
    margin-bottom: 10px;
    padding: 20px;
    text-align: left;

    .comment-input {
      height: 100px;
      width: 645px;
      margin: 10px 0;
    }
  `;
});

export const ComBox = styled.div`
  border: 3px solid #3f4499;
  border-radius: 30px;
  height: 300px;
  margin-bottom: 10px;
  padding: 20px;
  text-align: left;
`;

export const CommentList = styled.div``;
