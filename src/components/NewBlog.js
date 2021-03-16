import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function NewBlog() {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("mario");
	const [isPending, setIsPending] = useState(false);
	const history = useHistory();

	const handleSubmit = async (event) => {
		setIsPending(true);
		event.preventDefault();
		const date = new Date().toLocaleDateString();
		const blog = {
			title,
			body,
			author,
			image:
				"https://images.unsplash.com/photo-1591554338378-6dcc422b8249?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
			date,
		};

		fetch("http://localhost:8000/blogs/", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(blog),
		}).then(() => {
			setIsPending(false);
			history.push("/");
		});
	};

	useEffect(() => {}, []);
	return (
		<div className="new-blog">
			<h1>Add New Blog</h1>
			<form action="#" onSubmit={handleSubmit}>
				<label htmlFor="blogTitle">
					Blog Title
					<input
						type="text"
						required
						id="blogTitle"
						placeholder="e.g. Best Title Ever"
						value={title}
						onChange={(event) => setTitle(event.target.value)}
					/>
				</label>

				<label htmlFor="blogBody">
					Blog Body
					<textarea
						name="blogBody"
						id="blogBody"
						placeholder="e.g. A lot of words..."
						value={body}
						onChange={(event) => setBody(event.target.value)}
						required
					></textarea>
				</label>

				<label htmlFor="blogAuthor">Blog Author</label>
				<select
					name="blogAuthor"
					id="blogAuthor"
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
				>
					<option value="Mario">Mario</option>
					<option value="Osid">Osid</option>
					<option value="Luigi">Luigi</option>
				</select>

				{!isPending ? (
					<button>Add Blog</button>
				) : (
					<button disabled>Loading</button>
				)}
			</form>
		</div>
	);
}

export default NewBlog;
