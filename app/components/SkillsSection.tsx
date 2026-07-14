import ChromeBeam from './ChromeBeam';
import TiltCard from './TiltCard';

export default function SkillsSection() {
    const skills = [
        'Salesforce Data Cloud',
        'Agentforce',
        'Lightning Web Components',
        'Python',
        'SQL & SOQL',
        'Java & C++',
        'Data Engineering',
        'Data Modeling & Warehousing',
        'RAG & OCR Pipelines',
        'AWS: Bedrock, S3, Lambda',
        'Docker',
        'React & TypeScript',
        'Node.js & Puppeteer',
        'GitHub & GitLab CI/CD',
        'Jira & Confluence'
    ];

	return (
		<section id="skills" className="py-12 sm:py-20 border-t border-navy/10 scroll-mt-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="font-archivo italic font-semibold tracking-heading text-xl sm:text-2xl text-navy mb-2 text-center">Skills &amp; Technologies</h2>
				<ChromeBeam />
				<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
					{skills.map((skill) => (
						<TiltCard
							key={skill}
							tilt={3}
							className="bg-white/60 p-4 sm:p-6 text-center transition-colors hover:bg-white/80 text-sm sm:text-base text-warm-gray border border-navy/10"
							style={{ boxShadow: '0 2px 12px rgba(20,28,40,0.08)' }}
						>
							{skill}
						</TiltCard>
					))}
				</div>
			</div>
		</section>
	);
}
