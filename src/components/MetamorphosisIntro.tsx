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
      className={`fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center select-none overflow-hidden transition-opacity duration-600 ease-in-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ animation: fadeOut ? undefined : 'introFadeIn 0.5s ease-out' }}
    >
      {/* Video fills the entire screen */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/butterfly-transformation.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        style={{ opacity: videoLoaded ? 1 : 0, transition: 'opacity 0.5s ease' }}
      />

      {/* Dark gradient overlay — subtle top & bottom for UI readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70 pointer-events-none z-10" />

      {/* Loading state — before video plays */}
      {!videoLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 z-20 bg-black">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 border-2 border-white/10 rounded-full" />
            <div className="absolute inset-0 border-2 border-t-[#eb0028] rounded-full animate-spin" />
          </div>
          <p className="font-['Space_Grotesk'] text-xs tracking-[0.3em] text-zinc-400 uppercase animate-pulse">
            Loading Metamorphosis...
          </p>
        </div>
      )}

      {/* Top branding overlay */}
      <div
        className={`absolute top-0 left-0 right-0 z-20 p-5 sm:p-8 flex items-center justify-between transition-all duration-700 ${
          videoLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#eb0028] animate-ping" />
          <span className="font-['Space_Grotesk'] text-xs font-bold tracking-[0.25em] text-white/80 uppercase drop-shadow-lg">
            TED<sup>x</sup> KLH Bowrampet 2026
          </span>
        </div>
        <span className="text-[10px] font-['Space_Grotesk'] tracking-[0.3em] text-white/50 uppercase hidden sm:inline drop-shadow-lg">
          THE UNSEEN PROCESS OF BECOMING
        </span>
      </div>

      {/* Bottom controls overlay */}
      <div
        className={`absolute bottom-0 left-0 right-0 z-20 p-5 sm:p-8 flex flex-col gap-4 transition-all duration-700 ${
          videoLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >


        {/* Action row */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex flex-col">
            <span className="font-['Cinzel'] text-white text-lg sm:text-2xl font-normal tracking-[0.15em] uppercase drop-shadow-lg">
              METAMORPHOSIS
            </span>
            <span className="text-[10px] font-['Space_Grotesk'] text-white/50 tracking-[0.25em] uppercase">
              The Unseen Process of Becoming
            </span>
          </div>

          <div className="flex items-center gap-3">
            {showSkip && !videoEnded && (
              <button
                onClick={triggerClose}
                className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white font-['Space_Grotesk'] text-xs font-semibold tracking-[0.15em] uppercase hover:bg-white/20 transition-all duration-200 flex items-center gap-2 cursor-pointer"
                style={{ animation: 'fadeInUp 0.4s ease-out' }}
              >
                <span>Skip</span>
                <span className="material-symbols-outlined text-[14px]">skip_next</span>
              </button>
            )}

            {videoEnded && (
              <button
                onClick={triggerClose}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#eb0028] to-[#990014] text-white font-['Space_Grotesk'] font-bold text-sm tracking-[0.2em] uppercase shadow-[0_0_35px_rgba(235,0,40,0.7)] hover:shadow-[0_0_50px_rgba(235,0,40,1)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2"
                style={{ animation: 'fadeInUp 0.4s ease-out' }}
              >
                <span>Enter TED<sup>x</sup> KLH</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
