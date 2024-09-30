import { StringCalculator } from '../src/stringCalculator';

describe('StringCalculator', () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  // # Test for empty string returning 0
  test('should return 0 for an empty string', () => {
    expect(calculator.add("")).toBe(0);
  });

});
