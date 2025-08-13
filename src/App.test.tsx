import { describe, it, expect } from 'vitest';
import { render, screen } from './test/test-utils';
import App from './App';

describe('App', () => {
  it('renders welcome message', () => {
    render(<App />);

    expect(screen.getByText('SimpleTasks')).toBeInTheDocument();
    expect(screen.getByText('Hello World!')).toBeInTheDocument();
    expect(
      screen.getByText('Welcome to your task management app')
    ).toBeInTheDocument();
  });

  it('shows next steps list', () => {
    render(<App />);

    expect(screen.getByText('Next Steps:')).toBeInTheDocument();
    expect(
      screen.getByText(/React \+ TypeScript \+ Vite configured/)
    ).toBeInTheDocument();
    expect(screen.getByText(/Ready for development!/)).toBeInTheDocument();
  });

  it('displays version information', () => {
    render(<App />);

    expect(screen.getByText(/Version 1\.0\.0/)).toBeInTheDocument();
  });
});
