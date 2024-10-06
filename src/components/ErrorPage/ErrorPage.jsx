import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();

	return (
		<div className="error-page">
			<h2>Oops!!!</h2>
			<p></p>
			<p>{error.statusText || error.message}</p>
			{error.status === 404 && (
				<div>
					<p>
						<i>Sorry, an unexpected error has been occurred.</i>
					</p>
					<Link to="/">
						<button className="btn btn-error mt-2">
							Go Back to Home
						</button>
					</Link>
				</div>
			)}
		</div>
	);
};

export default ErrorPage;
