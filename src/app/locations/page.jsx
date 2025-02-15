'use client';

import { useRef, useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

import { MapPin, Map } from 'lucide-react';

// Sample data - in a real app this would come from an API
const states = [
	{
		name: 'Malaysia',
		locations: [
			{
				city: 'Kuala Lumpur',
				address: '2267 Black Rock Turnpike',
				unit: 'Unit 15',
			},
			{
				city: 'WEST HARTFORD (BISHOPS CORNER)',
				address: '2538 Albany Ave',
			},
		],
	},
	{
		name: 'South Korea',
		locations: [
			{
				city: 'FAIRFIELD',
				address: '56, Jalan SS15/4C, Subang Jaya 47500',
				unit: 'Unit 15',
			},
		],
	},
];

export default function LocationFinder() {
	const [selectedState, setSelectedState] = useState(states[0]);
	const [activeState, setActiveState] = useState('');
	const [searchQuery, setSearchQuery] = useState('');
	const statesRef = useRef(null);

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.3,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveState(entry.target.id);
					const menuItem = document.getElementById(
						`state-${entry.target.id}`
					);
					if (menuItem && !isElementInViewport(menuItem)) {
						menuItem.scrollIntoView({
							behavior: 'smooth',
							block: 'nearest',
							inline: 'center',
						});
					}
				}
			});
		}, options);

		// Observe all state sections
		states.forEach((state) => {
			const element = document.getElementById(state.name);
			if (element) observer.observe(element);
		});

		return () => observer.disconnect();
	}, []);

	const handleScroll = (stateName) => {
		const element = document.getElementById(stateName);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
		setSelectedState(states.find((state) => state.name === stateName));
	};

	return (
		<div className="grid grid-cols-[35%_65%] md:grid-cols-[25%,75%] min-h-screen border pt-16 relative">
			{/* Left Sidebar / States */}
			<div className="sticky h-screen top-16 border-r border-b border-[#6a3116] text-[#6a3116] bg-white">
				<div className="pt-5 pl-2 md:p-6">
					<h1 className="flex flex-col justify-center items-center text-xs md:text-4xl p-2 font-bold  mb-6">
						<span>우리의 위치</span>
						<span>Our Locations</span>
					</h1>
					<ScrollArea className="h-[calc(100vh-200px)]">
						<div className="space-y-1 md:pl-4 pr-4">
							{states.map((state) => (
								<Button
									key={state.name}
									variant="ghost"
									className={`w-full justify-start h-14 text-md p-2 text-xs md:text-xl font-bold ${
										selectedState.name === state.name &&
										'text-underline'
									}`}
									onClick={() => handleScroll(state.name)}
								>
									<MapPin className="w-3" />
									{state.name}
								</Button>
							))}
						</div>
					</ScrollArea>
				</div>
			</div>

			{/* Right Content / Branches */}
			<div className="col-start-2 flex flex-col gap-12 bg-[#fafafa]">
				{states.map((state) => (
					<div
						key={state.name}
						id={state.name}
						className="border-b p-6 md:p-12 border-[#6a3116] text-[#6a3116] scroll-mt-28"
					>
						<div className="flex flex-col md:flex-row justify-between md:items-center">
							<h2 className="text-2xl md:text-6xl font-bold">
								{state.name}
							</h2>
							<span className="text-xs md:text-md ">
								{state.locations.length} Locations
							</span>
						</div>
						<div className=" divide-y">
							{state.locations.map((location) => (
								<div key={location.city} className="py-12">
									<h3 className="text-md md:text-xl font-bold">
										{location.city}
									</h3>
									<p className="text-lg">
										{location.address}
									</p>
									{location.unit && (
										<p className="text-lg">
											{location.unit}
										</p>
									)}
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
