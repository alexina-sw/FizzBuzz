import { fizzbuzz } from './index.ts'

test('Input 1, output 1', () => {
  expect(fizzbuzz(1)).toStrictEqual(['1']);
});
