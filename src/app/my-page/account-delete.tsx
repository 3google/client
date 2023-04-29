// 'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { IconDiv, Title, P, ContentWrap, BottomButton } from './account-delete.styled';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 8,
};

export default function AccountDelete() {
  const [open, setOpen] = React.useState(false);
  const handleLeaveOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconDiv style={{ marginTop: '100px' }}>
        <Tooltip onClick={handleLeaveOpen} title="회원탈퇴">
          <IconButton>
            <DeleteIcon fontSize="large" />
            <Title>회원탈퇴</Title>
          </IconButton>
        </Tooltip>
      </IconDiv>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Title>회원탈퇴</Title>
          <ContentWrap>
            <P>✓ 탈퇴시 고객 정보가 삭제됩니다.</P>
            <P style={{ marginTop: '50px' }}>✓ 사용하고 계신 아이디는 탈퇴할 경우 재사용 및 복구가 불가능합니다.</P>
            <P style={{ marginTop: '50px' }}>
              ✓ 탈퇴하신 아이디로는 다시 회원가입을 하실 수 없습니다. (다른 아이디로 가입)
            </P>
          </ContentWrap>
          <BottomButton style={{ marginTop: '50px' }}>탈퇴하기</BottomButton>
        </Box>
      </Modal>
    </div>
  );
}
