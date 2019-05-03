import styled from 'styled-components';
import { Typography, Button } from '@material-ui/core';

// @ts-nocheck
export const ModalContainer = styled.div`
  width: 40rem;
  height: 30rem;
  padding: 1rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 1;
  border-radius: 5px;
`;

export const ModalHeader: any = styled(Typography)`
  font-size: 14px !important;
  height: 10%;
  border-bottom: 1px solid grey;
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  height: 70%;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 20%;
`;

export const OkButton: any = styled(Button)`
  margin-right: 1rem !important;
`;

export const CancelButton: any = styled(Button)`
`;
