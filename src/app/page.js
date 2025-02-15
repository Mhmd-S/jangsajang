'use client';

import Marque from '@/components/landing/marque';
import Promotions from '@/components/landing/promotions';
import VisitUs from '@/components/landing/visitus';
import Hero from '@/components/landing/hero';
import BestSellers from '@/components/landing/best-sellers';
import MediaCarousel from '@/components/landing/media-carousel';

export default function Home() {
	const mediaItems = [
		{
			type: 'image',
			src: 'https://placehold.co/600x400',
			alt: 'Food carousel items',
		},
		{
			type: 'image',
			src: 'https://placehold.co/400x400',
			alt: 'Food carousel items',
		},
		{
			type: 'image',
			src: 'https://placehold.co/600x800',
			alt: 'Food carousel items',
		},
		{
			type: 'image',
			src: 'https://placehold.co/200x200',
			alt: 'Food carousel items',
		},
		{
			type: 'image',
			src: 'https://placehold.co/100x400',
			alt: 'Food carousel items',
		},
		{
			type: 'image',
			src: 'https://placehold.co/400x100',
			alt: 'Food carousel items',
		},
		{
			type: 'image',
			src: 'https://placehold.co/600x400',
			alt: 'Food carousel items',
		},
		{
			type: 'image',
			src: 'https://placehold.co/400x400',
			alt: 'Food carousel items',
		},
		{
			type: 'image',
			src: 'https://placehold.co/600x800',
			alt: 'Food carousel items',
		},
		{
			type: 'image',
			src: 'https://placehold.co/200x200',
			alt: 'Food carousel items',
		},
		{
			type: 'image',
			src: 'https://placehold.co/100x400',
			alt: 'Food carousel items',
		},
		{
			type: 'image',
			src: 'https://placehold.co/400x100',
			alt: 'Food carousel items',
		},
		{
			type: 'image',
			src: 'https://placehold.co/600x400',
			alt: 'Food carousel items',
		},
		{
			type: 'image',
			src: 'https://placehold.co/400x400',
			alt: 'Food carousel items',
		},
		{
			type: 'image',
			src: 'https://placehold.co/600x800',
			alt: 'Food carousel items',
		},
		{
			type: 'image',
			src: 'https://placehold.co/200x200',
			alt: 'Food carousel items',
		},
		{
			type: 'image',
			src: 'https://placehold.co/100x400',
			alt: 'Food carousel items',
		},
		{
			type: 'image',
			src: 'https://placehold.co/400x100',
			alt: 'Food carousel items',
		},
		{
			type: 'image',
			src: 'https://placehold.co/600x400',
			alt: 'Food carousel items',
		},
		{
			type: 'image',
			src: 'https://placehold.co/400x400',
			alt: 'Food carousel items',
		},
		{
			type: 'image',
			src: 'https://placehold.co/600x800',
			alt: 'Food carousel items',
		},
		{
			type: 'image',
			src: 'https://placehold.co/200x200',
			alt: 'Food carousel items',
		},
		{
			type: 'image',
			src: 'https://placehold.co/100x400',
			alt: 'Food carousel items',
		},
		{
			type: 'image',
			src: 'https://placehold.co/400x100',
			alt: 'Food carousel items',
		},
	];

	return (
		<main className="overflow-x-hidden max-w-screen bg-primary">
			<Hero />

			{/* Marque Section */}
			<Marque />

			{/* Menu Preview Section */}
			<BestSellers />

			<Promotions />

			<VisitUs />

			<MediaCarousel mediaItems={mediaItems} />
		</main>
	);
}
