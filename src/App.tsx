/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import HeroShader from './components/HeroShader';
import Countdown from './components/Countdown';
import ExperienceShowcase from './components/ExperienceShowcase';
import SpeakerRoster from './components/SpeakerRoster';
import { type Speaker } from './components/SpeakerCard';
import SpeakerTeaserModal from './components/SpeakerTeaserModal';
import ImpactCalculator from './components/ImpactCalculator';
import BookingEngine from './components/BookingEngine';
import CheckoutModal from './components/CheckoutModal';
import VenueSection from './components/VenueSection';
import FaqSection from './components/FaqSection';
import { MetamorphosisIntro } from './components/MetamorphosisIntro';
import { MetamorphosisArtwork } from './components/MetamorphosisArtwork';
import { ThemeDossier } from './components/ThemeDossier';
import { TeamSection } from './components/TeamSection';
import { NominateSpeakerModal } from './components/NominateSpeakerModal';
import { useScrollReveal } from './hooks/useScrollReveal';

const SCHEDULE = [
  {
    time: '08:30 AM',
    duration: '60 Mins',
    category: 'Welcome Gathering',
    title: 'Registration, Kit Collection & Morning Espresso',
    desc: 'Delegates arrive at KLH Bowrampet Campus Main Atrium. Pick up personalized credentials and browse partner installations.',
    location: 'Campus Atrium',
    icon: 'badge',
    accent: false,
  },
  {
    time: '09:45 AM',
    duration: 'Session 1',
    category: 'Morning Talks',
    title: 'Session I: The Myth & The Mechanism',
    desc: 'Opening curatorial remarks on Metamorphosis followed by morning keynote discourses.',
    location: 'Main Stage',
    icon: 'mic',
    accent: true,
  },
  {
    time: '01:00 PM',
    duration: '75 Mins',
    category: 'Midday Exchange',
    title: 'Curated Networking Lunch & Interactive Idea Pavilions',
    desc: 'A curated culinary buffet inside the campus quadrangle, paired with student innovation showcases.',
    location: 'Quad Dining',
    icon: 'restaurant',
    accent: false,
  },
  {
    time: '02:30 PM',
    duration: 'Session 2',
    category: 'Afternoon Talks',
    title: 'Session II: The Threshold & The Rebuild',
    desc: 'Diving deep into transformative breakthroughs in biotechnology, human wisdom, and synthetic consciousness.',
    location: 'Main Stage',
    icon: 'psychology',
    accent: true,
  },
  {
    time: '05:30 PM',
    duration: 'Closing',
    category: 'Emergence Soirée',
    title: 'Closing Keynote & Networking Reception',
    desc: 'The final keynote followed by the signature Emergence Soirée — an intimate evening mixer with speakers and delegates.',
    location: 'Garden Lounge',
    icon: 'celebration',
    accent: true,
  },
];

