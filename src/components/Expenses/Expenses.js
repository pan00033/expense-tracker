import { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const expenseItems = props.expenses.map(expense => {
        return (
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        );
    });

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {expenseItems}
            </Card>
        </div>
    );
}

export default Expenses;