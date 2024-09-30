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

  // Fourth Test: Handle Newline Separators
  test('should handle newlines as delimiters', () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });

  // Fifth Test: Custom Delimiters
  test('should support custom delimiters', () => {
    expect(calculator.add('//;\n1;2')).toBe(3);
  });

  // Sixth Test: Negative Numbers Throw Exception
  test('should throw an exception for negative numbers', () => {
    expect(() => calculator.add('1,-2')).toThrow('negative numbers not allowed: -2');
  });

  // Sixth Test: Should Ignore Numbers Greater than 1000
  test('should ignore numbers greater than 1000', () => {
    expect(calculator.add("2,1001")).toBe(2);
  });

});
