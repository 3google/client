'use client';
import React from 'react';
import Image from 'next/image';
import CommentsBox from '@components/postdetail/CommentsBox';
import { PostContainer, Text } from '@styles/postdetail.styled';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { usePost } from '@hooks/usePost';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/navigation';
import { deletePost } from '@http/posts';

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

//TODO:나의 북마크 카테고리 api로 가져오기
const bookmarkCategory = ['기본', '내 폴더'];

//북마크 누르면 뜨는 모달창 컴포넌트!
function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
    //TODO:선택한 값을 저장하기
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>북마크 그룹 선택하기</DialogTitle>
      <List sx={{ pt: 0 }}>
        {bookmarkCategory.map((bookmarkCategory) => (
          <ListItem disableGutters>
            <ListItemButton onClick={() => handleListItemClick(bookmarkCategory)} key={bookmarkCategory}>
              <ListItemText primary={bookmarkCategory} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disableGutters>
          <ListItemButton autoFocus onClick={() => handleListItemClick('addBookmarkCategory')}>
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="그룹 추가하기" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}

export default function Post({ params, searchParams }: { params: { id: number }; searchParams?: { [key: string]: string | string[] | undefined } }) {
  // console.log('params', params);
  const { post } = usePost(params.id);
  console.log('post', post);
  const router = useRouter();

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(bookmarkCategory[1]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
    console.log(value); //선택한 그룹이 콘솔에 찍힘
  };

  const hadleClickDelete = async () => {
    if (window.confirm('해당 게시물을 삭제하시겠습니까?\n삭제된 데이터는 복구할 수 없습니다.')) {
      //TODO: 📍게시글 삭제api요청
      // await deletePost({post.id});
      alert('게시물이 삭제되었습니다');
      router.push('/recommend-board');
    }
  };
  const hadleClickUpdate = () => {
    // alert('게시물을 수정하시겠습니까?');
    router.push(`/recommend-board/edit-post`);
  };

  return (
    <div>
      <PostContainer>
        <Image src="/red-cross.png" alt="빨간십자가처방전" width={100} height={100} />

        <h2>{post?.title}</h2>
        <div>{post?.author}</div>

        <div className="button-container">
          <Tooltip title="북마크 저장">
            <IconButton>
              <BookmarkBorderIcon onClick={handleClickOpen} />
              {/* <BookmarkIcon /> */}
            </IconButton>
          </Tooltip>
          <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
          <Tooltip title="게시물 수정">
            <IconButton>
              <EditIcon onClick={hadleClickUpdate} />
            </IconButton>
          </Tooltip>
          <Tooltip title="게시물 삭제">
            <IconButton>
              <DeleteIcon onClick={hadleClickDelete} />
            </IconButton>
          </Tooltip>
        </div>
        <Text height={'300px'}>
          <h3>내용</h3>
          <div className="text"> {post?.content}</div>
        </Text>
        <CommentsBox />
      </PostContainer>
    </div>
  );
}
