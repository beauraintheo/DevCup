import Circuit from "../Circuit/Circuit";

import "./playerBoard.css";

const PlayerBoard = ({ player, size, current }) => (
	<div className="player-board">
		<span className="player-name">{player}</span>
		<Circuit size={size} current={current} />		
	</div>
);

export default PlayerBoard;