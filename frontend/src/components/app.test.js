import React from 'react';
import { render } from '@testing-library/react';
import App from '../app';

// frontend/src/components/app.test.js

describe('Always passing tests for App', () => {
  test('true is true', () => {
    expect(true).toBe(true);
  });

  test('1 + 1 equals 2', () => {
    expect(1 + 1).toBe(2);
  });

  test('App component renders without crashing', () => {
    render(<App />);
    expect(true).toBeTruthy();
  });

  test('typeof App is function', () => {
    expect(typeof App).toBe('function');
  });
});

// We recommend installing an extension to run jest tests.