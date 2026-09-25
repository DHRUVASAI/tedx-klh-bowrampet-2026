import React from 'react';

export interface BookingEngineProps {
  onProceedCheckout: () => void;
}

export const SINGLE_PASS = {
  name: 'Metamorphosis Delegate Pass',
  price: 511,
  badge: 'Official Pass · 100 Cap',
  desc: 'All-inclusive delegate pass to experience the unseen process of becoming live at KLH Bowrampet Campus.',
  features: [
    { text: 'Full Day Main Auditorium Keynote Access', included: true },
    { text: 'Official Metamorphosis Badge & Delegate Welcome Kit', included: true },
    { text: 'Executive Buffet Lunch, High Tea & Coffee Breaks', included: true },
    { text: 'Entry to Tactile Idea Pavilions & Prototype Hubs', included: true },
    { text: 'Verified Institutional Attendance Credential', included: true },
    { text: 'Direct Speaker Dialogue & Interactive Q&A Rounds', included: true },
  ],
};

export default function BookingEngine({ onProceedCheckout }: BookingEngineProps) {
  return (
    <section className="w-full py-24 bg-[#050507] relative overflow-hidden" id="booking-engine">
      {/* Background radial glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#eb0028]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eb0028]/15 border border-[#eb0028]/30 text-[#ffb3ae] text-[11px] font-bold uppercase tracking-widest mb-3">
            Strict 100 Seat Cap · Official TED* Licensing
          </div>
          <h2 className="font-['Cinzel'] text-3xl sm:text-5xl font-normal tracking-[0.14em] text-white uppercase">
            Metamorphosis Delegate Pass
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 font-['Geist']">
            One single, all-inclusive pass unlocking all 8 keynotes, networking dining, official kit, and live auditorium entry.
          </p>
        </div>

        {/* The Single Flagship ₹511 Pass Card */}
        <div className="max-w-xl mx-auto w-full">
          <div className="rounded-3xl bg-[#0e0e10]/95 border-2 border-[#eb0028] p-8 sm:p-10 shadow-[0_0_50px_rgba(235,0,40,0.25)] relative flex flex-col justify-between hover:-translate-y-1 transition duration-300">
            {/* Top Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#eb0028] text-white text-[11px] font-bold uppercase tracking-wider shadow-lg font-['Space_Grotesk']">
              Unified Pass · ₹511 Only
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 pt-2">
                <span className="text-[11px] font-mono text-[#ffb3ae] font-bold uppercase tracking-widest">
                  Delegate Access
                </span>
                <span className="text-[11px] uppercase px-3 py-1 rounded-full bg-[#eb0028]/20 text-[#ffb3ae] font-bold">
                  Main Hall
                </span>
              </div>

              <h3 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-white tracking-wide">
                {SINGLE_PASS.name}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                {SINGLE_PASS.desc}
              </p>

              {/* Price display */}
              <div className="my-8 flex items-baseline gap-2">
                <span className="font-['Space_Grotesk'] text-4xl sm:text-6xl font-extrabold text-white">
                  ₹511
                </span>
                <span className="text-sm text-zinc-400 font-mono">
                  / delegate (all inclusive)
                </span>
              </div>

              {/* Features list */}
              <ul className="space-y-3.5 text-sm text-zinc-300 font-['Geist']">
                {SINGLE_PASS.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#eb0028] text-[20px] shrink-0">
                      check_circle
                    </span>
                    <span>{feat.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10">
              <button
                onClick={onProceedCheckout}
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#eb0028] to-[#990014] text-white font-['Space_Grotesk'] text-sm font-bold uppercase tracking-widest shadow-[0_0_24px_rgba(235,0,40,0.5)] hover:shadow-[0_0_36px_rgba(235,0,40,0.8)] hover:scale-[1.01] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Claim Your Pass • ₹511</span>
                <span className="material-symbols-outlined text-[20px]">bolt</span>
              </button>
              <p className="text-[11px] text-zinc-500 text-center mt-3 font-mono">
                Instant digital e-pass with security QR code dispatched upon registration.
              </p>
            </div>
          </div>
        </div>

        {/* Real-time Interactive Booking Terminal Bar */}
        <div
          className="w-full p-6 sm:p-8 rounded-2xl bg-[#0e0e10]/90 backdrop-blur-md border border-white/10 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6"
          id="booking-terminal"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#eb0028]/20 border border-[#eb0028]/40 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[#eb0028] text-[28px]">
                confirmation_number
              </span>
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                Official Delegate Admission
              </span>
              <h4 className="font-['Space_Grotesk'] text-lg sm:text-xl font-bold text-white">
                Metamorphosis Pass
              </h4>
              <div className="text-xs text-zinc-400 mt-0.5">
                Rate: <span className="text-white font-bold">₹511</span> · 1 Pass per registration
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
            <div className="text-left sm:text-right">
              <span className="text-[10px] font-mono uppercase text-zinc-500 block">
                Total Due
              </span>
              <span className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-extrabold text-white">
                ₹511
              </span>
            </div>
            <button
              onClick={onProceedCheckout}
              className="px-8 py-3.5 rounded-full bg-[#eb0028] text-white font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider shadow-[0_0_24px_rgba(235,0,40,0.5)] hover:shadow-[0_0_36px_rgba(235,0,40,0.7)] hover:-translate-y-0.5 transition-all cursor-pointer shrink-0"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
