import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Loading from "./Loading";
import useFetch from "../hooks/useFetch";

function BlogDetails() {
	const { id } = useParams();
	const [blog, setBlog] = useFetch(null, `http://localhost:8000/blogs/${id}`);
	const history = useHistory();

	const deleteBlog = () => {
		fetch(`http://localhost:8000/blogs/${id}`, {
			method: "DELETE",
		}).then(() => history.push("/"));
	};
	return (
		<div className="blog-details">
			{blog ? (
				<article>
					<h2 style={{ fontSize: "2.5rem", margin: 0 }}>
						{blog.title}
					</h2>
					<img
						src={blog.image}
						alt="Blog"
						style={{
							width: "100%",
							margin: "0.5em auto",
							display: "block",
						}}
					/>
					<p style={{ fontSize: "1.5rem" }}>
						Writte by: <strong>{blog.author}</strong>
					</p>
					<p style={{ fontSize: "2rem" }}>{blog.body}</p>

					<button onClick={deleteBlog} className="blog-delete">
						Delete Blog
					</button>
				</article>
			) : (
				<Loading></Loading>
			)}
		</div>
	);
}

export default BlogDetails;
