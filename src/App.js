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
function App() {
	const expenses = [];
	expenses.push(
		new Despesa("e1", "Papel higiênico", 99.0, new Date(2020, 7, 14))
	);
	expenses.push(new Despesa("e2", "Nova TV", 2900.59, new Date(2021, 2, 12)));
	expenses.push(
		new Despesa("e3", "Seguro do carro", 4441.54, new Date(2021, 2, 28))
	);
	expenses.push(
		new Despesa("e4", "Mesa Escritório", 599.99, new Date(2021, 5, 12))
	);
	const addExpenseHandler = (expense) => {
		console.log("In App.js");
		console.log(expense);
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses expenses={expenses} />
		</div>
	);
}

export default App;
