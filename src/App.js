import React, { useState, useEffect } from "react";
import Controls from "./controls/controls";
import Colisions from "./colisions/Colisions";
import Snake from "./Snake/Snake";

import "./App.css";

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function App() {
	const [direction, setDirection] = useState("right");
	const [clock, setClock] = useState(0);
	const [gameState, setGameState] = useState("start");
	const [position, setPosition] = useState([200, 200]);
	const [score, setScore] = useState(2);

	useEffect(() => {
		sleep(140).then(() => {
			setClock(clock + 1);
		});
	});

	useEffect(() => {
		switch (direction) {
			case "right":
				setPosition([position[0] + 40, position[1]]);
				break;
			case "left":
				setPosition([position[0] - 40, position[1]]);
				break;
			case "up":
				setPosition([position[0], position[1] - 40]);
				break;
			case "down":
				setPosition([position[0], position[1] + 40]);
				break;
			default:
				break;
		}
	}, [clock]);

	if (gameState === "end") {
		return (
			<div className="App">
				<h1>END</h1>
			</div>
		);
	}
	return (
		<div className="App">
			<div className="border">
				<Controls setDirection={setDirection} />
				<Colisions clock={clock} setGameState={setGameState} position={position} />
				<Snake score={score} position={position} direction={direction} />
			</div>
		</div>
	);
}

export default App;
