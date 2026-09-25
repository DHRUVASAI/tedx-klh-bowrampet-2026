import React, { useEffect, useRef, useState } from 'react';

interface MetamorphosisIntroProps {
  onComplete: () => void;
  isOpen: boolean;
}

export const MetamorphosisIntro: React.FC<MetamorphosisIntroProps> = ({
  onComplete,
  isOpen,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoEnded, setVideoEnded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showSkip, setShowSkip] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setVideoEnded(false);
      setVideoLoaded(false);
      setShowSkip(false);
      setFadeOut(false);
      return;
    }
    const skipTimer = setTimeout(() => setShowSkip(true), 2000);
    return () => clearTimeout(skipTimer);
  }, [isOpen]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isOpen) return;

    const handleLoaded = () => {
      setVideoLoaded(true);
      video.play().catch(() => setVideoLoaded(true));
    };

    const handleEnded = () => {
      setVideoEnded(true);
      setTimeout(() => triggerClose(), 600);
    };

    video.addEventListener('loadeddata', handleLoaded);
    video.addEventListener('ended', handleEnded);
    return () => {
      video.removeEventListener('loadeddata', handleLoaded);
      video.removeEventListener('ended', handleEnded);
    };
  }, [isOpen]);

  const triggerClose = () => {
    setFadeOut(true);
    setTimeout(() => onComplete(), 600);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] bg-black select-none overflow-hidden transition-opacity duration-600 ease-in-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ animation: fadeOut ? undefined : 'introFadeIn 0.5s ease-out' }}
    >
      {/* ── VIDEO — full bleed, butterfly centred ── */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover object-center"
        src="/butterfly-transformation.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        style={{ opacity: videoLoaded ? 1 : 0, transition: 'opacity 0.6s ease' }}
      />

      {/* ── LOADING ── */}
      {!videoLoaded && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-4 bg-black">
          <div className="relative w-14 h-14">
            <div className="absolute inset-0 rounded-full border-2 border-white/10" />
            <div className="absolute inset-0 rounded-full border-2 border-t-[#eb0028] animate-spin" />
          </div>
          <p className="text-[10px] tracking-[0.35em] text-zinc-600 uppercase font-['Space_Grotesk'] animate-pulse">
            Loading...
          </p>
        </div>
      )}

      {/* ── TOP-LEFT: minimal brand dot ── */}
      <div
        className={`absolute top-0 left-0 z-20 p-4 sm:p-6 flex items-center gap-2 transition-all duration-700 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#eb0028] animate-ping" />
        <span className="font-['Space_Grotesk'] text-[9px] sm:text-[11px] font-bold tracking-[0.22em] text-white/70 uppercase">
          TED<sup>x</sup> KLH Bowrampet 2026
        </span>
      </div>

      {/* ── BOTTOM-RIGHT: Skip / Enter button only ── */}
      <div
        className={`absolute bottom-0 right-0 z-20 p-4 sm:p-6 transition-all duration-700 ${
          videoLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        {!videoEnded && showSkip && (
          <button
            onClick={triggerClose}
            className="flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-black/40 border border-white/25 backdrop-blur-md text-white font-['Space_Grotesk'] text-[10px] sm:text-xs font-semibold tracking-[0.18em] uppercase hover:bg-white/15 active:scale-95 transition-all duration-200 cursor-pointer"
            style={{ animation: 'fadeInUp 0.35s ease-out' }}
          >
            SKIP
            <span className="material-symbols-outlined text-[13px]">skip_next</span>
          </button>
        )}

        {videoEnded && (
          <button
            onClick={triggerClose}
            className="flex items-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3 rounded-full bg-gradient-to-r from-[#eb0028] to-[#990014] text-white font-['Space_Grotesk'] font-bold text-[11px] sm:text-sm tracking-[0.18em] uppercase shadow-[0_0_24px_rgba(235,0,40,0.8)] hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 cursor-pointer"
            style={{ animation: 'fadeInUp 0.35s ease-out' }}
          >
            Enter
            <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
          </button>
        )}
      </div>
    </div>
  );
};
