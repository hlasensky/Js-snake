import { useEffect, useState } from "react";
import Head from "../head/Head";

function Snake({ position, score, setCoordinates, coordinates }) {

    
    
    useEffect(() => {
		setCoordinates([position,...coordinates].slice(0,score))
	}, [position[0], position[1], score]);


	const renderSnake = coordinates.map((position, index) => {
		return <Head key={index} index={index} position={position} />;
	});
	return renderSnake;
}

export default Snake;
