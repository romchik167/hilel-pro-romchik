import React from 'react';
import { describe, it, beforeEach, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import AuthForm from './AuthForm';

async function renderWithStore(ui, { preloadedState } = {}) {
  const { default: authReducer } = await import('../../store/features/auth');
  const store = configureStore({ reducer: { auth: authReducer }, preloadedState });
  return render(<Provider store={store}>{ui}</Provider>);
}

describe('AuthForm', () => {
  beforeEach(() => {
    try {
      localStorage && localStorage.clear && localStorage.clear();
    } catch (e) {
      // ignore
    }
  });

  it('shows login form and logs in with correct credentials', async () => {
    await renderWithStore(<AuthForm />);

    const username = screen.getByPlaceholderText(/Username/i);
    const password = screen.getByPlaceholderText(/Password/i);
    const btn = screen.getByRole('button', { name: /Login/i });

    fireEvent.change(username, { target: { value: 'admin' } });
    fireEvent.change(password, { target: { value: 'admin' } });
    fireEvent.click(btn);

    // after login the username should be displayed
    expect(screen.getByText(/admin/i)).toBeTruthy();
  });
});
