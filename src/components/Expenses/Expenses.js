import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

export default function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterChangeHandler = (selectedYear) => setFilteredYear(selectedYear);

	const filteredExpenses = props.expenses.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			{filteredExpenses.length === 0 ? (
				<p>Sem despesas encontradas.</p>
			) : (
				filteredExpenses.map((expense, index) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))
			)}
		</Card>
	);
}
