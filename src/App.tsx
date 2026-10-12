import { BackgroundGlow } from './components/layout/BackgroundGlow';

export function App() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#0F172A] flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden selection:bg-amber-200 selection:text-amber-950">
      {/* Background Atmosphere */}
      <BackgroundGlow />

      <main className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Smaller Megaphone Icon */}
        <div className="relative mb-5 group">
          <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center transition-transform hover:scale-105 duration-300">
            <img 
              src="/megaphone.png" 
              alt="Announcement Megaphone" 
              className="w-full h-full object-contain select-none drop-shadow-[0_10px_20px_rgba(245,158,11,0.2)]"
            />
          </div>
        </div>

        {/* Single Horizontal Line "Coming soon!" Headline */}
        <h1 
          className="font-display font-normal tracking-[-0.03em] text-[#0F172A] mb-5 leading-none whitespace-nowrap"
          style={{
            fontSize: 'clamp(2.75rem, 7.5vw, 6.75rem)',
          }}
        >
          Coming soon!
        </h1>

        {/* Updated Subtext */}
        <p className="font-body text-slate-600 text-base sm:text-lg md:text-xl font-normal max-w-lg mx-auto leading-relaxed">
          <span className="font-semibold text-slate-900">
            manilafinanceandinvestmentsummit.com
          </span>{' '}
          is going live soon. Please stay tuned. Thank you!
        </p>

        {/* Footer */}
        <div className="mt-14 text-xs text-slate-400 font-medium">
          &copy; 2026 Manila Finance and Investment Summit. All rights reserved.
        </div>
      </main>
    </div>
  );
}

export default App;
