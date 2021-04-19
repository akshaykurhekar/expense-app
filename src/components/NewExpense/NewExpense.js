import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
    return (
        <div className="new-expense">
            <ExpenseForm newExpense={ props.saveExpense } />
        </div>
    );
}

export default NewExpense;