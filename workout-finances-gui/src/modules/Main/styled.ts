import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import { Typography, Button } from '@material-ui/core';

// @ts-nocheck
export const MainHeader: any = styled(AppBar)`
  height: 50px;
`;

export const HeaderTitle: any = styled(Typography)`
  color: white !important;
  font-size: 28px !important;
  margin-left: 2rem !important;
  margin-top: 1.2rem !important;
`;

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddWorkout: any = styled(Button)`
`;
