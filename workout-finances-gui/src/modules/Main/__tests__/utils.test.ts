import { countWorkout } from '../utils';

test('should return 120, 30 rubles for each workout', () => {
  expect(countWorkout(4)).toBe(120);
});
