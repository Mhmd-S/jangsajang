import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Hero = () => {
	return (
		<section className="flex flex-col-reverse md:grid md:grid-cols-[45%_55%] md:pt-12 ">
			{/* Left Side */}
			<div className="flex flex-col bg-[#efe5d9] text-[#2d1609] justify-center p-8 md:border-r md:border-blue-950 lg:p-16">
				<div className="space-y-6">
					<h1 className="flex flex-col gap-2 text-5xl md:text-6xl leading-none lg:max-w-[12ch]">
						<span className="font-bold text-5xl md:text-[65px]">
							맛있는 더밥
						</span>
						<span className="font-semibold">Korean Rice Bowl</span>
						<span className="flex flex-col md:text-4xl">
							<span className="text-xs">starting from</span>
							RM19.90
						</span>
					</h1>
					<p className="text-sm md:text-lg max-w-md">
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
				</div>
			</div>

			{/* Right Side */}
			<div className="bg-[#d64d1d] relative h-[40vh] mt-14 md:mt-0 lg:h-auto">
				<Image
					src={`/images/menu/food1.png`}
					alt="Delicious Bibimbap Bowl"
					fill
					className="object-contain p-12"
					priority
				/>

				{/* Funky Labels */}
				<div className="absolute top-[20%] right-[10%] -rotate-12">
					<div className="bg-yellow-400 text-black px-4 py-1 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
						<p className="text-sm font-bold">PREMIUM MEAT! 🥩</p>
					</div>
				</div>

				<div className="absolute top-[45%] left-[5%] rotate-12">
					<div className="bg-white text-[#d64d1d] px-4 py-1 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
						<p className="text-sm font-bold">MELTED CHEESE 🧀</p>
					</div>
				</div>

				<div className="absolute bottom-[10%] right-[5%]">
					<div className="bg-[#0066FF] text-white px-6 py-3 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-6">
						<p className="text-sm font-bold">
							COMBO MEAL DEAL! 🎉
							<br />
							<span className="text-xs bg-white text-[#0066FF] px-2 py-0.5 rounded-full mt-1 inline-block">
								+ Free Drink & Side Dish
							</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
