'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function MediaCarousel({ mediaItems }) {
	return (
		<div className="relative bg-[#d64d1d] w-screen py-12 mx-auto overflow-hidden whitespace-nowrap">
			<motion.div
				animate={{
					x: ['0%', '-100%'],
				}}
				transition={{
					duration: 40,
					repeat: Infinity,
					ease: 'linear',
				}}
				className="inline-flex items-start gap-8"
			>
				{mediaItems.map((item, index) =>
					item.type === 'video' ? (
						<video
							key={index}
							src={item.src}
							autoPlay
							loop
							muted
							playsInline
							className="max-h-64 rounded-lg"
						/>
					) : (
						<img
							key={index}
							src={item?.src}
							alt={item?.alt}
							className=" max-h-64 rounded-lg"
						/>
					)
				)}
			</motion.div>
		</div>
	);
}
