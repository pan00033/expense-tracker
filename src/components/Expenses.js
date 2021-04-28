import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
    const expenseItems = props.expenses.map(expense => {
        return (
            <ExpenseItem id={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        );
    });

    return (
        <div className="expenses">
            {expenseItems}
        </div>
    );
}

export default Expenses;