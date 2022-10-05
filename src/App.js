import React, { useState, useEffect } from "react";
import Controls from "./controls/controls";
import Colisions from "./colisions/Colisions";
import Snake from "./Snake/Snake";
import Apple from "./apple/Apple";

import "./App.css";

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function App() {
	const [direction, setDirection] = useState("right");
	const [clock, setClock] = useState(0);
	const [gameState, setGameState] = useState("start");
	const [position, setPosition] = useState([200, 200]);
	const [score, setScore] = useState(1);
	const [coordinates, setCoordinates] = useState([]);
	const [ appleCoordinates, setAppleCoordinates ] = useState([ 0, 0 ]);
	const [ randomColorSetting, setRandomColorSetting ] = useState(false)
	const [pause, setPause] = useState(false)

	useEffect(() => {
		sleep(140 - (score * 0.5)).then(() => {
			if (!pause) {
				setClock(clock + 1);
			}
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
				<h1>{ score }</h1>
				<button
					onClick={() => {
						setDirection("right")
						setGameState("start");
						setPosition([ 200, 200 ])
						setScore(1)
						setCoordinates([])

					}}
				>
					Click to start again!
				</button>
			</div>
		);
	}
	return (
		<div className="App">
			<div className="border">
				<Controls
					setDirection={setDirection}
					direction={direction}
					clock={clock}
				/>
				<Colisions
					clock={clock}
					setGameState={setGameState}
					position={position}
					coordinates={coordinates}
					appleCoordinates={appleCoordinates}
					setScore={setScore}
					score={score}
				/>
				<Snake
					score={score}
					position={position}
					direction={direction}
					setCoordinates={setCoordinates}
					coordinates={coordinates}
					randomColorSetting={randomColorSetting}
				/>
				<Apple
					score={score}
					appleCoordinates={appleCoordinates}
					setAppleCoordinates={setAppleCoordinates}
					coordinates={coordinates}
				/>
			</div>
			<div>
				<h1>{score}</h1>
				<button onClick={() => setRandomColorSetting(!randomColorSetting)}>Random color cells</button>
				<br></br>
				<button onClick={() => setPause(!pause)}>Pause</button>
			</div>
		</div>
	);
}

export default App;
