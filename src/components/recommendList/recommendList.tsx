import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { usePosts } from '@hooks/usePost';
import Link from 'next/link';

export default function RecommendList() {
  //
  const { posts } = usePosts();

  const [list, setList] = useState({ emotion: '' });

  const handleEmotionChange = (e: any) => {
    const { name, value } = e.target;
    setList((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log({ name: value });
  };

  return (
    <div style={{ marginTop: '2%' }}>
      <FormControl>
        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" onChange={handleEmotionChange}>
          <FormControlLabel name="emotion" value="HAPPINESS" control={<Radio />} label="HAPPINESS" />
          <FormControlLabel name="emotion" value="SADNESS" control={<Radio />} label="SADNESS" />
          <FormControlLabel name="emotion" value="ANGER" control={<Radio />} label="ANGER" />
          <FormControlLabel name="emotion" value="FEAR" control={<Radio />} label="FEAR" />
          <FormControlLabel name="emotion" value="LOVE" control={<Radio />} label="LOVE" />
          <FormControlLabel name="emotion" value="SURPRISE" control={<Radio />} label="SURPRISE" />
        </RadioGroup>
      </FormControl>
      <TableContainer sx={{ width: '100%', margin: 'auto' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'center' }}>No</TableCell>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'center' }}>감정</TableCell>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'center' }}>게시글</TableCell>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'center' }}>작성자</TableCell>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'center' }}>댓글</TableCell>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'center' }}>북마크</TableCell>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'center' }}>작성일자</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts?.map(({ title, author, bookmarksCnt, commentsCnt, created_at, emotion, id }, index) => (
              <TableRow key={id} hover>
                <TableCell style={{ textAlign: 'center' }}>{index + 1}</TableCell>
                <TableCell style={{ textAlign: 'center' }}>{emotion}</TableCell>
                <TableCell style={{ textAlign: 'center' }}>
                  <Link href={`/recommend-board/${id}`}>{title}</Link>
                </TableCell>
                <TableCell style={{ textAlign: 'center' }}>{author}</TableCell>
                <TableCell style={{ textAlign: 'center' }}>{commentsCnt}</TableCell>
                <TableCell style={{ textAlign: 'center' }}>{bookmarksCnt}</TableCell>
                <TableCell style={{ textAlign: 'center' }}>{created_at}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
