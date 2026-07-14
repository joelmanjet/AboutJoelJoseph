export default function ChromeBeam({ withFaintLine = false }: { withFaintLine?: boolean }) {
  return (
    <div className="relative mx-auto my-6 sm:my-8 h-6 w-28 sm:w-36">
      <div
        className="absolute left-1/2 top-1/2 h-[3px] w-full -translate-x-1/2 -translate-y-1/2 -rotate-[11deg] bg-white"
        style={{ boxShadow: '0 0 20px rgba(255,255,255,1), 0 2px 6px rgba(120,105,75,0.2)' }}
      />
      {withFaintLine && (
        <div
          className="absolute left-1/2 top-1/2 h-[2px] w-2/3 -translate-x-1/2 -translate-y-1/2 -rotate-[11deg] bg-white/60"
          style={{ boxShadow: '0 0 10px rgba(255,255,255,0.6)', marginTop: '10px' }}
        />
      )}
    </div>
  );
}
