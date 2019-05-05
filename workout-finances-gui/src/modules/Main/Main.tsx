import React, { ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { fetchWorkouts, createWorkout, removeWorkout } from 'src/store/modules/actions';
import { MainState, MainProps } from './types';
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
import { RootStore } from 'src/store/types';

class Main extends React.Component<MainProps, MainState> {
  public readonly state = {
    activeModal: false,
    isPersonal: false,
    isFree: false,
    isJumps: false,
    peopleCount: 0,
    workouts: this.props.workoutsArray,
  };

  public componentDidMount = () => {
    const { fetchWorkouts } = this.props;
    fetchWorkouts && fetchWorkouts();
  }

  public componentDidUpdate = (prevProps: MainProps) => {
    if (prevProps.workoutsArray !== this.props.workoutsArray) {
      this.setState({ workouts: this.props.workoutsArray });
    }
  }

  public toggleModal = () => {
    const { activeModal } = this.state;

    this.setState({ activeModal: !activeModal });
    this.setDefaultValues();
  }

  public createWorkout = () => {
    const { peopleCount, isPersonal, isFree, isJumps } = this.state;
    const { createWorkout } = this.props;

    const workoutObject = {
      isPersonal,
      isFree,
      isJumps,
      date: new Date(),
      people: peopleCount,
      price: countWorkout(peopleCount, isPersonal, isFree, isJumps),
    };

    createWorkout && createWorkout(workoutObject);

    this.toggleModal();
  }

  public removeWorkout = (id: string) => {
    const { removeWorkout } = this.props;

    removeWorkout && removeWorkout({ id });
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
    const { activeModal, isPersonal, isFree, isJumps, workouts } = this.state;

    return (
      <MainContainer>
        <MainHeader>
          <HeaderTitle
            component='h2'
            variant='h2'
          >
            Workout Finances
          </HeaderTitle>
        </MainHeader>

        <Slider />

        <Table data={workouts!} />

        <ButtonsContainer>
          <AddWorkout
            color='primary'
            variant='contained'
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
const mapDispatchToProps = {
  fetchWorkouts,
  createWorkout,
  removeWorkout,
};

const mapStateToProps = ({ workouts }: RootStore) => ({
  workoutsArray: workouts,
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