export default function App() {
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [isNominateOpen, setIsNominateOpen] = useState<boolean>(false);
  const [activeTeaserSpeaker, setActiveTeaserSpeaker] = useState<Speaker | null>(null);
  const [scrolled, setScrolled] = useState(false);
  
  const [speakers, setSpeakers] = useState<Speaker[]>([]);

  // Activate scroll-reveal after intro closes
  useScrollReveal([showIntro]);

  // Re-run observer after component mounts or intro closes
  useEffect(() => {
    if (showIntro) return;
    const timer = setTimeout(() => {
      // Trigger re-observe for any newly rendered elements
      window.dispatchEvent(new Event('scroll'));
    }, 100);
    return () => clearTimeout(timer);
  }, [showIntro]);

  // Header scroll shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddSpeaker = (newSpeaker: Speaker) => {
    setSpeakers((prev) => [...prev, newSpeaker]);
  };

  const handleRemoveSpeaker = (id: string) => {
    setSpeakers((prev) => prev.filter((s) => s.id !== id));
  };

  const scrollToBooking = () => {
    const el = document.getElementById('booking-engine');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050507] text-[#e5e1e4] antialiased">
      {/* ==================== OPENING VIDEO ANIMATION ==================== */}
      <MetamorphosisIntro
        isOpen={showIntro}
        onComplete={() => setShowIntro(false)}
      />

      {/* ==================== HEADER ==================== */}
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 header-glass transition-all duration-300 ${
          scrolled ? 'shadow-[0_4px_40px_rgba(0,0,0,0.8)]' : ''
        }`}
      >
        <div className="h-20 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <a href="#hero-section" className="flex items-center gap-2 shrink-0">
            <span className="text-lg sm:text-2xl font-bold tracking-tight text-white font-headline">
              TED<sup className="text-[#eb0028] text-sm">x</sup>{' '}
              <span className="text-[#eb0028]">KLH Bowrampet</span>
            </span>
            <span className="hidden md:inline-flex px-2.5 py-0.5 rounded-full text-[9px] tracking-[0.22em] font-['Space_Grotesk'] uppercase bg-[#eb0028]/15 border border-[#eb0028]/30 text-[#ffb3ae] font-semibold float-badge">
              METAMORPHOSIS
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-6 text-sm">
            {[
              { href: '#theme-dossier', label: 'The Dossier', active: true },
              { href: '#speakers-section', label: 'Speakers' },
              { href: '#experience-showcase', label: 'Chrysalis' },
              { href: '#booking-engine', label: 'Pass (₹511)', highlight: true },
              { href: '#team-section', label: 'Team' },
              { href: '#agenda-timeline', label: 'Schedule' },
              { href: '#venue-section', label: 'Venue' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors duration-200 font-medium ${
                  link.highlight
                    ? 'text-[#ffb3ae] font-semibold hover:text-white'
                    : link.active
                    ? 'text-[#e5e1e4] font-semibold hover:text-[#ffb3ae]'
                    : 'text-[#A1A1AA] hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowIntro(true)}
              title="Watch Metamorphosis Opening Video"
              className="px-3.5 py-2 rounded-full bg-[#18181B] border border-white/10 hover:border-[#eb0028]/50 text-xs font-semibold tracking-wider text-zinc-300 hover:text-white flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
            >
              <span className="material-symbols-outlined text-[16px] text-[#eb0028] animate-pulse">
                play_circle
              </span>
              <span className="hidden sm:inline font-['Space_Grotesk']">Intro</span>
            </button>

            <button
              onClick={() => setIsCheckoutOpen(true)}
              className="inline-flex items-center justify-center bg-[#eb0028] text-white font-semibold text-xs tracking-wider uppercase rounded-full px-5 sm:px-6 py-2.5 hover:shadow-[0_0_28px_rgba(235,0,40,0.65)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer btn-primary"
            >
              Get Pass • ₹511
            </button>
          </div>
        </div>
      </header>

      {/* ==================== MAIN CONTENT ==================== */}
      <main className="w-full pt-20">
        {/* ==================== HERO ==================== */}
        <section
          className="relative w-full overflow-hidden bg-[#050507] -mt-20 pt-28 pb-20 lg:pt-36 lg:pb-28 min-h-[92vh] flex flex-col justify-center"
          id="hero-section"
        >
          {/* WebGL Shader */}
          <HeroShader />

          {/* Stage photo */}
          <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity scale-105 pointer-events-none">
            <img
              alt="TED* KLH Bowrampet Stage"
              className="w-full h-full object-cover object-center filter saturate-150 contrast-125"
              src="https://lh3.googleusercontent.com/aida/AEtjO1ViM1srNMCvB2_VU6iwJWgzQ_l6Jbs1zQIa-bDVIY-zQ3FLezBOONjwXPUD7tXjkHCQ-Ol0CyliFkzgP39jpYlNA4-TyJazKxidtmhGbHF-N4_loCBRRtA1NrZlaZbaSWONXSjUjesQiq8ETWYmUKqSJUfoxp6YfPXr_M2zDzlgLrtCQMkrAyUjltKiGuWiLF5NvRBnrGH-DQriRWgAVAuv7su1eA6X45bHl3EyTp_ub7_UlNIqfGsdsQ"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050507] via-[#050507]/70 to-[#050507]" />
          </div>

          {/* Ambient glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[380px] bg-[#eb0028]/25 rounded-full blur-[140px] pointer-events-none" />

          {/* Particles */}
          <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
            <div className="particle-float absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-[#eb0028] blur-[1px]" />
            <div className="particle-float absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-[#ffb3ae]/40 blur-[1px]" style={{ animationDelay: '2s' }} />
            <div className="particle-float absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-[#ffb3ae]/50" style={{ animationDelay: '4s' }} />
            <div className="particle-float absolute top-2/3 right-1/3 w-1.5 h-1.5 rounded-full bg-white/30" style={{ animationDelay: '1s' }} />
          </div>

          <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#18181B]/90 backdrop-blur-xl border border-[#eb0028]/40 shadow-[0_0_24px_rgba(235,0,40,0.3)] mb-6 neon-glow-pulse animate-fadeIn">
              <span className="w-2.5 h-2.5 rounded-full bg-[#eb0028] animate-ping" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#e5e1e4]">
                ⚡ TED<sup>x</sup> KLH BOWRAMPET · 04 NOV 2026 · METAMORPHOSIS
              </span>
              <span className="text-[11px] uppercase text-[#ffb3ae] font-bold px-2 py-0.5 rounded-full bg-[#eb0028]/20">
                Strict 100 Cap · ₹511 Unified Pass
              </span>
            </div>

            {/* Artwork */}
            <div className="w-full my-2 reveal-scale">
              <MetamorphosisArtwork
                size="hero"
                showTypography={true}
                interactive={true}
                animate={true}
              />
            </div>

            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed mt-4 mb-8 reveal-fade">
              An intellectual crucible of 100 transformative minds. Where wireframe embryonic ideas dissolve and crystallize into real-world breakthroughs across synthetic intelligence, living biomimicry, and planetary frontiers.
            </p>

            {/* Meta Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl mb-8 text-left reveal-stagger">
              {[
                { icon: 'calendar_month', label: 'Mark Your Calendar', value: '04 NOV 2026', highlight: false },
                { icon: 'location_on', label: 'Main Auditorium', value: 'KLH Bowrampet Campus', highlight: false },
                { icon: 'confirmation_number', label: 'Single Pass', value: '₹511 Only', highlight: true },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-xl bg-[#18181B]/90 backdrop-blur-md border border-white/10 shadow-md flex items-center gap-4 reveal-fade card-hover-glow">
                  <div className="w-10 h-10 rounded-lg bg-[#eb0028]/15 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#eb0028]">{item.icon}</span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold uppercase text-[#71717A]">{item.label}</div>
                    <div className={`text-lg font-bold font-headline truncate ${item.highlight ? 'text-[#ffb3ae]' : 'text-[#e5e1e4]'}`}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8 reveal-fade">
              <a
                href="#booking-engine"
                className="inline-flex items-center justify-center gap-2 bg-[#eb0028] text-white font-semibold text-xs tracking-wider uppercase rounded-full px-8 py-4 shadow-[0_0_32px_rgba(235,0,40,0.45)] hover:shadow-[0_0_48px_rgba(235,0,40,0.75)] hover:-translate-y-1 transition-all duration-300 btn-primary"
              >
                <span>Claim Pass • ₹511</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </a>
              <button
                onClick={() => setShowIntro(true)}
                className="inline-flex items-center justify-center gap-2 bg-[#18181B]/80 border border-white/10 text-[#e5e1e4] font-semibold text-xs tracking-wider uppercase rounded-full px-7 py-4 hover:bg-[#222227] hover:border-[#eb0028]/40 transition-all duration-300 shadow-sm cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px] text-[#eb0028]">movie</span>
                <span>Play Metamorphosis Intro</span>
              </button>
            </div>

            {/* Countdown */}
            <div className="reveal-fade">
              <Countdown />
            </div>
          </div>
        </section>

        {/* ==================== MARQUEE ==================== */}
        <div className="w-full bg-[#0e0e10] border-y border-white/10 py-3.5 overflow-hidden relative z-20">
          <div className="animate-marquee whitespace-nowrap text-[#e5e1e4] font-headline text-sm sm:text-base font-semibold tracking-wider flex items-center select-none">
            <span className="mx-6 flex items-center gap-3">
              BREAK THE FAMILIAR <span className="text-[#eb0028]">✦</span> EMBRACE THE UNKNOWN <span className="text-[#eb0028]">✦</span> BECOME WHAT&apos;S NEXT <span className="text-[#eb0028]">✦</span> METAMORPHOSIS <span className="text-[#eb0028]">✦</span> 100 EXCLUSIVE DELEGATES <span className="text-[#eb0028]">✦</span> PASS ₹511 <span className="text-[#eb0028]">✦</span> LIVE AT KLH BOWRAMPET <span className="text-[#eb0028]">✦</span>
            </span>
            <span className="mx-6 flex items-center gap-3">
              BREAK THE FAMILIAR <span className="text-[#eb0028]">✦</span> EMBRACE THE UNKNOWN <span className="text-[#eb0028]">✦</span> BECOME WHAT&apos;S NEXT <span className="text-[#eb0028]">✦</span> METAMORPHOSIS <span className="text-[#eb0028]">✦</span> 100 EXCLUSIVE DELEGATES <span className="text-[#eb0028]">✦</span> PASS ₹511 <span className="text-[#eb0028]">✦</span> LIVE AT KLH BOWRAMPET <span className="text-[#eb0028]">✦</span>
            </span>
          </div>
        </div>

        {/* ==================== THEME DOSSIER ==================== */}
        <ThemeDossier />

        {/* ==================== EXPERIENCE SHOWCASE ==================== */}
        <ExperienceShowcase onSelectExperience={scrollToBooking} />

        {/* ==================== SPEAKER ROSTER ==================== */}
        <SpeakerRoster
          speakers={speakers}
          onAddSpeaker={handleAddSpeaker}
          onRemoveSpeaker={handleRemoveSpeaker}
          onPlayTeaser={(spk) => setActiveTeaserSpeaker(spk)}
          onOpenNominateModal={() => setIsNominateOpen(true)}
        />

        {/* ==================== IMPACT CALCULATOR ==================== */}
        <ImpactCalculator onApplyToBooking={() => setIsCheckoutOpen(true)} />

        {/* ==================== BOOKING ENGINE ==================== */}
        <BookingEngine onProceedCheckout={() => setIsCheckoutOpen(true)} />

        {/* ==================== TEAM ==================== */}
        <TeamSection />

        {/* ==================== SCHEDULE ==================== */}
        <section className="w-full py-24 bg-[#050507] relative border-t border-white/10 section-divider" id="agenda-timeline">
          {/* Ambient glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#eb0028]/8 rounded-full blur-[100px] pointer-events-none" />

          <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 reveal-fade">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#ffb3ae]">
                  Curated Timeline
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#e5e1e4] mt-1 font-headline">
                  Event Day Schedule
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#18181B] border border-white/10 px-4 py-2 rounded-full">
                <span className="material-symbols-outlined text-[#ffb3ae] text-[20px]">calendar_today</span>
                <span className="text-sm text-[#e5e1e4] font-semibold">Wednesday, 04 November 2026</span>
              </div>
            </div>

            {/* Schedule Stack */}
            <div className="space-y-4">
              {SCHEDULE.map((item, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-2xl border shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 schedule-row reveal-fade ${
                    item.accent
                      ? 'bg-[#0e0e10] border-[#eb0028]/20'
                      : 'bg-[#0e0e10] border-white/10'
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex items-start md:items-center gap-4 min-w-[200px]">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                        item.accent
                          ? 'bg-[#eb0028]/20 text-[#eb0028]'
                          : 'bg-[#2a2a2c] text-[#A1A1AA]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                    </div>
                    <div>
                      <span className={`text-lg font-bold font-headline ${item.accent ? 'text-[#ffb3ae]' : 'text-[#e5e1e4]'}`}>
                        {item.time}
                      </span>
                      <span className="text-xs text-[#71717A] block">{item.duration}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <span className={`text-[11px] font-bold uppercase tracking-wider ${item.accent ? 'text-[#ffb3ae]' : 'text-[#71717A]'}`}>
                      {item.category}
                    </span>
                    <h3 className="text-lg font-semibold text-[#e5e1e4] font-headline">{item.title}</h3>
                    <p className="text-xs text-[#A1A1AA] mt-1">{item.desc}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase shrink-0 ${
                      item.accent
                        ? 'bg-[#eb0028]/15 text-[#ffb3ae]'
                        : 'bg-[#201f21] text-[#A1A1AA]'
                    }`}
                  >
                    {item.location}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== VENUE ==================== */}
        <VenueSection />

        {/* ==================== FAQ ==================== */}
        <FaqSection />
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer className="w-full bg-[#050507] border-t border-white/10 pt-16 pb-12">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 reveal-stagger">
            <div className="flex flex-col gap-4 reveal-fade">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-[#e5e1e4] font-headline">
                  TED<sup className="text-[#eb0028]">x</sup> <span className="text-[#eb0028]">KLH Bowrampet</span>
                </span>
              </div>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                An independently organized TED event bringing together brilliant minds, innovators, and visionaries to spark deep discussion and connection at KLH University.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <div className="w-2 h-2 rounded-full bg-[#eb0028] animate-pulse" />
                <span className="text-[11px] text-[#71717A] uppercase tracking-wider font-mono">
                  Bowrampet, Hyderabad · Nov 4, 2026
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2 reveal-fade">
              <span className="text-[11px] uppercase tracking-widest text-white font-bold mb-1">Quick Links</span>
              {[
                { href: '#theme-dossier', label: 'The Theme Dossier' },
                { href: '#speakers-section', label: 'Speakers' },
                { href: '#booking-engine', label: 'Delegate Pass (₹511)' },
                { href: '#team-section', label: 'Our Team' },
                { href: '#agenda-timeline', label: 'Schedule' },
                { href: '#venue-section', label: 'Venue Location' },
              ].map((link) => (
                <a key={link.href} href={link.href} className="text-xs text-[#A1A1AA] hover:text-[#e5e1e4] transition-colors hover:translate-x-1 inline-block duration-200">
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2 reveal-fade">
              <span className="text-[11px] uppercase tracking-widest text-white font-bold mb-1">Contact Us</span>
              <div className="flex items-start gap-2.5 text-[#A1A1AA]">
                <span className="material-symbols-outlined text-[#ffb3ae] text-[18px] shrink-0 mt-0.5">location_on</span>
                <span className="text-xs leading-snug">KLH University Bowrampet Campus, Hyderabad, Telangana 500043</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#A1A1AA]">
                <span className="material-symbols-outlined text-[#ffb3ae] text-[18px] shrink-0">mail</span>
                <a href="mailto:contact@tedxklh.com" className="text-xs hover:text-white transition-colors">contact@tedxklh.com</a>
              </div>
            </div>

            <div className="flex flex-col gap-4 reveal-fade">
              <span className="text-[11px] uppercase tracking-widest text-white font-bold">Connect &amp; Social</span>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                Stay updated with speaker releases, schedule unveilings, and live coverage.
              </p>
              <div className="flex items-center gap-2">
                {[
                  { icon: 'podcasts', label: 'Podcasts' },
                  { icon: 'public', label: 'Global Network' },
                  { icon: 'photo_camera', label: 'Media Gallery' },
                  { icon: 'smart_display', label: 'Event Video Archive' },
                ].map((social) => (
                  <a
                    key={social.icon}
                    href="#hero-section"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-[#201f21] border border-white/10 flex items-center justify-center text-[#A1A1AA] hover:border-[#eb0028] hover:text-white hover:bg-[#eb0028]/10 transition-all duration-200"
                  >
                    <span className="material-symbols-outlined text-[18px]">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <hr className="gradient-line mb-8" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-xs text-[#71717A]">
              This independent TEDx event is operated under license from TED.
            </p>
            <p className="text-xs text-[#71717A]">
              © 2026 TEDxKLH University Bowrampet. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* ==================== MODALS ==================== */}
      <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
      <SpeakerTeaserModal speaker={activeTeaserSpeaker} onClose={() => setActiveTeaserSpeaker(null)} />
      <NominateSpeakerModal isOpen={isNominateOpen} onClose={() => setIsNominateOpen(false)} />
    </div>
  );
}
