import { useState } from "react";
import ExpensesList from "./ExpensesList//ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

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
      <ExpensesFilter 
        selected={filterYear} 
        onChangeFilter={onChangeHandler} />
        <ExpensesChart expenses={filteredItem} />
      <ExpensesList item={filteredItem} />
    </Card>
  );
}

export default Expenses;
