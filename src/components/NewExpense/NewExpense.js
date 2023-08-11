import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
	let defaultid = 0;
	const saveExxpenseDataHandler = (enteredExpenseData) => {
		defaultid++;
		const expenseData = {
			...enteredExpenseData,
			id: defaultid,
		};
		console.log(expenseData);
		props.onAddExpense(expenseData);
	};
	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={saveExxpenseDataHandler} />
		</div>
	);
}
