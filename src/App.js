import React, { useState, useEffect } from 'react';
import BudgetHeader from './components/BudgetHeader';
import ExpenseForm from './components/ExpenseForm';
import ExpenseSummary from './components/ExpenseSummary';
import ChartSection from './components/ChartSection';
import './App.css';

function App() {
  const [budget, setBudget] = useState(1000);
  const [expenses, setExpenses] = useState([]);
  const [remaining, setRemaining] = useState(budget);
  const [daysLeft, setDaysLeft] = useState(0);
  
  const categories = [
    { name: 'Transportation', icon: '🚗' },
    { name: 'Restaurant', icon: '🍽️' },
    { name: 'Grocery', icon: '🛒' },
    { name: 'Online Shopping', icon: '🛍️' },
    { name: 'Other', icon: '📦' }
  ];

  useEffect(() => {
    // Calculate remaining budget whenever expenses or budget changes
    const totalSpent = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount || 0), 0);
    setRemaining(budget - totalSpent);
    
    // Calculate days left in month
    const today = new Date();
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    setDaysLeft(lastDayOfMonth - today.getDate());
  }, [expenses, budget]);

  // Update budget function
  const updateBudget = (newBudget) => {
    setBudget(newBudget);
    // Remaining will be updated by the useEffect
  };

  const addExpense = (newExpense) => {
    setExpenses([...expenses, {
      ...newExpense,
      id: Date.now(),
      amount: parseFloat(newExpense.amount)
    }]);
  };

  // Group expenses by category for summary
  const getExpensesByCategory = () => {
    return categories.map(cat => {
      const totalForCategory = expenses
        .filter(expense => expense.category === cat.name)
        .reduce((sum, expense) => sum + expense.amount, 0);
      
      return {
        name: cat.name,
        icon: cat.icon,
        amount: totalForCategory
      };
    });
  };

  // Calculate total expenses
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  // Data for daily spending trend
  const getDailySpendingData = () => {
    const dailyData = {};
    
    expenses.forEach(expense => {
      const date = expense.date;
      if (!dailyData[date]) {
        dailyData[date] = 0;
      }
      dailyData[date] += expense.amount;
    });
    
    return Object.entries(dailyData).map(([date, amount]) => ({
      date,
      amount
    })).sort((a, b) => new Date(a.date) - new Date(b.date));
  };

  return (
    <div className="app-container">
      <BudgetHeader 
        budget={budget} 
        setBudget={updateBudget} 
        remaining={remaining} 
        daysLeft={daysLeft} 
      />
      
      <ExpenseForm 
        categories={categories} 
        addExpense={addExpense} 
      />
      
      <ExpenseSummary 
        expensesByCategory={getExpensesByCategory()} 
        remaining={remaining} 
        totalExpenses={totalExpenses} 
      />
      
      <ChartSection 
        expensesByCategory={getExpensesByCategory().filter(cat => cat.amount > 0)} 
        dailySpendingData={getDailySpendingData()} 
      />
    </div>
  );
}

export default App;