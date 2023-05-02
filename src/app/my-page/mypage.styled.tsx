import styled from '@emotion/styled';

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

export const Avatar = styled.div<{ src: string }>`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

export const UserInfoText = styled.div`
  line-height: 1.1;
  text-align: left;
  margin-left: 40px; // 원하는 간격으로 조절
`;
