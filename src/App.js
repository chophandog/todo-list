import React, { useState } from "react";

import NewExpense from "./components/new-expense/new-expense.component";
import Expenses from "./components/expenses/expenses.component";

const INITIAL_EXPENSES = [
  {
    id: "1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  {
    id: "2",
    title: "Game Of Thrones",
    amount: 799.49,
    date: new Date(2021, 5, 12),
  },
  {
    id: "3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 6, 28),
  },
  {
    id: "4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 8, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    // setExpenses([expense, ...expenses]); or

    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
