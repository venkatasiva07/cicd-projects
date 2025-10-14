import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello, React CI/CD! heading', () => {
  render(<App />);
  const heading = screen.getByText(/Hello, React CI\/CD!/i);
  expect(heading).toBeInTheDocument();
});
