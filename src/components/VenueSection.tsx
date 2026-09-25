export default function VenueSection() {
  const googleCalendarUrl =
    'https://calendar.google.com/calendar/render?action=TEMPLATE&text=TEDx+KLH+Bowrampet+2026&dates=20261104T033000Z/20261104T123000Z&details=Official+curatorial+flagship+event+at+KLH+University+Bowrampet+Campus.+100+pass+capacity.&location=KLH+University+Bowrampet+Campus,+Hyderabad';

  return (
    <section className="w-full py-20 bg-[#050507] border-t border-white/10 relative section-divider" id="venue-section">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 flex flex-col gap-4 reveal-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eb0028]/15 border border-[#eb0028]/30 text-[#ffb3ae] text-[11px] font-bold uppercase tracking-widest w-fit">
              The Venue · KLH Bowrampet
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#e5e1e4] font-headline">
              KLH University Bowrampet Campus
            </h2>
            <p className="text-base text-[#A1A1AA] leading-relaxed font-['Geist']">
              A space designed for innovation and forward-thinking. Join us at the KLH University campus where the architecture of the future meets the ideas that will build it.
            </p>

            {/* Quick Stats Grid from tedxklhb.vercel.app */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#0e0e10] border border-white/10 my-1 font-mono">
              <div>
                <span className="text-[10px] text-[#ffb3ae] uppercase block tracking-wider">Location</span>
                <span className="text-xs font-bold text-white block mt-0.5">Bowrampet, Hyd</span>
              </div>
              <div>
                <span className="text-[10px] text-[#ffb3ae] uppercase block tracking-wider">Capacity</span>
                <span className="text-xs font-bold text-white block mt-0.5">500+ Attendees</span>
              </div>
              <div>
                <span className="text-[10px] text-[#ffb3ae] uppercase block tracking-wider">Date</span>
                <span className="text-xs font-bold text-white block mt-0.5">Nov 4, 2026</span>
              </div>
            </div>

            <div className="space-y-4 mt-2">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0e0e10] border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#2a2a2c] flex items-center justify-center text-[#eb0028] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined">directions_car</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#e5e1e4] font-headline">
                    Seamless Road Connectivity &amp; Parking
                  </h3>
                  <p className="text-xs text-[#A1A1AA] mt-0.5 leading-relaxed">
                    Directly connected to Hyderabad Nehru Outer Ring Road (Exit 5, Sultanpur/Bowrampet). Free secured delegate parking for over 300 vehicles on-site.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0e0e10] border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#2a2a2c] flex items-center justify-center text-[#eb0028] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined">accessible</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#e5e1e4] font-headline">
                    Universal Accessibility
                  </h3>
                  <p className="text-xs text-[#A1A1AA] mt-0.5 leading-relaxed">
                    Step-free ramp access, dedicated wheelchair rows, tactile paving, and assistive induction loops within the Main Auditorium.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0e0e10] border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#2a2a2c] flex items-center justify-center text-[#eb0028] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined">directions_bus</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#e5e1e4] font-headline">
                    Campus Transit &amp; Metro Shuttles
                  </h3>
                  <p className="text-xs text-[#A1A1AA] mt-0.5 leading-relaxed">
                    Direct connections via Outer Ring Road and Miyapur Metro corridor to the campus gates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Component */}
          <div className="lg:col-span-6 flex flex-col gap-4 reveal-right">
            <div className="w-full h-80 rounded-2xl overflow-hidden shadow-2xl relative border border-white/10 bg-[#0e0e10]">
              <iframe
                title="KLH University Bowrampet Campus Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.1656245259805!2d78.40155347391!3d17.54729949818119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f21c7b459b5%3A0xc307c84e835d6187!2sKLH%20University%2C%20Bowrampet!5e0!3m2!1sen!2sin!4v1790097745153!5m2!1sen!2sin"
                className="w-full h-full border-0 filter contrast-105"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 px-2">
              <span className="text-xs text-zinc-400 font-mono">
                KLH University, Bowrampet, Hyderabad 500043
              </span>
              <a
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#eb0028] text-white font-semibold text-xs tracking-wider uppercase hover:bg-[#c0001e] transition-colors shadow-md"
                href="https://maps.app.goo.gl/RZ7ht8wgbERBdkCA9"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[16px]">navigation</span>
                <span>Open in Google Maps</span>
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-[#121216] border border-white/10 shadow-md flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#eb0028] text-[32px] shrink-0">
                  verified_user
                </span>
                <div>
                  <h3 className="text-base font-semibold text-[#e5e1e4] font-headline">
                    Contactless Digital Entry
                  </h3>
                  <p className="text-xs text-[#A1A1AA] mt-0.5">
                    QR-coded passes will be dispatched 48 hours prior to the event via email and SMS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
