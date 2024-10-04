import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PropDetails = () => {
	const { id } = useParams();
	const [property, setProperty] = useState(null);

	useEffect(() => {
		fetch("/properties.json")
			.then((res) => res.json())
			.then((data) => {
				const selectedProperty = data.find(
					(prop) => prop.id === parseInt(id)
				);
				setProperty(selectedProperty);
			});
	}, [id]);

	if (!property) {
		return <div>Loading...</div>;
	}

	return (
		<div className="hero my-10 border border-base-200 shadow-xl rounded-3xl">
			<div className="p-32">
				<img
					src={property.image}
					alt={property.estate_title}
					className="rounded-2xl shadow-2xl mb-4"
				/>
				<div className="p-6">
					<h1 className="text-5xl font-bold">
						{property.estate_title}
					</h1>
					<p className="py-6">{property.description}</p>

					{/* Additional Information */}
					<h2 className="text-3xl font-bold mt-4">
						Segment: {property.segment_name}
					</h2>
					<p className="text-xl">Price: ${property.price}</p>
					<p className="text-xl">
						Status:{" "}
						{property.status === "sale" ? "For Sale" : "For Rent"}
					</p>
					<p className="text-xl">Area: {property.area} sq ft</p>
					<p className="text-xl">Location: {property.location}</p>

					{/* Displaying Facilities */}
					<div className="mt-4">
						<h3 className="text-2xl font-bold">Facilities:</h3>
						<ul className="list-disc ml-6">
							{property.facilities.map((facility, index) => (
								<li key={index} className="text-lg">
									{facility}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PropDetails;
