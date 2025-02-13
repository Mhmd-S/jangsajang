'use client';

import React, { useState, useEffect, useRef } from 'react';

import { Drumstick, Beef, Vegan, Gem, Salad } from 'lucide-react';

import MenuCard from '@/components/MenuCard';

const menuItems = [
	{
		name: '삼치덮밥',
		nameEn: 'Samchi Deopbap',
		price: 'RM 19.99',
		description:
			'A classic Korean dish with rice, seaweed, and vegetables. ',
		image: '/images/bulgogi-bibimbap.jpg',
		calories: '520',
		protein: '22',
		bgColor: 'bg-[#4285F4]',
		action: 'CRUNCH IT',
	},
	{
		name: '오지어덮밥',
		nameEn: 'Ojingeo Deopbap',
		price: 'RM 19.99',
		description:
			'A classic Korean dish with rice, seaweed, and vegetables. ',
		image: '/images/kimchi-bowl.jpg',
		calories: '390',
		protein: '35',
		bgColor: 'bg-[#FF9900]',
		action: 'MUNCH IT',
		isGreen: true,
	},
	{
		name: '양고기덮밥',
		nameEn: 'Yanggogi Deopbap',
		price: 'RM 19.99',
		description:
			'A classic Korean dish with rice, seaweed, and vegetables. ',
		image: '/images/chicken-rice.jpg',
		calories: '550',
		protein: '44',
		bgColor: 'bg-[#EA4335]',
		action: 'LUNCH IT',
		isNew: true,
	},
];

const index = () => {
	const [activeCategory, setActiveCategory] = useState('');
	const menuRef = useRef(null);

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.3,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveCategory(entry.target.id);
					// Ensure menu item is visible if we're scrolling up
					const menuItem = document.getElementById(
						`menu-${entry.target.id}`
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

		// Observe all category sections
		['chicken', 'beef', 'vegan', 'kSpecial', 'sides'].forEach((id) => {
			const element = document.getElementById(id);
			if (element) observer.observe(element);
		});

		return () => observer.disconnect();
	}, []);

	const handleScroll = (id) => {
		document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
	};

	const isElementInViewport = (el) => {
		const rect = el.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <=
				(window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <=
				(window.innerWidth || document.documentElement.clientWidth)
		);
	};

	return (
		<div className="text-[rgb(74,62,54)] pt-32">
			<div className="flex flex-col pb-3">
				{/* Menu Categories */}
				<div className="fixed grid grid-cols-[25%_75%] z-50 top-16 left-0 right-0 bg-white overflow-x-auto whitespace-nowrap border-b border-[rgb(74,62,54)]">
					<h1 className="hidden h-full p-4 w-full md:block text-5xl font-bold text-center border-r border-[rgb(74,62,54)]">
						MENU 메뉴
					</h1>
					<ul
						ref={menuRef}
						className="flex gap-12 scrollbar-hidden scrollbar-hide py-5 pl-6 px-12 font-bold uppercase md:justify-self-end md:py-0 md:px-0"
					>
						<li
							id="menu-chicken"
							onClick={() => handleScroll('chicken')}
							className={`cursor-pointer flex items-center justify-center flex-col gap-2 ${
								activeCategory === 'chicken' ? 'underline' : ''
							}`}
						>
							{activeCategory === 'chicken' && <Drumstick />}
							Chicken Deobap
						</li>
						<li
							id="menu-beef"
							onClick={() => handleScroll('beef')}
							className={`cursor-pointer flex items-center justify-center flex-col gap-2 ${
								activeCategory === 'beef' ? 'underline' : ''
							}`}
						>
							{activeCategory === 'beef' && <Beef />}
							Beef Deobap
						</li>
						<li
							id="menu-vegan"
							onClick={() => handleScroll('vegan')}
							className={`cursor-pointer flex items-center justify-center flex-col gap-2 ${
								activeCategory === 'vegan' ? 'underline' : ''
							}`}
						>
							{activeCategory === 'vegan' && <Vegan />}
							Vegan Deobap
						</li>
						<li
							id="menu-kSpecial"
							onClick={() => handleScroll('kSpecial')}
							className={`cursor-pointer flex items-center justify-center flex-col gap-2 ${
								activeCategory === 'kSpecial' ? 'underline' : ''
							}`}
						>
							{activeCategory === 'kSpecial' && <Gem />}
							K-Special
						</li>
						<li
							id="menu-sides"
							onClick={() => handleScroll('sides')}
							className={`cursor-pointer flex items-center justify-center flex-col gap-2 pr-8 ${
								activeCategory === 'sides' ? 'underline' : ''
							}`}
						>
							{activeCategory === 'sides' && <Salad />}
							Sides
						</li>
					</ul>
				</div>
			</div>
			{/* Chicken */}
			<div
				id="chicken"
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8  scroll-mt-36"
			>
				<h3 className="hidden md:block col-span-3 text-5xl font-bold">
					Chicken Deobap
				</h3>
				{menuItems.map((item, index) => (
					<MenuCard key={index} index={index} item={item} />
				))}
			</div>
			{/* Beef */}
			<div
				id="beef"
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 scroll-mt-36"
			>
				<h3 className="hidden md:block col-span-3 text-5xl font-extrabold">
					Beef Deobap
				</h3>
				{menuItems.map((item, index) => (
					<MenuCard key={index} index={index} item={item} />
				))}
			</div>
			{/* Vegan */}
			<div
				id="vegan"
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8  scroll-mt-36"
			>
				<h3 className="hidden md:block col-span-3 text-5xl font-bold">
					Vegan Deobap
				</h3>
				{menuItems.map((item, index) => (
					<MenuCard key={index} index={index} item={item} />
				))}
			</div>
			{/* K-Special */}
			<div
				id="kSpecial"
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8  scroll-mt-36"
			>
				<h3 className="hidden md:block col-span-3 text-5xl font-bold">
					K-Special Deobap
				</h3>
				{menuItems.map((item, index) => (
					<MenuCard key={index} index={index} item={item} />
				))}
			</div>
			{/* Sides */}
			<div
				id="sides"
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8  scroll-mt-36"
			>
				<h3 className="hidden md:block col-span-3 text-5xl font-bold">
					Sides Deobap
				</h3>
				{menuItems.map((item, index) => (
					<MenuCard key={index} index={index} item={item} />
				))}
			</div>
		</div>
	);
};

export default index;
