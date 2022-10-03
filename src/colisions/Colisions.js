import React, { useState } from "react";

import "./Border.css";

function Colisions({ setGameState, position }) {
	const windowHeight = Math.floor(window.innerHeight / 20) * 20;
	const windowWidth = Math.floor(window.innerWidth / 20) * 20;
    console.log(windowHeight)
	useState(() => {
		if (
			windowWidth < position[0] ||
			position[0] < 0 ||
			windowHeight < position[1] ||
			position[1] < 0
		) {
			console.log("end!");
			setGameState("end");
		}
	}, [position]);
}

export default Colisions;
