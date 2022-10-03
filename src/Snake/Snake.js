import { useEffect, useState } from "react";
import Head from "../head/Head";

function Snake({ position, score }) {
	const [coordinates, setCoordinates] = useState([
		[position[0], position[1]],
	]);

    
    
    useEffect(() => {
        console.log(coordinates)
		const newCoordinates = coordinates.map((position, index) => {
			return [position[0] - index * 40, position[1]];
        });
        console.log(newCoordinates)
		setCoordinates(newCoordinates);
	}, [position[0]]);

	useEffect(() => {
		const newCoordinates = coordinates.map((position, index) => {
			return [position[0], position[1] - index * 40];
		});
		setCoordinates(newCoordinates);
	}, [position[1]]);

	const renderSnake = coordinates.map((position) => {
		return <Head key={Math.random()} position={position} />;
	});
	return renderSnake;
}

export default Snake;
