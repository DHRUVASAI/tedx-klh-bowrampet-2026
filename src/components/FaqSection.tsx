import { useState } from 'react';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    id: 1,
    question: 'Why is the audience capped strictly at 100 seats?',
    answer:
      'Per international TED licensing regulations for university events, physical hall attendance is capped to guarantee intense immersion, peer conversation quality, and intimate interaction with our stage speakers.',
  },
  {
    id: 2,
    question: 'How does the ₹511 Metamorphosis Delegate Pass work?',
    answer:
      'There is a single unified pass priced at ₹511. It is all-inclusive and covers admission to all 8 keynote talks, networking buffet dining, delegate kit with commemorative pin, and prototype pavilion demos. Simply present your digital e-pass barcode at the Bowrampet Campus check-in desk.',
  },
  {
    id: 3,
    question: 'Can I transfer my pass if my schedule changes?',
    answer:
      'Yes. Passes may be transferred to another delegate up to 14 days prior to November 4, 2026. Submit your request via contact@tedxklh.com with the recipient’s full credentials.',
  },
  {
    id: 4,
    question: 'What is the official dress code for the event?',
    answer:
      'Smart casual or business formal. Since talks are recorded in high-definition 4K for the global TEDx YouTube platform, attendees appearing in audience reaction shots are encouraged to dress sharp.',
  },
  {
    id: 5,
    question: 'Will recordings of the talks be published online?',
    answer:
      'Yes, all talks will undergo multi-cam post-production mastering and will be published on the official TEDx YouTube channel (over 39M subscribers) within 6-8 weeks following the event.',
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-20 bg-[#050507] relative border-t border-white/10 section-divider" id="venue-section-faq">
      <div className="w-full max-w-[880px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        <div className="text-center reveal-fade">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#ffb3ae]">
            Clarifications &amp; Guidance
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#e5e1e4] mt-1 font-headline">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1AA] mt-2">
            Everything you need to know about TEDx KLH Bowrampet 2026.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-[#18181B] border border-white/10 overflow-hidden transition-all duration-300 hover:border-[#eb0028]/40"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 group cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-semibold text-[#e5e1e4] group-hover:text-[#ffb3ae] transition-colors font-headline">
                    {faq.question}
                  </span>
                  <span
                    className={`material-symbols-outlined text-[#A1A1AA] transition-transform duration-300 group-hover:text-[#ffb3ae] shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-[#A1A1AA] text-sm leading-relaxed border-t border-white/5 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
