import React, { useState } from "react";

const Blog = ({ blog, handleLikeClick }) => {
	const [isOpen, setIsOpen] = useState(false);

	let addedBy = null;
	if (blog.user) {
		addedBy = <p>Added by {blog.user.name}</p>;
	}

	if (!isOpen) {
		return (
			<div
				onClick={() => setIsOpen(!isOpen)}
				style={{
					border: "1px solid gray",
					padding: "10px",
					marginTop: "5px"
				}}
			>
				<b>{blog.title}</b> by {blog.author}
			</div>
		);
	} else {
		return (
			<div
				style={{
					position: "relative",
					border: "1px solid gray",
					padding: "10px",
					marginTop: "5px"
				}}
			>
				<div
					onClick={() => setIsOpen(!isOpen)}
					style={{
						background: "black",
						color: "white",
						margin: "-10px -10px 10px -10px",
						padding: "10px"
					}}
				>
					<b>{blog.title}</b> by {blog.author}
				</div>
				<p>
					<a href={blog.url}>{blog.url}</a>
				</p>
				<p>
					{blog.likes} likes{" "}
					<button onClick={() => handleLikeClick(blog)}>
						+1 like
					</button>
				</p>
				{addedBy}
			</div>
		);
	}
};

export default Blog;
