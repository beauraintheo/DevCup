import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Play from './pages/Play/Play';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/play" element={<Play />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
