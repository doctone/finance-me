import React from 'react';

const Budget: React.FC = () => {
  return (
    <div>
      <h1>Budget</h1>
      <p>Plan and monitor your budget</p>

      <div>
        <h2>Budget Overview</h2>
        <p>Total Budgeted: $3,000</p>
        <p>Total Spent: $2,540</p>
        <p>Remaining: $460</p>
      </div>

      <div>
        <h2>Budget Categories</h2>
        <ul>
          <li>Housing: $1,200 / $1,500</li>
          <li>Food: $485 / $600</li>
          <li>Transportation: $280 / $300</li>
          <li>Entertainment: $320 / $250 (Over budget)</li>
          <li>Utilities: $180 / $200</li>
          <li>Healthcare: $75 / $150</li>
        </ul>
      </div>
    </div>
  );
};

export default Budget;
