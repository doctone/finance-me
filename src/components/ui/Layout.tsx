import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <nav style={{ backgroundColor: '#f8f9fa', padding: '1rem' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold' }}>
            Finance Me
          </Link>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: isActive('/') ? '#007bff' : '#6c757d',
                fontWeight: isActive('/') ? 'bold' : 'normal',
              }}
            >
              Dashboard
            </Link>
            <Link
              to="/expenses"
              style={{
                textDecoration: 'none',
                color: isActive('/expenses') ? '#007bff' : '#6c757d',
                fontWeight: isActive('/expenses') ? 'bold' : 'normal',
              }}
            >
              Expenses
            </Link>
            <Link
              to="/budget"
              style={{
                textDecoration: 'none',
                color: isActive('/budget') ? '#007bff' : '#6c757d',
                fontWeight: isActive('/budget') ? 'bold' : 'normal',
              }}
            >
              Budget
            </Link>
          </div>
        </div>
      </nav>
      <main style={{ flex: 1, padding: '2rem' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
