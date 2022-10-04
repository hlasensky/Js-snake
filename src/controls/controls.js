import { useEffect } from "react";

function Controls({ setDirection, direction, clock }) {
	useEffect(() => {
		window.addEventListener("keydown", (e) => {
			if (e.defaultPrevented) {
				return;
			}
			switch (e.key) {
				case "ArrowDown":
					if (direction === "up") {
						console.log("up in down")
						setDirection("up")
						return;
					}
					setDirection("down");
					return;
				case "ArrowUp":
					if (direction === "down") {
						setDirection("down")
						return;
					}
					setDirection("up");
					return;
				case "ArrowLeft":
					if (direction === "right") {
						setDirection("right")
						return;
					}
					setDirection("left");
					return;
				case "ArrowRight":
					if (direction === "left") {
						setDirection("left")
						return;
					}
					setDirection("right");
					return;
				default:
					return;
			}
		});
	}, [clock])
}

export default Controls;
