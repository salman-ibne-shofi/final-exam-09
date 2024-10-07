import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut()
			.then(() => {
				toast.info("Logged out successfully!", {
					position: "top-right",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			})
			.catch((error) => {
				toast.error("Logout failed", {
					position: "top-right",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				console.log(error);
			});
	};

	const navlinks = (
		<>
			<li>
				<NavLink to="/">Home</NavLink>
			</li>
			<li>
				<a>Update Profile</a>
			</li>
			<li>
				<NavLink to="/booked">Already Booked</NavLink>
			</li>
		</>
	);

	return (
		<div className="navbar bg-base-100 p-4">
			<div className="navbar-start">
				<div className="dropdown">
					{/* Dropdown for mobile view */}
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost lg:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
					>
						{navlinks}
					</ul>
				</div>
				{/* Brand Title */}
				<a className="text-3xl font-bold text-[#00935F]">
					Property & Real Estate
				</a>
			</div>

			{/* Navigation Links for Desktop */}
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">{navlinks}</ul>
			</div>

			<div className="navbar-end">
				{/* User Profile / Login Button */}
				{user ? (
					<div className="flex items-center space-x-4">
						<img
							src={user.photoURL}
							alt="User Profile"
							className="w-10 h-10 rounded-full"
							title={user.displayName || "user"}
						/>
						<button
							onClick={handleLogOut}
							className="px-6 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
						>
							Log Out
						</button>
					</div>
				) : (
					<Link to="/login">
						<button className="px-6 py-2 rounded-lg bg-[#00A96E] text-white hover:bg-[#00935F]">
							Login
						</button>
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;
