import Image from 'next/image';

type Project = {
    title: string;
    description: string;
    tech: string[];
    link: string;
    image: string; // /public path, e.g., '/posturise.jpg'
};

const projects: Project[] = [
    {
        title: 'PostuRise – AI Posture Correction',
        description:
            'AI-powered posture correction system using Python + OpenCV on Raspberry Pi. Recognized with a Congressional Certificate of Innovation from Congressman Pat Fallon.',
        tech: ['Python', 'OpenCV', 'Raspberry Pi'],
        link: 'https://github.com/joelmanjet/posture/tree/main',
        image: '/POSTURISE.png'
    },
    {
        title: 'JoelTech Custom PC Storefront (Jawa.gg)',
        description:
            'Verified seller storefront for high-value custom PCs on Jawa.gg; featured on platform’s [Instagram](https://www.instagram.com/p/DOt9EqeCSvB/?utm_source=ig_web_copy_link) and newsletters.',
        tech: ['PC Hardware', 'Business Ops', 'Marketing'],
        link: 'www.jawa.gg/sp/415071/joeltech',
        image: '/JoelTech.jpg'
    },
    {
        title: 'Amazon KDP Publishing',
        description:
            'Published and marketed "Vehicle Maintenance Log Book" on Amazon KDP using SEO + design to build a passive-income storefront on Amazon.',
        tech: ['Publishing', 'Design', 'SEO'],
        link: 'https://a.co/d/9rn0LFe',
        image: '/LogBook.jpg'                                        
    },
    {
        title: 'PC Sales Data Scraper',
        description:
            'Script that scrapes Jawa Discord sales alerts and analyzes GPU/CPU trends to optimize pricing and part choices.',
        tech: ['Node.js', 'Puppeteer', 'Data Analysis'],           // or Python/BeautifulSoup if that’s what you used
        link: 'https://github.com/joelmanjet/jawa-scraper',        // ← your repo
        image: '/code.jpg'                                         // fallback image already in /public
    }
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
