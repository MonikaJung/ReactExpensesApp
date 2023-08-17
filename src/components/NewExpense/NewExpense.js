import React from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";
import WrapperStd from "../Wrapper/WrapperStd";

export default function NewExpense(props) {
  const [isFormHidden, setIsFormHidden] = React.useState(true);

  function onSubmitHandler(formData) {
    const newExpenseData = {
      id: (Math.random() * 100000).toFixed(0).toString(),
      ...formData,
    };

    props.onAddExpense(newExpenseData);
    setIsFormHidden(true);
  }

  function onShowFormHandler() {
    setIsFormHidden(false);
  }

  function onCancelFormHandler() {
    setIsFormHidden(true);
  }

  return (
    <WrapperStd className="new-expense">
      {!isFormHidden ? (
        <ExpenseForm
          onSubmit={onSubmitHandler}
          onCancelForm={onCancelFormHandler}
        />
      ) : (
        <button onClick={onShowFormHandler}>Add new expense</button>
      )}
    </WrapperStd>
  );
}
