import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
	const { logIn } = useContext(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();
		console.log(e.currentTarget);
		const form = new FormData(e.currentTarget);
		const email = form.get("email");
		const password = form.get("password");
		logIn(email, password)
			.then((result) => {
				toast.success("Login successful!", {
					position: "top-right",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				console.log(result.user);

				// navigate after login
				navigate(location?.state ? location.state : "/");
			})
			.catch((error) => {
				toast.error("Login failed. Please check your credentials.", {
					position: "top-right",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				console.error(error);
			});
	};

	return (
		<div
			className="hero min-h-screen rounded-2xl my-10"
			style={{
				backgroundImage:
					"url(https://i.postimg.cc/KYxBHVWC/c3bbc62b-25c7-4cb0-b723-99b34282b875-1.jpg)",
			}}
		>
			<div className="hero-overlay bg-opacity-50"></div>
			<div className="hero-content text-neutral-content text-center">
				<div className="max-w-md">
					<h1 className="mb-5 text-5xl font-bold">Honorable User</h1>
					<p className="mb-5 text-3xl font-semibold">
						"To Access Exclusive Property Listings – Please Login!"
					</p>
					<form
						onSubmit={handleLogin}
						className="card-body border border-base-100 shadow-xl rounded-xl"
					>
						<div className="form-control">
							<label className="label">
								<span className="text-xl">Email Address</span>
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
						<div className="form-control mt-6">
							<input
								type="submit"
								value="Login"
								className="btn btn-success text-white"
							/>
						</div>
					</form>
					<p className="text-xl">
						Don't have any account!
						<Link
							className="text-orange-600 ml-2 font-semibold"
							to="/register"
						>
							Please Register
						</Link>
					</p>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

export default Login;
