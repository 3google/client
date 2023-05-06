import styled from '@emotion/styled';
import { TablePagination } from '@mui/material';

export const StyledTablePagination = styled(TablePagination)`
  && {
    display: flex;
    justify-content: flex-end;

    .MuiTypography-root {
      font-size: 1rem;
      /* font-weight: bold; */
      /* color: red; */
    }

    .MuiSelect-select {
      font-size: 1rem;
      /* font-weight: bold; */
      /* color: red; */
    }

    .MuiMenuItem-root {
      font-size: 1rem;
      /* font-weight: bold; */
    }

    .MuiButtonBase-root {
      font-size: 1rem;
      /* font-weight: bold; */
      /* color: red; */
    }
  }
`;
