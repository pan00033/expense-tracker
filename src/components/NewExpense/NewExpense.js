import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const onSaveExpenseFormHandler = (savedExpenseData) => {
        props.onNewExpense(savedExpenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expenses</button>}
            {isEditing && <ExpenseForm onSavedData={onSaveExpenseFormHandler} onCancel={stopEditingHandler} />}
        </div>
    );
};

export default NewExpense;