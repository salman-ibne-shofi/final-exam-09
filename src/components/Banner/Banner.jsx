const Banner = () => {
	return (
		<div className="carousel w-full">
			<div id="slide1" className="carousel-item relative w-full">
				<img
					src="https://i.postimg.cc/66H36Zbt/Timeline-Covers-pro-chevrolet-camaro-facebook-cover.jpg"
					className="w-full rounded-2xl"
				/>
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
					src="https://i.postimg.cc/28MShDft/Timeline-Covers-pro-lamborghini-in-rain-facebook-cover.jpg"
					className="w-full rounded-2xl"
				/>
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
					src="https://i.postimg.cc/HkMsthYk/Timeline-Covers-pro-belaya-lamborghini-aventador-facebook-cover.jpg"
					className="w-full rounded-2xl"
				/>
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
					src="https://i.postimg.cc/5tM9KSyq/Timeline-Covers-pro-Lamborghini-Aventador-lp-750-facebook-cover.jpg"
					className="w-full rounded-2xl"
				/>
				<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
					<a href="#slide3" className="btn btn-circle">
						❮
					</a>
					<a href="#slide5" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
			<div id="slide5" className="carousel-item relative w-full">
				<img
					src="https://i.postimg.cc/pdYWw5nN/Timeline-Covers-pro-lamborghini-centenario-facebook-cover.jpg"
					className="w-full rounded-2xl"
				/>
				<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
					<a href="#slide4" className="btn btn-circle">
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
