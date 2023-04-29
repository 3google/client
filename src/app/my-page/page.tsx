'use client';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { UserInfoContainer, Avatar, UserInfoText } from './mypage.styled';
import Accountdelete from './account-delete';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const userInfo: UserInfo = {
    name: '홍길동',
  };

  return (
    <div className="body-box">
      <UserInfoContainer>
        <Avatar type="file" alt="프로필 이미지" />
        <UserInfoText>
          <h2>{userInfo.name}</h2>
          <p>댓글</p>
        </UserInfoText>
      </UserInfoContainer>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="basic tabs example"
            centered
          >
            <Tab label="OverView" {...a11yProps(0)} />
            <Tab label="작성 글 조회" {...a11yProps(1)} />
            <Tab label="댓글 조회" {...a11yProps(2)} />
            <Tab label="북마크" {...a11yProps(3)} />
            <Tab label="저장 컨텐츠" {...a11yProps(4)} />
            <Tab label="회원탈퇴" {...a11yProps(5)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Accountdelete />
        </TabPanel>
      </Box>
    </div>
  );
}
