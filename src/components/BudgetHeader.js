import React, { useState, useEffect } from 'react';
import './BudgetHeader.css';

const BudgetHeader = ({ budget, setBudget, remaining, daysLeft }) => {
  const [budgetInput, setBudgetInput] = useState(budget);

  // Update budgetInput when budget prop changes
  useEffect(() => {
    setBudgetInput(budget);
  }, [budget]);

  const handleBudgetUpdate = () => {
    const newBudget = parseFloat(budgetInput);
    if (!isNaN(newBudget) && newBudget >= 0) {
      setBudget(newBudget);
    } else {
      alert('Please enter a valid amount');
      setBudgetInput(budget);
    }
  };

  return (
    <div className="budget-header">
      <h2 className="budget-title">My Budget of the Month</h2>
      
      <div className="budget-input-row">
        <input
          type="number"
          value={budgetInput}
          onChange={(e) => setBudgetInput(e.target.value)}
          className="budget-input"
          onKeyPress={(e) => e.key === 'Enter' && handleBudgetUpdate()}
        />
        <button onClick={handleBudgetUpdate} className="budget-update-btn">
          Update
        </button>
      </div>
      
      <div className="budget-info-grid">
        <div className="budget-info-item">
          <span className="info-label">Remaining</span>
          <span className="info-value">${remaining.toFixed(2)}</span>
        </div>
        
        <div className="budget-info-item">
          <span className="info-label">Days left</span>
          <span className="info-value">{daysLeft}</span>
        </div>
      </div>
    </div>
  );
};

export default BudgetHeader;