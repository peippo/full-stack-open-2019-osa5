import React from "react";

const Notification = ({ notification }) => {
	const styles = {
		maxWidth: "200px",
		padding: "1rem",
		color: "white"
	};
	let typeStyles =
		notification.type === "error"
			? { background: "red" }
			: { background: "green" };

	return <p style={{ ...styles, ...typeStyles }}>{notification.message}</p>;
};

export default Notification;
