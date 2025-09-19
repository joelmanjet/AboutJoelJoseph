import Image from 'next/image';

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
        title: 'JoelTech Custom PC Storefront (Jawa.gg)',
        description:
            'Verified seller storefront for high-value custom PCs on Jawa.gg; featured by the platform on Instagram and in newsletters.',
        tech: ['PC Hardware', 'Business Ops', 'Marketing'],
        image: '/JoelTech.jpg',
        links: [
            { label: 'Storefront', href: 'https://www.jawa.gg/sp/415071/joeltech' },
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
        title: 'PC Sales Data Scraper',
        description:
            'Script that scrapes Jawa Discord sales alerts and analyzes GPU/CPU trends to optimize pricing and part choices.',
        tech: ['Node.js', 'Puppeteer', 'Data Analysis'],
        image: '/code.jpg',
        links: [{ label: 'GitHub', href: 'https://github.com/joelmanjet/jawa-scraper' }],
    },
];

export default function ProjectsSection() {
    return (
        <section className="py-12 sm:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    {projects.map((p) => (
                        <div
                            key={p.title}
                            className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            {/* CHANGED: center image and avoid cropping */}
                            <div className="aspect-video bg-gray-700 relative grid place-items-center">
                                <Image
                                    src={p.image}
                                    alt={p.title}
                                    fill
                                    className="object-contain object-center p-2"
                                />
                            </div>

                            <div className="p-4 sm:p-6">
                                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                                    {p.title}
                                </h3>

                                <p className="text-sm sm:text-base text-gray-300 mb-3">{p.description}</p>

                                <p className="text-xs text-gray-400 mb-4">{p.tech.join(' • ')}</p>

                                <div className="flex flex-wrap gap-3">
                                    {p.links.map((l) => (
                                        <a
                                            key={l.href}
                                            href={l.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base"
                                        >
                                            {l.label} →
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
