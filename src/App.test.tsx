import { render, screen } from '@testing-library/react';
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
})
