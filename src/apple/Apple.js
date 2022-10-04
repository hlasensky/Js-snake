import { useEffect, useState } from "react";
import "./Apple.css";

function Apple({ score,appleCoordinates, setAppleCoordinates, coordinates }) {

	function randomNumber(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	useEffect(() => {
		let positionX = randomNumber(0, 16);
		let positionY = randomNumber(0, 13);
		coordinates.slice(1).map(coordinate => {
			if (coordinate[ 0 ] === appleCoordinates[ 0 ] && coordinate[ 1 ] === appleCoordinates[ 1 ]) {
				positionX = randomNumber(0, 16);
				positionY = randomNumber(0, 13);
				
			}
		})
		setAppleCoordinates([ positionX * 40, positionY * 40 ]);
	}, [score]);
	return (
		<div
			className="apple"
			style={{
				transform: `translate(${appleCoordinates[0]}px, ${appleCoordinates[1]}px)`,
			}}
		>
			<span></span>
		</div>
	);
}

export default Apple;
