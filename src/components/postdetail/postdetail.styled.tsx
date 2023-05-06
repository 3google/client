'use client';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

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
