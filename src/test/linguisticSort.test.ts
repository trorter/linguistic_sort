import { linguisticSort } from '../index';

describe('Main tests', () => {
  test('Base with no locals', () => {
    expect(linguisticSort(['Carl'])).toEqual(['Carl']);
  });

  test('Alphabetic with no locals', () => {
    expect(linguisticSort(['Paul', 'Carl'])).toEqual(['Carl', 'Paul']);
  });

  test('Alphabetic with "en" local', () => {
    expect(linguisticSort(['Paul', 'Carl'], ['en'])).toEqual(['Carl', 'Paul']);
  });

  test('Alphabetic with error local', () => {
    expect(() => linguisticSort(['Paul', 'Carl'], ['de-I11D'])).toThrowError('Incorrect locale information provided');
  });

  test('Alphabetic with low case and upper case letters', () => {
    expect(linguisticSort(['Aa', 'aa'])).toEqual(['Aa', 'aa']);
  });

  test('Alphabetic with low case and upper case letters', () => {
    expect(linguisticSort(['Ba', 'Aa', 'ba', 'aa'])).toEqual(['Aa', 'aa', 'Ba', 'ba']);
  });

  test('Alphabetic with punctuations', () => {
    expect(linguisticSort([' Ba', '.Aa', '-ba', 'aa'])).toEqual(['.Aa', 'aa', ' Ba', '-ba']);
  });

  test('Alphabetic with numbers', () => {
    expect(linguisticSort(['Ba', 'A1a', 'ba', 'A2a', 'aa'])).toEqual(['A1a', 'A2a', 'aa', 'Ba', 'ba']);
  });
});
