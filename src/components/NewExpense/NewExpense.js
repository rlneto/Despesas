import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
	let defaultid = 0;
	const [isEditing, setIsEditing] = useState(false);
	const saveExpenseDataHandler = (enteredExpenseData) => {
		defaultid++;
		const expenseData = {
			...enteredExpenseData,
			id: defaultid,
		};
		console.log(expenseData);
		props.onAddExpense(expenseData);
	};

	const startEditingHandler = () => {
		setIsEditing(true);
	};

	const stopEditingHandler = () => {
		setIsEditing(false);
	};

	return (
		<div className="new-expense">
			{!isEditing && (
				<button onClick={startEditingHandler}>
					Adicionar nova despesa
				</button>
			)}
			{isEditing && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					cancelEditing={stopEditingHandler}
				/>
			)}
		</div>
	);
}
