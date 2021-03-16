import React from "react";

function Loading() {
	return (
		<div className="load-container">
			<h1
				style={{
					textAlign: "center",
					fontSize: "2rem",
					padding: "1em",
				}}
			>
				Cooking Some Good Blogs...
			</h1>
			<div className="lds-ripple">
				<div></div>
				<div></div>
			</div>
		</div>
	);
}

export default Loading;
