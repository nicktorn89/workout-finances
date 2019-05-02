import { countWorkout } from '../utils';

test('should return 120, 30 rubles for each workout', () => {
  expect(countWorkout(4)).toBe(120);
});

test('should return 0 if workout is free', () => {
  expect(countWorkout(30, false, true)).toBe(0);
});

test('should return workout*100', () => {
  expect(countWorkout(20, true)).toBe(2000);
});
