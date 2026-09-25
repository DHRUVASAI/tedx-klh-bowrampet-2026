import React, { useState } from 'react';
import { SINGLE_PASS } from './BookingEngine';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({
  isOpen,
  onClose,
}: CheckoutModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    affiliation: '',
    phone: '',
    dietary: 'standard',
  });

  const [confirmedPass, setConfirmedPass] = useState<{
    passId: string;
    name: string;
    email: string;
    tier: string;
    amount: number;
    timestamp: string;
  } | null>(null);

  if (!isOpen) return null;

  const totalAmount = SINGLE_PASS.price; // Fixed at ₹511

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const passCode = `TEDX-KLH-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmedPass({
      passId: passCode,
      name: formData.name,
      email: formData.email,
      tier: SINGLE_PASS.name,
      amount: totalAmount,
      timestamp: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#000000]/85 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#121216] rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-[#eb0028]/30 relative flex flex-col gap-6 my-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#eb0028] animate-ping" />
            <span className="text-xl font-bold text-[#e5e1e4] font-headline">
              {confirmedPass ? 'Official E-Credential' : 'Complete Reservation'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#18181B] flex items-center justify-center text-[#71717A] hover:text-[#e5e1e4] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {confirmedPass ? (
          /* ==================== GENERATED E-PASS VOUCHER ==================== */
          <div className="flex flex-col gap-6 animate-fadeIn">
            <div className="relative rounded-2xl bg-gradient-to-b from-[#1c1b1d] to-[#121216] border-2 border-[#eb0028]/50 p-6 shadow-2xl overflow-hidden">
              <div className="flex items-start justify-between border-b border-white/10 pb-4 mb-4">
                <div>
                  <span className="text-xs font-mono text-[#ffb3ae] uppercase tracking-wider block">
                    TED* KLH Bowrampet 2026
                  </span>
                  <h3 className="text-2xl font-bold text-white font-headline mt-1">
                    METAMORPHOSIS
                  </h3>
                  <span className="text-[11px] text-zinc-400 font-mono">
                    04 NOV 2026 · Bowrampet Campus, Hyderabad
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#eb0028]/20 border border-[#eb0028]/40 text-[#ffb3ae] text-xs font-bold font-mono">
                  CONFIRMED
                </span>
              </div>

              {/* Attendee Data Grid */}
              <div className="grid grid-cols-2 gap-4 text-xs font-mono text-[#e5e1e4] py-2">
                <div>
                  <span className="text-[#71717A] block uppercase text-[10px]">Delegate</span>
                  <span className="font-bold text-white text-sm">{confirmedPass.name}</span>
                </div>
                <div>
                  <span className="text-[#71717A] block uppercase text-[10px]">Pass ID</span>
                  <span className="text-[#ffb3ae] font-bold text-sm">{confirmedPass.passId}</span>
                </div>
                <div>
                  <span className="text-[#71717A] block uppercase text-[10px]">Tier</span>
                  <span className="text-white font-semibold">{confirmedPass.tier}</span>
                </div>
                <div>
                  <span className="text-[#71717A] block uppercase text-[10px]">Amount Paid</span>
                  <span className="text-white font-bold">₹{confirmedPass.amount}</span>
                </div>
              </div>

              {/* Barcode & Security Marker */}
              <div className="mt-6 pt-4 border-t border-dashed border-white/20 flex flex-col items-center">
                <div className="w-full flex justify-between tracking-widest text-[9px] text-[#71717A] font-mono mb-2">
                  <span>KLH-SEC-2026</span>
                  <span>100-CAP-DELEGATE</span>
                  <span>DOOR-01</span>
                </div>
                <div className="w-full h-12 bg-white/10 rounded flex items-center justify-center p-2">
                  <div className="w-full flex justify-between items-center h-full px-2 opacity-80">
                    {Array.from({ length: 48 }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-full bg-white ${
                          i % 3 === 0 ? 'w-1' : i % 5 === 0 ? 'w-1.5' : 'w-0.5'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <span className="text-[10px] text-[#71717A] font-mono mt-1">
                  Present this QR/Barcode at the Main Atrium Reception
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handlePrint}
                className="flex-1 py-3 rounded-full bg-[#18181B] hover:bg-[#222227] border border-white/15 text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">print</span>
                <span>Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-3 rounded-full bg-[#eb0028] hover:bg-[#c0001e] text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Done</span>
              </button>
            </div>
          </div>
        ) : (
          /* ==================== RESERVATION FORM ==================== */
          <>
            {/* Booking Summary Box */}
            <div className="p-4 rounded-xl bg-[#18181B] border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs text-[#71717A] block font-mono">Admission Tier</span>
                <span className="text-base font-bold text-[#e5e1e4] font-headline">
                  {SINGLE_PASS.name}
                </span>
                <span className="text-xs text-[#eb0028] block mt-0.5">
                  1 Delegate Pass
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs text-[#71717A] block font-mono">Total Due</span>
                <span className="text-2xl font-bold text-white font-headline">
                  ₹511
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#71717A] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Aryan Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#201f21] border border-white/10 text-[#e5e1e4] placeholder-[#71717A] focus:outline-none focus:border-[#eb0028] transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#71717A] mb-1">
                  Email Address (For E-Pass Dispatch) *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@institution.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#201f21] border border-white/10 text-[#e5e1e4] placeholder-[#71717A] focus:outline-none focus:border-[#eb0028] transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#71717A] mb-1">
                  Mobile Number (For SMS Entry Gate Pass) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#201f21] border border-white/10 text-[#e5e1e4] placeholder-[#71717A] focus:outline-none focus:border-[#eb0028] transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#71717A] mb-1">
                  Institutional / Company Affiliation *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. KLH University, Tech Startup, or Independent"
                  value={formData.affiliation}
                  onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#201f21] border border-white/10 text-[#e5e1e4] placeholder-[#71717A] focus:outline-none focus:border-[#eb0028] transition-colors text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-4 rounded-full bg-[#eb0028] text-white font-semibold text-xs uppercase tracking-wider shadow-[0_0_24px_rgba(235,0,40,0.5)] hover:shadow-[0_0_36px_rgba(235,0,40,0.8)] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Complete Registration • ₹511</span>
                <span className="material-symbols-outlined text-[18px]">verified</span>
              </button>
            </form>

            <p className="text-xs text-[#71717A] text-center font-mono">
              Encrypted institutional 256-bit SSL transaction. Entry voucher generated instantly.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
