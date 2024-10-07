import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BookedContext } from "../../Context/BookedContext";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Booked = () => {
	const navigate = useNavigate();
	const { bookedProperties, removePropertyFromBooked } =
		useContext(BookedContext);

	useEffect(() => {
		if (bookedProperties.length === 0) {
			navigate("/");
		}
	}, [bookedProperties, navigate]);

	const handleCancelBooking = (propertyId) => {
		removePropertyFromBooked(propertyId);
		toast.info("Booking cancelled");
	};

	return (
		<>
			<Helmet>
				<title>Booked Properties - Real Estate</title>
			</Helmet>
			<ToastContainer />
			<div className="my-10">
				<h1 className="text-2xl font-bold mb-6">Booked Properties</h1>
				{bookedProperties.length === 0 ? (
					<div>
						<h1>No properties booked yet.</h1>
						<Link to="/">
							<button className="btn mb-16">Back to Home</button>
						</Link>
					</div>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{bookedProperties.map((property, index) => (
							<div
								key={index}
								className="border border-base-200 shadow-xl rounded-lg p-6"
							>
								<img
									src={property.image}
									alt={property.estate_title}
									className="rounded-md mb-4"
								/>
								<h2 className="text-2xl font-bold">
									{property.estate_title}
								</h2>
								<p>Price: ${property.price}</p>
								<p>Location: {property.location}</p>
								<p>
									Status:{" "}
									{property.status === "sale"
										? "For Sale"
										: "For Rent"}
								</p>
								<button
									className="btn bg-red-500 text-white mt-4"
									onClick={() => {
										handleCancelBooking(property.id);
									}}
								>
									Cancel from List
								</button>
							</div>
						))}
					</div>
				)}
				<Link to="/" className="flex justify-center">
					<button className="btn mt-10 bg-orange-500 text-white">
						Back to Home
					</button>
				</Link>
			</div>
		</>
	);
};

export default Booked;
