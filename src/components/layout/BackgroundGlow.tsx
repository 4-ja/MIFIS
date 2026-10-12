export function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Warm dot matrix texture */}
      <div className="absolute inset-0 bg-warm-dots opacity-80" />

      {/* Primary warm amber & coral spotlight behind the megaphone */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] ambient-glow-megaphone blur-[90px] rounded-full"
      />

      {/* Secondary soft top ambient corner warm glow */}
      <div 
        className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-amber-100/50 blur-[100px] rounded-full"
      />
      <div 
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-rose-100/40 blur-[100px] rounded-full"
      />
    </div>
  );
}
