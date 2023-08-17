import React from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Ice cream in Magnolia",
    amount: 15.0,
    date: new Date(2023, 6, 20),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2023, 2, 12) },
  {
    id: "e3",
    title: "Books",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "Doctor visit",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  { id: "e5", title: "New Jeans", amount: 79.49, date: new Date(2023, 6, 25) }
];

function App() {
  const [expensesList, setExpensesList] = React.useState(DUMMY_EXPENSES);

  function addExpenseHandler(expense) {
    setExpensesList((prevState) => {
      return [expense, ...prevState];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expensesList={expensesList} />
    </div>
  );
}

export default App;
