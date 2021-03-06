import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState();
  const [date, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
      id: Math.random().toString(),
    };

    setAmount("");
    setDate("");
    setTitle("");
    setAddExpense(false);

    props.newExpense(expenseData);
  };

  const [addExpense, setAddExpense] = useState(false);

  const cancelClickHandler = () => {
        setAddExpense(false);
  }

  const addClickHandler = () => {
    setAddExpense(true);
}

  let addExpenses = (
    <div className="add-expense__actions">
      <button onClick ={addClickHandler}>Add New Expense</button>
    </div>
  );

  if(addExpense){
  addExpenses = ( <form onSubmit={(event) => submitHandler(event)}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" onChange={(e) => titleChangeHandler(e)} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          onChange={(e) => amountChangeHandler(e)}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          onChange={(e) => dateChangeHandler(e)}
        />
      </div>
    </div>
    <div className="new-expense__actions">
      <button onClick={ cancelClickHandler} >Cancel</button>
      <button type="submit">Add Expense</button>
    </div>
  </form>)
  }

  return addExpenses

}

export default ExpenseForm;
