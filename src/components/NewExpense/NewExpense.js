import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const onSaveExpenseFormHandler = (savedExpenseData) => {
        props.onNewExpense(savedExpenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSavedData={onSaveExpenseFormHandler} />
        </div>
    );
};

export default NewExpense;