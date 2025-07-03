import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navigation = [
    { name: 'Dashboard', href: '/', path: '/' },
    { name: 'Expenses', href: '/expenses', path: '/expenses' },
    { name: 'Budget', href: '/budget', path: '/budget' },
  ];

  return (
    <div
      style={{
        backgroundColor: '#1a1a1a',
        color: '#ffffff',
        minHeight: '100vh',
      }}
    >
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 2rem',
          backgroundColor: '#2d2d2d',
          borderBottom: '1px solid #404040',
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#10b981',
            textDecoration: 'none',
          }}
        >
          Finance Me
        </Link>

        <div
          style={{
            display: 'flex',
            gap: '2rem',
          }}
        >
          {navigation.map(item => (
            <Link
              key={item.name}
              to={item.href}
              style={{
                fontWeight: isActive(item.path) ? 'bold' : 'normal',
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                transition: 'all 0.2s',
                backgroundColor: isActive(item.path)
                  ? '#10b981'
                  : 'transparent',
                color: isActive(item.path) ? '#ffffff' : '#cccccc',
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      <main
        style={{
          padding: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
