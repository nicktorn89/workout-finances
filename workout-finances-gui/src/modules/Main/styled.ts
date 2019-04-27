import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import { Typography } from '@material-ui/core';

// @ts-nocheck
export const MainHeader: any = styled(AppBar)`
  height: 50px;
`;

export const HeaderTitle: any = styled(Typography)`
  color: white !important;
  font-size: 24px;
  margin-left: 2rem !important;
  margin-top: 0.5rem !important;
`;

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
