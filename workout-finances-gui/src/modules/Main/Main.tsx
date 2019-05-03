import React from 'react';
import { MainState } from './types';
import { MainHeader, HeaderTitle, MainContainer, AddWorkout, ButtonsContainer } from './styled';

import Table from 'src/components/Table';
import Slider from 'src/components/Slider';

class Main extends React.Component<{}, MainState> {
  public readonly state = {
  };

  public render = () => {
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
          >
          Добавить тренировку
          </ AddWorkout>
        </ButtonsContainer>
      </MainContainer>
    );
  }
}

export default Main;
