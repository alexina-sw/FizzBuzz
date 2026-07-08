import { fizzbuzz } from './index.ts'

test('Empty input, empty output', () => {
  expect(fizzbuzz(1)).toBe(['1']);
});
