'use client';

import Image from 'next/image';

export default function HeroSection() {
	return (
		<section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
			<div className="text-center">
				<div className="mb-6 sm:mb-8">
					<Image src="/public/icon.jpeg" alt="Profile Picture" width={120} height={120} className="rounded-full mx-auto border-4 border-gray-700 shadow-lg" />
				</div>
				<h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Joel Joseph</h1>
				<p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">CS Student| Interested in DevOps & Software Dev.</p>
				<p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
					Computer Science student at the University of Texas at Dallas with a strong focus on software development and systems programming, expected to graduate in December 2027.
				</p>
			</div>
		</section>
	);
}
