import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./providers/AuthProvider";
import Banner from "./components/Banner/Banner";
import Cards from "./components/Cards/Cards";
import PropDetails from "./components/PropDetails/PropDetails";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root></Root>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
			{
				path: "/banner",
				element: <Banner></Banner>,
			},
			{
				path: "/cards",
				element: <Cards></Cards>,
			},
			{
				path: "/propdetails",
				element: <PropDetails></PropDetails>,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</StrictMode>
);
