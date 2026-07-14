export default function Logo({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-8 w-8 items-center justify-center rounded-md bg-champagne-flat text-navy font-archivo italic font-semibold tracking-heading text-sm ${className ?? ''}`}
    >
      JJ
    </span>
  );
}
