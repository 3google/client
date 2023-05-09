import React, { useState } from 'react';
import { StyledTablePagination } from '@styles/admin.styled';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

interface Row {
  id: number;
  Nickname: string;
  email: string;
  joinDate: string; // 가입일 필드 추가
  content: number; // 게시판수
  comment: number; // 댓글수
}

const rows: Row[] = [
  { id: 1, Nickname: 'John Smith', email: 'user1@gmail.com', content: 1, comment: 2, joinDate: '2022-01-01' },
  { id: 2, Nickname: 'Jane Doe', email: 'user2@gmail.com', content: 1, comment: 2, joinDate: '2022-02-01' },
  { id: 3, Nickname: 'Bob Johnson', email: 'user3@gmail.com', content: 1, comment: 2, joinDate: '2022-03-01' },
  { id: 4, Nickname: 'Bob Johnson', email: 'user3@gmail.com', content: 1, comment: 2, joinDate: '2022-03-01' },
  { id: 5, Nickname: 'Bob Johnson', email: 'user3@gmail.com', content: 1, comment: 2, joinDate: '2022-03-01' },
  { id: 6, Nickname: 'Bob Johnson', email: 'user3@gmail.com', content: 1, comment: 2, joinDate: '2022-03-01' },
  { id: 7, Nickname: 'Bob Johnson', email: 'user3@gmail.com', content: 1, comment: 2, joinDate: '2022-03-01' },
  { id: 8, Nickname: 'Bob Johnson', email: 'user3@gmail.com', content: 1, comment: 2, joinDate: '2022-03-01' },
  { id: 9, Nickname: 'Bob Johnson', email: 'user3@gmail.com', content: 1, comment: 2, joinDate: '2022-03-01' },
  { id: 10, Nickname: 'Bob Johnson', email: 'user3@gmail.com', content: 1, comment: 2, joinDate: '2022-03-01' },
  { id: 11, Nickname: 'Bob Johnson', email: 'user3@gmail.com', content: 1, comment: 2, joinDate: '2022-03-01' },
  { id: 12, Nickname: 'Bob Johnson', email: 'user3@gmail.com', content: 1, comment: 2, joinDate: '2022-03-01' },
];

export default function Users() {
  const [posts, setPosts] = useState<Row[]>(rows);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  // const handleChangePage = (event: unknown, newPage: number) => {
  //   setPage(newPage);
  //   if (newPage * rowsPerPage >= posts.length) {
  //     setRowsPerPage(5);
  //   }
  // };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDeletePost = (id: number) => {
    const updatedPosts = posts.filter((row) => row.id !== id);
    setPosts(
      updatedPosts.map((post, index) => ({
        ...post,
        id: index + 1,
      })),
    );
  };

  const visibleRows = posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).length;

  return (
    <div style={{ marginTop: '2%' }}>
      <TableContainer sx={{ width: '100%', margin: 'auto', maxHeight: visibleRows < 6 ? 'auto' : 'calc(73px * 6)' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                No
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                닉네임
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                이메일
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                가입일
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                게시글수
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                댓글수
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                관리
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.id} hover>
                <TableCell align="center" style={{ textAlign: 'center' }}>
                  {row.id}
                </TableCell>
                <TableCell align="center" style={{ textAlign: 'center' }}>
                  {row.Nickname}
                </TableCell>
                <TableCell align="center" style={{ textAlign: 'center' }}>
                  {row.email}
                </TableCell>
                <TableCell align="center" style={{ textAlign: 'center' }}>
                  {row.joinDate}
                </TableCell>
                <TableCell align="center" style={{ textAlign: 'center' }}>
                  {row.content}
                </TableCell>
                <TableCell align="center" style={{ textAlign: 'center' }}>
                  {row.comment}
                </TableCell>
                <TableCell align="center" style={{ textAlign: 'center' }}>
                  <Tooltip
                    title="회원 삭제"
                    color="error"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeletePost(row.id);
                    }}
                  >
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <StyledTablePagination
        // component="div"
        count={posts.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
        sx={{
          'display': 'flex',
          'justifyContent': 'flex-end',
          '& .MuiSelect-select': {
            fontSize: '1rem',
            fontWeight: 'bold',
          },
          '& .MuiTablePagination-actions button': {
            fontSize: '1rem',
            fontWeight: 'bold',
          },
        }}
      />
    </div>
  );
}
