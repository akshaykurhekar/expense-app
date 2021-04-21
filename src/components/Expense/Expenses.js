import ExpenseItems from "./ExpenseItems";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const onChangeHandler = (data) => {
    setFilterYear(data);
  };

  const filteredItem = props.expense.filter((item) => {
    return item.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onChangeFilter={onChangeHandler} />

      {filteredItem.map((expense) => {
        return (
          <ExpenseItems
            key={expense.id}
            amount={expense.amount}
            title={expense.title}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
