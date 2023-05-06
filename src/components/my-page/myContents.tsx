import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { StyledTablePagination } from '../../styles/users.styled';

interface Row {
  id: number;
  date: string;
  emotion: string;
  content: string;
}

const rows: Row[] = [
  {
    id: 1,
    date: '2023-01-01',
    emotion: '슬픔',
    content: '게시글게시글게시글게시글게시글게시글게시글게시글게',
  },
  { id: 2, date: '2023-01-01', emotion: '슬픔', content: '게시글' },
  { id: 3, date: '2023-01-01', emotion: '슬픔', content: '게시글' },
  { id: 4, date: '2023-01-01', emotion: '슬픔', content: '게시글' },
  { id: 5, date: '2023-01-01', emotion: '슬픔', content: '게시글' },
  { id: 6, date: '2023-01-01', emotion: '슬픔', content: '게시글' },
  { id: 7, date: '2023-01-01', emotion: '슬픔', content: '게시글' },
  { id: 8, date: '2023-01-01', emotion: '슬픔', content: '게시글' },
  { id: 9, date: '2023-01-01', emotion: '슬픔', content: '게시글' },
  { id: 10, date: '2023-01-01', emotion: '슬픔', content: '게시글' },
  { id: 11, date: '2023-01-01', emotion: '슬픔', content: '게시글' },
  { id: 12, date: '2023-01-01', emotion: '슬픔', content: '게시글' },
];

export default function MyContents() {
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
              <TableCell style={{ fontWeight: 'bold', textAlign: 'left' }}>No</TableCell>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'left' }}>작성일자</TableCell>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'left' }}>감정</TableCell>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'center' }}>게시글</TableCell>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'right' }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.id} hover>
                <TableCell style={{ textAlign: 'left' }}>{row.id}</TableCell>
                <TableCell style={{ textAlign: 'left' }}>{row.date}</TableCell>
                <TableCell style={{ textAlign: 'left' }}>{row.emotion}</TableCell>
                <TableCell style={{ textAlign: 'center' }}>{row.content.length > 40 ? row.content.slice(0, 40) + '...' : row.content}</TableCell>
                <TableCell style={{ textAlign: 'right' }}>
                  <Tooltip
                    title="게시글 삭제"
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
        component="div"
        count={posts.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
        sx={{
          'width': '100%',
          'margin': '1%',
          'display': 'flex',
          'justifyContent': 'flex-end',
          '& .MuiSelect-select': {
            fontSize: '1rem',
            // fontWeight: 'bold',
          },
          '& .MuiTablePagination-actions button': {
            fontSize: '1rem',
            // fontWeight: 'bold',
          },
        }}
      />
    </div>
  );
}
