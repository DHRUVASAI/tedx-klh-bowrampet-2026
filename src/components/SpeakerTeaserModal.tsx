import type { Speaker } from './SpeakerCard';

interface SpeakerTeaserModalProps {
  speaker: Speaker | null;
  onClose: () => void;
}

export default function SpeakerTeaserModal({ speaker, onClose }: SpeakerTeaserModalProps) {
  if (!speaker) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0e0e10]/85 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="bg-[#121216] rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-[#eb0028]/40 relative flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#eb0028] animate-ping" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#ffb3ae]">
              Rehearsal Soundcheck · 30s Snippet
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#18181B] flex items-center justify-center text-[#A1A1AA] hover:text-white cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="flex items-start gap-4">
          <img
            src={speaker.image}
            alt={speaker.name}
            className="w-20 h-24 rounded-xl object-cover border border-white/10 shrink-0"
          />
          <div>
            <span className="text-[11px] uppercase tracking-wider text-[#71717A] font-bold">
              {speaker.role}
            </span>
            <h3 className="text-xl font-bold text-white font-headline mt-0.5">
              {speaker.name}
            </h3>
            <p className="text-xs text-[#ffb3ae] mt-1 italic font-medium">
              "{speaker.talkTitle}"
            </p>
          </div>
        </div>

        {/* Keynote Thesis Badge */}
        <div className="p-4 rounded-2xl bg-[#18181B] border border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#eb0028]/20 text-[#eb0028] flex items-center justify-center border border-[#eb0028]/30">
              <span className="material-symbols-outlined text-[20px]">lightbulb</span>
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Curated Stage Keynote</div>
              <div className="text-[11px] text-[#A1A1AA]">Official 18-Minute Metamorphosis Talk</div>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-[#eb0028]/15 text-[#ffb3ae] font-bold border border-[#eb0028]/30">
            Confirmed
          </span>
        </div>

        <div className="p-4 rounded-xl bg-[#201f21]/60 border border-white/5 text-xs text-[#A1A1AA] leading-relaxed">
          <span className="text-white font-semibold block mb-1">Keynote Thesis Outline:</span>
          {speaker.bioSnippet}
        </div>

        <div className="flex items-center justify-between gap-3 pt-2">
          <a
            href="#booking-engine"
            onClick={onClose}
            className="flex-1 py-3 text-center rounded-full bg-[#eb0028] hover:bg-[#c0001e] text-white font-semibold text-xs tracking-wider uppercase transition-colors"
          >
            Reserve Seat to Hear Live
          </a>
          <button
            onClick={onClose}
            className="px-5 py-3 rounded-full bg-[#201f21] hover:bg-[#2a2a2c] text-[#e5e1e4] text-xs font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
