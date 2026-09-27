import React from 'react';

interface SailboatIllustrationProps {
  className?: string;
}

export const SailboatIllustration: React.FC<SailboatIllustrationProps> = ({ className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Background Compass Rose & Coordinate grid lines */}
      <svg
        className="absolute inset-0 w-full h-full text-[#2E80FF]/15 pointer-events-none"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="300" cy="300" r="260" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" />
        <circle cx="300" cy="300" r="200" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <circle cx="300" cy="300" r="140" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 8" />
        
        {/* Cardinal Lines */}
        <line x1="300" y1="20" x2="300" y2="580" stroke="currentColor" strokeWidth="1" strokeDasharray="3 5" />
        <line x1="20" y1="300" x2="580" y2="300" stroke="currentColor" strokeWidth="1" strokeDasharray="3 5" />
        
        {/* Degrees marks */}
        <path d="M 300 30 L 306 46 L 294 46 Z" fill="#2E80FF" opacity="0.7" />
        <path d="M 300 570 L 306 554 L 294 554 Z" fill="#2E80FF" opacity="0.5" />
        <path d="M 30 300 L 46 294 L 46 306 Z" fill="#2E80FF" opacity="0.5" />
        <path d="M 570 300 L 554 294 L 554 306 Z" fill="#2E80FF" opacity="0.5" />
      </svg>

      {/* Floating Sailboat Scene faithful to ColorPicture.png */}
      <div className="relative w-full max-w-[480px] sm:max-w-[540px] aspect-square flex items-center justify-center p-4">
        <svg
          viewBox="0 0 520 520"
          className="w-full h-full drop-shadow-xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle clouds in background */}
          <g opacity="0.75">
            <path
              d="M 120 160 Q 140 135 170 145 Q 200 135 220 155 Q 235 175 210 185 L 130 185 Q 110 180 120 160 Z"
              fill="#FFFFFF"
              stroke="#2E80FF"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M 360 120 Q 380 100 405 110 Q 425 100 440 118 Q 455 135 435 145 L 365 145 Q 350 135 360 120 Z"
              fill="#FFFFFF"
              stroke="#2E80FF"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </g>

          {/* Animated Sailboat container */}
          <g className="animate-subtle-float" style={{ transformOrigin: '260px 330px' }}>
            {/* Mast */}
            <line
              x1="275"
              y1="90"
              x2="275"
              y2="340"
              stroke="#0F2C59"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* Pennant / Burgee Flag (Oceanic Blue #2E80FF) */}
            <path
              d="M 275 90 L 315 102 L 275 114 Z"
              fill="#2E80FF"
              stroke="#0F2C59"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />

            {/* Forestay wire */}
            <line
              x1="275"
              y1="100"
              x2="410"
              y2="330"
              stroke="#0F2C59"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Backstay wire */}
            <line
              x1="275"
              y1="100"
              x2="150"
              y2="335"
              stroke="#0F2C59"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Mainsail (White with clean Deep Navy contours and soft shading) */}
            <path
              d="M 272 105 Q 210 210 180 325 L 272 325 Z"
              fill="#FFFFFF"
              stroke="#0F2C59"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            {/* Mainsail seam curve */}
            <path
              d="M 272 165 Q 235 240 210 325"
              stroke="#E1EBF9"
              strokeWidth="2.5"
              fill="none"
            />
            <path
              d="M 272 230 Q 250 280 238 325"
              stroke="#E1EBF9"
              strokeWidth="2.5"
              fill="none"
            />

            {/* Mainsail Boom */}
            <line
              x1="172"
              y1="326"
              x2="275"
              y2="326"
              stroke="#0F2C59"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* Jib / Genoa Sail (Gracefully curved forward sail) */}
            <path
              d="M 282 120 Q 345 220 405 325 Q 330 315 285 325 Z"
              fill="#FFFFFF"
              stroke="#0F2C59"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            {/* Jib subtle belly shadow */}
            <path
              d="M 285 180 Q 330 250 365 322"
              stroke="#E1EBF9"
              strokeWidth="2.5"
              fill="none"
            />

            {/* Cabin House */}
            <path
              d="M 220 315 L 290 315 L 305 330 L 210 330 Z"
              fill="#FFFFFF"
              stroke="#0F2C59"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
            {/* Cabin Portlights */}
            <rect x="235" y="320" width="16" height="6" rx="2" fill="#2E80FF" />
            <rect x="260" y="320" width="16" height="6" rx="2" fill="#2E80FF" />

            {/* Hull Base (Pure crisp white with bold navy line) */}
            <path
              d="M 130 335 L 420 330 Q 405 385 300 395 Q 180 395 130 335 Z"
              fill="#FFFFFF"
              stroke="#0F2C59"
              strokeWidth="4.5"
              strokeLinejoin="round"
            />

            {/* Solar Coral (#FF6B4A) Hull Stripe — Authentic to ColorPicture.png */}
            <path
              d="M 132 342 L 416 338 Q 400 360 300 368 Q 185 368 132 342 Z"
              fill="#FF6B4A"
              stroke="#0F2C59"
              strokeWidth="3"
              strokeLinejoin="round"
            />

            {/* Bow pulpit & Stern rail accents */}
            <path
              d="M 405 315 L 415 330"
              stroke="#0F2C59"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M 140 315 L 140 335"
              stroke="#0F2C59"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Keel submerged preview */}
            <path
              d="M 255 393 L 265 425 L 290 425 L 285 394 Z"
              fill="#0F2C59"
            />
          </g>

          {/* Dynamic Oceanic Waves in Deep Navy & Oceanic Blue */}
          <g className="animate-wave-slow">
            {/* Back wave layer */}
            <path
              d="M 70 380 Q 110 350 160 375 Q 210 400 270 370 Q 330 340 390 375 Q 440 400 470 375"
              fill="none"
              stroke="#2E80FF"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.4"
            />

            {/* Main cresting wave layer (Oceanic Blue #2E80FF + Deep Navy #0F2C59) */}
            <path
              d="M 90 395 Q 140 360 190 385 Q 240 410 300 380 Q 360 350 420 385 Q 460 405 480 385"
              fill="none"
              stroke="#2E80FF"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* Front stylized wave splash */}
            <path
              d="M 120 410 Q 160 375 220 400 Q 280 425 340 395 Q 400 365 460 405"
              fill="none"
              stroke="#0F2C59"
              strokeWidth="5.5"
              strokeLinecap="round"
            />

            {/* Foam curl details */}
            <path
              d="M 160 375 Q 170 365 180 370"
              fill="none"
              stroke="#2E80FF"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M 285 372 Q 295 362 305 368"
              fill="none"
              stroke="#2E80FF"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M 405 375 Q 415 365 425 370"
              fill="none"
              stroke="#2E80FF"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>
        </svg>

        {/* Live Coordinate Pill */}
        <div className="absolute bottom-4 left-6 bg-white/90 backdrop-blur-sm border border-[#2E80FF]/25 px-3 py-1.5 rounded-full shadow-md flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span className="text-[11px] font-mono font-semibold text-[#0F2C59]">
            36°52.4'N 028°15.8'E • HDG 214°M
          </span>
        </div>

        {/* Magnetic Declination Chip */}
        <div className="absolute top-6 right-6 bg-[#0F2C59] text-white px-3 py-1.5 rounded-full shadow-lg border border-[#2E80FF]/30 flex items-center gap-1.5 text-[11px] font-mono">
          <span className="text-[#FF6B4A] font-bold">WMM 2025:</span>
          <span>VAR +5.4°E</span>
        </div>
      </div>
    </div>
  );
};
