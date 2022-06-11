import "./startButton.css";
import { Link } from "react-router-dom";

const StartButton = ({ title, link, onClick }) => (
	<Link to={link} onClick={onClick} className="start-button">{title}</Link>
);

export default StartButton;