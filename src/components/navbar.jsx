'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
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

	const menuItems = ['Menu', 'Locations'];

	return (
		<nav className="h-16 w-screen bg-white text-[#6a3116] flex items-center justify-between px-2 sm:px-8 fixed z-50 border-b border-blue-950">
			<div className="h-full flex items-center gap-2">
				<Image
					src="/images/logo.png"
					alt="Logo"
					width={40}
					height={40}
				/>
				<Link href="/">
					<h1 className="flex text-sm sm:text-md flex-col">
						<span>덮밥장사장</span>
						<span>Jangsajang Deobap</span>
					</h1>
				</Link>
			</div>

			<div className="hidden md:flex w-fit items-center md:justify-self-end space-x-4 sm:space-x-8">
				<NavigationMenu>
					<NavigationMenuList>
						{menuItems.map((menu) => (
							<NavigationMenuItem className="px-4" key={menu}>
								<NavigationMenuLink
									href={`${menu
										.toLowerCase()
										.replace(' ', '-')}`}
								>
									{menu}
								</NavigationMenuLink>
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
							<div key={menu} className="grid gap-2">
								<Link className="font-semibold">{menu}</Link>
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
		</nav>
	);
}
