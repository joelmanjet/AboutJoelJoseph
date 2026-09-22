import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume | Joel Joseph',
  description: 'View or download Joel Joseph\'s resume as a PDF.',
  alternates: { canonical: '/resume' },
  robots: { index: true, follow: true },
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
