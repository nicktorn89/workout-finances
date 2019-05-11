import { WorkoutObject } from 'src/store/modules/types';

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
