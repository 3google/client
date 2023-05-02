import styled from '@emotion/styled';

export const AdminInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* text-align: left; */
  margin: 10px;
`;

export const Avatar = styled.img<{ src: string }>`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

export const AdminInfoText = styled.div`
  line-height: 1.1;
  text-align: left;
  margin-left: 40px; // 원하는 간격으로 조절
`;
