const Banner = () => {
	return (
		<div className="carousel w-full rounded-xl">
			<div id="slide1" className="carousel-item relative w-full">
				<img
					src="https://i.postimg.cc/RVSWWJjr/luxury-real-estate-1024x574.jpg"
					className="w-full object-cover h-80"
				/>
				{/* Dark overlay */}
				<div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
					<div className="text-center text-white">
						<h1 className="text-5xl font-bold mb-4">
							Discover Your New Home
						</h1>
						<p className="text-2xl">
							Helping 100 million renters find their perfect fit.
						</p>
					</div>
				</div>
				<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
					<a href="#slide4" className="btn btn-circle">
						❮
					</a>
					<a href="#slide2" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
			<div id="slide2" className="carousel-item relative w-full">
				<img
					src="https://i.postimg.cc/jS923gCK/walt-danley-paradise-valley-arizona-luxury-homes.jpg"
					className="w-full object-cover h-80"
				/>
				{/* Dark overlay */}
				<div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
					<div className="text-center text-white">
						<h1 className="text-5xl font-bold mb-4">
							Discover Your New Home
						</h1>
						<p className="text-2xl">
							Helping 100 million renters find their perfect fit.
						</p>
					</div>
				</div>
				<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
					<a href="#slide1" className="btn btn-circle">
						❮
					</a>
					<a href="#slide3" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
			<div id="slide3" className="carousel-item relative w-full">
				<img
					src="https://i.postimg.cc/CKq13Gf8/Adobe-Stock-220757323.jpg"
					className="w-full object-cover h-80"
				/>
				{/* Dark overlay */}
				<div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
					<div className="text-center text-white">
						<h1 className="text-5xl font-bold mb-4">
							Discover Your New Home
						</h1>
						<p className="text-2xl">
							Helping 100 million renters find their perfect fit.
						</p>
					</div>
				</div>
				<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
					<a href="#slide2" className="btn btn-circle">
						❮
					</a>
					<a href="#slide4" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
			<div id="slide4" className="carousel-item relative w-full">
				<img
					src="https://i.postimg.cc/DZ3ZnSqM/Property-74ca0547e47fdea422c3a44a468d15e6-130057881.jpg"
					className="w-full object-cover h-80"
				/>
				{/* Dark overlay */}
				<div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
					<div className="text-center text-white">
						<h1 className="text-5xl font-bold mb-4">
							Discover Your New Home
						</h1>
						<p className="text-2xl">
							Helping 100 million renters find their perfect fit.
						</p>
					</div>
				</div>
				<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
					<a href="#slide3" className="btn btn-circle">
						❮
					</a>
					<a href="#slide1" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
		</div>
	);
};

export default Banner;
