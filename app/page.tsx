'use client';

import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function SimplePortfolio() {
	return (
		<main className="min-h-screen pt-16">
			<HeroSection />
			<SkillsSection />
			<ProjectsSection />
			<ContactSection />
		</main>
	);
}
