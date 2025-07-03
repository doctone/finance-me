import React from 'react';

const Expenses: React.FC = () => {
  return (
    <div>
      <h1>Expenses</h1>
      <p>Track and manage your expenses</p>

      <div>
        <h2>Expense Summary</h2>
        <p>This Month: $2,845.30</p>
        <p>Average Daily: $94.84</p>
        <p>Largest Expense: $1,200.00 (Rent)</p>
      </div>

      <div>
        <h2>Recent Expenses</h2>
        <ul>
          <li>Grocery Store - $85.32 (Food)</li>
          <li>Electric Bill - $124.56 (Utilities)</li>
          <li>Gas Station - $45.00 (Transportation)</li>
          <li>Netflix Subscription - $15.99 (Entertainment)</li>
          <li>Coffee Shop - $12.50 (Food)</li>
        </ul>
      </div>
    </div>
  );
};

export default Expenses;
