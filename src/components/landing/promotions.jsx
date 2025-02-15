'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const menuItems = [
	{
		name: '삼치덮밥',
		nameEn: 'Samchi Deopbap',
		image: '/images/menu/food1.png',
		calories: '520',
		price: 'RM19.99',
		description: 'Delicious grilled mackerel with rice',
		protein: '22',
		action: 'SAVE NOW',
	},
	{
		name: '오지어덮밥',
		nameEn: 'Ojingeo Deopbap',
		image: '/images/menu/food2.png',
		calories: '390',
		protein: '35',
		price: 'RM19.99',
		description: 'Savory squid with rice',
		action: 'SAVE NOW',
		isGreen: true,
	},
	{
		name: '양고기덮밥',
		nameEn: 'Yanggogi Deopbap',
		image: '/images/menu/food3.png',
		calories: '550',
		protein: '44',
		price: 'RM19.99',
		description: 'Tender lamb with rice',
		action: 'SAVE NOW',
		isNew: true,
	},
];

const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'];

export default function Promotions() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isHovered, setIsHovered] = useState(false);

	const handlePrevious = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex > 0 ? prevIndex - 1 : menuItems.length - 1
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex < menuItems.length - 1 ? prevIndex + 1 : 0
		);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (!isHovered) {
				handleNext();
			}
		}, 5000);

		return () => clearInterval(interval);
	}, [isHovered]); // Removed handleNext from dependencies

	return (
		<section className="py-24 px-8 bg-[#f2eee9] overflow-hidden">
			<div className="container flex flex-col items-center mx-auto relative">
				<div className="text-center flex flex-col items-center gap-6 mb-16">
					<h2 className="text-[#2d1609] text-[2.5rem] font-bold text-center md:text-6xl relative">
						Discover Our Promotions
						<motion.span
							className="absolute -top-6 -right-6 text-4xl"
							animate={{
								y: [0, -10, 0],
								rotate: [0, 10, -10, 0],
							}}
							transition={{
								duration: 2,
								repeat: Number.POSITIVE_INFINITY,
							}}
						>
							<Sparkles className="text-yellow-400" />
						</motion.span>
					</h2>
					<p className="w-3/5">
						Enjoy our special promotions on a variety of delicious
						Korean dishes. Whether you're a fan of seafood, lamb, or
						vegetarian options, we have something for everyone!
					</p>
				</div>

				<div
					className="relative w-3/4 h-96 mb-20"
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<AnimatePresence mode="wait">
						<motion.div
							key={currentIndex}
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -50 }}
							transition={{ duration: 0.5 }}
							className="absolute inset-0"
						>
							<div className="flex h-full flex-row border-2 border-[rgb(74,62,54)] rounded-3xl overflow-hidden shadow-lg">
								{/* Image Container */}
								<div className="relative w-1/2 aspect-square overflow-hidden border-r-2 border-[rgb(74,62,54)] bg-[#efe5d9]">
									<div className="w-full h-full flex items-center justify-center relative">
										<motion.p
											className="absolute z-10 top-4 right-4 px-3 font-bold text-md md:text-lg bg-white rounded-3xl border-2 border-[rgb(74,62,54)] shadow-[4px_3px_0px_2px_rgb(74,62,54)]"
											whileHover={{
												scale: 1.1,
												rotate: -5,
											}}
										>
											{menuItems[currentIndex].price}
										</motion.p>
										<motion.div
											whileHover={{
												scale: 1.1,
												rotate: 5,
											}}
											transition={{
												type: 'spring',
												stiffness: 300,
											}}
										>
											<Image
												src={
													menuItems[currentIndex]
														.image ||
													'/placeholder.svg'
												}
												className="p-28"
												width={500}
												height={500}
												alt={
													menuItems[currentIndex]
														.nameEn
												}
											/>
										</motion.div>
									</div>
								</div>
								{/* Information Container */}
								<div className="text-[#2d1609] text-center w-1/2 bg-white h-full py-6 flex flex-col justify-between">
									<div>
										<h3 className="text-[rgb(74,62,54)] text-lg font-medium mb-1">
											{menuItems[currentIndex].name}
										</h3>
										<h4 className="text-[rgb(74,62,54)] text-2xl font-extrabold pb-6 border-b-2 border-[rgb(74,62,54)]">
											{menuItems[currentIndex].nameEn}
										</h4>
										<div className="flex mt-4 justify-center font-bold items-center gap-4 text-[rgb(74,62,54)] text-sm mb-2">
											<span>
												{
													menuItems[currentIndex]
														.calories
												}{' '}
												Cal
											</span>
											<span>—</span>
											<span>
												{
													menuItems[currentIndex]
														.protein
												}
												g of Protein
											</span>
										</div>
										<div className="font-bold items-center gap-4 text-[rgb(74,62,54)] text-sm mb-2">
											{
												menuItems[currentIndex]
													.description
											}
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					</AnimatePresence>

					{/* Navigation Buttons */}
					<div className="absolute left-0 right-0 bottom-[-3rem] flex justify-center gap-4">
						<Button
							variant="outline"
							size="icon"
							onClick={handlePrevious}
							className="bg-white hover:bg-[#efe5d9] border-2 border-[rgb(74,62,54)] transition-all duration-200 hover:scale-110"
						>
							<ChevronLeft className="h-4 w-4" />
						</Button>
						<Button
							variant="outline"
							size="icon"
							onClick={handleNext}
							className="bg-white hover:bg-[#efe5d9] border-2 border-[rgb(74,62,54)] transition-all duration-200 hover:scale-110"
						>
							<ChevronRight className="h-4 w-4" />
						</Button>
					</div>

					{/* Indicators */}
					<div className="absolute left-0 right-0 bottom-[-6rem] flex justify-center gap-2">
						{menuItems.map((_, index) => (
							<motion.button
								key={index}
								onClick={() => setCurrentIndex(index)}
								className={`w-3 h-3 rounded-full ${
									index === currentIndex
										? 'bg-[rgb(74,62,54)]'
										: 'bg-[#efe5d9] border border-[rgb(74,62,54)]'
								}`}
								whileHover={{ scale: 1.2 }}
								whileTap={{ scale: 0.8 }}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
