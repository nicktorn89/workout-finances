import { WorkoutObject } from 'src/store/modules/types';
import { fetchWorkouts, createWorkout, removeWorkout } from 'src/store/modules/actions';

export interface MainState {
  activeModal: boolean;
  peopleCount: number;
  isFree: boolean;
  isJumps: boolean;
  isPersonal: boolean;
  workouts?: WorkoutObject[];
  [name: string]: boolean | number | WorkoutObject[] | undefined;
}

export interface MainProps {
  workoutsArray?: WorkoutObject[];
  fetchWorkouts?: typeof fetchWorkouts;
  createWorkout?: typeof createWorkout;
  removeWorkout?: typeof removeWorkout;
}
