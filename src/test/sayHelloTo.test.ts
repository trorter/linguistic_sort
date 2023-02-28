import { SayHelloTo } from '../index';

test('Test SayHelloTo', () => {
  expect(SayHelloTo('Carl')).toBe('Hello Carl');
});
