'use client';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AdminInfoContainer, Avatar, AdminInfoText } from './admin.styled';

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

interface AdminInfo {
  name: string;
}
export default function Admin() {
  const [value, setValue] = React.useState(0);
  const [profileImage, setProfileImage] = React.useState<string | ArrayBuffer | null>('/admin.png');
  const imageRef = React.useRef<HTMLInputElement>(null);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const userInfo: AdminInfo = {
    name: '관리자',
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
      <AdminInfoContainer>
        <input type="file" ref={imageRef} accept="image/*" style={{ display: 'none' }} onChange={handleChangeFile} />
        <Avatar src={profileImage as string} onClick={handleAvatarClick} />
        <AdminInfoText>
          <h2>{userInfo.name}</h2>
        </AdminInfoText>
      </AdminInfoContainer>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary" aria-label="basic tabs example" centered>
            <Tab label="사용자 관리" {...a11yProps(0)} />
            <Tab label="공유 게시글 조회" {...a11yProps(1)} />
            <Tab label="컨텐츠 추천 게시글 조회" {...a11yProps(2)} />
            <Tab label="댓글 조회" {...a11yProps(3)} />
            <Tab label="" {...a11yProps(4)} />
            <Tab label="" {...a11yProps(5)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          0
        </TabPanel>
        <TabPanel value={value} index={1}>
          1
        </TabPanel>
        <TabPanel value={value} index={2}>
          2
        </TabPanel>
        <TabPanel value={value} index={3}>
          3
        </TabPanel>
        <TabPanel value={value} index={4}>
          4
        </TabPanel>
        <TabPanel value={value} index={5}>
          5
        </TabPanel>
      </Box>
    </div>
  );
}
