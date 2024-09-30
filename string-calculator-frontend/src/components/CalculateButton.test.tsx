import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CalculateButton from './CalculateButton';

test('renders CalculateButton and triggers calculation', () => {
  const handleCalculate = jest.fn();
  render(<CalculateButton handleCalculate={handleCalculate} />);

  const button = screen.getByRole('button', { name: /Calculate/i });
  expect(button).toBeInTheDocument();

  fireEvent.click(button);
  expect(handleCalculate).toHaveBeenCalledTimes(1);
});
