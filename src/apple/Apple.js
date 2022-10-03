

function Apple() {

    const positionX = Math.random()
    const positionY = Math.random()
	return (
		<div
			style={{
				transform: `translate(${positionX}px, ${positionY}px)`,
			}}
		>
			<span></span>
		</div>
	);
}

export default Apple;
