'use client';

import * as React from 'react';
import { MoveRight, ChevronDown } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

// Sample data - in a real app this would come from an API
const states = [
	{
		name: 'Connecticut',
		locations: [
			{
				city: 'FAIRFIELD',
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
		name: 'Florida',
		locations: [],
	},
	{
		name: 'Illinois',
		locations: [],
	},
];

export default function LocationFinder() {
	const [selectedState, setSelectedState] = React.useState(states[0]);
	const [searchQuery, setSearchQuery] = React.useState('');

	return (
		<div className="grid md:grid-cols-[300px,1fr] min-h-screen border pt-20">
			{/* Left Sidebar */}
			<div className="border-r bg-white">
				<div className="p-6">
					<h1 className="text-4xl font-bold text-[#1a1a4b] mb-6">
					Find a Location
					</h1>
					<div className="relative mb-6">
						<Input
							type="text"
							placeholder="Search by zip code"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="pr-12 border-2 border-[#1a1a4b] rounded-md h-12"
						/>
						<Button
							size="icon"
							className="absolute right-2 top-1/2 -translate-y-1/2"
							variant="ghost"
						>
							<MoveRight className="h-5 w-5 text-[#1a1a4b]" />
						</Button>
					</div>
					<ScrollArea className="h-[calc(100vh-200px)]">
						<div className="space-y-1 pr-4">
							{states.map((state) => (
								<Button
									key={state.name}
									variant="ghost"
									className={`w-full justify-between h-14 text-xl font-bold ${
										selectedState.name === state.name
											? 'text-blue-500'
											: 'text-[#1a1a4b]'
									}`}
									onClick={() => setSelectedState(state)}
								>
									{state.name}
									<ChevronDown className="h-5 w-5 text-blue-500" />
								</Button>
							))}
						</div>
					</ScrollArea>
				</div>
			</div>

			{/* Right Content */}
			<div className="p-6 md:p-12 bg-[#fafafa]">
				<div className="flex justify-between items-center mb-16">
					<h2 className="text-6xl font-bold text-[#1a1a4b]">
						{selectedState.name}
					</h2>
					<span className="text-[#1a1a4b]">
						{selectedState.locations.length} Locations
					</span>
				</div>
				<div className="space-y-12">
					{selectedState.locations.map((location) => (
						<div key={location.city} className="space-y-2">
							<h3 className="text-xl font-bold text-[#1a1a4b]">
								{location.city}
							</h3>
							<p className="text-lg text-[#1a1a4b]">
								{location.address}
							</p>
							{location.unit && (
								<p className="text-lg text-[#1a1a4b]">
									{location.unit}
								</p>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
