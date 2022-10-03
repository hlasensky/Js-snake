import React, { useEffect } from "react";

import "./Border.css";

const Colisions = ({ setGameState, position, clock }) => {
	/*const windowHeight = Math.floor(window.innerHeight / 20) * 20;
	const windowWidth = Math.floor(window.innerWidth / 20) * 20;*/
	const windowHeight = 540;
	const windowWidth = 640;
	useEffect(() => {
		console.log(1)
		if (
			windowWidth - 39 < position[0] ||
			position[0] < 0 ||
			windowHeight - 39 < position[1] ||
			position[1] < 0
		) {
			setGameState("end")
			console.log("end!");
			
		}
	}, [clock, position, setGameState]);
}

export default Colisions;
