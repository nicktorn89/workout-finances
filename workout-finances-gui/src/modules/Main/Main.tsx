import React, { ChangeEvent } from 'react';
import { MainState } from './types';
import {
  MainHeader, HeaderTitle, MainContainer,
  AddWorkout, ButtonsContainer, PeopleNumberInput,
  PeopleNumberLabel, SwitchLabel,
} from './styled';
import Switch from '@material-ui/core/Switch';

import Table from 'src/components/Table';
import Slider from 'src/components/Slider';
import Modal from 'src/components/Modal';
import { countWorkout } from './utils';

class Main extends React.Component<{}, MainState> {
  public readonly state = {
    activeModal: false,
    isPersonal: false,
    isFree: false,
    isJumps: false,
    peopleCount: 0,
  };

  public toggleModal = () => {
    const { activeModal } = this.state;

    this.setState({ activeModal: !activeModal });
    this.setDefaultValues();
  }

  public createWorkout = () => {
    const { peopleCount, isPersonal, isFree, isJumps } = this.state;

    console.log(countWorkout(peopleCount, isPersonal, isFree, isJumps));

    this.toggleModal();
  }

  public setDefaultValues = () => {
    this.setState(
      {
        isFree: false,
        isJumps: false,
        isPersonal: false,
        peopleCount: 0,
      },
    );
  }

  public changePeopleCount = (e: Event) => {
    const { value } = (e.target as HTMLInputElement);
    this.setState({ peopleCount: Number(value) });
  }

  public handleSwitch = (e: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    const { name } = (e.target as HTMLInputElement);
    const switches = ['isPersonal', 'isFree', 'isJumps'].filter((k) => k !== name);

    this.setState({ [name]: checked, [`${switches[0]}`]: false, [`${switches[1]}`]: false });
  }

  public render = () => {
    const { activeModal, isPersonal, isFree, isJumps } = this.state;

    return (
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
        >
          <PeopleNumberLabel>Кол-во человек</PeopleNumberLabel>
          <PeopleNumberInput
            id='people-number'
            defaultValue={''}
            type='number'
            InputLabelProps={{
              shrink: true,
            }}
            margin='normal'
            onChange={this.changePeopleCount}
          />

          <SwitchLabel>
            <Switch
              name='isPersonal'
              onChange={this.handleSwitch}
              color='primary'
              checked={isPersonal}
            />
            Персональная тренировка
          </SwitchLabel>
          <SwitchLabel>
            <Switch
              name='isFree'
              onChange={this.handleSwitch}
              checked={isFree}
            />
            Бесплатная тренировка
          </SwitchLabel>
          <SwitchLabel>
            <Switch
              name='isJumps'
              onChange={this.handleSwitch}
              color='primary'
              checked={isJumps}
            />
            Тренировка на джампах
          </SwitchLabel>
        </Modal>
      </MainContainer>
    );
  }
}

export default Main;
