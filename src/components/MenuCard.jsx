import Image from 'next/image';
import { Button } from '@/components/ui/button';

const MenuCard = ({ item }) => {
	return (
		<div
			key={item.name}
			className="relative group border-2 border-[rgb(74,62,54)] rounded-b-3xl overflow-hidden"
		>
			<div className="rounded-3xl">
				{/* Image Container */}
				<div
					className={`relative h-1/2 w-full aspect-video overflow-hidden bg-[#efe5d9]`}
				>
					<div className="w-full h-full flex items-center justify-center relative">
						<p className="absolute top-4 right-4 px-3 font-bold text-md md:text-lg bg-white rounded-3xl border-2 border-[rgb(74,62,54)] shadow-[4px_3px_0px_2px_rgb(74,62,54)]">
							{item.price}
						</p>

						<Image
							src={item.image || '/placeholder.svg'}
							alt={item.nameEn}
							fill
						/>
					</div>
				</div>
				{/* Information Container */}
				<div className="text-[#2d1609] text-center w-full bg-white h-full py-6 border-t-2 border-[rgb(74,62,54)]">
					<h3 className="text-[rgb(74,62,54)] text-lg font-medium mb-1 ">
						{item.name}
					</h3>
					<h4 className="text-[rgb(74,62,54)] text-2xl font-extrabold pb-6 border-b-2 border-[rgb(74,62,54)]">
						{item.nameEn}
					</h4>
					<div className="flex mt-4 justify-center font-bold items-center gap-4 text-[rgb(74,62,54)] text-sm mb-2">
						<span>{item.calories} Cal</span>
						<span>—</span>
						<span>{item.protein}g of Protein</span>
					</div>
					<div className="font-bold items-center gap-4 text-[rgb(74,62,54)] text-sm mb-2">
						{item.description}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MenuCard;
