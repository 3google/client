'use client';

import styled from '@emotion/styled';

export const RegisterContainer = styled.div`
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  background-color: white;
  margin-bottom: 100px;
  padding: 20px;
  height: 300px;
  width: 300px;
  background: rgba(255, 255, 255, 0.45);
  border-radius: 40px;
`;

export const RegisterBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* align-content: space-around; */
  /* flex-wrap: wrap; */
  padding: 20px;

  .pre-img {
    width: 80px;
    height: 80px;
  }
  .form {
    flex-direction: column;
  }
`;
