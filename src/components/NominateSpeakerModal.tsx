import React, { useState } from 'react';

interface NominateSpeakerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NominateSpeakerModal: React.FC<NominateSpeakerModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    nomineeName: '',
    email: '',
    domain: '',
    topicTitle: '',
    synopsis: '',
    linkedIn: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="bg-[#121216] border border-[#eb0028]/40 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {submitted ? (
          <div className="py-12 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center text-green-400 mb-4 animate-bounce">
              <span className="material-symbols-outlined text-[32px]">check</span>
            </div>
            <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white mb-2">
              Nomination Received!
            </h3>
            <p className="text-sm text-zinc-400 max-w-xs leading-relaxed">
              Thank you for suggesting a bold idea for TED* KLH Bowrampet 2026. The curatorial committee will review your proposal.
            </p>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eb0028]/15 border border-[#eb0028]/30 text-[#ffb3ae] text-[10px] font-bold uppercase tracking-widest mb-3">
              Ideas Worth Spreading
            </div>
            <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white mb-1">
              Nominate a Visionary Speaker
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-6">
              We seek radical ideas, transformative science, and unique perspectives that challenge the status quo.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">
                  Speaker Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.nomineeName}
                  onChange={(e) => setFormData({ ...formData, nomineeName: e.target.value })}
                  placeholder="e.g. Dr. Aryan Sharma"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#eb0028] text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">
                    Contact Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="speaker@institution.org"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#eb0028] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">
                    Domain / Field *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.domain}
                    onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                    placeholder="e.g. Neural AI, Biomimicry"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#eb0028] text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">
                  Proposed Talk Theme or Idea Summary *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.synopsis}
                  onChange={(e) => setFormData({ ...formData, synopsis: e.target.value })}
                  placeholder="What is the transformative idea and why does it matter today?"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#eb0028] text-sm resize-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">
                  LinkedIn / Portfolio URL (Optional)
                </label>
                <input
                  type="url"
                  value={formData.linkedIn}
                  onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
                  placeholder="https://linkedin.com/in/username"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#eb0028] text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 rounded-full bg-gradient-to-r from-[#eb0028] to-[#990014] text-white font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest hover:shadow-[0_0_24px_rgba(235,0,40,0.6)] transition-all cursor-pointer"
              >
                Submit Nomination
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
