import React from "react";
import { Link } from "react-router-dom";

function NavbarEnd({ user, logOut, handleLogOut }) {
	if (!user) {
		return (
			<Link to="/login">
				<button className="px-6 py-2 rounded-lg bg-[#00A96E] text-white hover:bg-[#00935F]">
					Login
				</button>
			</Link>
		);
	}

	return (
		<div className="flex items-center space-x-4">
			<img
				src={user.photoURL}
				alt="User Profile"
				className="w-10 h-10 rounded-full"
				title={user.displayName || "User"}
			/>
			<button
				onClick={handleLogOut}
				className="px-6 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
			>
				Log Out
			</button>
		</div>
	);
}

export default NavbarEnd;
