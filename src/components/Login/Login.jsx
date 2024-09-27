import { Link } from "react-router-dom";

const Login = () => {
	const handleLogin = (e) => {
		e.preventDefault();
		console.log(e.currentTarget);
		const form = new FormData(e.currentTarget);
		console.log(form.get("password"));
	};

	return (
		<div
			className="hero min-h-screen rounded-2xl"
			style={{
				backgroundImage:
					"url(https://i.postimg.cc/KYxBHVWC/c3bbc62b-25c7-4cb0-b723-99b34282b875-1.jpg)",
			}}
		>
			<div className="hero-overlay bg-opacity-50"></div>
			<div className="hero-content text-neutral-content text-center">
				<div className="max-w-md">
					<h1 className="mb-5 text-5xl font-bold">Hello there</h1>
					<p className="mb-5 text-3xl font-semibold">
						"Unlock Access to Exclusive Property Listings – Please
						Login First!"
					</p>
					<form
						onSubmit={handleLogin}
						className="card-body border rounded-xl"
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
							<button className="btn btn-success">Login</button>
						</div>
					</form>
					<p className="text-xl">
						Don't have an account
						<Link className="text-orange-600 ml-2" to="/register">Please Register!</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
