'use Client';
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';

//TODO 태아불애 북마크 조회, 해제 하는 것만 진행하기로함
interface Row {
  id: number;
  date: string;
  emotion: string;
  title: string;
  bookmarked: boolean;
}

export default function Bookmark() {
  const [bookmark, setBookmark] = useState<Row[]>([]);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const visibleRows = bookmark.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).length;

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDeletePost = (id: number) => {
    const updatedPosts = bookmark.filter((row) => row.id !== id);
    setBookmark(updatedPosts);
  };

  return (
    <div style={{ marginTop: '2%' }}>
      <TableContainer sx={{ width: '100%', margin: 'auto', maxHeight: visibleRows < 6 ? 'auto' : 'calc(73px * 6)' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'left' }}>No</TableCell>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'left' }}>작성일자</TableCell>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'left' }}>감정</TableCell>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'center' }}>게시글</TableCell>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'right' }}>북마크</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookmark.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
              const currentIndex = page * rowsPerPage + index + 1;
              return (
                <TableRow key={row.id} hover>
                  <TableCell style={{ textAlign: 'left' }}>{currentIndex}</TableCell>
                  <TableCell style={{ textAlign: 'left' }}>{row.date}</TableCell>
                  <TableCell style={{ textAlign: 'left' }}>{row.emotion}</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>
                    {row.title.length > 40 ? row.title.slice(0, 40) + '...' : row.title}
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip
                      title="북마크 해제"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeletePost(row.id);
                      }}
                    >
                      <IconButton>
                        <BookmarkRemoveIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        count={bookmark.length}
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
          },
          '& .MuiTablePagination-actions button': {
            fontSize: '1rem',
          },
        }}
      />
    </div>
  );
}
