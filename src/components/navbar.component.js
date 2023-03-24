import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Navbar() {
	return (

		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link className="navbar-brand" to="/home">
				Home
			</Link>
			<Link className="navbar-brand" to="/post">
				Post
			</Link>
			<Link className="navbar-brand" to="/sign-up">
				Sign Up
			</Link>
			<Link className="navbar-brand" to="/login">
				Log In
			</Link>
		</nav>
	);
}

export default Navbar;
