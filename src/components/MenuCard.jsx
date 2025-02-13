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
					className={`relative w-full aspect-sqaure overflow-hidden bg-[#efe5d9]`}
				>
					<div className="w-full h-full aspect-square flex items-center justify-center relative">
						<p className="absolute z-10 top-4 right-4 px-3 font-bold text-md md:text-lg bg-white rounded-3xl border-2 border-[rgb(74,62,54)] shadow-[4px_3px_0px_2px_rgb(74,62,54)]">
							{item.price}
						</p>

						<Image
							src={item.image}
							className="w-fullp p-4 transition-transform duration-700 ease-in-out group-hover:scale-[1.75] group-hover:rotate-[90deg]"
							width={500}
							height={500}
							alt={item.nameEn}
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
