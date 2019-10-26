import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

const LoginForm = ({
	username,
	setUsername,
	password,
	setPassword,
	setUser,
	setNotification
}) => {
	const handleSubmit = event => {
		event.preventDefault();

		axios
			.post("http://localhost:3001/api/login", {
				username,
				password
			})
			.then(function(response) {
				setUser(response.data);
				window.localStorage.setItem(
					"loggedUser",
					JSON.stringify(response.data)
				);
			})
			.catch(function(error) {
				console.log(error);
				setNotification({
					message: "Wrong username or password!",
					type: "error"
				});
			});
	};

	return (
		<>
			<h2 className="login-heading">Log in to application</h2>
			<form onSubmit={handleSubmit}>
				<div style={{ marginBottom: "0.5rem" }}>
					<label htmlFor="username">Username:</label>
					<input
						onChange={({ target }) => setUsername(target.value)}
						type="text"
						id="username"
						name="username"
						value={username}
					/>
				</div>
				<div style={{ marginBottom: "0.5rem" }}>
					<label htmlFor="password">Password:</label>
					<input
						onChange={({ target }) => setPassword(target.value)}
						type="password"
						id="password"
						name="password"
						value={password}
					/>
				</div>
				<button>Login</button>
			</form>
		</>
	);
};

LoginForm.propTypes = {
	username: PropTypes.string,
	setUsername: PropTypes.func,
	password: PropTypes.string,
	setPassword: PropTypes.func,
	setUser: PropTypes.func,
	setNotification: PropTypes.func
};

export default LoginForm;
