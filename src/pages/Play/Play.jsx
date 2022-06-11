import React from "react";
import Dice from 'react-dice-roll';

/** Componennts import */
import Items from "../../components/Items/Items";
import PlayerBoard from "../../components/PlayerBoard/PlayerBoard";
import StartButton from "../../components/StartButton/StartButton";

/** Assets import */
import Champi from "../../assets/images/champi.webp";
import Thwomp from "../../assets/images/thwomp.webp";
import Klaxon from "../../assets/images/klaxon.webp";
import Etoile from "../../assets/images/etoile.webp";
import CarapaceBleue from "../../assets/images/carapace-bleue.png";
import ChampiBoost from "../../assets/images/champi-boost.png";
import BillBall from "../../assets/images/bill.webp";

/** CSS import */
import "./play.css";

const Play = () => {
	// List of all items
	const items = [
		{
			id: 0,
			name: "Champignon",
			desc: "Ajoute +3 à votre prochain jet de dés",
			image: Champi,
			percentage: 40,
			onClick: (id) => setActiveItem(id)
		},
		{
			id: 1,
			name: "Thwomp",
			desc: "Fait reculer l'adversaire de 3 cases",
			image: Thwomp,
			percentage: 20,
			onClick: (id) => setActiveItem(id)
		},
		{
			id: 2,
			name: "Klaxon",
			desc: "Vous protège contre la prochaine attaque",
			image: Klaxon,
			percentage: 20,
			onClick: (id) => setActiveItem(id)
		},
		{
			id: 3,
			name: "Etoile",
			desc: "Vous rend intouchable pendant 3 tours",
			image: Etoile,
			percentage: 10,
			onClick: (id) => setActiveItem(id)
		},
		{
			id: 4,
			name: "Champi Boost",
			desc: "Triple votre prochain lancer",
			image: ChampiBoost,
			percentage: 5,
			onClick: (id) => setActiveItem(id)
		},
		{
			id: 5,
			name: "Carapace bleue",
			desc: "Renvoie votre adversairee à la case départ",
			image: CarapaceBleue,
			percentage: 4,
			onClick: (id) => setActiveItem(id)
		},
		{
			id: 6,
			name: "Bill Balle",
			desc: "Vous fait gagner la course",
			image: BillBall,
			percentage: 1,
			onClick: (id) => setActiveItem(id)
		}
	];

	// List of players infos
	const [ players, setPlayers ] = React.useState([
		{
			id: 1,
			name: "Théo",
			position: 0,
			items: [],
			selectItem: false
		},
		{
			id: 2,
			name: "Acensi",
			position: 0,
			items: [],
			selectItem: false
		}
	]);

	const [ disableDice, setDisableDice ] = React.useState(false);
	const [ diceResult, setDiceResult ] = React.useState(0);
	const [ currentPlayerId, setCurrentPlayerId ] = React.useState(Math.floor(Math.random() * 2));
	const [ oldPlayerId, setOldPlayerId ] = React.useState();
	const [ activeItem, setActiveItem ] = React.useState();
	
	const boardSize = 40;

	const giveItems = () => {
		let itemByPercentage = "";
		items.map(item => { 
			for (let i = 0; i < item.percentage; i++) itemByPercentage += item.id; 
		})
		itemByPercentage = itemByPercentage.split("");

		players.map(player => {
			for (let i = 0; i < 2; i++) player.items.push(itemByPercentage[Math.floor(Math.random() * 100)])
		})
	}

	// Give items to players randomly
	React.useEffect(() => giveItems(), [])
	
	// Do a player turn
	React.useEffect(() => {
		setPlayers(players.map(player => (
			player.id - 1 === oldPlayerId 
			? { ...player,  position: player.position + diceResult < boardSize - 1 ? player.position + diceResult : boardSize - 1 }
			: player
			)))
		setActiveItem(null);
	}, [ currentPlayerId ] );

	// Alert when a player win
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

			<div className="hr"><hr /></div>

			<div className="players-dice">
				<h1>Jeu</h1>

				<div>{ diceResult === 0 ? null : <span className="dice-info">{`Ton pion avance de ${diceResult} case(s).`}</span> }</div>

				<span>{`${players[currentPlayerId].name} : C'est à ton tour !`}</span>
				
				<div className="dices">
					<Dice disabled={disableDice} rollingTime={500} size={100} cheatValue={6} onRoll={(value) => {
						setDiceResult(value);
						setOldPlayerId(currentPlayerId);
						setCurrentPlayerId(players.length - 1 === currentPlayerId ? 0 : currentPlayerId + 1);
					}} />
				</div>
			</div>

			{
				players[currentPlayerId].items.length !== 0
					? <div className="players-items">
						<div className="hr"><hr /></div>
						<Items playersItems={players[currentPlayerId].items} items={items} />
					</div>
					: null
			}

			<div className="hr"><hr /></div>

			<div className="replay">
				{ disableDice ? <StartButton title="RESTART" link="/play" onClick={() => window.location.reload(true)} /> : null }
				<StartButton title="HOME" link="/" />
			</div>
		</div>
	)
};

export default Play;