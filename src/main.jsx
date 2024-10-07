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
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Booked from "./components/Booked/Booked";
import { BookedProvider } from "./Context/BookedContext";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root></Root>,
		errorElement: <ErrorPage></ErrorPage>,
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
				path: "/propdetails/:id",
				element: (
					<PrivateRoute>
						<PropDetails></PropDetails>
					</PrivateRoute>
				),
			},
			{
				path: "/booked",
				element: (
					<PrivateRoute>
						<Booked></Booked>
					</PrivateRoute>
				),
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AuthProvider>
			<BookedProvider>
				<HelmetProvider>
					<RouterProvider router={router} />
				</HelmetProvider>
			</BookedProvider>
		</AuthProvider>
	</StrictMode>
);
