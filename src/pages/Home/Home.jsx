/** Components import */
import StartButton from "../../components/StartButton/StartButton";

/** Assets import */
import LogoAcensi from "../../assets/logo-acensi.png";

/** CSS import */
import "./home.css";

const Home = () => {
	return (
		<div className="home-container">
			<h1>ACENSI KART</h1>

			<div className="button-list">
				<StartButton link="/play" title="START" />
				<StartButton link="/rules" title="RULES" />
				<StartButton link="/" title="QUIT" />
			</div>
		</div>
	);
};

export default Home;