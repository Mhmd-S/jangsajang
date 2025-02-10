'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Feature() {
	return (
		<section className="bg-[#8c9f82] relative overflow-hidden">
			<div className="flex flex-col-reverse  px-8 py-12 md:grid md:grid-cols-[45%_55%] ">
				{/* Text Content */}
				<div
					className="relative z-10"
				>
					<h2 className="text-[#00072D] text-3xl md:text-5xl font-semibold leading-none mb-8">
						정통 한국 요리,
						<br />
						신선한 재료로
						<br />
						만듭니다.
					</h2>
					<h3 className="text-[#00072D] text-4xl md:text-5xl font-bold leading-none mb-8">
						AUTHENTIC KOREAN CUISINE,
						<br />
						MADE WITH
						<br />
						FRESH INGREDIENTS.
					</h3>
					<p className="text-[#00072D]/80 text-sm md:text-lg mb-8 max-w-lg">
						Discover the rich flavors and vibrant culture of Korea
						in every bite.
					</p>
					<div

					>
						<Button
							size="lg"
							className="bg-white text-[#00072D] hover:bg-white/90 text-lg px-8 py-6 rounded-full"
						>
							LEARN MORE
						</Button>
					</div>
				</div>

				{/* Image */}
				<div

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
						<div

							className="absolute -top-4 -right-4 z-20"
						>
							<div className="bg-[#0066FF] text-white font-bold py-2 px-4 rounded-full transform rotate-12">
								Fresh!
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
