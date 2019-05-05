import { createReducer } from '@gostgroup/redux-modus';

import { MainStore } from './types';
import { fetchWorkouts, createWorkout, removeWorkout } from './actions';
import { onFetching, onError, onSuccess } from 'src/store/utils';

const initialState: MainStore = {
  workouts: [],
};

export const reducer = createReducer(initialState);

reducer
  .on(
    (onFetching(fetchWorkouts)),
    (state) => ({
      ...state,
      error: '',
      isLoading: true,
    }),
  ).on(
    (onSuccess(fetchWorkouts)),
    (state, payload) => {
      console.log(payload);
      return {
        ...state,
        ...payload,
        isLoading: false,
        isLoaded: true,
      };
    },
  ).on(
    (onError(fetchWorkouts)),
    (state) => ({
      ...state,
      isLoading: true,
      error: 'Ошибка при загрузке тренировок',
    }),
  ).on(
    (onFetching(createWorkout)),
    (state) => ({
      ...state,
      error: '',
      isLoading: true,
    }),
  ).on(
    (onSuccess(createWorkout)),
    (state, payload) => {
      return {
        ...state,
        ...payload,
        isLoading: false,
        isLoaded: true,
      };
    },
  ).on(
    (onError(createWorkout)),
    (state) => ({
      ...state,
      isLoading: true,
      error: 'Ошибка при создании тренировки',
    }),
  ).on(
    (onFetching(removeWorkout)),
    (state) => ({
      ...state,
      error: '',
      isLoading: true,
    }),
  ).on(
    (onSuccess(removeWorkout)),
    (state, payload) => {
      return {
        ...state,
        ...payload,
        isLoading: false,
        isLoaded: true,
      };
    },
  ).on(
    (onError(removeWorkout)),
    (state) => ({
      ...state,
      isLoading: true,
      error: 'Ошибка при удалении тренировки',
    }),
  );

export default reducer;
