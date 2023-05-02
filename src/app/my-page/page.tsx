'use client';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { UserInfoContainer, Avatar, UserInfoText } from './mypage.styled';
import Accountdelete from './account-delete';
import PublicBoard from './public-board';
import Comment from './comment';
import Bookmark from './bookmark';
import Contents from './contents';
import OverView from './overview';

//todo 이미지 파일, 닉네임 수정
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    'id': `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface UserInfo {
  name: string;
}
export default function Mypage() {
  const [value, setValue] = React.useState(0);
  const [profileImage, setProfileImage] = React.useState<string | ArrayBuffer | null>('/profile-img.png');
  const imageRef = React.useRef<HTMLInputElement>(null);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const userInfo: UserInfo = {
    name: '홍길동',
  };

  // 프로필 이미지 수정
  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        setProfileImage(reader.result);
      };
    }
  };
  const handleAvatarClick = () => {
    if (imageRef.current) {
      imageRef.current.click();
    }
  };

  return (
    <div className="body-box">
      <UserInfoContainer>
        <input type="file" ref={imageRef} accept="image/*" style={{ display: 'none' }} onChange={handleChangeFile} />
        <Avatar src={profileImage as string} onClick={handleAvatarClick} />
        <UserInfoText>
          <h2>{userInfo.name}</h2>
          {/* <div>댓글</div> */}
        </UserInfoText>
      </UserInfoContainer>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary" aria-label="basic tabs example" centered>
            <Tab label="OverView" {...a11yProps(0)} />
            <Tab label="Public Board" {...a11yProps(1)} />
            <Tab label="Comment" {...a11yProps(2)} />
            <Tab label="Bookmark" {...a11yProps(3)} />
            <Tab label="Content" {...a11yProps(4)} />
            <Tab label="회원탈퇴" {...a11yProps(5)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <OverView />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PublicBoard />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Comment />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Bookmark />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Contents />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Accountdelete />
        </TabPanel>
      </Box>
    </div>
  );
}
