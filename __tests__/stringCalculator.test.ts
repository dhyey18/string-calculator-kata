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

  // Second Test: Handle Single Number
  test('should return the number for a single number string', () => {
    expect(calculator.add("1")).toBe(1);
  });

  // Third Test: Handle Two Numbers (Comma Separated)
  test('should return the sum for two numbers', () => {
    expect(calculator.add("1,2")).toBe(3);
  });

});
