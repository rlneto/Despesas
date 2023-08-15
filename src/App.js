import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

class Despesa {
	constructor(id, title, amount, date) {
		this.id = id;
		this.title = title;
		this.amount = amount;
		this.date = date;
	}
}
const INITIAL_EXPENSES = [];
INITIAL_EXPENSES.push(
	new Despesa("e1", "Papel higiênico", 99.0, new Date(2020, 7, 14))
);
INITIAL_EXPENSES.push(
	new Despesa("e2", "Nova TV", 2900.59, new Date(2021, 2, 12))
);
INITIAL_EXPENSES.push(
	new Despesa("e3", "Seguro do carro", 4441.54, new Date(2021, 2, 28))
);
INITIAL_EXPENSES.push(
	new Despesa("e4", "Mesa Escritório", 599.99, new Date(2021, 5, 12))
);
function App() {
	const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
	const addExpenseHandler = (expense) => {
		setExpenses((prevState) => {
			return [expense, ...prevState];
		});
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses expenses={expenses} />
		</div>
	);
}

export default App;
