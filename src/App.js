import React, { useState, useEffect } from "react";
import axios from "axios";
import LoginForm from "./components/LoginForm";
import AddBlogForm from "./components/AddBlogForm";
import Blog from "./components/Blog";

function App() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [user, setUser] = useState(null);
	const [blogs, setBlogs] = useState(null);

	useEffect(() => {
		const loggedUser = window.localStorage.getItem("loggedUser");
		if (loggedUser !== null) {
			setUser(JSON.parse(loggedUser));
		}
	}, []);

	useEffect(() => {
		axios
			.get("http://localhost:3001/api/blogs")
			.then(function(response) {
				setBlogs(response.data);
			})
			.catch(function(error) {
				console.log(error);
			});
	}, [user]);

	const handleLogout = () => {
		window.localStorage.removeItem("loggedUser");
		setUser(null);
	};

	if (user === null) {
		return (
			<LoginForm
				username={username}
				setUsername={setUsername}
				password={password}
				setPassword={setPassword}
				setUser={setUser}
			/>
		);
	}

	return (
		<>
			{user !== null && user.name} logged in!{" "}
			<button onClick={() => handleLogout()}>Logout</button>
			<AddBlogForm
				userToken={user.token}
				blogs={blogs}
				setBlogs={setBlogs}
			/>
			{blogs !== null &&
				blogs.map(blog => {
					return <Blog blog={blog} key={blog.id} />;
				})}
		</>
	);
}

export default App;
