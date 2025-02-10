'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function VisitUs() {
	return (
		<section className="bg-[#f7f2ec] relative overflow-hidden">
			<div className="container mx-auto pb-12 md:pb-0">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Image */}
					<div className="relative">
						<div className="relative aspect-square">
							<div className="absolute inset-0 overflow-hidden">
								<Image
									src={`/images/visitus.jpg`}
									alt="Delicious Korean food"
									fill
									className="object-cover"
								/>
							</div>
						</div>
					</div>

					{/* Text Content */}
					<div
						className="relative z-10 px-8"
					>
						<h2 className="text-[#00072D] text-3xl lg:text-5xl font-bold leading-none mb-8">
							맛있는 음식이
							<br />
							기다리고
							<br />
							있습니다
						</h2>
						<h3 className="text-[#00072D] text-3xl lg:text-5xl font-bold leading-none mb-8">
							DELICIOUS FOOD
							<br />
							AWAITS
							<br />
							YOUR VISIT
						</h3>
						<p className="text-[#00072D]/80 text-sm md:text-lg mb-8 max-w-lg">
							Come experience our warm hospitality and authentic
							Korean dishes in our welcoming restaurant.
						</p>
						<div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Button
								size="lg"
								className="bg-white text-[#00072D] hover:bg-white/90 text-lg px-8 py-6 rounded-full"
							>
								VISIT US!
							</Button>
						</div>
					</div>
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
