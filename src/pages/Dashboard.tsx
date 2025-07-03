import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your personal finance dashboard</p>

      <div>
        <h2>Quick Stats</h2>
        <p>Total Balance: $12,340.50</p>
        <p>Monthly Income: $4,200.00</p>
        <p>Monthly Expenses: $2,845.30</p>
        <p>Savings Goal: 68%</p>
      </div>

      <div>
        <h2>Recent Transactions</h2>
        <ul>
          <li>Grocery Store - $85.32</li>
          <li>Salary Deposit + $4,200.00</li>
          <li>Electric Bill - $124.56</li>
          <li>Gas Station - $45.00</li>
        </ul>
      </div>

      <div>
        <h2>Budget Overview</h2>
        <ul>
          <li>Food: $485 / $600</li>
          <li>Transportation: $280 / $300</li>
          <li>Entertainment: $320 / $250</li>
          <li>Utilities: $180 / $200</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
