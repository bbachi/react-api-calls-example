import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Heading', () => {
  render(<App />);
  const headerElement = screen.getByText(/Getting Started With React/i);
  expect(headerElement).toBeInTheDocument();
});