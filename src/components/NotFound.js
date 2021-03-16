import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
	return (
		<div className="not-found">
			<h1 style={{ fontSize: "2.5rem" }}>Sorry</h1>
			<h2 style={{ fontSize: "2rem" }}>
				The Page You Are Trying To Navigate To Was Not Found :(
			</h2>
			<Link style={{ fontSize: "1.5rem" }} to="/">
				Go Back To Home Page...
			</Link>
		</div>
	);
}

export default NotFound;
