import React from 'react';
import { render, screen } from '@testing-library/react';
import ResultDisplay from './ResultDisplay';

test('renders ResultDisplay with result', () => {
  const { rerender } = render(<ResultDisplay result={null} />);
  expect(screen.queryByText(/Result:/i)).not.toBeInTheDocument();

  rerender(<ResultDisplay result={42} />);
  expect(screen.getByText(/Result: 42/i)).toBeInTheDocument();
});