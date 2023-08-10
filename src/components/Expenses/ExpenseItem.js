import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
	const botaoComprar = `Comprar!`;
	const [title, setTitle] = useState(props.title);
	const [comprar, setComprar] = useState(botaoComprar);

	const clickHandler = () => {
		if (title === `${props.title} comprado!`) {
			setTitle(`${props.title}`);
		} else {
			setTitle(`${props.title} comprado!`);
		}
		if (comprar === `Comprar!`) {
			setComprar(`Cancelar compra...`);
		} else {
			setComprar(`Comprar!`);
		}
	};
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">{props.amount} R$</div>
			</div>
			<button onClick={clickHandler}>{comprar}</button>
		</Card>
	);
}

// export default ExpenseItem;
