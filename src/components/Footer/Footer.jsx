import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdHomeWork } from "react-icons/md";

const Footer = () => {
	return (
		<footer className="footer bg-base-300 p-6 md:p-10 rounded-2xl">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
				{/* Logo and Social Links Section */}
				<div>
					<div className="flex items-center justify-center md:justify-start mb-4">
						<img
							className="h-10 mr-2"
							src="https://i.postimg.cc/nVW9kMv9/9f701e379dace43168d606836a42b36e-removebg-preview.png"
							alt="Property Logo"
						/>
						<h6 className="footer-title text-2xl">
							Property & Real Estate
						</h6>
					</div>

					{/* Social Media Icons */}
					<div className="flex justify-center md:justify-start gap-4 mb-4">
						<a href="#">
							<FaFacebookF className="w-6 h-6 md:w-8 md:h-8" />
						</a>
						<a href="#">
							<FaTwitter className="w-6 h-6 md:w-8 md:h-8" />
						</a>
						<a href="#">
							<GrInstagram className="w-6 h-6 md:w-8 md:h-8" />
						</a>
						<a href="#">
							<FaLinkedin className="w-6 h-6 md:w-8 md:h-8" />
						</a>
						<a href="#">
							<FaYoutube className="w-6 h-6 md:w-8 md:h-8" />
						</a>
					</div>

					{/* Housing Opportunity Statement */}
					<div className="flex items-center justify-center md:justify-start gap-2 mb-4">
						<MdHomeWork className="w-5 h-5" />
						<p>Equal Housing Opportunity</p>
					</div>

					{/* Copyright Section */}
					<div className="border-t border-orange-400 text-center md:text-left pt-4">
						Copyright © 2024 - All rights reserved
					</div>
				</div>

				{/* Advertisers Section */}
				<div>
					<h6 className="footer-title border-b border-orange-400 mb-4">
						Advertisers
					</h6>
					<ul className="space-y-2 text-center md:text-left">
						<li>
							<a className="link link-hover" href="#">
								Advertise
							</a>
						</li>
						<li>
							<a className="link link-hover" href="#">
								Add a Property
							</a>
						</li>
						<li>
							<a className="link link-hover" href="#">
								Digital Feeds Program
							</a>
						</li>
						<li>
							<a className="link link-hover" href="#">
								Community
							</a>
						</li>
						<li>
							<a className="link link-hover" href="#">
								Customers Portal
							</a>
						</li>
					</ul>
				</div>

				{/* Marketplace Section */}
				<div>
					<h6 className="footer-title border-b border-orange-400 mb-4">
						The Marketplace
					</h6>
					<ul className="space-y-2 md:text-left">
						<li>
							<a className="link link-hover" href="#">
								ForRent
							</a>
						</li>
						<li>
							<a className="link link-hover" href="#">
								Homes.com
							</a>
						</li>
						<li>
							<a className="link link-hover" href="#">
								Land.com
							</a>
						</li>
						<li>
							<a className="link link-hover" href="#">
								Apartment.com
							</a>
						</li>
						<li>
							<a className="link link-hover" href="#">
								Flat.com
							</a>
						</li>
					</ul>
				</div>

				{/* Rental Manager Section */}
				<div>
					<h6 className="footer-title border-b border-orange-400 mb-4">
						Rental Manager
					</h6>
					<ul className="space-y-2 md:text-left">
						<li>
							<a className="link link-hover" href="#">
								Rental Manager
							</a>
						</li>
						<li>
							<a className="link link-hover" href="#">
								List Your Property For Rent
							</a>
						</li>
						<li>
							<a className="link link-hover" href="#">
								Screen Applicant
							</a>
						</li>
						<li>
							<a className="link link-hover" href="#">
								Create Rental Leases
							</a>
						</li>
						<li>
							<a className="link link-hover" href="#">
								Collect Rent Online
							</a>
						</li>
					</ul>
				</div>

				{/* Company Section */}
				<div>
					<h6 className="footer-title border-b border-orange-400 mb-4">
						Company
					</h6>
					<ul className="space-y-2 md:text-left">
						<li>
							<a className="link link-hover" href="#">
								About us
							</a>
						</li>
						<li>
							<a className="link link-hover" href="#">
								Contact
							</a>
						</li>
						<li>
							<a className="link link-hover" href="#">
								Careers
							</a>
						</li>
						<li>
							<a className="link link-hover" href="#">
								Legal Notice
							</a>
						</li>
						<li>
							<a className="link link-hover" href="#">
								Privacy Notice
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
