import { createContext, useState } from "react";

// Create the BookedContext
export const BookedContext = createContext();

export const BookedProvider = ({ children }) => {
	const [bookedProperties, setBookedProperties] = useState([]);

	// Function to add a property to the list
	const addPropertyToBooked = (property) => {
		// setBookedProperties((prev) => [...prev, property]);
		const isAlreadyBooked = bookedProperties.some(
			(booked) => booked.id === property.id
		);

		// Add the property only if it's not already booked
		if (!isAlreadyBooked) {
			setBookedProperties((prev) => [...prev, property]);
		}
	};

	const removePropertyFromBooked = (propertyId) => {
		setBookedProperties((prev) =>
			prev.filter((property) => property.id !== propertyId)
		);
	};
	return (
		<BookedContext.Provider
			value={{
				bookedProperties,
				addPropertyToBooked,
				removePropertyFromBooked,
			}}
		>
			{children}
		</BookedContext.Provider>
	);
};
