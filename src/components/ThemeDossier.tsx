import React, { useState } from 'react';

const THRESHOLD_STATES = [
  {
    id: 'UNCERTAINTY',
    title: 'UNCERTAINTY',
    desc: "When the familiar no longer offers answers. The old map is gone, and the new one hasn't been drawn yet.",
  },
  {
    id: 'FAILURE',
    title: 'FAILURE',
    desc: 'The necessary breakdown of old structures. What worked before suddenly stops working, forcing a deeper change.',
  },
  {
    id: 'REINVENTION',
    title: 'REINVENTION',
    desc: 'The messy, experimental phase of finding new paths, testing boundaries, and discovering what might work.',
  },
  {
    id: 'RECONSTRUCTION',
    title: 'RECONSTRUCTION',
    desc: 'Building the new foundation. Taking the successful experiments and turning them into structural reality.',
  },
  {
    id: 'BECOMING',
    title: 'BECOMING',
    desc: 'Stepping into the new identity. The form has changed, and a new way of operating begins.',
  },
];

const FOUR_WORLDS = [
  {
    num: '01',
    title1: 'SCIENCE &',
    title2: 'TECHNOLOGY',
    desc: 'Living systems, machine intelligence, and the new architectures of possibility.',
    icon: 'memory',
  },
  {
    num: '02',
    title1: 'NATURE &',
    title2: 'PLANET',
    desc: 'Adaptation is not surrender. It is life redesigning itself to continue.',
    icon: 'eco',
  },
  {
    num: '03',
    title1: 'SOCIETY, WORK',
    title2: '& EDUCATION',
    desc: 'Institutions break apart. New ways of learning and belonging take form.',
    icon: 'groups',
  },
  {
    num: '04',
    title1: 'ART, MINDSET &',
    title2: 'HUMAN JOURNEY',
    desc: 'The private transformations that alter how we see the world—and ourselves.',
    icon: 'psychology',
  },
];

const QUESTIONS = [
  { prefix: 'WHAT MUST BE', highlight: 'DISMANTLED?' },
  { prefix: 'WHAT IS', highlight: 'EMERGING?' },
  { prefix: 'WHAT WILL WE SEE', highlight: 'DIFFERENTLY?' },
];

const TIMELINE_STAGES = [
  { step: '01', name: 'BEFORE', subtitle: 'The comfortable existing paradigm' },
  { step: '02', name: 'DISRUPTION', subtitle: 'Catalytic shocks to the status quo' },
  { step: '03', name: 'UNCERTAINTY', subtitle: 'The chrysalis threshold of breakdown' },
  { step: '04', name: 'RECONSTRUCTION', subtitle: 'Synthesizing novel solutions' },
  { step: '05', name: 'EMERGENCE', subtitle: 'Radical new realities taking flight' },
];

