import { useState } from 'react';
import { type Speaker } from './SpeakerCard';

interface SpeakerRosterProps {
  speakers: Speaker[];
  onAddSpeaker: (speaker: Speaker) => void;
  onRemoveSpeaker: (id: string) => void;
  onPlayTeaser: (speaker: Speaker) => void;
  onOpenNominateModal?: () => void;
}

export default function SpeakerRoster({
  speakers,
  onAddSpeaker,
  onRemoveSpeaker,
  onPlayTeaser,
  onOpenNominateModal,
}: SpeakerRosterProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [talkTitle, setTalkTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [keynoteTag, setKeynoteTag] = useState('');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newSpeaker: Speaker = {
      id: Date.now().toString(),
      name: name.trim(),
      role: role.trim() || 'Keynote Speaker',
      talkTitle: talkTitle.trim() || 'Topic to be announced',
      duration: '18 Mins Talk',
      keynoteTag: keynoteTag.trim() || `Speaker 0${speakers.length + 1}`,
      image:
        imageUrl.trim() ||
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      alt: name.trim(),
      teaserAudioQuote: `Talk snippet: "${talkTitle.trim() || 'Ideas worth spreading'}"`,
      bioSnippet: role.trim() || 'Esteemed guest speaker for TED* KLH Bowrampet 2026.',
    };

    onAddSpeaker(newSpeaker);
    setName('');
    setRole('');
    setTalkTitle('');
    setImageUrl('');
    setKeynoteTag('');
    setIsModalOpen(false);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setImageUrl(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="w-full py-20 bg-[#050507] border-t border-white/10 relative" id="speakers-section">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#ffb3ae]">
              The Stage Roster
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#e5e1e4] mt-1 font-headline">
              Speakers &amp; Voices
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenNominateModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#18181B] border border-white/15 text-zinc-300 hover:text-white hover:border-[#eb0028]/60 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer font-['Space_Grotesk']"
            >
              <span className="material-symbols-outlined text-[16px] text-[#eb0028]">record_voice_over</span>
              <span>Nominate a Speaker</span>
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#eb0028] text-white font-semibold text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(235,0,40,0.6)] hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
              <span>Add Speaker</span>
            </button>
          </div>
        </div>

        {/* Empty State / Custom Speaker Cards */}
        {speakers.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-white/20 bg-[#0e0e10]/80 p-12 text-center flex flex-col items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#eb0028]/15 border border-[#eb0028]/30 flex items-center justify-center text-[#ffb3ae]">
              <span className="material-symbols-outlined text-[32px]">person_add</span>
            </div>
            <h3 className="text-2xl font-bold text-[#e5e1e4] font-headline">
              Speaker Lineup Open for Custom Voices
            </h3>
            <p className="text-sm text-[#A1A1AA] max-w-md leading-relaxed font-['Geist']">
              The speaker roster is clean and ready. Click &quot;Add Speaker&quot; to upload your speaker portraits, credentials, and talk topics.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 rounded-full bg-[#eb0028] text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-[0_0_20px_rgba(235,0,40,0.5)] transition-all cursor-pointer"
              >
                + Add Keynote Speaker
              </button>
              <button
                onClick={onOpenNominateModal}
                className="px-6 py-3 rounded-full bg-zinc-900 border border-white/10 hover:border-[#eb0028] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                Nominate a Speaker
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {speakers.map((spk) => (
              <div
                key={spk.id}
                className="group relative rounded-2xl bg-[#18181B] border border-white/10 overflow-hidden shadow-md hover:border-[#eb0028] transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#2a2a2c]">
                  <img
                    src={spk.image}
                    alt={spk.alt}
                    className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18181B] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#0e0e10]/85 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-[#ffb3ae] border border-[#ffb3ae]/20">
                    {spk.keynoteTag}
                  </span>
                  <button
                    onClick={() => onRemoveSpeaker(spk.id)}
                    title="Remove Speaker"
                    className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/70 hover:bg-[#eb0028] text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">close</span>
                  </button>
                  <button
                    onClick={() => onPlayTeaser(spk)}
                    className="absolute inset-x-4 bottom-4 py-2 px-3 rounded-xl bg-[#121216]/95 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-[#eb0028]/60 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#eb0028] flex items-center justify-center gap-1.5 shadow-lg cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">headphones</span>
                    <span>Talk Teaser</span>
                  </button>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#71717A]">
                    {spk.role}
                  </span>
                  <h3 className="text-xl font-bold text-[#e5e1e4] mt-1 group-hover:text-[#ffb3ae] transition-colors font-headline">
                    {spk.name}
                  </h3>
                  <p className="text-xs text-[#e9bcb8] font-medium mt-2 line-clamp-2">
                    "{spk.talkTitle}"
                  </p>
                  <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/5">
                    <span className="text-xs text-[#71717A]">{spk.duration}</span>
                    <span className="material-symbols-outlined text-[#ffb3ae] text-[18px]">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add Speaker Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-[#18181B] rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-[#eb0028]/30 shadow-2xl relative">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-[#e5e1e4] font-headline">
                  Add Speaker with Photo
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-[#201f21] flex items-center justify-center text-[#A1A1AA] hover:text-white"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>

              <form onSubmit={handleAdd} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#71717A] mb-1">
                    Speaker Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Dr. Aryan Sharma"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#201f21] border border-white/10 text-white focus:outline-none focus:border-[#eb0028] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#71717A] mb-1">
                    Domain / Title / Designation
                  </label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. Aerospace Engineer • Founder"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#201f21] border border-white/10 text-white focus:outline-none focus:border-[#eb0028] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#71717A] mb-1">
                    Talk Title / Theme
                  </label>
                  <input
                    type="text"
                    value={talkTitle}
                    onChange={(e) => setTalkTitle(e.target.value)}
                    placeholder="e.g. The Architecture of Metamorphosis"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#201f21] border border-white/10 text-white focus:outline-none focus:border-[#eb0028] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#71717A] mb-1">
                    Keynote Tag
                  </label>
                  <input
                    type="text"
                    value={keynoteTag}
                    onChange={(e) => setKeynoteTag(e.target.value)}
                    placeholder={`e.g. Speaker 0${speakers.length + 1}`}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#201f21] border border-white/10 text-white focus:outline-none focus:border-[#eb0028] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#71717A] mb-1">
                    Speaker Photo (Upload or Image URL)
                  </label>
                  <div className="flex flex-col gap-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="text-xs text-[#A1A1AA] file:mr-3 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-[#eb0028]/20 file:text-[#ffb3ae] hover:file:bg-[#eb0028]/30 cursor-pointer"
                    />
                    <input
                      type="url"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="Or paste an image web URL (https://...)"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#201f21] border border-white/10 text-white focus:outline-none focus:border-[#eb0028] text-sm"
                    />
                  </div>
                  {imageUrl && (
                    <div className="mt-2 w-16 h-20 rounded-lg overflow-hidden border border-[#eb0028]/50">
                      <img src={imageUrl} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-5 py-2.5 rounded-full bg-[#201f21] text-[#A1A1AA] hover:text-white text-xs font-bold uppercase tracking-wider"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full bg-[#eb0028] text-white text-xs font-bold uppercase tracking-wider hover:shadow-[0_0_15px_rgba(235,0,40,0.6)] cursor-pointer"
                  >
                    Save Speaker
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
