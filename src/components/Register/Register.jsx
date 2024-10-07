import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";

const Register = () => {
	const { createUser } = useContext(AuthContext);

	const [registerError, setRegisterError] = useState("");
	const [success, setSuccess] = useState("");

	const validatePassword = (password) => {
		const hasUpperCase = /[A-Z]/.test(password);
		const hasLowerCase = /[a-z]/.test(password);
		const hasMinLength = password.length >= 6;
		if (!hasUpperCase || !hasLowerCase || !hasMinLength) {
			let errorMessage = "Password must contain:";
			if (!hasUpperCase) errorMessage += "1 uppercase letter";
			if (!hasLowerCase) errorMessage += "1 lowercase letter";
			if (!hasMinLength) errorMessage += "At least 6 characters.";
			return errorMessage;
		}
		return null;
	};

	const handleRegister = (e) => {
		e.preventDefault();
		console.log(e.currentTarget);
		const form = new FormData(e.currentTarget);
		const name = form.get("name");
		const email = form.get("email");
		const photo = form.get("photo");
		const password = form.get("password");

		// reset previous error/success
		setRegisterError("");
		setSuccess("");

		// validate password
		const passwordError = validatePassword(password);
		if (passwordError) {
			setRegisterError(passwordError);
			toast.error(passwordError);
			return;
		}

		// create user
		try {
			// Create user with email and password
			const result = createUser(email, password);
			const user = result.user;

			// Update user profile with displayName and photoURL
			updateProfile(user, {
				displayName: name,
				photoURL: photo,
			});

			setSuccess("Successfully Registered!");
			toast.success("User created successfully!");
		} catch (error) {
			setRegisterError(error.message);
			toast.error(error.message);
		}
	};

	return (
		<>
			{/* Helmet for setting the page title and meta description */}
			<Helmet>
				<title>Register - Real Estate</title>
				<meta
					name="description"
					content="Create an account to access exclusive property listings and enjoy personalized services."
				/>
			</Helmet>
			{/* Toast container for notifications */}
			<ToastContainer position="top-right" autoClose={3000} />
			<div
				className="hero min-h-screen rounded-2xl my-10"
				style={{
					backgroundImage:
						"url(https://i.postimg.cc/KYxBHVWC/c3bbc62b-25c7-4cb0-b723-99b34282b875-1.jpg)",
				}}
			>
				<div className="hero-overlay bg-opacity-50"></div>
				<div className="hero-content text-neutral-content text-center">
					<div className="max-w-md text-white">
						<h1 className="mb-5 text-5xl font-bold">New User</h1>
						<p className="mb-5 text-3xl font-semibold">
							"Enagege With Us & Find Your Address - Register
							Now!"
						</p>
						<form
							onSubmit={handleRegister}
							className="card-body border border-base-200 shadow-xl rounded-xl"
						>
							<div className="form-control">
								<label className="label">
									<span className="text-xl">Your Name</span>
								</label>
								<input
									type="text"
									name="name"
									placeholder="Name"
									className="input input-bordered"
									required
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="text-xl">
										Email Address
									</span>
								</label>
								<input
									type="email"
									name="email"
									placeholder="Email"
									className="input input-bordered"
									required
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="text-xl">Photo URL</span>
								</label>
								<input
									type="text"
									name="photo"
									placeholder="Photo URL"
									className="input input-bordered"
									required
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="text-xl">Password</span>
								</label>
								<input
									type="password"
									name="password"
									placeholder="Password"
									className="input input-bordered"
									required
								/>
								<label className="label">
									<a
										href="#"
										className="label-text-alt link link-hover"
									></a>
								</label>
							</div>
							<div className="form-control mt-6">
								<button className="p-2 rounded-lg bg-[#00935F] text-white">
									Register
								</button>
							</div>
						</form>
						<p className="text-xl">
							Already have an account?
							<Link
								className="text-orange-500 ml-2 font-semibold"
								to="/login"
							>
								Please Login
							</Link>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
