import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello, React CI/CD Pipeline', () => {
  render(<App />);
  const heading = screen.getByText(/Hello, React CI\/CD Pipeline/i);
  expect(heading).toBeInTheDocument();
});
