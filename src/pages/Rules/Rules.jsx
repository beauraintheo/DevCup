import StartButton from "../../components/StartButton/StartButton";

import "./rules.css";

const Rules = () => (
	<div className="rules-container">
		<h1>Règles du jeu</h1>

		<p>Bienvenue dans Acensi Kart, le <b>REVOLUTIONNAIRE</b> Mario Kart enfin adapté sous format jeu de plateau !</p>
		<p>Les règles du jeu sont simples : a tour de rôle, les utilisateurs lanceront un dé afin d'avancer de X cases sur leur plateau de jeu, le but étant d'arriver en premier à l'arrivée</p>
		<p>Pour vous aider dans votre course, vous y trouverez des objets qui pourront vous aider, ou, au contraire, pénaliser vos adversaires ...</p>
		<p>Je n'ai qu'une chose à dire : à vos karts ! Prêts ! C'est partiiii !!! </p>

		<StartButton title="PLAY" link="/play" />
		<StartButton title="HOME" link="/" />
	</div>
);

export default Rules;