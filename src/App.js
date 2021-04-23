import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initialExpense = [
  {
    id: 1,
    title: "Note Books",
    amount: 150.40,
    date: new Date(2019, 2, 26),
  },
  {
    id: 2,
    title: "Milk expense",
    amount: 200,
    date: new Date(2020, 1, 26),
  },
  {
    id: 3,
    title: "Room Rent",
    amount: 500.50,
    date: new Date(2020, 4, 22),
  },
  {
    id: 4,
    title: "Electric Changes",
    amount: 250.50,
    date: new Date(2021, 3, 20),
  },
  {
    id: 5,
    title: "Food expense ",
    amount: 450.22,
    date: new Date(2021, 6, 21),
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
