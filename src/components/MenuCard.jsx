import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const MenuCard = ({ index, item }) => {
	return (
		<motion.div
			key={item.name}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			className="relative group border border-blue-950 rounded-b-3xl overflow-hidden"
		>
			<div className="rounded-3xl">
				<div
					className={`relative w-full aspect-square overflow-hidden ${item.bgColor}`}
				>
					<motion.div
						whileHover={{
							scale: 1.2,
							rotate: 5,
							transition: { duration: 0.4 },
						}}
						className="w-full h-full relative"
					>
						<Image
							src={item.image || '/placeholder.svg'}
							alt={item.nameEn}
							fill
							className="object-cover"
						/>
					</motion.div>
				</div>
				<div className="text-center w-full bg-white h-full py-6">
					<h3 className="text-blue-950 text-lg font-medium mb-1 ">
						{item.name}
					</h3>
					<h4 className="text-blue-950 text-2xl font-extrabold pb-6 border-b border-blue-950">
						{item.nameEn}
					</h4>
					<div className="flex mt-4 justify-center font-bold items-center gap-4 text-blue-950 text-sm mb-2">
						<span>{item.calories} Cal</span>
						<span>—</span>
						<span>{item.protein}g of Protein</span>
					</div>
					<motion.div
						className="mx-4"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<Button
							size="lg"
							className="w-full text-xl py-6 border-2 border-blue-900 shadow-[3px_4px_1px_0px] bg-white text-[#00072D] hover:bg-white/90 rounded-full font-bold"
						>
							{item.action}
						</Button>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
};

export default MenuCard;
