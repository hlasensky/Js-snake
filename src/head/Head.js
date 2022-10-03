import { useEffect, useState } from "react";
import "./Head.css";

function Head({position}) {

    console.log(position)
	return (
		<div
			className="head"
			style={{
				transform: `translate(${position[0]}px, ${position[1]}px)`,
			}}
		>
			<span></span>
		</div>
	);
}

export default Head;
