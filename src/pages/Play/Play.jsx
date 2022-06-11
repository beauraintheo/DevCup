import React from "react";
import Dice from 'react-dice-roll';

/** Componennts import */
import PlayerBoard from "../../components/PlayerBoard/PlayerBoard";
import StartButton from "../../components/StartButton/StartButton";

/** CSS import */
import "./play.css";

const Play = () => {
	const [ disableDice, setDisableDice ] = React.useState(false);
	const [ diceResult, setDiceResult ] = React.useState(0);
	const [ currentPlayerId, setCurrentPlayerId ] = React.useState(Math.floor(Math.random() * 2));
	const [ players, setPlayers ] = React.useState([
		{
			id: 1,
			name: "Théo",
			position: 0
		},
		{
			id: 2,
			name: "Acensi",
			position: 0
		}
	]);

	const boardSize = 20;

	React.useEffect(() => {
		players.map(player => {
			if (player.position === boardSize - 1) {
				alert(`Bravo à toi ${player.name}, tu as gagné l'Asenci Cup !`);
				setDisableDice(true);
			}
		})
	}, [ players ]);

	return (
		<div className="play-container">
			<div className="players-position">
				<h1>Position des joueurs</h1>
				<PlayerBoard player={players[0].name} size={boardSize} current={players[0].position} />
				<PlayerBoard player={players[1].name} size={boardSize} current={players[1].position} />
			</div>

			<div>{ diceResult === 0 ? null : <span className="dice-info">{`Tu avances de ${diceResult} case(s).`}</span> }</div>

			<div className="players-dice">
				<span>{`${players[currentPlayerId].name} : C'est à ton tour !`}</span>
				
				<div className="dices">
					<Dice disabled={disableDice} rollingTime={800} size={100} cheatValue={6} onRoll={(value) => {
						setCurrentPlayerId(players.length - 1 === currentPlayerId ? 0 : currentPlayerId + 1)
						setDiceResult(value);
						setPlayers(players.map(player => (
							player.id - 1 === currentPlayerId 
								? { ...player,  position: player.position + diceResult < boardSize - 1 ? player.position + diceResult : boardSize - 1 }
								: player
						)))
					}} />
				</div>
			</div>

			<div className="replay">
				{ disableDice ? <StartButton title="RESTART" link="/play" onClick={() => window.location.reload(true)} /> : null }
				<StartButton title="HOME" link="/" />
			</div>
		</div>
	)
};

export default Play;