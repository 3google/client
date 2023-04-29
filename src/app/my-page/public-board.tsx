import React, { useState } from 'react';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button,
  TablePagination,
  TableContainer,
} from '@mui/material';
import styled from '@emotion/styled';

interface Post {
  id: number;
  title: string;
}

const initialPosts: Post[] = [
  {
    id: 1,
    title: '첫 번째 게시글.첫 번째 게시글.첫 번째 게시글.첫 번째 게시글.첫 번째 게시글.첫 번째 게시글.첫 번째 게시글.',
  },
  { id: 2, title: '두 번째 게시글' },
  { id: 3, title: '세 번째 게시글' },
  { id: 4, title: '네 번째 게시글' },
  { id: 5, title: '다섯 번째 게시글' },
  { id: 6, title: '여섯 번째 게시글' },
];

const StyledTableContainer = styled(Paper)`
  margin-top: 20px;
  overflow-x: auto;
`;

// 새로운 스타일 컴포넌트 추가
const TitleText = styled.span`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px; // 적절한 너비로 조정
`;

export default function PulblicBoard() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDeletePost = (id: number) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(
      updatedPosts.map((post, index) => ({
        ...post,
        id: index + 1,
      })),
    );
  };

  const visibleRows = posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).length;

  return (
    <Container maxWidth="sm">
      <StyledTableContainer>
        <TableContainer style={{ maxHeight: visibleRows < 6 ? 'auto' : 'calc(53px * 5)' }}>
          {/* 높이 동적 계산 */}
          <Table stickyHeader>
            {/* stickyHeader 속성 추가 */}
            <TableHead>
              <TableRow>
                <TableCell>No.</TableCell>
                <TableCell align="center">내가 작성한 글</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((post) => (
                <TableRow key={post.id} hover>
                  <TableCell>{post.id}</TableCell>
                  <TableCell>
                    <TitleText>{post.title}</TitleText>
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      color="error"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeletePost(post.id);
                      }}
                    >
                      Del
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledTableContainer>
      <TablePagination
        component="div"
        count={posts.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Container>
  );
}
