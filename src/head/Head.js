import { useEffect, useState } from "react";
import "./Head.css";

function Head({ position, index, score }) {
	const [randomColor, setRandomColor] = useState("006400")
	
	useEffect(() => {
		setRandomColor(Math.floor(Math.random()*16777215).toString(16))

	}, [score])

	return (
		<div
			className={index === 0 ? "head first" : "head"}
			style={{
				background: `#${randomColor}`,
				transform: `translate(${position[0]}px, ${position[1]}px)`,
			}}
		>
			<span></span>
		</div>
	);
}

export default Head;
