import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ categories, addExpense }) => {
  const [newExpense, setNewExpense] = useState({
    category: 'Transportation',
    amount: '',
    date: new Date().toISOString().split('T')[0]
  });

  const handleExpenseChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({ ...newExpense, [name]: value });
  };

  const handleSubmit = () => {
    if (!newExpense.amount || isNaN(newExpense.amount) || parseFloat(newExpense.amount) <= 0) {
      alert('Please enter a valid amount');
      return;
    }
    
    addExpense(newExpense);
    
    // Reset form
    setNewExpense({
      category: 'Transportation',
      amount: '',
      date: new Date().toISOString().split('T')[0]
    });
  };

  return (
    <div className="expense-form">
      <h2 className="form-title">New Expense</h2>
      
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="category" className="form-label">Category</label>
          <select 
            id="category"
            name="category" 
            value={newExpense.category}
            onChange={handleExpenseChange}
            className="form-input"
          >
            {categories.map(cat => (
              <option key={cat.name} value={cat.name}>
                {cat.icon} {cat.name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="amount" className="form-label">Amount ($)</label>
          <input 
            id="amount"
            type="number" 
            name="amount"
            value={newExpense.amount}
            onChange={handleExpenseChange}
            placeholder="0.00"
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="date" className="form-label">Date</label>
          <input 
            id="date"
            type="date" 
            name="date"
            value={newExpense.date}
            onChange={handleExpenseChange}
            className="form-input"
          />
        </div>
      </div>
      
      <button 
        onClick={handleSubmit}
        className="add-expense-btn"
        aria-label="Add expense"
      >
        Add Expense
      </button>
    </div>
  );
};

export default ExpenseForm;