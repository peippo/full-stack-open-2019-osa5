import React, { useState, useEffect } from "react";
import axios from "axios";
import LoginForm from "./components/LoginForm";
import AddBlogForm from "./components/AddBlogForm";
import Blog from "./components/Blog";
import Notification from "./components/Notification";
import ToggleWrapper from "./components/ToggleWrapper";

function App() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [user, setUser] = useState(null);
	const [blogs, setBlogs] = useState(null);
	const [notification, setNotification] = useState(null);

	useEffect(() => {
		setTimeout(() => {
			setNotification(null);
		}, 5000);
	}, [notification]);

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
			<>
				{notification !== null && (
					<Notification notification={notification} />
				)}{" "}
				<LoginForm
					username={username}
					setUsername={setUsername}
					password={password}
					setPassword={setPassword}
					setUser={setUser}
					setNotification={setNotification}
				/>
			</>
		);
	}

	return (
		<>
			{notification !== null && (
				<Notification notification={notification} />
			)}
			<div style={{ marginBottom: "1rem" }}>
				{user !== null && user.name} logged in!{" "}
				<button onClick={() => handleLogout()}>Logout</button>
			</div>
			<ToggleWrapper
				showButtonLabel="Add new blog"
				hideButtonLabel="Cancel"
			>
				<AddBlogForm
					userToken={user.token}
					blogs={blogs}
					setBlogs={setBlogs}
					setNotification={setNotification}
				/>
			</ToggleWrapper>
			{blogs !== null &&
				blogs.map(blog => {
					return <Blog blog={blog} key={blog.id} />;
				})}
		</>
	);
}

export default App;
