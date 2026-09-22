import Image from 'next/image';
import ChromeBeam from './ChromeBeam';
import TiltCard from './TiltCard';

type Link = { label: string; href: string };

type Project = {
    title: string;
    description: string;
    tech: string[];
    image?: string;      // /public path, e.g. '/posturise.jpg'; omit for a placeholder tile
    links?: Link[];      // one or more buttons; omit when there's no public link yet
};

const projects: Project[] = [
    {
        title: 'StatePlanGPT – AI State Policy Assistant',
        description:
            'Built a State Plan document processing and analysis system with a Python, LangGraph, and LangChain backend and a React frontend to ingest policy PDFs and support retrieval-based analysis through a web interface. Developed a PDF-to-image preprocessing step and dual-OCR workflow with Docling and RapidOCR, debugging hidden text artifacts to achieve over 90% extraction confidence. Implemented an automated pipeline connecting OCR grading, confidence-based refinement, proposition chunking, and vector retrieval, running local LLMs alongside cloud models for cost-efficient processing. Private project, no public link yet.',
        tech: ['Python', 'LangGraph', 'LangChain', 'React', 'Docling & RapidOCR', 'Vector Retrieval'],
        image: '/stateplangpt.png',
    },
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
                                {p.image ? (
                                    <Image src={p.image} alt={p.title} fill className="object-cover" />
                                ) : (
                                    <div className="flex items-center justify-center h-full">
                                        <svg className="w-10 h-10 sm:w-12 sm:h-12 text-navy/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.99-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                )}
                            </div>

                            <div className="p-4 sm:p-6">
                                <h3 className="text-base sm:text-lg font-semibold text-navy mb-2">
                                    {p.title}
                                </h3>

                                <p className="text-sm sm:text-base text-warm-gray mb-3">{p.description}</p>

                                <p className="text-xs text-warm-gray/70 mb-4">{p.tech.join(' • ')}</p>

                                {p.links && p.links.length > 0 && (
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
                                )}
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
