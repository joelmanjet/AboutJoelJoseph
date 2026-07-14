import Image from 'next/image';
import ChromeBeam from './ChromeBeam';
import TiltCard from './TiltCard';

type Link = { label: string; href: string };

type Project = {
    title: string;
    description: string;
    tech: string[];
    image: string;       // /public path, e.g. '/posturise.jpg'
    links: Link[];       // one or more buttons
};

const projects: Project[] = [
    {
        title: 'PostuRise – AI Posture Correction',
        description:
            'AI-powered posture correction system using Python + OpenCV on Raspberry Pi. Recognized with a Congressional Certificate of Innovation from Congressman Pat Fallon.',
        tech: ['Python', 'OpenCV', 'Raspberry Pi'],
        image: '/POSTURISE.png',
        links: [{ label: 'GitHub', href: 'https://github.com/joelmanjet/posture/tree/main' }],
    },
    {
        title: 'PC Sales Data Scraper',
        description:
            'Script that scrapes Jawa Discord sales alerts and analyzes GPU/CPU trends to optimize pricing and part choices.',
        tech: ['Node.js', 'Puppeteer', 'Data Analysis'],
        image: '/Script.svg',
        links: [{ label: 'GitHub', href: 'https://github.com/joelmanjet/PCTrendsDataScraping/tree/main' }],
    },
    {
        title: 'Paradigm Custom PC Storefront (Jawa.gg)',
        description:
            'Verified seller storefront for high-value custom PCs on Jawa.gg; featured by the platform on Instagram and in newsletters.',
        tech: ['PC Hardware', 'Business Ops', 'Marketing'],
        image: '/Paradigm.png',
        links: [
            { label: 'Storefront', href: 'https://www.jawa.gg/sp/415071/paradigm' },
            { label: 'Instagram Feature', href: 'https://www.instagram.com/p/DOt9EqeCSvB/?utm_source=ig_web_copy_link' },
        ],
    },
    {
        title: 'Amazon KDP Publishing',
        description:
            'Published and marketed "Vehicle Maintenance Log Book" on Amazon KDP using SEO + design to build a passive-income storefront.',
        tech: ['Publishing', 'Design', 'SEO'],
        image: '/LogBook.jpg',
        links: [{ label: 'Amazon Listing', href: 'https://a.co/d/9rn0LFe' }],
    },
    {
        title: 'YouTube – Tech + Education Channel',
        description:
            '40+ videos on programming, hardware reviews, and tutorials; 155K+ total views. Focus on concise, practical walkthroughs.',
        tech: ['Video Production', 'Premiere Pro', 'Photoshop'],
        image: '/YouTube.jpg', 
        links: [
            { label: 'Channel', href: 'https://www.youtube.com/@ThisGuy_JJ' }],
    },
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-12 sm:py-20 scroll-mt-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-archivo italic font-semibold tracking-heading text-xl sm:text-2xl text-navy mb-2 text-center">
                    Featured Projects
                </h2>
                <ChromeBeam />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    {projects.map((p) => (
                        <TiltCard
                            key={p.title}
                            className="bg-white/60 overflow-hidden border border-navy/10"
                            style={{ boxShadow: '0 2px 12px rgba(20,28,40,0.08)' }}
                        >
                            <div className="aspect-video bg-champagne-flat relative">
                                <Image src={p.image} alt={p.title} fill className="object-cover" />
                            </div>

                            <div className="p-4 sm:p-6">
                                <h3 className="text-base sm:text-lg font-semibold text-navy mb-2">
                                    {p.title}
                                </h3>

                                <p className="text-sm sm:text-base text-warm-gray mb-3">{p.description}</p>

                                <p className="text-xs text-warm-gray/70 mb-4">{p.tech.join(' • ')}</p>

                                <div className="flex flex-wrap gap-3">
                                    {p.links.map((l) => (
                                        <a
                                            key={l.href}
                                            href={l.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-navy hover:text-navy-hover font-medium text-sm sm:text-base transition-colors"
                                        >
                                            {l.label} →
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
