import React from 'react';

interface MetamorphosisArtworkProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showTypography?: boolean;
  interactive?: boolean;
  animate?: boolean;
}

export const MetamorphosisArtwork: React.FC<MetamorphosisArtworkProps> = ({
  className = '',
  size = 'hero',
  showTypography = true,
  interactive = true,
  animate = true,
}) => {
  const [rotate, setRotate] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: -y * 12, y: x * 14 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  // Dimensions based on size
  const maxW =
    size === 'sm'
      ? 'max-w-xs'
      : size === 'md'
      ? 'max-w-md'
      : size === 'lg'
      ? 'max-w-xl'
      : 'max-w-2xl';

  return (
    <div
      className={`relative flex flex-col items-center justify-center select-none ${maxW} w-full mx-auto ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1200px',
      }}
    >
      {/* Ambient background glows: cool crystal white on the left, deep ruby red on the right */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-1/2 h-72 bg-slate-200/5 rounded-full blur-[80px] -translate-x-12" />
        <div className="w-1/2 h-72 bg-[#eb0028]/25 rounded-full blur-[90px] translate-x-12" />
      </div>

      {/* Main 3D Card Stage */}
      <div
        className="relative w-full aspect-[1.15/1] flex items-center justify-center transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(${isHovered ? 1.02 : 1})`,
          transformStyle: 'preserve-3d',
        }}
      >
        <svg
          viewBox="0 0 800 680"
          className="w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-visible"
        >
          <defs>
            {/* Gradients for Left Crystal Wing */}
            <linearGradient id="crystalGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#dbeafe" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.25" />
            </linearGradient>

            <linearGradient id="glassFacet1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#64748b" stopOpacity="0.05" />
            </linearGradient>

            <linearGradient id="glassFacet2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1e293b" stopOpacity="0.1" />
            </linearGradient>

            {/* Gradients for Right Ruby Wing */}
            <linearGradient id="rubyGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff4d6d" stopOpacity="1" />
              <stop offset="40%" stopColor="#eb0028" stopOpacity="1" />
              <stop offset="80%" stopColor="#990014" stopOpacity="1" />
              <stop offset="100%" stopColor="#4a0009" stopOpacity="1" />
            </linearGradient>

            <linearGradient id="rubyFacetBright" x1="0%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#ff758f" />
              <stop offset="60%" stopColor="#e11d48" />
              <stop offset="100%" stopColor="#9f1239" />
            </linearGradient>

            <linearGradient id="rubyFacetMedium" x1="30%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e11d48" />
              <stop offset="50%" stopColor="#be123c" />
              <stop offset="100%" stopColor="#881337" />
            </linearGradient>

            <linearGradient id="rubyFacetDark" x1="0%" y1="30%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9f1239" />
              <stop offset="70%" stopColor="#4c0519" />
              <stop offset="100%" stopColor="#1a0208" />
            </linearGradient>

            <linearGradient id="rubyHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
              <stop offset="30%" stopColor="#ff8597" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#eb0028" stopOpacity="0" />
            </linearGradient>

            {/* Filter for crystal glow */}
            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <filter id="rubyBloom" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0.8
                        0 0 0 0 0
                        0 0 0 0 0.15
                        0 0 0 1 0"
              />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* ========================================================= */}
          {/* LEFT WING: GEOMETRIC WIREFRAME CRYSTAL LATTICE            */}
          {/* ========================================================= */}
          <g className={`transition-all duration-700 ${animate ? 'hover:brightness-125' : ''}`}>
            {/* Frosted Facet polygons */}
            {/* Top Forewing Facets */}
            <polygon points="400,240 370,180 320,130 380,210" fill="url(#glassFacet1)" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.6" />
            <polygon points="380,210 320,130 250,90 320,190" fill="url(#glassFacet2)" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.5" />
            <polygon points="320,190 250,90 190,75 220,165" fill="url(#glassFacet1)" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.6" />
            <polygon points="220,165 190,75 140,85 155,160" fill="url(#glassFacet2)" stroke="#ffffff" strokeWidth="0.9" strokeOpacity="0.7" />
            <polygon points="155,160 140,85 105,120 120,190" fill="url(#glassFacet1)" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.6" />
            <polygon points="120,190 105,120 75,175 105,235" fill="url(#glassFacet2)" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.6" />
            <polygon points="105,235 75,175 60,240 95,285" fill="url(#glassFacet1)" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.7" />
            <polygon points="95,285 60,240 70,310 125,325" fill="url(#glassFacet2)" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.6" />

            {/* Mid Forewing Facets */}
            <polygon points="400,240 380,210 320,190 340,265" fill="url(#glassFacet2)" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.6" />
            <polygon points="340,265 320,190 220,165 240,245" fill="url(#glassFacet1)" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.5" />
            <polygon points="240,245 220,165 155,160 180,230" fill="url(#glassFacet2)" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.6" />
            <polygon points="180,230 155,160 120,190 150,260" fill="url(#glassFacet1)" stroke="#ffffff" strokeWidth="0.9" strokeOpacity="0.7" />
            <polygon points="150,260 120,190 105,235 135,295" fill="url(#glassFacet2)" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.6" />
            <polygon points="135,295 105,235 95,285 125,325" fill="url(#glassFacet1)" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.6" />

            {/* Inner Forewing to Body */}
            <polygon points="400,240 340,265 295,330 385,310" fill="url(#glassFacet1)" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.6" />
            <polygon points="340,265 240,245 205,315 295,330" fill="url(#glassFacet2)" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.5" />
            <polygon points="240,245 180,230 150,260 205,315" fill="url(#glassFacet1)" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.6" />
            <polygon points="205,315 150,260 135,295 170,355" fill="url(#glassFacet2)" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.6" />
            <polygon points="170,355 135,295 125,325 150,380" fill="url(#glassFacet1)" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.5" />

            {/* Left Hindwing Facets */}
            <polygon points="385,310 295,330 320,400 395,370" fill="url(#glassFacet2)" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.6" />
            <polygon points="295,330 205,315 220,390 320,400" fill="url(#glassFacet1)" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.5" />
            <polygon points="205,315 170,355 180,420 220,390" fill="url(#glassFacet2)" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.6" />
            <polygon points="170,355 150,380 160,445 180,420" fill="url(#glassFacet1)" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.5" />
            <polygon points="395,370 320,400 335,475 390,440" fill="url(#glassFacet1)" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.6" />
            <polygon points="320,400 220,390 240,465 335,475" fill="url(#glassFacet2)" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.6" />
            <polygon points="220,390 180,420 195,490 240,465" fill="url(#glassFacet1)" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.5" />
            <polygon points="180,420 160,445 175,510 195,490" fill="url(#glassFacet2)" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.6" />
            <polygon points="390,440 335,475 340,535 385,490" fill="url(#glassFacet2)" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.6" />
            <polygon points="335,475 240,465 260,530 340,535" fill="url(#glassFacet1)" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.5" />
            <polygon points="240,465 195,490 215,535 260,530" fill="url(#glassFacet2)" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.6" />
            <polygon points="195,490 175,510 190,545 215,535" fill="url(#glassFacet1)" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.5" />

            {/* Glowing Main Wireframe Veins */}
            <path
              d="M 400,240 Q 300,160 140,85 Q 90,130 60,240 Q 90,320 125,325 Q 160,450 175,510 Q 250,560 340,535 Q 390,480 400,380"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.8"
              strokeOpacity="0.9"
              filter="url(#softGlow)"
            />
            <path
              d="M 400,270 C 310,240 220,200 155,160"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.2"
              strokeOpacity="0.8"
            />
            <path
              d="M 400,300 C 330,300 240,290 170,355"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.2"
              strokeOpacity="0.75"
            />
            <path
              d="M 390,340 C 330,360 250,380 195,490"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.2"
              strokeOpacity="0.75"
            />

            {/* Wireframe Glowing Nodes (Crystal Vertices) */}
            <g fill="#ffffff" filter="url(#softGlow)">
              <circle cx="140" cy="85" r="2.5" />
              <circle cx="190" cy="75" r="2" />
              <circle cx="250" cy="90" r="2.2" />
              <circle cx="320" cy="130" r="2" />
              <circle cx="105" cy="120" r="2.5" />
              <circle cx="75" cy="175" r="2.2" />
              <circle cx="60" cy="240" r="2.8" />
              <circle cx="95" cy="285" r="2.2" />
              <circle cx="125" cy="325" r="2.5" />
              <circle cx="155" cy="160" r="2" />
              <circle cx="120" cy="190" r="2" />
              <circle cx="105" cy="235" r="2" />
              <circle cx="150" cy="260" r="2" />
              <circle cx="220" cy="165" r="2.2" />
              <circle cx="240" cy="245" r="2" />
              <circle cx="205" cy="315" r="2.2" />
              <circle cx="170" cy="355" r="2.5" />
              <circle cx="150" cy="380" r="2.2" />
              <circle cx="160" cy="445" r="2" />
              <circle cx="180" cy="420" r="2" />
              <circle cx="175" cy="510" r="2.5" />
              <circle cx="195" cy="490" r="2" />
              <circle cx="240" cy="465" r="2.2" />
              <circle cx="260" cy="530" r="2.2" />
              <circle cx="335" cy="475" r="2" />
              <circle cx="340" cy="535" r="2.5" />
            </g>

            {/* Floating Left Crystal Shards breaking off */}
            <g className="animate-pulse" style={{ animationDuration: '4s' }}>
              <polygon points="35,140 45,150 30,165" fill="url(#glassFacet1)" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.8" />
              <polygon points="50,110 65,115 55,130" fill="url(#glassFacet2)" stroke="#ffffff" strokeWidth="0.7" strokeOpacity="0.7" />
              <polygon points="20,210 32,225 22,235" fill="url(#glassFacet1)" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.85" />
              <polygon points="40,270 52,282 38,295" fill="url(#glassFacet2)" stroke="#ffffff" strokeWidth="0.7" strokeOpacity="0.75" />
              <polygon points="85,60 100,70 90,82" fill="url(#glassFacet1)" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.8" />
              <polygon points="110,40 122,50 115,62" fill="url(#glassFacet2)" stroke="#ffffff" strokeWidth="0.6" strokeOpacity="0.7" />
              <polygon points="75,370 88,382 78,395" fill="url(#glassFacet1)" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.8" />
              <polygon points="120,470 132,482 122,492" fill="url(#glassFacet2)" stroke="#ffffff" strokeWidth="0.7" strokeOpacity="0.7" />
            </g>
          </g>

          {/* ========================================================= */}
          {/* RIGHT WING: RUBY CRIMSON POLYGONAL FACETED WING           */}
          {/* ========================================================= */}
          <g filter="url(#rubyBloom)">
            {/* Top Forewing Facets */}
            <polygon points="400,240 430,180 480,130 420,210" fill="url(#rubyFacetBright)" stroke="#ffe4e6" strokeWidth="0.4" strokeOpacity="0.6" />
            <polygon points="420,210 480,130 550,90 480,190" fill="url(#rubyFacetMedium)" stroke="#ffccd5" strokeWidth="0.4" strokeOpacity="0.5" />
            <polygon points="480,190 550,90 610,75 580,165" fill="url(#rubyFacetBright)" stroke="#ffe4e6" strokeWidth="0.5" strokeOpacity="0.6" />
            <polygon points="580,165 610,75 660,85 645,160" fill="url(#rubyFacetDark)" stroke="#ff4d6d" strokeWidth="0.5" strokeOpacity="0.6" />
            <polygon points="645,160 660,85 695,120 680,190" fill="url(#rubyFacetBright)" stroke="#ffffff" strokeWidth="0.6" strokeOpacity="0.7" />
            <polygon points="680,190 695,120 725,175 695,235" fill="url(#rubyFacetMedium)" stroke="#ffccd5" strokeWidth="0.5" strokeOpacity="0.6" />
            <polygon points="695,235 725,175 740,240 705,285" fill="url(#rubyFacetDark)" stroke="#e11d48" strokeWidth="0.5" strokeOpacity="0.6" />
            <polygon points="705,285 740,240 730,310 675,325" fill="url(#rubyFacetBright)" stroke="#ff758f" strokeWidth="0.5" strokeOpacity="0.7" />

            {/* Mid Forewing Facets */}
            <polygon points="400,240 420,210 480,190 460,265" fill="url(#rubyFacetDark)" stroke="#ff4d6d" strokeWidth="0.4" strokeOpacity="0.5" />
            <polygon points="460,265 480,190 580,165 560,245" fill="url(#rubyFacetBright)" stroke="#ffe4e6" strokeWidth="0.5" strokeOpacity="0.6" />
            <polygon points="560,245 580,165 645,160 620,230" fill="url(#rubyFacetMedium)" stroke="#ff8597" strokeWidth="0.5" strokeOpacity="0.6" />
            <polygon points="620,230 645,160 680,190 650,260" fill="url(#rubyFacetBright)" stroke="#ffffff" strokeWidth="0.6" strokeOpacity="0.7" />
            <polygon points="650,260 680,190 695,235 665,295" fill="url(#rubyFacetDark)" stroke="#ff4d6d" strokeWidth="0.5" strokeOpacity="0.6" />
            <polygon points="665,295 695,235 705,285 675,325" fill="url(#rubyFacetMedium)" stroke="#ffccd5" strokeWidth="0.5" strokeOpacity="0.6" />

            {/* Inner Forewing to Body */}
            <polygon points="400,240 460,265 505,330 415,310" fill="url(#rubyFacetMedium)" stroke="#ff8597" strokeWidth="0.5" strokeOpacity="0.6" />
            <polygon points="460,265 560,245 595,315 505,330" fill="url(#rubyFacetDark)" stroke="#9f1239" strokeWidth="0.5" strokeOpacity="0.6" />
            <polygon points="560,245 620,230 650,260 595,315" fill="url(#rubyFacetBright)" stroke="#ffe4e6" strokeWidth="0.5" strokeOpacity="0.7" />
            <polygon points="595,315 650,260 665,295 630,355" fill="url(#rubyFacetMedium)" stroke="#ffccd5" strokeWidth="0.5" strokeOpacity="0.6" />
            <polygon points="630,355 665,295 675,325 650,380" fill="url(#rubyFacetDark)" stroke="#881337" strokeWidth="0.5" strokeOpacity="0.6" />

            {/* Right Hindwing Facets */}
            <polygon points="415,310 505,330 480,400 405,370" fill="url(#rubyFacetBright)" stroke="#ff8597" strokeWidth="0.5" strokeOpacity="0.6" />
            <polygon points="505,330 595,315 580,390 480,400" fill="url(#rubyFacetMedium)" stroke="#ffccd5" strokeWidth="0.5" strokeOpacity="0.6" />
            <polygon points="595,315 630,355 620,420 580,390" fill="url(#rubyFacetDark)" stroke="#4c0519" strokeWidth="0.5" strokeOpacity="0.6" />
            <polygon points="630,355 650,380 640,445 620,420" fill="url(#rubyFacetBright)" stroke="#ffe4e6" strokeWidth="0.5" strokeOpacity="0.7" />
            <polygon points="405,370 480,400 465,475 410,440" fill="url(#rubyFacetDark)" stroke="#881337" strokeWidth="0.5" strokeOpacity="0.6" />
            <polygon points="480,400 580,390 560,465 465,475" fill="url(#rubyFacetBright)" stroke="#ff8597" strokeWidth="0.5" strokeOpacity="0.7" />
            <polygon points="580,390 620,420 605,490 560,465" fill="url(#rubyFacetMedium)" stroke="#ffccd5" strokeWidth="0.5" strokeOpacity="0.6" />
            <polygon points="620,420 640,445 625,510 605,490" fill="url(#rubyFacetDark)" stroke="#4c0519" strokeWidth="0.5" strokeOpacity="0.6" />
            <polygon points="410,440 465,475 460,535 415,490" fill="url(#rubyFacetMedium)" stroke="#ff8597" strokeWidth="0.5" strokeOpacity="0.6" />
            <polygon points="465,475 560,465 540,530 460,535" fill="url(#rubyFacetDark)" stroke="#9f1239" strokeWidth="0.5" strokeOpacity="0.6" />
            <polygon points="560,465 605,490 585,535 540,530" fill="url(#rubyFacetBright)" stroke="#ffe4e6" strokeWidth="0.5" strokeOpacity="0.7" />
            <polygon points="605,490 625,510 610,545 585,535" fill="url(#rubyFacetMedium)" stroke="#ffccd5" strokeWidth="0.5" strokeOpacity="0.6" />

            {/* Specular White Highlights on Ruby Ridges */}
            <path
              d="M 400,240 Q 500,160 660,85 Q 710,130 740,240 Q 710,320 675,325 Q 640,450 625,510 Q 550,560 460,535"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.2"
              strokeOpacity="0.6"
            />
            <path
              d="M 480,190 L 580,165 L 620,230 L 650,260"
              fill="none"
              stroke="#ffccd5"
              strokeWidth="0.8"
              strokeOpacity="0.8"
            />
          </g>

          {/* ========================================================= */}
          {/* DISPERSING RUBY SHARDS (Dissolving outward to top right)  */}
          {/* ========================================================= */}
          <g className="animate-pulse" style={{ animationDuration: '3.5s' }}>
            <polygon points="765,140 780,148 770,165" fill="#eb0028" stroke="#ffccd5" strokeWidth="0.6" />
            <polygon points="745,95 765,105 750,120" fill="#ff2a4a" stroke="#ffffff" strokeWidth="0.5" />
            <polygon points="785,185 800,200 785,215" fill="#c0001e" stroke="#ffccd5" strokeWidth="0.6" />
            <polygon points="760,260 775,275 755,290" fill="#eb0028" stroke="#ff8597" strokeWidth="0.5" />
            <polygon points="700,50 720,62 705,75" fill="#ff4d6d" stroke="#ffffff" strokeWidth="0.6" />
            <polygon points="730,30 745,42 735,55" fill="#eb0028" stroke="#ffccd5" strokeWidth="0.4" />
            <polygon points="770,60 785,72 775,85" fill="#9f1239" stroke="#ff8597" strokeWidth="0.4" />
            <polygon points="720,360 735,372 725,385" fill="#e11d48" stroke="#ffccd5" strokeWidth="0.5" />
            <polygon points="670,460 685,472 675,485" fill="#eb0028" stroke="#ffccd5" strokeWidth="0.5" />
            <polygon points="695,430 710,442 700,455" fill="#c0001e" stroke="#ff8597" strokeWidth="0.5" />
          </g>

          {/* ========================================================= */}
          {/* CENTER CHRYSALIS BODY & SLENDER ANTENNAE                  */}
          {/* ========================================================= */}
          <g>
            {/* Left curved antenna */}
            <path
              d="M 398,210 Q 370,130 350,110 Q 345,105 340,110"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <circle cx="340" cy="110" r="2.5" fill="#ffffff" filter="url(#softGlow)" />

            {/* Right curved antenna */}
            <path
              d="M 402,210 Q 430,130 450,110 Q 455,105 460,110"
              fill="none"
              stroke="#eb0028"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <circle cx="460" cy="110" r="2.5" fill="#ff4d6d" filter="url(#softGlow)" />

            {/* Slender thorax / body */}
            {/* Head */}
            <ellipse cx="400" cy="210" rx="5" ry="7" fill="#18181b" stroke="#71717a" strokeWidth="0.8" />
            {/* Thorax */}
            <path
              d="M 397,217 Q 394,270 396,330 Q 397,380 400,420 Q 403,380 404,330 Q 406,270 403,217 Z"
              fill="#09090b"
              stroke="#ffffff"
              strokeWidth="0.8"
              strokeOpacity="0.4"
            />
            {/* Body Segment Ribs */}
            <line x1="395" y1="240" x2="405" y2="240" stroke="#a1a1aa" strokeWidth="0.8" strokeOpacity="0.6" />
            <line x1="395" y1="270" x2="405" y2="270" stroke="#a1a1aa" strokeWidth="0.8" strokeOpacity="0.6" />
            <line x1="396" y1="300" x2="404" y2="300" stroke="#a1a1aa" strokeWidth="0.8" strokeOpacity="0.6" />
            <line x1="397" y1="330" x2="403" y2="330" stroke="#a1a1aa" strokeWidth="0.8" strokeOpacity="0.6" />
            <line x1="398" y1="360" x2="402" y2="360" stroke="#a1a1aa" strokeWidth="0.8" strokeOpacity="0.6" />
          </g>
        </svg>
      </div>

      {/* ========================================================= */}
      {/* EXACT REFERENCE POSTER TYPOGRAPHY                         */}
      {/* ========================================================= */}
      {showTypography && (
        <div className="flex flex-col items-center text-center mt-3 sm:mt-5 z-20">
          <h2 className="font-['Cinzel'] text-3xl sm:text-5xl md:text-6xl font-light sm:font-normal tracking-[0.26em] text-white drop-shadow-[0_0_24px_rgba(255,255,255,0.35)] uppercase transition-all duration-300">
            METAMORPHOSIS
          </h2>
          <p className="font-['Geist'] text-xs sm:text-sm md:text-base text-zinc-300 tracking-[0.32em] uppercase font-light mt-2 sm:mt-3 drop-shadow-md">
            THE UNSEEN PROCESS OF BECOMING.
          </p>
          <div className="flex items-center gap-2 mt-3 sm:mt-4 text-[11px] sm:text-xs tracking-[0.24em] font-['Space_Grotesk'] text-zinc-400 uppercase">
            <span className="text-[#eb0028] font-semibold">01</span>
            <span className="w-5 h-px bg-zinc-600" />
            <span>THE TRANSFORMATION</span>
          </div>
        </div>
      )}
    </div>
  );
};
