import React from "react";

function Input({type, id, value, handleChange, error}) {
	return (
        <>
		<input
			type={type}
			className="form-control"
			id={id}
			value={value}
			onChange={handleChange}
		/>
        {error && <div className="invalid-feedback d-block">{error}</div>}

        </>
	);
}

export default Input;
