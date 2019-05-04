export const countWorkout = (peopleCount: number, personal?: boolean, free?: boolean, jumps?: boolean): number => {
  if (free) return 0;

  if (personal) return peopleCount * 100;

  if (jumps) return peopleCount * 100;

  return peopleCount * 30;
};
