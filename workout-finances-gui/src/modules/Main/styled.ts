import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import { Typography, Button, TextField } from '@material-ui/core';

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

export const SumTitle: any = styled(Typography)`
  font-size: 28px !important;
  margin-left: 10% !important;
  margin-top: 1.2rem !important;
  display: flex !important;
`;

export const SumNumber: any = styled(Typography)`
  font-size: 30px !important;
  margin-left: 1rem !important;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  background-image: url('https://www.foothillsfoodbank.com/wp-content/uploads/2018/09/bananas-BG.png');
  background-repeat: repeat;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddWorkout: any = styled(Button)`
  margin-right: 1rem !important;
  font-size: 1.2rem !important;
`;

export const RemoveWorkout: any = styled(Button)`
  font-size: 1.2rem !important;
`;

export const PeopleNumberInput: any = styled(TextField)`
  width: 75%;
`;

export const PeopleNumberLabel = styled.label`
  width: 25%;
`;

export const SwitchLabel = styled.label`
  width: 100%;
`;
