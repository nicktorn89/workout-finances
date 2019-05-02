export const countWorkout = (workoutsCount: number, personal?: boolean, free?: boolean): number => {
  if (free) return 0;

  if (personal) return workoutsCount * 100;

  return workoutsCount * 30;
};
