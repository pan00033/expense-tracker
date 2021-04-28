import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
    const expenseItems = props.expenses.map(expense => {
        return (
            <ExpenseItem id={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        );
    });

    return (
        <Card className="expenses">
            {expenseItems}
        </Card>
    );
}

export default Expenses;