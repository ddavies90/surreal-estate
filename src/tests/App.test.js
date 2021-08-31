import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders heading', () => {
  render(<App />);
  expect(screen.getByText("Surreal Estate")).toBeInTheDocument();
});
