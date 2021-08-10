import { render, screen, fireEvent, act } from '@testing-library/react';
import React from 'react';
import App from './App';
import {
  BrowserRouter as Router
} from "react-router-dom";

describe('App:', () => {
  test('renders the app bar', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const appBar = screen.getByTestId('app-bar');
    expect(appBar).toBeInTheDocument();
  });

  test('renders all the MFe', async () => {
    render(
      <Router>
        <App />
      </Router>
    );

    act(() => {
      fireEvent.click(screen.getByTestId("link-to-home"))
    });

    expect(window.location.pathname).toBe('/home');
    expect(screen.getByTestId('home-app')).toBeInTheDocument();

    act(() => {
      fireEvent.click(screen.getByTestId("link-to-random_jokes"))
    });

    expect(window.location.pathname).toBe('/random_jokes');
    expect(screen.getByTestId('random-jokes-app')).toBeInTheDocument();
  });
})
