import "./cell.css";

const Cell = ({ label }) => (
	<span className={`cell ${label === "X" ? "current-cell" : null}`}>{label}</span>
);

export default Cell;