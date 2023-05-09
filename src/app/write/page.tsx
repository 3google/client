'use client';
import React, { useState, ChangeEvent } from 'react';
import { Avatar, Button, Tooltip } from '@mui/material';
import {
  BodyBox,
  ChatContainer,
  MessagesContainer,
  Message,
  MessageContent,
  MessageText,
  Divider,
  ChatInputContainer,
  ButtonsContainer,
  StyledTextField,
  EnterButton,
} from '@styles/write.styled';
import { SaveModal } from '@components/titleModal/saveModal';
import { ShareModal } from '@components/titleModal/shareModal';
import ShareIcon from '@mui/icons-material/Share';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

export default function Write() {
  const [messages, setMessages] = useState([{ id: 2, isUser: false, text: '안녕하세요, 현재의 기분을 자유롭게 작성해보세요!' }]);
  const [inputValue, setInputValue] = useState('');
  const userAvatar = '/img.png';
  const chatAvatar = '/heart.png';

  /// 모달 상태 관리
  const [saveModalOpen, setSaveModalOpen] = useState(false);
  const [saveModalInputValue, setSaveModalInputValue] = useState('');
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [shareModalInputValue, setShareModalInputValue] = useState('');
  // 모달 열기/닫기 핸들러
  const handleSaveModalOpen = () => {
    setSaveModalOpen(true);
  };
  const handleSaveModalClose = () => {
    setSaveModalOpen(false);
  };
  const handleSaveModalInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSaveModalInputValue(e.target.value);
  };
  const handleShareModalOpen = () => {
    setShareModalOpen(true);
  };
  const handleShareModalClose = () => {
    setShareModalOpen(false);
  };
  const handleShareModalInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setShareModalInputValue(e.target.value);
  };

  const handleSend = () => {
    setMessages((prevMessages) => [...prevMessages, { id: Date.now(), isUser: true, text: inputValue }]);
    setInputValue('');

    // 답변 임의 설정
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: Date.now() + 1, isUser: false, text: '당신의 기분이 많이 우울하군요, 헤이즈- 돌아오지마 노래를 들어보세요. 더 우울해집니다 ^^' },
      ]);
    }, 1000); // 1초 후에 답변 출력
  };

  return (
    <BodyBox>
      <ChatContainer>
        <MessagesContainer>
          {messages.map((message, index) => (
            <React.Fragment key={message.id}>
              <Message>
                <Avatar src={message.isUser ? userAvatar : chatAvatar} />
                <MessageContent>
                  <MessageText $isUser={message.isUser} variant="body1">
                    {message.text}
                  </MessageText>
                  {/* 질문자의 메시지가 아닌 경우에만 버튼 컨테이너 렌더링 */}
                  {!message.isUser && (
                    <ButtonsContainer>
                      <Tooltip title="저장하기">
                        <Button size="small" onClick={handleSaveModalOpen}>
                          <SaveAltIcon color="action" />
                        </Button>
                      </Tooltip>
                      <Tooltip title="공유하기">
                        <Button size="small" onClick={handleShareModalOpen}>
                          <ShareIcon color="action" />
                        </Button>
                      </Tooltip>
                    </ButtonsContainer>
                  )}
                </MessageContent>
              </Message>
              {index < messages.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </MessagesContainer>
        <ChatInputContainer color="action">
          <StyledTextField variant="outlined" size="small" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="당신의 기분을 표현해주세요." fullWidth />
          <EnterButton variant="contained" onClick={handleSend} disabled={!inputValue}>
            Enter
          </EnterButton>
        </ChatInputContainer>
      </ChatContainer>
      {/* Modal */}
      <SaveModal open={saveModalOpen} onClose={handleSaveModalClose} value={saveModalInputValue} onChange={handleSaveModalInputChange} />
      <ShareModal open={shareModalOpen} onClose={handleShareModalClose} value={shareModalInputValue} onChange={handleShareModalInputChange} />
    </BodyBox>
  );
}
