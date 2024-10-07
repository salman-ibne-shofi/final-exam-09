import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cards = () => {
	const [properties, setProperties] = useState([]);
	const [showAll, setShowAll] = useState(false);

	useEffect(() => {
		fetch("/properties.json")
			.then((res) => res.json())
			.then((data) => setProperties(data));
	}, []);

	const handleShowAll = () => {
		setShowAll(true);
	};

	return (
		<>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-10 px-4 md:px-8 lg:px-12">
				{properties
					.slice(0, showAll ? properties.length : 6)
					.map((property) => (
						<div
							key={property.id}
							className="card p-4 sm:p-6 lg:p-8 border border-base-200 shadow-xl rounded-2xl"
						>
							<figure>
								<img
									className="rounded-2xl w-full h-48 object-cover"
									src={property.image}
									alt={property.estate_title}
								/>
							</figure>
							<div className="card-body">
								<h2 className="card-title text-lg md:text-xl lg:text-2xl font-bold">
									{property.estate_title}
								</h2>
								<p className="text-sm md:text-base lg:text-lg">
									{property.description}
								</p>
								<Link to={`/propdetails/${property.id}`}>
									<button className="btn btn-success text-white w-full mt-4">
										View Property
									</button>
								</Link>
							</div>
						</div>
					))}
			</div>
			{/* Show All Button */}
			{!showAll && properties.length > 6 && (
				<div className="flex justify-center my-10">
					<button
						onClick={handleShowAll}
						className="btn bg-orange-500 text-white px-6 py-3 md:px-8 md:py-4 lg:px-6 lg:py-2 text-sm md:text-base"
					>
						Show All
					</button>
				</div>
			)}
		</>
	);
};

export default Cards;
