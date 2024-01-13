import React from "react";
import Image from "next/image";

const HomeBanner = () => {
	return (
		<div
			className="relative bg-gradient-to-r
         from-sky-500 to-sky-700 mb-8">
			<div
				className="mx-auto px-8 py-12 flex flex-col 
                gap-2 md:flex-row items-center justify-evenly">
				<div className="mb-8 md:mb-0 text-center">
					<h1
						className="text-4xl md:text-6xl font-bold
                     text-white mb-4">
						Summer Sale!!
					</h1>
					<p className="text-lg md:text-xl text-white mb-4">
						Enjoy discount on selected items
					</p>
					<h1 className="text-5xl md:text-5 text-yellow-500 font-bold">
						GET 50% OFF
					</h1>
				</div>
				<div className="w-1/3 relative aspect-video">
					<Image
						src="/banner-image.png"
						alt="Logo image"
						layout="fill" 
						objectFit="cover" 
						className="object-contain" 
					/>
				</div>
			</div>
		</div>
	);
};

export default HomeBanner;
