'use client';

import MenuCard from '@/components/MenuCard';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const menuItems = [
	{
		name: '삼치덮밥',
		nameEn: 'Samchi Deopbap',
		image: '/images/menu/food1.png',
		calories: '520',
		price: 'RM19.99',
		description: 'lorem lorem lorem lorem',
		protein: '22',
		action: 'CRUNCH IT',
	},
	{
		name: '오지어덮밥',
		nameEn: 'Ojingeo Deopbap',
		image: '/images/menu/food2.png',
		calories: '390',
		protein: '35',
		price: 'RM19.99',
		description: 'lorem lorem lorem lorem',
		action: 'MUNCH IT',
		isGreen: true,
	},
	{
		name: '양고기덮밥',
		nameEn: 'Yanggogi Deopbap',
		image: '/images/menu/food3.png',
		calories: '550',
		protein: '44',
		price: 'RM19.99',
		description: 'lorem lorem lorem lorem',
		action: 'LUNCH IT',
		isNew: true,
	},
];

export default function BestSellers() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const eyeRefs = [useRef(null), useRef(null)];

	useEffect(() => {
		const handleMouseMove = (event) => {
			setMousePosition({ x: event.clientX, y: event.clientY });
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	const getEyeRotation = (eyeRef) => {
		if (!eyeRef.current) return { x: 0, y: 0 };

		const eye = eyeRef.current.getBoundingClientRect();
		const eyeCenterX = eye.left + eye.width / 2;
		const eyeCenterY = eye.top + eye.height / 2;

		const deltaX = mousePosition.x - eyeCenterX;
		const deltaY = mousePosition.y - eyeCenterY;

		const angle = Math.atan2(deltaY, deltaX);
		const radius = 2; // How far the pupil can move from center

		return {
			x: Math.cos(angle) * radius,
			y: Math.sin(angle) * radius,
		};
	};

	return (
		<section className="py-24 px-8 bg-[#f2eee9]">
			<div className="container mx-auto">
				<div className="text-center mb-16">
					<div className="flex items-center justify-center gap-2 mb-4">
						<span className="text-[#6a3116] font-bold text-2xl">
							MOST
						</span>
						<span className="inline-flex gap-1">
							{[0, 1].map((index) => (
								<div
									key={index}
									ref={eyeRefs[index]}
									className="h-4 w-4 rounded-full bg-white border-2 border-black relative"
								>
									<motion.div
										className="h-2 w-2 rounded-full bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
										animate={() => ({
											x: getEyeRotation(eyeRefs[index]).x,
											y: getEyeRotation(eyeRefs[index]).y,
										})}
										transition={{
											type: 'spring',
											stiffness: 200,
											damping: 10,
										}}
									/>
								</div>
							))}
						</span>
						<span className="text-[#6a3116] font-bold text-2xl">
							CRAVED
						</span>
					</div>
					<h2 className="text-[#2d1609] text-[2.5rem] font-bold text-center md:text-8xl ">
						Favoriting encouraged
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
					{menuItems.map((item, index) => (
						<MenuCard key={index} index={index} item={item} />
					))}
				</div>
			</div>
		</section>
	);
}
