# Budget Tracker
A minimalist monthly budget tracking application to help Olivia monitor, manage, and organize expenses. 

The recording on how it works:
https://www.loom.com/share/99cfedc70df14d57bad1fa74dff82242?sid=cbc15041-d3dd-46dc-ba9f-d57f2fbb8d3f

## Features
- Set up your monthly budget
  <img width="503" alt="Screenshot 2025-03-16 at 11 20 23 PM" src="https://github.com/user-attachments/assets/86b9fc7c-47d4-476d-907a-b42414a51508" />

- Record your daily expenses
  <img width="495" alt="Screenshot 2025-03-16 at 11 20 31 PM" src="https://github.com/user-attachments/assets/f04f45bd-93ab-4c71-9d08-872739851c9d" />
- Track your expense category
  <img width="494" alt="Screenshot 2025-03-16 at 11 20 43 PM" src="https://github.com/user-attachments/assets/84b0483f-8081-453c-b52f-b7f925196e83" />
- Visualize your spend behavior
  <img width="482" alt="Screenshot 2025-03-16 at 11 20 52 PM" src="https://github.com/user-attachments/assets/2a57c04d-fc69-41f5-abf8-de3dae957704" />

### `Tech Stack`
- React.js for the UI components
- CSS for styling (custom implementation, no frameworks)
- Recharts for data visualization
- Local browser storage for data persistence

### `Setup and Installation`
1. Clone the repository:
   git clone https://github.com/xxx/budget-tracker.git
   cd budget-tracker
2. Install dependencies: bashCopynpm install
3. Start the development server: bashCopynpm start
4. Open http://localhost:3000 to view it in the browser.

### `Usage`
Set Your Budget: Enter your monthly budget amount and click "Update"
Add Expenses:

Select a category
Enter the amount
Choose the date
Click "Add Expense"

View Summary: Check the Expense Summary section to see spending by category
Analyze Spending: View the pie chart to understand spending distribution

## Coming Next
- Add SMS/text message integration. This would allow me quickly log expenses via text message. 
- Category customization
- Provide recommendation based on purchasing behavior. Do I really need to spend over 50% of the spend on food?
