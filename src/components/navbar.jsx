'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const menuItems = [
		{ title: 'Menu', items: ['Rice Bowls', 'Side Dishes', 'Beverages'] },
		{ title: 'Locations', items: ['Downtown', 'Uptown', 'Eastside'] },
	];

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			className="h-16 w-screen bg-white text-[#6a3116] flex items-center justify-between px-2 sm:px-8 fixed z-50 border-b border-blue-950"
		>
			<div className="h-full flex items-center gap-2">
				<Image
					src="/images/logo.png"
					alt="Logo"
					width={40}
					height={40}
				/>
				<h1 className="flex text-sm sm:text-md flex-col">
					<span>덮밥장사장</span>
					<span>Jangsajang Deobap</span>
				</h1>
			</div>

			<div className="hidden md:flex w-fit items-center md:justify-self-end space-x-4 sm:space-x-8">
				<NavigationMenu>
					<NavigationMenuList>
						{menuItems.map((menu) => (
							<NavigationMenuItem key={menu.title}>
								<NavigationMenuTrigger>
									{menu.title}
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<div className="grid gap-3 p-4 w-[400px]">
										{menu.items.map((item) => (
											<NavigationMenuLink
												key={item}
												href={`#${item
													.toLowerCase()
													.replace(' ', '-')}`}
											>
												{item}
											</NavigationMenuLink>
										))}
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>
						))}
					</NavigationMenuList>
				</NavigationMenu>
				<Button
					size="sm"
					className="bg-white text-[#6a3116] hover:bg-white/90 hidden sm:inline-flex"
				>
					ORDER NOW
				</Button>
			</div>
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon" className="md:hidden">
						<Menu className="h-5 w-5" />
						<span className="sr-only">Open menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left">
					<SheetHeader>
						<SheetTitle>Menu</SheetTitle>
					</SheetHeader>
					<div className="grid gap-4 py-4">
						{menuItems.map((menu) => (
							<div key={menu.title} className="grid gap-2">
								<h3 className="font-semibold">{menu.title}</h3>
								{menu.items.map((item) => (
									<Link
										key={item}
										href={`#${item
											.toLowerCase()
											.replace(' ', '-')}`}
										className="text-sm"
										onClick={() => setIsOpen(false)}
									>
										{item}
									</Link>
								))}
							</div>
						))}
						<Button
							size="sm"
							className="bg-[#6a3116] text-white hover:bg-[#6a3116]/90 mt-4"
							onClick={() => setIsOpen(false)}
						>
							ORDER NOW
						</Button>
					</div>
				</SheetContent>
			</Sheet>
		</motion.nav>
	);
}
