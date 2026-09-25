import React, { useState } from 'react';

const TEAM_CATEGORIES = [
  { id: 'organizing', title: '01 — Organizing Team' },
  { id: 'hospitality', title: '02 — Hospitality' },
  { id: 'partnerships', title: '03 — Partnerships' },
  { id: 'marketing', title: '04 — Marketing' },
  { id: 'production', title: '05 — Production' },
  { id: 'web-tech', title: '06 — Web & Technology' },
];

const TEAM_MEMBERS: Record<string, Array<{ name: string; role: string; domain?: string }>> = {
  organizing: [
    { name: 'Lead Organizer', role: 'Curator & Licensee', domain: 'Executive Council' },
    { name: 'Co-Organizer', role: 'Operations Co-Lead', domain: 'Executive Council' },
    { name: 'Faculty Advisor', role: 'University Mentor', domain: 'KLH Leadership' },
    { name: 'Student Coordinator', role: 'Campus Liaison', domain: 'Student Affairs' },
  ],
  hospitality: [
    { name: 'Hospitality Lead', role: 'Delegate Experience', domain: 'Guest Relations' },
    { name: 'VIP Relations Co-Lead', role: 'Speaker Protocol', domain: 'Logistics' },
    { name: 'Catering Lead', role: 'Culinary & Dining', domain: 'Operations' },
  ],
  partnerships: [
    { name: 'Partnership Lead', role: 'Sponsorship Director', domain: 'External Relations' },
    { name: 'Corporate Outreach', role: 'Alliance Lead', domain: 'Industry Alliances' },
  ],
  marketing: [
    { name: 'Marketing Lead', role: 'Creative Director', domain: 'Brand Strategy' },
    { name: 'Content Strategist', role: 'Editorial & PR', domain: 'Media Relations' },
    { name: 'Visual Media Lead', role: 'Art Director', domain: 'Design Studio' },
  ],
  production: [
    { name: 'Production Lead', role: 'Stage Manager', domain: 'Audio-Visual & Light' },
    { name: 'Broadcast Director', role: '4K Recording & Stream', domain: 'Technical Crew' },
    { name: 'Venue Lead', role: 'Auditorium Management', domain: 'Infrastructure' },
  ],
  'web-tech': [
    { name: 'Tech Lead', role: 'Digital Experience Architect', domain: 'Software Engineering' },
    { name: 'Systems Engineer', role: 'Infrastructure & Portals', domain: 'Web & Systems' },
  ],
};

export const TeamSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('organizing');

  return (
    <section className="w-full py-24 bg-[#050507] border-t border-white/10 relative" id="team-section">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-[#ffb3ae] text-[11px] font-bold uppercase tracking-widest font-mono mb-3">
            <span className="text-[#eb0028]">01</span>
            <span className="w-6 h-px bg-zinc-700" />
            <span>OUR PEOPLE</span>
          </div>
          <h2 className="font-['Cinzel'] text-4xl sm:text-6xl font-normal text-white uppercase tracking-tight">
            The Minds <br />
            <span className="text-[#eb0028] font-bold">Behind It All</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-4 leading-relaxed font-['Geist']">
            TED* KLH Bowrampet is brought to life by an independent, passionate group of students and faculty. Meet the brilliant minds organizing, creating, and shaping this transformative experience.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {TEAM_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 border cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-[#eb0028] border-[#eb0028] text-white shadow-[0_0_16px_rgba(235,0,40,0.4)]'
                  : 'border-white/10 text-zinc-400 hover:border-white/30 hover:text-white bg-[#0e0e10]'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS[activeTab]?.map((member, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0e0e10] border border-white/10 hover:border-[#eb0028]/40 transition-all duration-300 flex flex-col justify-between group shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#eb0028]/20 to-white/10 border border-white/10 flex items-center justify-center text-white font-['Space_Grotesk'] font-bold text-base group-hover:border-[#eb0028]/50 transition-colors">
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-['Space_Grotesk'] text-base font-bold text-white group-hover:text-[#ffb3ae] transition-colors">
                    {member.name}
                  </h4>
                  <span className="text-xs text-[#eb0028] font-mono block mt-0.5">
                    {member.role}
                  </span>
                </div>
              </div>

              {member.domain && (
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>{member.domain}</span>
                  <span className="material-symbols-outlined text-[14px] text-zinc-600 group-hover:text-[#eb0028] transition-colors">
                    verified
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Partners Strip from tedxklhb.vercel.app */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0e0e10] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[11px] font-mono text-[#ffb3ae] uppercase tracking-widest block mb-1">
              THE NETWORK TAKES CONNECTION
            </span>
            <h4 className="font-['Space_Grotesk'] text-xl font-bold text-white">
              &quot;Every idea needs a space to grow. Every transformation takes people who believe in what comes next.&quot;
            </h4>
            <p className="text-xs text-zinc-400 mt-2 font-mono">
              Partner &amp; Sponsor announcement unfolding soon.
            </p>
          </div>
          <a
            href="mailto:contact@tedxklh.com?subject=Partnership%20Inquiry%20-%20TEDx%20KLH%20Bowrampet%202026"
            className="px-6 py-3 rounded-full bg-zinc-900 border border-white/15 hover:border-[#eb0028] text-white text-xs font-bold uppercase tracking-wider transition-all shrink-0 hover:bg-[#eb0028]"
          >
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
};
