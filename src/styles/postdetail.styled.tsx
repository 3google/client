'use client';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const PostContainer = styled.div`
  text-align: center;
  background-color: white;
  // background: rgba(255, 255, 255, 0.45);
  color: #3f4499;
  margin: auto;
  margin-bottom: 100px;
  padding: 20px;
  height: auto;
  width: 700px;
  border: 10px double #3f4499;
  // outline: 10px solid rgba(255, 255, 255, 0.45);
  outline: 10px solid white;
  border-radius: 40px;
`;

export const Text = styled.div<{ height: string }>(({ height }) => {
  return css`
    border: 3px solid #3f4499;
    border-radius: 30px;
    height: ${height};
    margin-bottom: 10px;
    text-align: left;

    h3 {
      border-bottom: 3px solid;
      padding-left: 10px;
    }
    .text {
      padding: 0 10px;
    }

    .comment-input {
      height: 100px;
      width: 645px;
      margin: 10px 20px;
    }
    //TODO: 북마크, 댓글 버튼 둘다 오른쪽으로 붙이기
    button {
      text-align: right;
    }
  `;
});

export const ContBox = styled.div`
  display: flex;
  justify-content: center;
  .cont-box {
    text-align: center;
    border: solid;
    padding: 10px;
  }
`;

export const CommentList = styled.div``;
