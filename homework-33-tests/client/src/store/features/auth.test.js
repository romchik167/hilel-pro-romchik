import { describe, it, expect } from 'vitest';

describe('auth reducer', () => {
  it('handles login', async () => {
    // ensure localStorage polyfill is set in environment/setup
    const { default: authReducer, login } = await import('./auth');
    const initial = { isAuthenticated: false, user: null, token: null };
    const action = login({ user: { username: 'joe' }, token: 't' });
    const next = authReducer(initial, action);
    expect(next.isAuthenticated).toBe(true);
    expect(next.user).toEqual({ username: 'joe' });
    expect(next.token).toBe('t');
  });

  it('handles logout', async () => {
    const { default: authReducer, logout } = await import('./auth');
    const initial = { isAuthenticated: true, user: { username: 'joe' }, token: 't' };
    const action = logout();
    const next = authReducer(initial, action);
    expect(next.isAuthenticated).toBe(false);
    expect(next.user).toBeNull();
    expect(next.token).toBeNull();
  });
});
