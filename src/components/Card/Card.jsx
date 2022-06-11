import Flippy, { FrontSide, BackSide } from 'react-flippy';

import "./card.css";

const Card = ({ data }) => {
	return (
		<div className="card-container">
			<Flippy 
				flipOnHover={true}
				flipOnClick={false}
				flipDirection="horizontal"
				style={{ width: "150px", height: "200px" }}
				onClick={() => data.onClick(data.id)}
			>
				<FrontSide style={{ borderRadius: "10px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly", backgroundColor: '#0fa7dd' }}>
					{ data.name }
					<img src={data.image} alt="#" />
				</FrontSide>
				<BackSide style={{ borderRadius: "10px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly", backgroundColor: '#dd450f' }}>{ data.desc }</BackSide>
			</Flippy>
		</div>
	);
};

export default Card;