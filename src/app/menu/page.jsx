'use client'

import React, { useState, useEffect } from 'react';

import { Drumstick, Beef, Vegan, Gem, Salad } from 'lucide-react';

import MenuCard from '@/components/MenuCard';

const menuItems = [
	{
		name: '삼치덮밥',
		nameEn: 'Samchi Deopbap',
		image: '/images/bulgogi-bibimbap.jpg',
		calories: '520',
		protein: '22',
		bgColor: 'bg-[#4285F4]',
		action: 'CRUNCH IT',
	},
	{
		name: '오지어덮밥',
		nameEn: 'Ojingeo Deopbap',
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

	const handleScroll = (id) => {
		document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
	};

	const handleScrollSpy = () => {
		const sections = ['chicken', 'beef', 'vegan', 'kSpecial', 'sides'];
		const scrollPosition = window.scrollY + window.innerHeight / 2;

		for (const section of sections) {
			const element = document.getElementById(section);
			if (
				element.offsetTop <= scrollPosition &&
				element.offsetTop + element.offsetHeight > scrollPosition
			) {
				setActiveCategory(section);
				break;
			}
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScrollSpy);
		return () => {
			window.removeEventListener('scroll', handleScrollSpy);
		};
	}, []);

	return (
		<div className="text-[rgb(74,62,54)] pt-16">
			<div className="flex flex-col md:grid md:grid-cols-[25%_75%]">
				<h1 className="hidden md:block text-5xl font-bold text-center py-6 border-b border-[rgb(74,62,54)]">
					MENU 메뉴
				</h1>
				{/* Menu Categories */}
				<div className="fixed top-16 left-0 right-0 bg-white overflow-x-auto whitespace-nowrap px-4 py-8 border-b border-[rgb(74,62,54)] z-10">
					<ul className="flex gap-12 font-bold uppercase">
						<li
							onClick={() => handleScroll('chicken')}
							className={`cursor-pointer flex items-center gap-2 ${
								activeCategory === 'chicken' ? 'underline' : ''
							}`}
						>
							<Drumstick />
							Chicken Deobap
						</li>
						<li
							onClick={() => handleScroll('beef')}
							className={`cursor-pointer flex items-center gap-2 ${
								activeCategory === 'beef' ? 'underline' : ''
							}`}
						>
							<Beef />
							Beef Deobap
						</li>
						<li
							onClick={() => handleScroll('vegan')}
							className={`cursor-pointer flex items-center gap-2 ${
								activeCategory === 'vegan' ? 'underline' : ''
							}`}
						>
							<Vegan />
							Vegan Deobap
						</li>
						<li
							onClick={() => handleScroll('kSpecial')}
							className={`cursor-pointer flex items-center gap-2 ${
								activeCategory === 'kSpecial' ? 'underline' : ''
							}`}
						>
							<Gem />
							K-Special
						</li>
						<li
							onClick={() => handleScroll('sides')}
							className={`cursor-pointer flex items-center gap-2 ${
								activeCategory === 'sides' ? 'underline' : ''
							}`}
						>
							<Salad />
							Sides
						</li>
					</ul>
				</div>
			</div>
			{/* Chicken */}
			<div
				id="chicken"
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8"
			>
				{menuItems.map((item, index) => (
					<MenuCard key={index} index={index} item={item} />
				))}
			</div>
			{/* Beef */}
			<div
				id="beef"
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8"
			>
				{menuItems.map((item, index) => (
					<MenuCard key={index} index={index} item={item} />
				))}
			</div>
			{/* Vegan */}
			<div
				id="vegan"
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8"
			>
				{menuItems.map((item, index) => (
					<MenuCard key={index} index={index} item={item} />
				))}
			</div>
			{/* K-Special */}
			<div
				id="kSpecial"
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8"
			>
				{menuItems.map((item, index) => (
					<MenuCard key={index} index={index} item={item} />
				))}
			</div>
			{/* Sides */}
			<div
				id="sides"
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8"
			>
				{menuItems.map((item, index) => (
					<MenuCard key={index} index={index} item={item} />
				))}
			</div>
		</div>
	);
};

export default index;
