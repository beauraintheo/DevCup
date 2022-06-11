import React from "react";

/** Components import */
import Input from "../../components/Input/Input";

/** CSS import */
import "./init.css";

const Init = () => {
	const playersInfos = [];
	const [ players, setPlayers ] = React.useState([]);
	console.log('players: ', players);
	const [ numberPlayers, setNumberPlayers ] = React.useState(2);

	React.useEffect(() => setPlayers([]), [ numberPlayers ]);

	for (let i = 0; i < numberPlayers; i++) {
		playersInfos.push("")
	}

	return (
		<div className="init-container">
			<div className="input-number-players">
				<label htmlFor="numberPlayers">Nombre de joueurs : </label>
				<input id="numberPlayers" type="number" min={2} max={5} value={numberPlayers} onChange={(e) => setNumberPlayers(e.target.value)} />
			</div>

			{
				playersInfos.map((player, index) => 
					<div className="input-number-players" key={`player${index}`}>
						<label htmlFor={`player${index}`}>Nom du joueur : </label>
						<input 
							id={`player${index}`} 
							type="text" 
							placeholder={player.value} 
							value={player}
							onChange={(e) => setPlayers(players.map((player, i) => (i === index ? e.target.value : player)))}
							/>
					</div>
				)
			}
		</div>
	)
};

export default Init;