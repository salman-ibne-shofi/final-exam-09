import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const Login = () => {
	const { logIn, signInWithGithub } = useContext(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();

	const googleProvider = new GoogleAuthProvider();

	const handleLogin = (e) => {
		e.preventDefault();
		console.log(e.currentTarget);
		const form = new FormData(e.currentTarget);
		const email = form.get("email");
		const password = form.get("password");

		toast.promise(
			logIn(email, password)
				.then((result) => {
					console.log(result.user);

					// Navigate after successful login
					navigate(location?.state ? location.state : "/");
				})
				.catch((error) => {
					throw new Error(
						"Login failed. Please check your credentials."
					);
				}),
			{
				pending: "Logging in...",
				success: "Login successful!",
				error: {
					render({ data }) {
						return data.message || "Login failed!";
					},
				},
			}
		);
	};

	const handleGoogleLogin = () => {
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				console.log(result.user);
				toast.success("Google login successful!");
				// Redirect to homepage or desired page
				navigate(location?.state ? location.state : "/");
			})
			.catch((error) => {
				console.error(error);
				toast.error("Google login failed!");
			});
	};

	const handleGithubLogin = () => {
		signInWithGithub()
			.then((result) => {
				console.log(result.user);
				toast.success("GitHub login successful!");
				navigate(location?.state ? location.state : "/");
			})
			.catch((error) => {
				console.error(error);
				toast.error("GitHub login failed!");
			});
	};

	return (
		<>
			{/* Helmet for setting the page title and meta description */}
			<Helmet>
				<title>Login - Real Estate</title>
				<meta
					name="description"
					content="Login to your real estate account to access exclusive property listings and features."
				/>
			</Helmet>
			<ToastContainer />
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
						<h1 className="mb-5 text-5xl font-bold">
							Honorable User
						</h1>
						<p className="mb-5 text-3xl font-semibold">
							"To Access Exclusive Property Listings – Please
							Login!"
						</p>
						<form
							onSubmit={handleLogin}
							className="card-body border border-base-100 shadow-xl rounded-xl"
						>
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
							{/* LogIn */}
							<div className="form-control mt-6">
								<input
									type="submit"
									value="Login"
									className="p-2 rounded-lg bg-[#00935F] text-white"
								/>
							</div>
							{/* Google LogIn */}
							<button
								className="p-2 rounded-lg bg-red-500 text-white mt-4"
								onClick={handleGoogleLogin}
							>
								Google LogIn
							</button>
							{/* GitHub Login */}
							<button
								className="p-2 rounded-lg bg-black text-white mt-4"
								onClick={handleGithubLogin}
							>
								GitHub Login
							</button>
						</form>
						<p className="text-xl">
							Don't have an account!
							<Link
								className="text-orange-500 ml-2 font-semibold"
								to="/register"
							>
								Please Register
							</Link>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
