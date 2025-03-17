import React from 'react';
import './ExpenseSummary.css';

const ExpenseSummary = ({ expensesByCategory, totalExpenses, remaining }) => {
  return (
    <div className="expense-summary">
      <h2 className="summary-title">Expense Summary</h2>
      
      <div className="expense-list">
        {expensesByCategory.map(category => (
          <div key={category.name} className="expense-item">
            <div className="expense-category">
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </div>
            <span className={`expense-amount ${category.amount > 0 ? 'has-expense' : ''}`}>
              ${category.amount.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
      
      <div className="summary-divider"></div>
      
      <div className="summary-footer">
        <div className="total-row">
          <span className="total-label">Total Expenses</span>
          <span className="total-amount">${totalExpenses.toFixed(2)}</span>
        </div>
        
        <div className="remaining-row">
          <span className="remaining-label">Remaining Budget</span>
          <span className="remaining-amount">${remaining.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default ExpenseSummary;