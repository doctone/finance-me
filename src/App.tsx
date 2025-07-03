import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/ui/Layout';
import { Dashboard, Expenses, Budget } from '@/pages';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="budget" element={<Budget />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
