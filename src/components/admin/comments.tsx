import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { StyledTablePagination } from '../../styles/users.styled';

interface Row {
  id: number;
  nickname: string;
  email: string;
  content: string;
  comment: string;
}

const rows: Row[] = [
  { id: 1, nickname: 'John Smith', email: 'user1@gmail.com', content: '게시글', comment: '댓글' },
  { id: 2, nickname: 'Jane Doe', email: 'user2@gmail.com', content: '게시글', comment: '댓글' },
  { id: 3, nickname: 'Bob Johnson', email: 'user3@gmail.com', content: '게시글', comment: '댓글' },
  { id: 4, nickname: 'Bob Johnson', email: 'user3@gmail.com', content: '게시글', comment: '댓글' },
  { id: 5, nickname: 'Bob Johnson', email: 'user3@gmail.com', content: '게시글', comment: '댓글' },
  { id: 6, nickname: 'Bob Johnson', email: 'user3@gmail.com', content: '게시글', comment: '댓글' },
  { id: 7, nickname: 'Bob Johnson', email: 'user3@gmail.com', content: '게시글', comment: '댓글' },
  { id: 8, nickname: 'Bob Johnson', email: 'user3@gmail.com', content: '게시글', comment: '댓글' },
  { id: 9, nickname: 'Bob Johnson', email: 'user3@gmail.com', content: '게시글', comment: '댓글' },
  { id: 10, nickname: 'Bob Johnson', email: 'user3@gmail.com', content: '게시글', comment: '댓글' },
  { id: 11, nickname: 'Bob Johnson', email: 'user3@gmail.com', content: '게시글', comment: '댓글' },
  { id: 12, nickname: 'Bob Johnson', email: 'user3@gmail.com', content: '게시글', comment: '댓글' },
];

export default function Comments() {
  const [posts, setPosts] = useState<Row[]>(rows);
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
      <TableContainer sx={{ width: '100%', margin: 'auto', maxHeight: visibleRows < 6 ? 'auto' : 'calc(53px * 5)' }}>
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
                게시글
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                댓글
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
                  {row.nickname}
                </TableCell>
                <TableCell align="center" style={{ textAlign: 'center' }}>
                  {row.email}
                </TableCell>

                <TableCell align="center" style={{ textAlign: 'center' }}>
                  {row.content}
                </TableCell>
                <TableCell align="center" style={{ textAlign: 'center' }}>
                  {row.comment}
                </TableCell>
                <TableCell align="center" style={{ textAlign: 'center' }}>
                  <Tooltip
                    title="댓글 삭제"
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
