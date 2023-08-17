import React from "react";

import "./ExpensesFilter.css";

export default function ExpensesFilter(props) {
  function onFilterChangeHandler(event) {
    const selectedYear = event.target.value;
    props.onFilterChange(selectedYear);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={onFilterChangeHandler}>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  );
}
