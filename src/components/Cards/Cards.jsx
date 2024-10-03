import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cards = () => {
	const [properties, setProperties] = useState([]);
	const [showAll, setShowAll] = useState(false);

	useEffect(() => {
		fetch("properties.json")
			.then((res) => res.json())
			.then((data) => setProperties(data));
	}, []);

	const handleShowAll = () => {
		setShowAll(true);
	};

	return (
		<>
			<div className="grid grid-cols-3 gap-4">
				{properties
					.slice(0, showAll ? properties.length : 6)
					.map((propertie) => (
						<div key={propertie.id} className="card p-10 shadow-xl">
							<figure>
								<img
									className="rounded-2xl"
									src={propertie.image}
								/>
							</figure>
							<div className="card-body">
								<h2 className="card-title">
									{propertie.estate_title}
								</h2>
								<p>{propertie.description}</p>
								<Link className="btn btn-success text-white w-full">
									View Property
								</Link>
							</div>
						</div>
					))}
			</div>
			{/* Show All Button */}
			{!showAll && properties.length > 6 && (
				<div className="flex justify-center mt-4">
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
