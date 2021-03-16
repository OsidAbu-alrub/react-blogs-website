import React from "react";
import { Link } from "react-router-dom";
import Blog from "./Blog";

function BlogList({ title, blogs, handleClick }) {
	return (
		<div>
			<h1 style={{ fontSize: "3rem" }}>{title}</h1>
			{blogs.map((blog) => (
				<Blog
					blog={blog}
					handleClick={handleClick}
					key={blog.id}
				></Blog>
			))}
		</div>
	);
}

export default BlogList;
