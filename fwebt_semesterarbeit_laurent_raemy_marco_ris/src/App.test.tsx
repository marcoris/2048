import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Testing App component', () => {
  test('renders app', () => {
    render(<App/>);
    const linkElement = screen.getByText(/start/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('2 tiles with value of 2, 4 or 8 are in the Gamefield at start', () => {
    render(
      <App/>
    )

    const linkElement = screen.getByText("2");
    console.log(linkElement)
  });
})