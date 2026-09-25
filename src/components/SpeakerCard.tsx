import React, { useRef } from 'react';

export interface Speaker {
  id: string;
  name: string;
  role: string;
  talkTitle: string;
  duration: string;
  keynoteTag: string;
  image: string;
  alt: string;
  teaserAudioQuote: string;
  bioSnippet: string;
}

interface SpeakerCardProps {
  speaker: Speaker;
  onPlayTeaser: (speaker: Speaker) => void;
}

export default function SpeakerCard({ speaker, onPlayTeaser }: SpeakerCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="speaker-perspective-card group relative rounded-2xl bg-[#18181B] border border-white/10 overflow-hidden shadow-md hover:border-[#eb0028] hover:shadow-[0_0_30px_rgba(235,0,40,0.35)] transition-all duration-300 flex flex-col"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#2a2a2c]">
        <img
          src={speaker.image}
          alt={speaker.alt}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#18181B] via-[#18181B]/30 to-transparent" />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#0e0e10]/85 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-[#ffb3ae] border border-[#ffb3ae]/20">
          {speaker.keynoteTag}
        </span>

        {/* Hover Teaser Button */}
        <button
          onClick={() => onPlayTeaser(speaker)}
          type="button"
          className="absolute inset-x-4 bottom-4 py-2.5 px-3 rounded-xl bg-[#121216]/95 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-[#eb0028]/60 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#eb0028] flex items-center justify-center gap-1.5 shadow-lg cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px]">headphones</span>
          <span>30s Talk Teaser</span>
        </button>
      </div>

      <div className="p-5 -mt-2 relative z-10 flex flex-col flex-grow">
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#71717A]">
          {speaker.role}
        </span>
        <h3 className="text-xl font-bold text-[#e5e1e4] mt-1 group-hover:text-[#ffb3ae] transition-colors font-headline">
          {speaker.name}
        </h3>
        <p className="text-xs text-[#e9bcb8] font-medium mt-2 leading-relaxed">
          "{speaker.talkTitle}"
        </p>
        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="text-xs text-[#71717A]">{speaker.duration}</span>
          <span className="material-symbols-outlined text-[#ffb3ae] text-[20px] group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </div>
      </div>
    </div>
  );
}
