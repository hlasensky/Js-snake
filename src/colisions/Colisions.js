import React, { useEffect } from "react";

import "./Border.css";

const Colisions = ({ setGameState, position, clock, coordinates, appleCoordinates, setScore, score }) => {

	const windowHeight = 540;
	const windowWidth = 640;
	useEffect(() => {
		if (
			windowWidth - 39 < position[0] ||
			position[0] < 0 ||
			windowHeight - 39 < position[1] ||
			position[1] < 0
		) {
			setGameState("end")
			console.log("end!");
			
		}
	}, [ clock, position, setGameState ]);

	useEffect(() => {
		coordinates.map(coordinate => {
			if (position[ 0 ] === appleCoordinates[ 0 ] && position[ 1 ] === appleCoordinates[ 1 ]) {
				return setScore(score + 1)
			}
		})
	}, [position[0], position[1]]);
	
	
	useEffect(() => {
		coordinates.map(coordinate => {
			if (coordinate[ 0 ] === position[ 0 ] && coordinate[ 1 ] === position[ 1 ]) {
				setGameState("end")
			console.log("end!");
			}
		})
	}, [position[0], position[1]]);
}

export default Colisions;
