import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
	return (
		<section className="flex flex-col-reverse md:grid md:grid-cols-[45%_55%] md:pt-12 ">
			{/* Left Side */}
			<div className="flex flex-col bg-[#efe5d9] text-[#4a3e36] justify-center p-8 md:border-r md:border-blue-950 lg:p-16">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="space-y-6"
				>
					<h1 className="flex flex-col gap-2 text-5xl md:text-[85px] leading-none  lg:max-w-[12ch]">
						<span className="font-bold text-5xl md:text-[65px]">
							맛있는 더밥
						</span>
						<span className="font-semibold">Korean Rice Bowl</span>
						<span className="flex flex-col md:text-[50px]">
							<span className="text-xs">starting from</span>
							RM19.90
						</span>
					</h1>
					<p className="text-sm md:text-xl max-w-md">
						Experience the perfect blend of Korean flavors and fresh
						ingredients in our signature bibimbap bowl
					</p>
					<div className="relative">
						<Button
							size="lg"
							className="bg-white text-[#0066FF] hover:bg-[#f0f0f0] text-lg px-8 py-6 rounded-full"
						>
							LEARN MORE
						</Button>
					</div>
				</motion.div>
			</div>

			{/* Right Side */}
			<div className="bg-[#d64d1d] relative h-[40vh] lg:h-auto">
				<Image
					src={`/images/bibimbap-bowl.png`}
					alt="Delicious Bibimbap Bowl"
					fill
					className="object-contain p-12"
					priority
				/>
			</div>
		</section>
	);
};

export default Hero;
