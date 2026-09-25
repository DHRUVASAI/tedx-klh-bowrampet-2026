import { useState } from 'react';

type TabKey = 'stage' | 'pavilions' | 'mixer';

interface TabData {
  title: string;
  desc: string;
  bullets: string[];
  tag: string;
  img: string;
}

const experienceData: Record<TabKey, TabData> = {
  stage: {
    title: 'The Chrysalis Stage: Pure Intellectual Transformation',
    desc: 'Equipped with Dolby acoustic damping, state-of-the-art cinematic lighting rigs, and the iconic red carpet stage circle. 100 passionate minds witness 8 transformative breakthroughs unfold.',
    bullets: [
      '4K multi-angle broadcast recording',
      'Direct speaker question rounds',
      'Ergonomic tiered seating with perfect sightlines',
    ],
    tag: 'Stage 01 · The Crucible',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&auto=format&fit=crop&q=80',
  },
  pavilions: {
    title: 'The Blueprint Pavilions: Tactile Prototype Hubs',
    desc: 'During intermissions, explore tactile prototypes from KLH aerospace labs, neural network live demonstrations, and biomimetic architectural artifacts engineered right on campus.',
    bullets: [
      'Hands-on hardware & robotics demos',
      'Direct interaction with PhD researchers',
      'High-speed campus fiber networking zones',
    ],
    tag: 'Stage 02 · Crystalline Wireframes',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&auto=format&fit=crop&q=80',
  },
  mixer: {
    title: 'The Emergence Soirée: Networking Lounge & High Tea',
    desc: 'An intimate evening gathering following the closing keynotes. Mingle with visionary speakers, keynote researchers, and student creators in the ambient garden lounge.',
    bullets: [
      'Artisanal tea, coffee and gourmet buffet reception',
      'Commemorative delegate kits and monograph booklets',
      'Included for all registered Metamorphosis delegates',
    ],
    tag: 'Stage 03 · The Emergence',
    img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&auto=format&fit=crop&q=80',
  },
};

export default function ExperienceShowcase({ onSelectExperience }: { onSelectExperience?: () => void }) {
  const [activeTab, setActiveTab] = useState<TabKey>('stage');
  const data = experienceData[activeTab];

  return (
    <section className="w-full py-20 bg-[#050507] border-y border-white/10 relative section-divider" id="experience-showcase">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 reveal-fade">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#ffb3ae]">
              The Chrysalis Experience
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#e5e1e4] mt-1 font-headline">
              Live Campus Environments
            </h2>
          </div>
          <p className="text-sm text-[#A1A1AA] max-w-md">
            Toggle across key staging zones designed for deep cognitive resonance and intimate peer dialogue.
          </p>
        </div>

        {/* Tabs Switcher Navigation */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#201f21] max-w-xl mx-auto w-full border border-white/10">
          <button
            onClick={() => setActiveTab('stage')}
            className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'stage'
                ? 'bg-[#eb0028] text-white shadow-lg'
                : 'text-[#A1A1AA] hover:text-white'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">theater_comedy</span>
            <span>Auditorium Stage</span>
          </button>
          <button
            onClick={() => setActiveTab('pavilions')}
            className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'pavilions'
                ? 'bg-[#eb0028] text-white shadow-lg'
                : 'text-[#A1A1AA] hover:text-white'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">lightbulb</span>
            <span>Idea Pavilions</span>
          </button>
          <button
            onClick={() => setActiveTab('mixer')}
            className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'mixer'
                ? 'bg-[#eb0028] text-white shadow-lg'
                : 'text-[#A1A1AA] hover:text-white'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">groups</span>
            <span>Emergence Lounge</span>
          </button>
        </div>

        {/* Tab Content Display Frame */}
        <div className="rounded-3xl bg-[#18181B] border border-white/10 overflow-hidden shadow-2xl p-6 lg:p-10 transition-all duration-500 reveal-scale">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 flex flex-col gap-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#ffb3ae]">
                {data.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#e5e1e4] font-headline">
                {data.title}
              </h3>
              <p className="text-base text-[#A1A1AA] leading-relaxed">
                {data.desc}
              </p>
              <div className="space-y-2 mt-2">
                {data.bullets.map((b) => (
                  <div key={b} className="flex items-center gap-2.5 text-sm text-[#e5e1e4] font-medium">
                    <span className="material-symbols-outlined text-[#ffb3ae] text-[18px]">check_circle</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <a
                  href="#booking-engine"
                  onClick={onSelectExperience}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#201f21] hover:bg-[#222227] border border-white/10 text-[#e5e1e4] font-semibold text-sm transition-colors"
                >
                  <span>Experience It Live</span>
                  <span className="material-symbols-outlined text-[18px] text-[#ffb3ae]">arrow_forward</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-video border border-white/10 shadow-2xl bg-[#0e0e10]">
              <img
                src={data.img}
                alt={data.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18181B]/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
