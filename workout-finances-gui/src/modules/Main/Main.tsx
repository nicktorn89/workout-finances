import React from 'react';
import { MainState } from './types';
import { MainHeader, HeaderTitle, MainContainer, AddWorkout, ButtonsContainer } from './styled';

import Table from 'src/components/Table';
import Slider from 'src/components/Slider';
import Modal from 'src/components/Modal';

class Main extends React.Component<{}, MainState> {
  public readonly state = {
    activeModal: false,
  };

  public toggleModal = (e: React.MouseEvent) => {
    const { activeModal } = this.state;

    this.setState({ activeModal: !activeModal });
  }

  public createWorkout = (e: React.MouseEvent) => {
    this.toggleModal(e);
  }

  public render = () => {
    const { activeModal } = this.state;

    return(
      <MainContainer>
        <MainHeader>
          <HeaderTitle 
            component='h2' 
            variant='h2'
            className='header-title'
          >
            Workout Finances
          </HeaderTitle>
        </MainHeader>

        <Slider />

        <Table />

        <ButtonsContainer>
          <AddWorkout
            color='primary'
            variant='contained'
            className='add-workout'
            onClick={this.toggleModal}
          >
          Добавить тренировку
          </ AddWorkout>
        </ButtonsContainer>

        <Modal 
          isActive={activeModal}
          title='Создание записи о тренировке'
          onCancel={this.toggleModal}
          onOk={this.createWorkout}
        />
      </MainContainer>
    );
  }
}

export default Main;
