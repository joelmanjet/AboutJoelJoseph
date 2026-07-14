'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import ChromeBeam from './ChromeBeam';

export default function HeroSection() {
  return (
    <section id="home" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center"
      >
        <div className="mb-6 sm:mb-8">
          <Image
            src="/icon.jpg"
            alt="Profile Picture"
            width={120}
            height={120}
            className="rounded-full mx-auto border border-white/60 shadow-sm"
          />
        </div>
        <h1 className="font-archivo italic font-semibold tracking-heading text-3xl sm:text-4xl text-navy mb-3 sm:mb-4">
          Joel Joseph
        </h1>
        <ChromeBeam withFaintLine />
        <p className="text-lg sm:text-xl text-warm-gray mb-6 sm:mb-8">
          Software Engineering Intern @ Equinix | Salesforce Data Cloud &amp; Agentforce
        </p>
        <p className="text-warm-gray/80 max-w-2xl mx-auto text-sm sm:text-base px-4">
          Computer Science student at UT-Dallas, graduating May 2027.
        </p>
      </motion.div>
    </section>
  );
}
