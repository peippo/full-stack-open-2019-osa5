import React from "react";

function App() {
	return (
		<>
			<h2>Log in to application</h2>
			<div style={{ marginBottom: "0.5rem" }}>
				<label htmlFor="username">Username:</label>
				<input type="text" id="username" name="username" />
			</div>
			<div style={{ marginBottom: "0.5rem" }}>
				<label htmlFor="password">Password:</label>
				<input type="password" id="password" name="password" />
			</div>
			<button>Login</button>
		</>
	);
}

export default App;
