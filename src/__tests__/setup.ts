import '@testing-library/jest-dom';
import { expect, afterEach, beforeAll } from 'vitest';
import { cleanup } from '@testing-library/react';

beforeAll(() => {
  // Mock window.matchMedia for dark mode tests
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => {},
    }),
  });

  // Mock localStorage
  const localStorageMock = {
    getItem: (_key: string) => null,
    setItem: (_key: string, _value: string) => {},
    removeItem: (_key: string) => {},
    clear: () => {},
  };
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
    writable: true,
  });
});

afterEach(() => {
  cleanup();
});

expect.extend({});
