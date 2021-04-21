import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initialExpense = [
  {
    id: 1,
    title: "study material",
    amount: 123.34,
    date: new Date(2020, 2, 26),
  },
  {
    id: 2,
    title: "Hostel Fee",
    amount: 342.34,
    date: new Date(2020, 1, 26),
  },
  {
    id: 3,
    title: "Room Rent",
    amount: 345.34,
    date: new Date(2020, 3, 26),
  },
];

function App() {
  const [expenses, setExpanses] = useState(initialExpense);

  const saveExpenseHandler = (expense) => {
    setExpanses((prevExpanse) => {
      return [expense, ...prevExpanse];
    });
  };
  

  return (
    <div>
      <NewExpense saveExpense={saveExpenseHandler} />
      <Expenses expense={expenses} />
    </div>
  );
}

export default App;
