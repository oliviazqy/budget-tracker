import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import './ChartSection.css';

const ChartSection = ({ expensesByCategory }) => {
  // Modern color palette that works well on dark backgrounds
  const COLORS = ['#0070f3', '#ff4d4f', '#7928ca', '#f5a623', '#50e3c2', '#ff0080'];

  // Custom legend renderer to ensure text doesn't get cut off
  const renderLegend = (props) => {
    const { payload } = props;
    
    return (
      <ul className="custom-legend">
        {payload.map((entry, index) => (
          <li key={`legend-item-${index}`} className="legend-item">
            <span className="legend-color" style={{ backgroundColor: entry.color }}></span>
            <span className="category-name">{entry.name}</span>
            <span className="legend-text">{(entry.payload.percent * 100).toFixed(0)}%</span>
          </li>
        ))}
      </ul>
    );
  };

  // Format numbers for labels and tooltips
  const formatValue = (value) => `$${value.toFixed(2)}`;
  
  return (
    <div className="chart-section">
      <h2 className="chart-title">Spending by Category</h2>
      
      {expensesByCategory.length > 0 ? (
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={expensesByCategory}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="amount"
                nameKey="name"
                labelLine={false}
                label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
              >
                {expensesByCategory.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index % COLORS.length]} 
                    stroke="#111" 
                    strokeWidth={2}
                  />
                ))}
              </Pie>
              <Tooltip 
                formatter={formatValue}
                contentStyle={{ 
                  backgroundColor: 'rgba(0, 0, 0, 0.85)', 
                  border: '1px solid #333',
                  borderRadius: '4px',
                  color: '#fff' 
                }}
                itemStyle={{ color: '#fff' }}
                labelStyle={{ color: '#fff' }}
                cursor={{ fill: 'transparent' }}
              />
              <Legend 
                content={renderLegend}
                layout="vertical"
                align="right"
                verticalAlign="middle"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="no-data-message">
          <p>No spending data to display yet</p>
          <p className="hint-text">Add expenses to see your spending breakdown</p>
        </div>
      )}
    </div>
  );
};

export default ChartSection;