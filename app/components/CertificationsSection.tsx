import Image from 'next/image';
import ChromeBeam from './ChromeBeam';
import TiltCard from './TiltCard';

type Certification = {
    title: string;
    issuer: string;
    issued: string;
    expires?: string;
    credentialId: string;
    credentialUrl: string;
    logo: string;
};

const certifications: Certification[] = [
    {
        title: 'AWS Certified Cloud Practitioner',
        issuer: 'Amazon Web Services',
        issued: 'Sep 2026',
        expires: 'Sep 2029',
        credentialId: '5453dd5a-64cb-4a8a-b9a4-c5f7a70bcc9e',
        credentialUrl: 'https://www.credly.com/badges/5453dd5a-64cb-4a8a-b9a4-c5f7a70bcc9e/public_url',
        logo: '/awslogo.jpg',
    },
    {
        title: 'Salesforce Certified Agentforce Specialist',
        issuer: 'Salesforce',
        issued: 'Aug 2026',
        credentialId: '8030888',
        credentialUrl: 'https://www.salesforce.com/trailblazer/joeljoseph',
        logo: '/salesforcelogo.jpg',
    },
];

export default function CertificationsSection() {
    return (
        <section id="certifications" className="py-12 sm:py-20 border-t border-navy/10 scroll-mt-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-archivo italic font-semibold tracking-heading text-xl sm:text-2xl text-navy mb-2 text-center">
                    Certifications
                </h2>
                <ChromeBeam />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6">
                    {certifications.map((c) => (
                        <TiltCard
                            key={c.credentialId}
                            className="bg-white/60 p-4 sm:p-6 border border-navy/10"
                            style={{ boxShadow: '0 2px 12px rgba(20,28,40,0.08)' }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="shrink-0 w-12 h-12 relative overflow-hidden bg-champagne-flat border border-navy/10 rounded-full">
                                    <Image src={c.logo} alt={`${c.issuer} logo`} fill className="object-contain p-1.5" />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="text-base sm:text-lg font-semibold text-navy">{c.title}</h3>
                                    <p className="text-sm text-warm-gray">{c.issuer}</p>
                                    <p className="text-xs text-warm-gray/70 mt-1">
                                        Issued {c.issued}
                                        {c.expires && ` · Expires ${c.expires}`}
                                    </p>
                                    <p className="text-xs text-warm-gray/70">Credential ID {c.credentialId}</p>

                                    <a
                                        href={c.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-3 text-navy hover:text-navy-hover font-medium text-sm transition-colors"
                                    >
                                        Show credential →
                                    </a>
                                </div>
                            </div>
                        </TiltCard>
                    ))}
                </div>

                <p className="text-center text-sm text-warm-gray">
                    <a
                        href="https://www.linkedin.com/in/imjoel/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-navy hover:text-navy-hover font-medium transition-colors"
                    >
                        View all certifications on LinkedIn →
                    </a>
                </p>
            </div>
        </section>
    );
}
