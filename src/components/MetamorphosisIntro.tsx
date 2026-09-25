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

    // Show skip button after 2 seconds
    const skipTimer = setTimeout(() => setShowSkip(true), 2000);

    return () => clearTimeout(skipTimer);
  }, [isOpen]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isOpen) return;

    const handleLoaded = () => {
      setVideoLoaded(true);
      video.play().catch(() => {
        setVideoLoaded(true);
      });
    };

    const handleEnded = () => {
      setVideoEnded(true);
      setTimeout(() => triggerClose(), 800);
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
      className={`fixed inset-0 z-[200] bg-black flex flex-col select-none overflow-hidden transition-opacity duration-600 ease-in-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ animation: fadeOut ? undefined : 'introFadeIn 0.5s ease-out' }}
    >
      {/* ── VIDEO ── fills screen, centered on butterfly */}
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

      {/* ── GRADIENT OVERLAYS ── lighter on mobile so butterfly shows clearly */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* top fade for branding */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/70 to-transparent" />
        {/* bottom fade for controls */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* ── LOADING SPINNER ── */}
      {!videoLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 z-30 bg-black">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20">
            <div className="absolute inset-0 border-2 border-white/10 rounded-full" />
            <div className="absolute inset-0 border-2 border-t-[#eb0028] rounded-full animate-spin" />
          </div>
          <p className="font-['Space_Grotesk'] text-[10px] sm:text-xs tracking-[0.3em] text-zinc-500 uppercase animate-pulse">
            Loading...
          </p>
        </div>
      )}

      {/* ── TOP BRANDING ── */}
      <div
        className={`absolute top-0 left-0 right-0 z-20 px-4 py-4 sm:px-8 sm:py-6 flex items-center justify-between transition-all duration-700 ${
          videoLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#eb0028] animate-ping" />
          <span className="font-['Space_Grotesk'] text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.25em] text-white/80 uppercase drop-shadow-lg">
            TED<sup>x</sup> KLH Bowrampet 2026
          </span>
        </div>
        <span className="text-[9px] sm:text-[10px] font-['Space_Grotesk'] tracking-[0.2em] text-white/40 uppercase hidden sm:inline">
          THE UNSEEN PROCESS OF BECOMING
        </span>
      </div>

      {/* ── BOTTOM CONTROLS ── */}
      <div
        className={`absolute bottom-0 left-0 right-0 z-20 px-4 py-4 sm:px-8 sm:py-8 flex items-end justify-between gap-3 transition-all duration-700 ${
          videoLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        {/* Left — title */}
        <div className="flex flex-col">
          <span className="font-['Cinzel'] text-white text-base sm:text-xl md:text-2xl font-normal tracking-[0.12em] sm:tracking-[0.15em] uppercase drop-shadow-lg leading-tight">
            METAMORPHOSIS
          </span>
          <span className="text-[9px] sm:text-[10px] font-['Space_Grotesk'] text-white/40 tracking-[0.2em] uppercase mt-0.5">
            The Unseen Process of Becoming
          </span>
        </div>

        {/* Right — Skip / Enter button */}
        <div className="flex items-center gap-2 shrink-0">
          {showSkip && !videoEnded && (
            <button
              onClick={triggerClose}
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white font-['Space_Grotesk'] text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase hover:bg-white/20 active:scale-95 transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
              style={{ animation: 'fadeInUp 0.4s ease-out' }}
            >
              <span>Skip</span>
              <span className="material-symbols-outlined text-[13px] sm:text-[14px]">skip_next</span>
            </button>
          )}

          {videoEnded && (
            <button
              onClick={triggerClose}
              className="px-5 py-2.5 sm:px-8 sm:py-3 rounded-full bg-gradient-to-r from-[#eb0028] to-[#990014] text-white font-['Space_Grotesk'] font-bold text-[10px] sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase shadow-[0_0_25px_rgba(235,0,40,0.7)] hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 flex items-center gap-1.5 sm:gap-2"
              style={{ animation: 'fadeInUp 0.4s ease-out' }}
            >
              <span>Enter TED<sup>x</sup> KLH</span>
              <span className="material-symbols-outlined text-[14px] sm:text-[16px]">arrow_forward</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
