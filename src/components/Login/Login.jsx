import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { CgGoogle } from "react-icons/cg";
import { FaGithub } from "react-icons/fa6";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
	const { logIn, signInWithGithub, signInWithGoogle } =
		useContext(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);

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
		signInWithGoogle()
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
				className="hero min-h-screen my-10 rounded-xl"
				style={{
					backgroundImage:
						"url(https://i.postimg.cc/KYxBHVWC/c3bbc62b-25c7-4cb0-b723-99b34282b875-1.jpg)",
				}}
			>
				<div className="hero-overlay bg-opacity-50"></div>
				<div className="hero-content text-neutral-content text-center">
					<div className="max-w-md w-full text-white">
						<h1 className="mb-5 text-4xl md:text-5xl font-bold">
							Honorable User
						</h1>
						<p className="mb-5 text-2xl md:text-3xl font-semibold">
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
								<div className="input-pass relative">
									<input
										type={
											showPassword ? "text" : "password"
										}
										name="password"
										placeholder="Password"
										className="input input-bordered w-full"
										required
									/>
									<span
										className="absolute top-1/3 right-4"
										onClick={() =>
											setShowPassword(!showPassword)
										}
									>
										{showPassword ? (
											<FaEyeSlash />
										) : (
											<FaEye />
										)}
									</span>
								</div>
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
								className="relative p-2 rounded-lg bg-[#EA473A] text-white mt-4 w-full"
								onClick={handleGoogleLogin}
							>
								<CgGoogle className="h-6 w-6 absolute left-4 top-2 ml-24" />
								Google LogIn
							</button>
							{/* GitHub Login */}
							<button
								className="relative p-2 rounded-lg bg-black text-white mt-4 w-full"
								onClick={handleGithubLogin}
							>
								<FaGithub className="h-6 w-6 absolute left-4 top-2 ml-24" />
								GitHub Login
							</button>
						</form>
						<p className="text-xl mt-4">
							Don't have an account?
							<Link
								className="underline ml-2 font-bold"
								to="/register"
								style={{ textDecorationColor: "#fb923c" }}
							>
								Register
							</Link>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
