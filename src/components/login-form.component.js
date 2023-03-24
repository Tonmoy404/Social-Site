import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import loginSchema from "../schema/login.schema";

const Login = (props) => {
	const navigate = useNavigate();

	return (
		<>
			<Formik
				initialValues={{ email: "", password: "" }}
                validationSchema={loginSchema}
				onSubmit={(values, e) => {
					console.log(values);
					e.setSubmitting(false);
				}}
			>
				{(formik) => (
					<Form>
						<div className="card container">
							<div className="form-group">
								<label className="form-label" htmlFor="email">
									Enter Email Address
								</label>
								<Field
									name="email"
									type="text"
									id="email"
									className="form-control"
								/>
								<div className="invalid-feedback d-block">
									<ErrorMessage name="email" />
								</div>
							</div>
							<div className="form-group">
								<label className="form-label" htmlFor="password">
									Enter Password
								</label>
								<Field
									name="password"
									id="password"
									className="form-control"
									type="text"
								/>
								<div className="invalid-feedback d-block">
									<ErrorMessage name="password" />
								</div>
                                <button type="submit" className="btn btn-primary mb-2 mt-2">Login</button>
							</div>
						</div>
					</Form>
				)}
			</Formik>
		</>
		
	);
};

export default Login;