export const ThemeDossier: React.FC = () => {
  const [activeThreshold, setActiveThreshold] = useState<string>('UNCERTAINTY');
  const currentThreshold = THRESHOLD_STATES.find((s) => s.id === activeThreshold) || THRESHOLD_STATES[0];

  return (
    <section className="w-full py-24 bg-[#050507] border-t border-white/10 relative overflow-hidden section-divider" id="theme-dossier">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#eb0028]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#ff4d6d]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-20">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto reveal-fade">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eb0028]/15 border border-[#eb0028]/30 text-[#ffb3ae] text-[11px] font-bold uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-[#eb0028] animate-ping" />
            <span>02 — The Theme Dossier</span>
          </div>
          <h2 className="font-['Cinzel'] text-4xl sm:text-6xl md:text-7xl font-normal tracking-[0.2em] text-white uppercase shimmer-headline">
            METAMORPHOSIS
          </h2>
          <p className="font-['Geist'] text-xs sm:text-base text-zinc-400 tracking-[0.3em] uppercase mt-2">
            The Journey From What No Longer Fits To What Has Yet To Exist
          </p>
        </div>

        {/* Etymology Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0e0e10]/80 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden reveal-scale card-hover-glow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-8">
              <span className="text-[11px] font-mono text-[#ffb3ae] uppercase tracking-widest">Ancient Greek Etymology</span>
              <h3 className="font-['Cinzel'] text-3xl sm:text-4xl text-white mt-1">metamorphōsis</h3>
              <div className="flex items-center gap-2 text-sm text-zinc-400 mt-3 font-mono">
                <span className="text-white font-semibold">meta</span>
                <span className="text-[#eb0028]">(&quot;change, beyond&quot;)</span>
                <span>+</span>
                <span className="text-white font-semibold">morphē</span>
                <span className="text-[#eb0028]">(&quot;form&quot;)</span>
              </div>
              <div className="mt-4 px-3 py-1.5 rounded-lg bg-[#eb0028]/15 border border-[#eb0028]/30 text-xs font-bold text-white tracking-widest uppercase inline-block w-fit">
                LITERALLY: A CHANGE OF FORM
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4 text-zinc-300 font-['Geist'] leading-relaxed text-sm sm:text-base">
              <p className="text-white text-base sm:text-lg font-medium">
                The word carries two lives at once: <span className="text-[#ffb3ae]">the mythic</span> and <span className="text-[#eb0028]">the scientific</span>.
              </p>
              <p className="text-zinc-400 text-sm sm:text-base">
                It is a being made into something new by forces beyond its control, and simultaneously a body rebuilding itself, stage by stage, from within. A TEDx theme built on Metamorphosis gets to hold both — the wonder and the biology, the myth and the mechanism.
              </p>
              <div className="pt-2 text-xs font-mono text-[#ffb3ae]">
                &quot;Metamorphosis isn&apos;t decoration on top of who you were. It&apos;s a rebuild from the inside.&quot;
              </div>
            </div>
          </div>
        </div>

        {/* The Two Curatorial Pillars: Total Not Partial vs Myth & Mechanism */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0e0e10]/90 border border-white/10 flex flex-col justify-between reveal-left card-hover-glow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#eb0028]/15 border border-[#eb0028]/30 flex items-center justify-center text-[#eb0028] mb-6">
                <span className="material-symbols-outlined text-[24px]">science</span>
              </div>
              <span className="text-[10px] font-mono text-[#ffb3ae] uppercase tracking-widest">Dimension 01</span>
              <h4 className="font-['Cinzel'] text-2xl font-bold text-white mt-1 mb-3">
                Total, Not Partial
              </h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Metamorphosis is not simply &quot;change.&quot; Change can be small, reversible, cosmetic. <strong className="text-white">Metamorphosis is structural and largely irreversible.</strong>
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-zinc-400 font-mono">
              &quot;A caterpillar doesn&apos;t just get a few new features — its entire body is broken down, dissolved, and rebuilt into something fundamentally new.&quot;
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[#0e0e10]/90 border border-[#eb0028]/30 flex flex-col justify-between shadow-[0_0_30px_rgba(235,0,40,0.15)] reveal-right card-hover-glow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#eb0028]/20 border border-[#eb0028]/40 flex items-center justify-center text-[#ffb3ae] mb-6">
                <span className="material-symbols-outlined text-[24px]">hourglass_top</span>
              </div>
              <span className="text-[10px] font-mono text-[#eb0028] font-bold uppercase tracking-widest">Dimension 02</span>
              <h4 className="font-['Cinzel'] text-2xl font-bold text-white mt-1 mb-3">
                The Threshold Moment
              </h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                It requires a threshold moment — a chrysalis, a crisis, a decision — where the old form must be let go before the new one can form. Growth is a process, not an event.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#ffb3ae] font-mono">
              &quot;Change is not always transformation. The old identity is fading. Become what&apos;s next.&quot;
            </div>
          </div>
        </div>

        {/* Interactive Threshold State Explorer from tedxklhb.vercel.app */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0a0a0c] border border-white/10 relative overflow-hidden">
          <div className="max-w-3xl mb-8">
            <span className="text-[11px] font-mono text-[#ffb3ae] uppercase tracking-widest block mb-1">
              02 — The Threshold Explorer
            </span>
            <h3 className="font-['Cinzel'] text-2xl sm:text-4xl text-white uppercase font-bold">
              The Space Between
            </h3>
            <p className="text-sm text-zinc-400 mt-2">
              Every transformation requires moving through five critical psychological and structural states. Click each phase to explore:
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-8">
            {THRESHOLD_STATES.map((state) => (
              <button
                key={state.id}
                onClick={() => setActiveThreshold(state.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 border cursor-pointer ${
                  activeThreshold === state.id
                    ? 'bg-[#eb0028] border-[#eb0028] text-white shadow-[0_0_20px_rgba(235,0,40,0.6)]'
                    : 'border-white/15 text-zinc-400 hover:border-white/40 hover:text-white bg-zinc-900/50'
                }`}
              >
                {state.title}
              </button>
            ))}
          </div>

          {/* Active Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#141418] border border-white/10 min-h-[140px] flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#eb0028] animate-ping" />
              <h4 className="font-['Space_Grotesk'] text-xl font-bold text-white uppercase tracking-wider">
                {currentThreshold.title}
              </h4>
            </div>
            <p className="text-sm sm:text-base text-zinc-300 font-['Geist'] leading-relaxed max-w-2xl">
              {currentThreshold.desc}
            </p>
          </div>
        </div>

        {/* 04 — FOUR WORLDS from tedxklhb.vercel.app */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12 reveal-fade">
            <span className="text-[11px] font-mono text-[#ffb3ae] uppercase tracking-widest block mb-1">
              04 — The Disciplines
            </span>
            <h3 className="font-['Cinzel'] text-3xl sm:text-5xl text-white uppercase font-normal">
              Four Worlds
            </h3>
            <p className="text-sm text-zinc-400 mt-2">
              Where metamorphosis unfolds across knowledge boundaries at TED* KLH Bowrampet 2026.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOUR_WORLDS.map((w) => (
              <div
                key={w.num}
                className="p-6 sm:p-8 rounded-3xl bg-[#0e0e10] border border-white/10 hover:border-[#eb0028]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-light text-zinc-500 group-hover:text-[#eb0028] transition-colors">
                      {w.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-[#eb0028]/20 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-[20px]">{w.icon}</span>
                    </div>
                  </div>
                  <h4 className="font-['Space_Grotesk'] text-lg font-bold text-white uppercase leading-snug">
                    {w.title1}
                    <br />
                    <span className="text-[#ffb3ae]">{w.title2}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-3 leading-relaxed">
                    {w.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 05 — THE QUESTIONS & 06 — THE TRANSFORMATION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Questions */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-[#0e0e10] border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono text-[#ffb3ae] uppercase tracking-widest block mb-2">
                05 — The Questions
              </span>
              <h3 className="font-['Cinzel'] text-2xl sm:text-3xl text-white uppercase font-bold mb-6">
                Inquiries That Ignite
              </h3>
              <div className="space-y-4">
                {QUESTIONS.map((q, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between"
                  >
                    <span className="text-xs sm:text-sm font-['Space_Grotesk'] text-zinc-300 tracking-wider">
                      {q.prefix} <strong className="text-white">{q.highlight}</strong>
                    </span>
                    <span className="material-symbols-outlined text-[#eb0028] text-[18px]">
                      arrow_forward
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-zinc-500 font-mono">
              Curated to trigger active inquiry before, during, and beyond each talk.
            </div>
          </div>

          {/* Transformation Stages */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-[#0e0e10] border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono text-[#ffb3ae] uppercase tracking-widest block mb-2">
                06 — The Transformation Timeline
              </span>
              <h3 className="font-['Cinzel'] text-2xl sm:text-3xl text-white uppercase font-bold mb-6">
                The Form Is Not The Future
              </h3>
              <div className="space-y-3">
                {TIMELINE_STAGES.map((st) => (
                  <div
                    key={st.step}
                    className="flex items-center gap-4 p-3 rounded-xl bg-zinc-950/60 border border-white/5"
                  >
                    <span className="font-mono text-xs font-bold text-[#eb0028] w-6 shrink-0">
                      {st.step}
                    </span>
                    <div className="min-w-0 flex-1">
                      <span className="text-xs font-bold text-white font-['Space_Grotesk'] tracking-wider uppercase block">
                        {st.name}
                      </span>
                      <span className="text-[11px] text-zinc-500 truncate block">
                        {st.subtitle}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-zinc-500 font-mono">
              A 5-phase arc structured throughout the full-day program.
            </div>
          </div>
        </div>

        {/* 07 — Finale Carry-Forward Banner */}
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-[#121216] via-[#1f0006] to-[#121216] border border-[#eb0028]/40 shadow-2xl text-center flex flex-col items-center reveal-scale">
          <span className="text-[10px] font-mono text-[#ffb3ae] uppercase tracking-[0.25em] mb-4">
            07 — A Question To Carry Forward
          </span>
          <h3 className="font-['Cinzel'] text-2xl sm:text-4xl md:text-5xl text-white uppercase font-normal tracking-wide max-w-4xl leading-tight">
            &quot;WHAT IF YOU DON&apos;T HAVE TO KNOW WHAT YOU&apos;LL <span className="text-[#eb0028] font-bold">BECOME</span> TO BEGIN TRANSFORMING?&quot;
          </h3>
          <div className="mt-8 flex items-center gap-3">
            <span className="w-8 h-px bg-white/20" />
            <span className="text-xs font-mono text-zinc-400 tracking-widest uppercase">
              TED* KLH Bowrampet 2026
            </span>
            <span className="w-8 h-px bg-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
};
