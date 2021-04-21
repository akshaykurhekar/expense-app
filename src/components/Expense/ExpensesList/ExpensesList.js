import React from "react";
import ExpenseItems from "../ExpenseItems";
import "./ExpensesList.css";

function ExpensesList(props) {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">Item not Found.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.item.map((expense) => {
        return (
          <ExpenseItems
            key={expense.id}
            amount={expense.amount}
            title={expense.title}
            date={expense.date}
          />
        );
      })}
    </ul>
  );
}

export default ExpensesList;
