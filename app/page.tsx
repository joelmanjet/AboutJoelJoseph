'use client';

import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import CertificationsSection from './components/CertificationsSection';
import ProjectsSection from './components/ProjectsSection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';

export default function SimplePortfolio() {
	return (
		<main className="min-h-screen pt-16">
			<HeroSection />
			<SkillsSection />
			<CertificationsSection />
			<ProjectsSection />
			<ResumeSection />
			<ContactSection />
		</main>
	);
}
