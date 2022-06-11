import Cell from "../Cell/Cell";

import "./circuit.css";

const Circuit = ({ current, size }) => {
	const boardGame = [];

	for (let i = 0; i < size; i++) current === i ? boardGame.push(<Cell label="X" />) : boardGame.push(<Cell label="O" />)

	return (
		<div className="circuit">
			{ boardGame.map((cell, index) => cell) }
		</div>
	)
};

export default Circuit;