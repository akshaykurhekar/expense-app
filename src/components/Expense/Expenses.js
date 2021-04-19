import ExpenseItems from "./ExpenseItems";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {  

    const [filterYear,setFilterYear] = useState('2020');

    const onChangeHandler = (data) =>{
        setFilterYear(data);
    }

  return (        
      <Card className="expenses">
            
        <ExpensesFilter selected={filterYear} onChangeFilter={onChangeHandler}/>

        {props.expense.map((key, id) => {
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
