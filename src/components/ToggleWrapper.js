import React, { useState } from "react";

const ToggleWrapper = ({ showButtonLabel, hideButtonLabel, children }) => {
	const [isVisible, setIsVisible] = useState(false);

	if (!isVisible) {
		return (
			<button onClick={() => setIsVisible(!isVisible)}>
				{showButtonLabel}
			</button>
		);
	}

	if (isVisible) {
		return (
			<>
				<div>{children}</div>
				<button onClick={() => setIsVisible(!isVisible)}>
					{hideButtonLabel}
				</button>
			</>
		);
	}
};

export default ToggleWrapper;
