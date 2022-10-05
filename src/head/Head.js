import { useEffect, useState } from "react";
import "./Head.css";

function Head({ position, index, score, randomColorSetting }) {
	const [randomColor, setRandomColor] = useState("006400")
	
	useEffect(() => {
		if (randomColorSetting) {
			setRandomColor(Math.floor(Math.random()*16777215).toString(16))
		} else {
			setRandomColor("006400")
		}

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
