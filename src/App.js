import Navbar from "./components/navbar.component";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/sign-up-form.component";
import Login from "./components/login-form.component";
import Post from "./components/post.component";
import { ToastContainer } from "react-toastify";

function App() {
	return (
		<>
			<ToastContainer theme="colored" type="success"/>
			<Navbar />
			<Routes>
				<Route path="/login" Component={Login} />
				<Route path="/sign-up" Component={Signup} />
				<Route path="/post" Component={Post}/>
			</Routes>

		</>
	);
}

export default App;
