import React from "react";
import useFetch from "../hooks/useFetch";
import BlogList from "./BlogList";
import Loading from "./Loading";

function Home() {
	const [blogs, setBlogs] = useFetch([], "http://localhost:8000/blogs");
	const handleClick = (id) =>
		setBlogs(blogs.filter((blog) => id !== blog.id));
	return (
		<div className={`home ${!blogs.length && "loading-data"}`}>
			{blogs.length > 0 ? (
				<BlogList
					title={"All Blogs"}
					blogs={blogs}
					handleClick={handleClick}
				></BlogList>
			) : (
				<Loading></Loading>
			)}
		</div>
	);
}

export default Home;
