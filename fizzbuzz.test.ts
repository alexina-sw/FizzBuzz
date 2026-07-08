import { fizzbuzz } from './index.ts'

test('Input 1, output 1', () => {
  expect(fizzbuzz(1)).toStrictEqual(['1']);
});

test('Input 10', () => {
  expect(fizzbuzz(10)).toStrictEqual(['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', 'Bang', '8', 'Fizz', 'Buzz']);
});

test('Input 10, just Fizz', () => {
  expect(fizzbuzz(10, true, false, false, false, false, false)).toStrictEqual(['1', '2', 'Fizz', '4', '5', 'Fizz', '7', '8', 'Fizz', '10']);
});

test('Input 10, just fizz and buzz', () => {
  expect(fizzbuzz(10, true, true, false, false, false, false)).toStrictEqual(['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz']);
});

test('Input 7, just bang', () => {
  expect(fizzbuzz(8, false, false, true, false, false, false)).toStrictEqual(['1', '2', '3', '4', '5', '6', 'Bang', '8']);
});