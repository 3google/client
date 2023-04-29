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
