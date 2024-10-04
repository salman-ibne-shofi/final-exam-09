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
			<div className="grid grid-cols-3 gap-2 mt-10">
				{properties
					.slice(0, showAll ? properties.length : 6)
					.map((property) => (
						<div
							key={property.id}
							className="card p-10 border border-base-200 shadow-xl"
						>
							<figure>
								<img
									className="rounded-2xl"
									src={property.image}
								/>
							</figure>
							<div className="card-body">
								<h2 className="card-title">
									{property.estate_title}
								</h2>
								<p>{property.description}</p>
								<Link
									to={`/propdetails/${property.id}`}
									className="btn btn-success text-white w-full"
								>
									View Property
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
						className="btn bg-orange-500 text-white"
					>
						Show All
					</button>
				</div>
			)}
		</>
	);
};

export default Cards;
