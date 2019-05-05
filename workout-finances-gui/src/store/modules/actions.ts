import { actionFactory } from '@gostgroup/redux-modus';
import { Service } from 'src/api/';
import { QueryObject } from 'src/api/utils/types';

const createAction = actionFactory('organization');

export const fetchWorkouts = createAction(
  'fetchWorkouts',
  () => {
    return Service
      .path('api/workouts')
      .get();
  },
);

export const createWorkout = createAction(
  'createWorkout',
  (workoutData) => {
    return Service
      .path('api/workouts/addWorkout')
      .post(workoutData);
  },
);

export const removeWorkout = createAction(
  'removeWorkout',
  (workout: QueryObject) => {
    return Service
      .path('api/workouts/removeWorkout')
      .delete(workout);
  },
);
