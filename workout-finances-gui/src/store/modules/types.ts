export interface MainStore {
  workouts: WorkoutObject[];
}

export type WorkoutObject = {
  date: Date;
  people: number;
  price: number;
  isPersonal: boolean;
  isJumps: boolean;
  isFree: boolean;
  _id?: string;
};
