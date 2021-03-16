import React from "react";
import { Link } from "react-router-dom";

function Blog({ blog }) {
	return (
		<Link to={`/blogs/${blog.id}`} className="blog-link">
			<div className="blog">
				<img
					className="blog-image"
					src={blog.image}
					alt={`${blog.title}`}
				/>
				<div className="blog-info-container">
					<h2 className="blog-title">{blog.title}</h2>

					<div>
						<p className="blog-date">{blog.date}</p>
						<p className="blog-author">{blog.author}</p>
					</div>
					<p className="blog-body">{blog.body}</p>
				</div>
			</div>
		</Link>
	);
}

export default Blog;
