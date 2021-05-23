import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [isValid, setIsValid] = useState(true);

    const titleChangeHandler = (e) => {
        if (e.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredTitle(e.target.value);
    };

    const amountChangeHandler = (e) => {
        if (e.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredAmount(e.target.value);
    };

    const dateChangeHanlder = (e) => {
        if (e.target.value !== '') {
            setIsValid(true);
        }
        setEnteredDate(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseDate = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        }
        if (enteredTitle.trim().length === 0 || enteredAmount.trim().length === 0 
        || enteredDate === '') {
            setIsValid(false);
            return;
        }
        props.onSaveExpenseData(expenseDate);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form action="#" onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} 
                    onChange={titleChangeHandler} style={{borderColor: !isValid && !enteredTitle ? 'red' : 'black'}}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" 
                    onChange={amountChangeHandler} style={{borderColor: !isValid && !enteredAmount ? 'red' : 'black'}}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2021-01-01" max="2022-05-05" 
                    onChange={dateChangeHanlder} style={{borderColor: !isValid && !enteredDate ? 'red' : 'black'}}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
