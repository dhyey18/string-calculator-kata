import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DarkModeToggle from './DarkModeToggle';

test('renders DarkModeToggle and toggles mode', () => {
  const setDarkMode = jest.fn();
  const { rerender } = render(<DarkModeToggle darkMode={false} setDarkMode={setDarkMode} />);

  const button = screen.getByRole('button', { name: /Dark Mode/i });
  expect(button).toBeInTheDocument();

  fireEvent.click(button);
  expect(setDarkMode).toHaveBeenCalledWith(true);

  rerender(<DarkModeToggle darkMode={true} setDarkMode={setDarkMode} />);
  expect(screen.getByRole('button', { name: /Light Mode/i })).toBeInTheDocument();
});
