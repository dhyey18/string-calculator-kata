import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorDisplay from './ErrorDisplay';

test('renders ErrorDisplay with error message', () => {
  const { rerender } = render(<ErrorDisplay error={null} />);
  expect(screen.queryByText(/Error:/i)).not.toBeInTheDocument();

  rerender(<ErrorDisplay error="An error occurred" />);
  expect(screen.getByText(/Error: An error occurred/i)).toBeInTheDocument();
});
