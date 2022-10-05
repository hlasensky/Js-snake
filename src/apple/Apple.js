import { useEffect, useState } from "react";
import "./Apple.css";

function Apple({ score, appleCoordinates, setAppleCoordinates, coordinates }) {
	function randomNumber(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	useEffect(() => {
		let positionX = randomNumber(0, 16);
		let positionY = randomNumber(0, 13);
		const newCoordinates = coordinates.slice(1)
		newCoordinates.map((coordinate) => {
			if (
				coordinate[0] === appleCoordinates[0] &&
				coordinate[1] === appleCoordinates[1]
			) {
				console.log("newPosition")
				positionX = randomNumber(0, 16);
				positionY = randomNumber(0, 13);
			}
		});
		setAppleCoordinates([positionX * 40, positionY * 40]);
	}, [score]);
	return (
		<div
			className="appleContainer"
			style={{
				left: `${appleCoordinates[0]}px`,
				top: `${appleCoordinates[1]}px`,
			}}
		>
			<span className="apple"></span>
		</div>
	);
}

export default Apple;
