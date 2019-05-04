export interface MainState {
  activeModal: boolean;
  peopleCount: number;
  isFree: boolean;
  isJumps: boolean;
  isPersonal: boolean;
  [name: string]: boolean | number;
}
