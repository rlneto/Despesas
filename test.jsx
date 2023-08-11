import React from "react";

import "./styles.css";

// don't change the Component name "App"
export default function App() {
	const [counter, setCounter] = React.useState("0");
	const incrementHandler = () => {
		setCounter((prevState) => {
			return Number(prevState) + 1;
		});
	};
	return (
		<div>
			<p id="counter">{counter}</p>
			<button onChange={incrementHandler}>Increment</button>
		</div>
	);
}
