'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ChromeBeam from './ChromeBeam';
import TiltCard from './TiltCard';

export default function ResumeSection() {
  return (
    <section id="resume" className="py-12 sm:py-20 border-t border-navy/10 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-archivo italic font-semibold tracking-heading text-xl sm:text-2xl text-navy mb-2 text-center">
          Resume
        </h2>
        <ChromeBeam />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <TiltCard
            tilt={3}
            className="bg-white/60 border border-navy/10 p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-10"
            style={{ boxShadow: '0 2px 12px rgba(20,28,40,0.08)' }}
          >
            <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-champagne-flat border border-navy/10 rounded-full">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z" />
              </svg>
            </div>

            <div className="text-center sm:text-left flex-1">
              <p className="text-warm-gray text-sm sm:text-base mb-4">
                A snapshot of my experience, skills, and education. View it inline or grab a copy.
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                <Link
                  href="/resume"
                  className="px-6 py-2 bg-navy text-white font-medium hover:bg-navy-hover transition-colors inline-flex items-center justify-center gap-2"
                >
                  View Resume
                </Link>
                <a
                  href="/resume.pdf"
                  download
                  className="px-6 py-2 border border-navy/20 text-navy font-medium hover:text-navy-hover hover:border-navy-hover/40 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
