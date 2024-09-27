import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root></Root>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<HelmetProvider>
			<RouterProvider router={router} />
		</HelmetProvider>
	</StrictMode>
);
