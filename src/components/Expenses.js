import ExpenseItems from "./ExpenseItems";
import Card from './Card';
import "./Expenses.css";

function Expenses(props) {
  const expense = [
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

  return (        
      <Card className="expenses">
        {expense.map((key, id) => {
            return (
            <ExpenseItems
              key={id}
              amount={key.amount}
              title={key.title}
              date={key.date}
            />
          );
        })}
      </Card>    
  );
}

export default Expenses;
