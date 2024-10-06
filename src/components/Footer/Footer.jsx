import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdHomeWork } from "react-icons/md";

const Footer = () => {
	return (
		<footer className="footer bg-base-300 p-10 rounded-2xl">
			<div>
				<div className="flex">
					<img
						className="h-10 mr-2"
						src="https://i.postimg.cc/nVW9kMv9/9f701e379dace43168d606836a42b36e-removebg-preview.png"
						alt=""
					/>
					<h6 className="footer-title text-2xl">
						Property & Real Estate
					</h6>
				</div>

				<div className="grid grid-flow-col gap-6 mx-auto">
					<a>
						<FaFacebookF className="w-8 h-8" />
					</a>
					<a>
						<FaTwitter className="w-8 h-8" />
					</a>
					<a>
						<GrInstagram className="w-8 h-8" />
					</a>
					<a>
						<FaLinkedin className="w-8 h-8" />
					</a>
					<a>
						<FaYoutube className="w-8 h-8" />
					</a>
				</div>
				<div className="flex mx-auto gap-2">
					<MdHomeWork className="w-5 h-5" />
					<p>Equal Housing Opportunity</p>
				</div>
				<div className="border-orange-400 border-t px-10 py-2 mx-auto">
					Copyright © 2024 - All right reserved
				</div>
			</div>
			<div>
				<h6 className="footer-title border-orange-400 border-b">
					Advertisers
				</h6>
				<a className="link link-hover">Advertise</a>
				<a className="link link-hover">Add a Property</a>
				<a className="link link-hover">Digital Feeds Program</a>
				<a className="link link-hover">Community</a>
				<a className="link link-hover">Customers Portal</a>
			</div>
			<div>
				<h6 className="footer-title border-orange-400 border-b">
					The Marketplace
				</h6>
				<a className="link link-hover">ForRent</a>
				<a className="link link-hover">Homes.com</a>
				<a className="link link-hover">Land.com</a>
				<a className="link link-hover">Apartment.com</a>
				<a className="link link-hover">Flat.com</a>
			</div>
			<div>
				<h6 className="footer-title border-orange-400 border-b">
					Rental Manager
				</h6>
				<a className="link link-hover">Rental Manager</a>
				<a className="link link-hover">List Your Property For Rent</a>
				<a className="link link-hover">Screen Applicant</a>
				<a className="link link-hover">Create Rental Leases</a>
				<a className="link link-hover">Collect Rent Online</a>
			</div>
			<div>
				<h6 className="footer-title border-orange-400 border-b">
					Company
				</h6>
				<a className="link link-hover">About us</a>
				<a className="link link-hover">Contact</a>
				<a className="link link-hover">Careers</a>
				<a className="link link-hover">Legal Notice</a>
				<a className="link link-hover">Privacy Notice</a>
			</div>
		</footer>
	);
};

export default Footer;
