import type { Metadata } from 'next';
import { Archivo, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import ReactiveBackground from './components/ReactiveBackground';
import ScrollProgressBeam from './components/ScrollProgressBeam';
import TopNav from './components/TopNav';

const archivo = Archivo({
	variable: '--font-archivo',
	subsets: ['latin'],
	weight: ['400', '500', '600'],
	style: ['normal', 'italic'],
});

const sourceSans3 = Source_Sans_3({
	variable: '--font-source-sans-3',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	metadataBase: new URL('https://joeljoseph.org'),
	title: 'Joel Joseph\'s Portfolio',
	// title: 'Joel Joseph - Software Engineering Intern @ Equinix | Salesforce Data Cloud & Agentforce',
	description:
		'I’m Joel Joseph, a Software Engineering Intern at Equinix working with Salesforce Data Cloud and Agentforce, and a Computer Science student at the University of Texas at Dallas expected to graduate in May 2027.',
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
        'Salesforce',
        'Salesforce Data Cloud',
        'Agentforce',
        'SOQL',
        'LWC',
        'Equinix',
		'Joel Joseph',
	],
	authors: [{ name: 'Joel Joseph' }],
	creator: 'Joel Joseph',
	openGraph: {
		title: 'Joel Joseph\'s Portfolio',
		description: 'Passionate developer creating simple and effective solutions. Explore my projects and development approach.',
		url: '/',
		siteName: 'Joel Joseph - Portfolio',
		images: [
			{
				url: '/JJ.png',
				width: 1200,
				height: 630,
				alt: 'Joel Joseph - Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Joel Joseph\'s Portfolio',
		description: 'Passionate developer creating simple and effective solutions. Explore my projects and development approach.',
		creator: '@joeljoseph',
		images: ['/JJ.png'],
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
			<body className={`${archivo.variable} ${sourceSans3.variable} antialiased`}>
				<ReactiveBackground />
				<TopNav />
				<ScrollProgressBeam />
				{children}
			</body>
		</html>
	);
}
