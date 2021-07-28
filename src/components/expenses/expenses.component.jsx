import React, { useState } from "react";

import Card from "../card/card.component";
import ExpensesList from "../expenses-list/expenses-list.component";
import ExpensesFilter from "../expenses-filter/expenses-filter.component";

import "./expenses.styles.css";
import ExpensesChart from "../expense-chart/expense-chart.component";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
