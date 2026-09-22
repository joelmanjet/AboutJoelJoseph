'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ChromeBeam from '../components/ChromeBeam';

const RESUME_PDF_PATH = '/resume.pdf';

export default function ResumePage() {
  return (
    <main className="min-h-screen pt-16">
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1 text-sm text-warm-gray hover:text-navy transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-archivo italic font-semibold tracking-heading text-2xl sm:text-3xl text-navy mb-2">
              Resume
            </h1>
            <ChromeBeam />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <a
              href={RESUME_PDF_PATH}
              download
              className="px-6 py-2 bg-navy text-white font-medium hover:bg-navy-hover transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download PDF
            </a>
            <a
              href={RESUME_PDF_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-navy/20 text-navy font-medium hover:text-navy-hover hover:border-navy-hover/40 transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open in New Tab
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="border border-navy/10 bg-white/60 overflow-hidden"
            style={{ boxShadow: '0 2px 12px rgba(20,28,40,0.08)' }}
          >
            <object data={RESUME_PDF_PATH} type="application/pdf" className="w-full h-[75vh] sm:h-[85vh]">
              <div className="flex flex-col items-center justify-center h-[50vh] text-center px-4 gap-3 text-warm-gray">
                <p>Your browser can&apos;t preview PDFs inline.</p>
                <a href={RESUME_PDF_PATH} className="text-navy font-medium hover:text-navy-hover transition-colors">
                  Download the resume instead →
                </a>
              </div>
            </object>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
