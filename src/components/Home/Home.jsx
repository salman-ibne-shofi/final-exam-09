import Banner from "../Banner/Banner";
import Marquee from "react-fast-marquee";
import Cards from "../Cards/Cards";
import { Helmet } from "react-helmet-async";

const Home = () => {
	return (
		<div className="my-4">
			{/* Helmet for setting the page title and meta description */}
			<Helmet>
				<title>Home - Real Estate</title>
				<meta
					name="description"
					content="Find your dream apartment today with exclusive offers and comfortable living spaces. Book with us to unlock special savings!"
				/>
			</Helmet>
			<div className="flex">
				<img
					src="https://i.postimg.cc/8584139x/9f701e379dace43168d606836a42b36e-removebg-preview.png"
					alt=""
					className="h-12 mx-2 mb-2"
				/>
				<Marquee
					pauseOnHover={true}
					speed={100}
					className="text-lg font-bold"
				>
					Book your new apartment with us today and unlock exclusive
					savings! Experience the comfort of your dream home while
					taking advantage of our special promotion.
				</Marquee>
			</div>
			<Banner></Banner>
			<Cards></Cards>
		</div>
	);
};

export default Home;
