import React, { useState } from "react";
import axios from "axios";

const AddBlogForm = ({ blogs, setBlogs, userToken }) => {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [url, setUrl] = useState("");

	const handleSubmit = event => {
		event.preventDefault();

		axios
			.post(
				"http://localhost:3001/api/blogs",
				{
					title,
					author,
					url
				},
				{ headers: { Authorization: `bearer ${userToken}` } }
			)
			.then(function(response) {
				setBlogs(blogs.concat(response.data));
			})
			.catch(function(error) {
				console.log(error);
			});
	};

	return (
		<>
			<h2>Add new blog</h2>
			<form onSubmit={handleSubmit}>
				<div style={{ marginBottom: "0.5rem" }}>
					<label htmlFor="title">Title:</label>
					<input
						onChange={({ target }) => setTitle(target.value)}
						type="text"
						id="title"
						name="title"
						value={title}
					/>
				</div>
				<div style={{ marginBottom: "0.5rem" }}>
					<label htmlFor="author">Author:</label>
					<input
						onChange={({ target }) => setAuthor(target.value)}
						type="text"
						id="author"
						name="author"
						value={author}
					/>
				</div>
				<div style={{ marginBottom: "0.5rem" }}>
					<label htmlFor="url">Url:</label>
					<input
						onChange={({ target }) => setUrl(target.value)}
						type="url"
						id="url"
						name="url"
						value={url}
					/>
				</div>
				<button>Save</button>
			</form>
		</>
	);
};

export default AddBlogForm;