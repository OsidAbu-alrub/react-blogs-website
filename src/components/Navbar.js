import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
	return (
		<nav className="navbar">
			<Link to="/" style={{ textDecoration: "none" }}>
				<h1 className="navbar-title" style={{ cursor: "pointer" }}>
					ABU-ALBITS BLOG
				</h1>
			</Link>
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/new-blog">New Blog</Link>
			</div>
		</nav>
	);
}

export default Navbar;
