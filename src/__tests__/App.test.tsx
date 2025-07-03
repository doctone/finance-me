import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import App from '../App';

describe('App', () => {
  test('renders dashboard by default', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: 'Dashboard' })
    ).toBeInTheDocument();
    expect(
      screen.getByText('Welcome to your personal finance dashboard')
    ).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<App />);
    expect(screen.getByText('Finance Me')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Dashboard' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Expenses' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Budget' })).toBeInTheDocument();
  });

  test('displays financial data', () => {
    render(<App />);
    expect(screen.getByText('Total Balance: $12,340.50')).toBeInTheDocument();
    expect(screen.getByText('Monthly Income: $4,200.00')).toBeInTheDocument();
    expect(screen.getByText('Monthly Expenses: $2,845.30')).toBeInTheDocument();
    expect(screen.getByText('Savings Goal: 68%')).toBeInTheDocument();
  });

  test('displays recent transactions', () => {
    render(<App />);
    expect(screen.getByText('Recent Transactions')).toBeInTheDocument();
    expect(screen.getByText('Grocery Store - $85.32')).toBeInTheDocument();
    expect(screen.getByText('Salary Deposit + $4,200.00')).toBeInTheDocument();
  });
});
