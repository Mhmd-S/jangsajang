'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Feature() {
	return (
		<section className="bg-[#d64d1d] relative overflow-hidden">
			<div className="container mx-auto px-8 py-12 lg:py-12">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Text Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						className="relative z-10"
					>
						<h2 className="text-[#00072D] text-5xl lg:text-7xl font-bold leading-none mb-8">
							정통 한국 요리,
							<br />
							신선한 재료로
							<br />
							만듭니다.
						</h2>
						<h3 className="text-[#00072D] text-3xl lg:text-5xl font-bold leading-none mb-8">
							AUTHENTIC KOREAN CUISINE,
							<br />
							MADE WITH
							<br />
							FRESH INGREDIENTS.
						</h3>
						<p className="text-[#00072D]/80 text-xl mb-8 max-w-lg">
							Discover the rich flavors and vibrant culture of
							Korea in every bite.
						</p>
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Button
								size="lg"
								className="bg-white text-[#00072D] hover:bg-white/90 text-lg px-8 py-6 rounded-full"
							>
								LEARN MORE
							</Button>
						</motion.div>
					</motion.div>

					{/* Image */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6 }}
						className="relative"
					>
						<div className="relative aspect-square">
							<div className="absolute inset-0 rounded-full overflow-hidden">
								<Image
									src={`/images/korean-food.jpg`}
									alt="Delicious Korean food"
									fill
									className="object-cover"
								/>
							</div>

							{/* Fresh Badge */}
							<motion.div
								initial={{ rotate: -12 }}
								animate={{ rotate: 12 }}
								transition={{
									duration: 2,
									repeat: Number.POSITIVE_INFINITY,
									repeatType: 'reverse',
									ease: 'easeInOut',
								}}
								className="absolute -top-4 -right-4 z-20"
							>
								<div className="bg-[#0066FF] text-white font-bold py-2 px-4 rounded-full transform rotate-12">
									Fresh!
								</div>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-10">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage:
							'radial-gradient(circle at 2px 2px, #00072D 1px, transparent 0)',
						backgroundSize: '24px 24px',
					}}
				/>
			</div>
		</section>
	);
}
