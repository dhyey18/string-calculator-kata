import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InputField from './InputField';

test('renders InputField and accepts input', () => {
  const setNumbers = jest.fn();
  render(<InputField numbers="" setNumbers={setNumbers} />);

  const input = screen.getByPlaceholderText(/Enter numbers/i);
  expect(input).toBeInTheDocument();

  fireEvent.change(input, { target: { value: '1,2,3' } });
  expect(setNumbers).toHaveBeenCalledWith('1,2,3');
});
