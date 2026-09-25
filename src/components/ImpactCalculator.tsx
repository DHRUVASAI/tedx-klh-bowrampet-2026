import React from 'react';

interface ImpactCalculatorProps {
  onApplyToBooking: () => void;
}

export default function ImpactCalculator({ onApplyToBooking }: ImpactCalculatorProps) {
  const valueItems = [
    {
      title: '8 Curated Stage Keynotes',
      desc: '18-minute TEDx talks on synthetic intelligence, bio-architecture, and society',
      marketVal: '₹1,500',
      icon: 'podium',
    },
    {
      title: 'Executive Lunch & High-Tea Refreshments',
      desc: 'Full hospitality catering, artisanal networking coffee breaks, and gourmet buffet',
      marketVal: '₹850',
      icon: 'restaurant',
    },
    {
      title: 'Official Metamorphosis Kit & Monograph',
      desc: 'Commemorative delegate badge, speaker abstracts book, and collector pin',
      marketVal: '₹600',
      icon: 'inventory_2',
    },
    {
      title: 'Tactile Prototype Pavilions',
      desc: 'Hands-on interactive technology installations and research demos in the atrium',
      marketVal: '₹500',
      icon: 'science',
    },
    {
      title: 'Official TEDx Credential Certificate',
      desc: 'Institutionally verified digital and physical certificate of attendance',
      marketVal: '₹450',
      icon: 'verified',
    },
  ];

  const totalMarketValue = '₹3,900';
  const delegateFee = 511;

  return (
    <section className="w-full py-24 bg-[#050507] border-y border-white/10 relative overflow-hidden" id="impact-calculator">
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#eb0028]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eb0028]/20 border border-[#eb0028]/40 text-[#ffb3ae] text-[11px] font-bold uppercase tracking-widest mb-2 font-mono">
            ✨ Value Breakdown
          </div>
          <h2 className="font-['Cinzel'] text-3xl sm:text-5xl font-normal text-white uppercase tracking-tight">
            Single Pass · Complete Immersion
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 font-['Geist']">
            Subsidized for accessible participation. There are no tiers, hidden charges, or add-ons — only one all-inclusive pass of ₹511.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto w-full">
          {/* Left: What is Included */}
          <div className="lg:col-span-7 bg-[#0e0e10] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl flex flex-col justify-between gap-6">
            <div>
              <div className="p-4 rounded-2xl bg-[#18181b] border border-white/10 mb-6 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-[#ffb3ae] uppercase tracking-wider block">
                    Official Delegate Admission
                  </span>
                  <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mt-0.5">
                    Metamorphosis Pass
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-xs text-zinc-400 block font-mono">Delegate Fee</span>
                  <span className="font-['Space_Grotesk'] text-3xl font-extrabold text-[#eb0028]">
                    ₹511
                  </span>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                {valueItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#18181b]/80 border border-white/5 flex items-start justify-between gap-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#eb0028]/15 border border-[#eb0028]/30 flex items-center justify-center text-[#eb0028] shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-[#e5e1e4]">
                          {item.title}
                        </div>
                        <div className="text-xs text-zinc-400 mt-0.5">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-[11px] text-zinc-500 line-through font-mono block">
                        {item.marketVal}
                      </span>
                      <span className="text-[11px] font-bold text-[#ffb3ae] font-mono uppercase">
                        Included
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#eb0028]/10 border border-[#eb0028]/30 flex items-center gap-3">
              <span className="material-symbols-outlined text-[#eb0028] text-[20px] shrink-0">
                verified
              </span>
              <p className="text-xs text-[#ffb3ae] font-mono">
                Institutional subsidy: Over {totalMarketValue} in curated programming delivered at ₹511.
              </p>
            </div>
          </div>

          {/* Right: Summary Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#121216] to-[#0a0a0c] rounded-3xl p-6 sm:p-8 border-2 border-[#eb0028]/60 shadow-[0_0_40px_rgba(235,0,40,0.2)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#ffb3ae]">
                  Unified Delegate Pass
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase bg-[#eb0028]/20 text-[#ffb3ae] font-bold border border-[#eb0028]/40">
                  Strict 100 Cap
                </span>
              </div>

              <h3 className="font-['Cinzel'] text-2xl font-bold text-white uppercase">
                Metamorphosis 2026
              </h3>
              <p className="text-xs text-zinc-400 mt-1 font-mono">
                KLH Bowrampet Campus · 04 NOV 2026
              </p>

              <div className="my-6 p-4 rounded-2xl bg-black/60 border border-white/10 space-y-3 font-mono text-xs">
                <div className="flex justify-between text-zinc-400">
                  <span>Standard Experience Value</span>
                  <span className="line-through">{totalMarketValue}</span>
                </div>
                <div className="flex justify-between text-emerald-400">
                  <span>KLH University Grant</span>
                  <span>-₹3,389</span>
                </div>
                <div className="h-px bg-white/10 my-1" />
                <div className="flex justify-between text-sm font-bold text-white items-baseline">
                  <span>Final Pass Fee</span>
                  <span className="font-['Space_Grotesk'] text-3xl font-extrabold text-[#eb0028]">
                    ₹{delegateFee}
                  </span>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-zinc-300 font-['Geist'] mb-6">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#eb0028] text-[16px]">check</span>
                  <span>Single pass per delegate registration</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#eb0028] text-[16px]">check</span>
                  <span>Instant e-pass issued with gate barcode</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#eb0028] text-[16px]">check</span>
                  <span>All networking, talks &amp; lunch included</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onApplyToBooking}
              className="w-full py-4 rounded-full bg-gradient-to-r from-[#eb0028] to-[#990014] hover:shadow-[0_0_30px_rgba(235,0,40,0.7)] text-white font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Book Pass • ₹511</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
