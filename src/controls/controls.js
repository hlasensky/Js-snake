function Controls({setDirection}) {
	window.addEventListener("keydown", (e) => {
		if (e.defaultPrevented) {
			return;
		}
		switch (e.key) {
			case "ArrowDown":
				// code for "down arrow" key press.
				setDirection("down");
				break;
			case "ArrowUp":
				setDirection("up");
				// code for "up arrow" key press.
				break;
			case "ArrowLeft":
				setDirection("left");
				// code for "left arrow" key press.
				break;
			case "ArrowRight":
				setDirection("right");
				// code for "right arrow" key press.
				break;
			default:
				return; // Quit when this doesn't handle the key event.
		}
  });
}

export default Controls;
