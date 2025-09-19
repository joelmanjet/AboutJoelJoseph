import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Joel Joseph - Computer Science Student | Interested in DevOps & Software Development',
	description:
		'I’m Joel Joseph, a Computer Science student at the University of Texas at Dallas with a strong focus on software development and systems programming, expected to graduate in December 2027.',
	keywords: [
        'Software Developer',
        'Web Developer',
        'JavaScript',
        'TypeScript',
        'React',
        'Problem Solving',
        'Effective Solutions',
        'Web Development',
        'Frontend Development',
        'DevOps Enthusiast',
        'Java',
        'Python',
        'C++',
        'AWS (Bedrock, IAM, S3, Lambda)',
        'Docker',
        'GitHub',
        'Agile',
        'Clean Code',
        'Backend Development',
        'User Experience',
		'Joel Joseph',
	],
	authors: [{ name: 'Joel Joseph' }],
	creator: 'Joel Joseph',
	openGraph: {
		title: 'Joel Joseph - Computer Science Student | Interested in DevOps & Software Development',
		description: 'Passionate developer creating simple and effective solutions. Explore my projects and development approach.',
		url: 'https://your-domain.com',
		siteName: '[Your Name] - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: '[Your Name] - Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: '[Your Name] - Developer',
		description: 'Passionate developer creating simple and effective solutions. Explore my projects and development approach.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
