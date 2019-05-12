import { WorkoutObject } from 'src/store/modules/types';
import * as R from 'ramda';

export const countWorkout = (peopleCount: number, personal?: boolean, free?: boolean, jumps?: boolean): number => {
  if (free) return 0;

  if (personal) return peopleCount * 100;

  if (jumps) return peopleCount * 100;

  return peopleCount * 30;
};

export const getIdFromIndexes = (indexes: number[], workouts: WorkoutObject[]): string[] => {
  const idArray: string[] = [];
  
  indexes.forEach((index) => {
    idArray.push(workouts[index]._id!);
  });

  return idArray;
};

export const getWorkoutsPriceSum = (workouts: WorkoutObject[]): number => {
  if (R.isEmpty(workouts)) return 0;

  const prices: number[] = workouts.map((k) => k.price);
  const sum = prices.reduce((sum, current): number => {
    return sum + current;
  });

  return sum;
};
