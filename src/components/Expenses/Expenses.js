import React from "react";
import "./Expenses.css";

import WrapperStd from "../Wrapper/WrapperStd";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = React.useState("2023");

  const filteredExpenses = props.expensesList.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  function onFilterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  return (
    <WrapperStd className="expenses-list">
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={onFilterChangeHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </WrapperStd>
  );
}
