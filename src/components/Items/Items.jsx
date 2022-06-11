import Card from "../Card/Card";
import "./items.css";

const Items = ({ playersItems, items }) => {
	return (
		<div className="items-container">
			{ 
				playersItems 
				&& playersItems.length !== 0 
				&& playersItems.map((playerItem, index) => <Card key={index} data={items[playerItem]} selectItem={index} />) 
			}
		</div>
	)
};

export default Items;