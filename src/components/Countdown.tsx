import { useState, useEffect } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    const targetDate = new Date('November 4, 2026 09:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, mins: minutes, secs: seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-2xl p-6 rounded-2xl bg-[#121216]/90 backdrop-blur-md border border-white/10 shadow-2xl flex flex-col items-center">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2 h-2 rounded-full bg-[#eb0028] animate-pulse" />
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#71717A]">
          Countdown to Opening Stage Keynote
        </span>
      </div>
      <div className="grid grid-cols-4 gap-3 sm:gap-6 w-full text-center">
        <div className="p-3 sm:p-4 rounded-xl bg-[#201f21] border border-white/10 flex flex-col items-center">
          <span className="text-3xl sm:text-5xl font-extrabold text-[#e5e1e4] tabular-nums font-headline">
            {timeLeft.days}
          </span>
          <span className="text-[11px] font-bold uppercase text-[#A1A1AA] mt-1">Days</span>
        </div>
        <div className="p-3 sm:p-4 rounded-xl bg-[#201f21] border border-white/10 flex flex-col items-center">
          <span className="text-3xl sm:text-5xl font-extrabold text-[#e5e1e4] tabular-nums font-headline">
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
          <span className="text-[11px] font-bold uppercase text-[#A1A1AA] mt-1">Hours</span>
        </div>
        <div className="p-3 sm:p-4 rounded-xl bg-[#201f21] border border-white/10 flex flex-col items-center">
          <span className="text-3xl sm:text-5xl font-extrabold text-[#e5e1e4] tabular-nums font-headline">
            {String(timeLeft.mins).padStart(2, '0')}
          </span>
          <span className="text-[11px] font-bold uppercase text-[#A1A1AA] mt-1">Mins</span>
        </div>
        <div className="p-3 sm:p-4 rounded-xl bg-[#201f21] border border-white/10 flex flex-col items-center">
          <span className="text-3xl sm:text-5xl font-extrabold text-[#eb0028] tabular-nums font-headline">
            {String(timeLeft.secs).padStart(2, '0')}
          </span>
          <span className="text-[11px] font-bold uppercase text-[#A1A1AA] mt-1">Secs</span>
        </div>
      </div>
    </div>
  );
}
