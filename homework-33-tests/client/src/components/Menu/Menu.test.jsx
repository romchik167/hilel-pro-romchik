import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Menu from './Menu';

describe('Menu', () => {
  it('renders visible menu items', () => {
    render(
      <MemoryRouter>
        <Menu />
      </MemoryRouter>
    );

    expect(screen.getByText(/Main/i)).toBeTruthy();
    expect(screen.getByText(/Projects/i)).toBeTruthy();
    expect(screen.getByText(/Tasks/i)).toBeTruthy();
  });
});
