import { Table, Paper } from '@material-ui/core';
import styled from 'styled-components';

// @ts-nocheck
export const MaterialTable: any = styled(Table)`
  width: 80%;
  .table-head-cell {
    font-size: 1.25rem;
  }

  .table-body-cell {
    font-size: 1rem;
  }
`;

export const MaterialPaper: any = styled(Paper)`
  width: 80%;
  margin: 2em auto 0;
`;
