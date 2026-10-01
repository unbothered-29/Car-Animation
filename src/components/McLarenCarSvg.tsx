import React from 'react';
import { CarConfig, CarPartId } from '../types/car';

interface McLarenCarSvgProps {
  config: CarConfig;
  selectedPart?: CarPartId | null;
  onPartClick?: (partId: CarPartId) => void;
  hoveredPart?: CarPartId | null;
  onPartHover?: (partId: CarPartId | null) => void;
  className?: string;
  zoom?: number;
  showAeroParticles?: boolean;
}

export const McLarenCarSvg: React.FC<McLarenCarSvgProps> = ({
  config,
  selectedPart,
  onPartClick,
  hoveredPart,
  onPartHover,
  className = '',
  zoom = 1,
  showAeroParticles = false,
}) => {
  const isPartActive = (id: CarPartId) => selectedPart === id || hoveredPart === id;

  // Active wing dynamic properties
  const wingTransform =
    config.wingMode === 'airbrake'
      ? 'translate(-12, 0) scale(1.08, 0.94)'
      : config.wingMode === 'downforce'
      ? 'translate(-4, 0) scale(1.03, 0.98)'
      : 'translate(0, 0)';

  const carbonFill =
    config.carbonPack === 'body-match'
      ? config.bodyColor
      : config.carbonPack === 'matte-carbon'
      ? '#22252a'
      : 'url(#carbonPattern)';

  const carbonBaseFill =
    config.carbonPack === 'body-match'
      ? config.bodyShadow
      : '#17191d';

  return (
    <div
      className={`relative inline-block transition-transform duration-300 ${className}`}
      style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }}
    >
      <svg
        id="mclaren-720s-svg"
        viewBox="0 0 1000 500"
        className="w-full h-auto select-none drop-shadow-2xl"
        style={{ maxWidth: '100%' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Carbon Fiber Weave Pattern */}
          <pattern id="carbonPattern" width="6" height="6" patternUnits="userSpaceOnUse">
            <rect width="6" height="6" fill="#181a1d" />
            <polygon points="0,0 3,0 0,3" fill="#24282e" />
            <polygon points="3,3 6,3 3,6" fill="#24282e" />
            <polygon points="3,0 6,0 6,3" fill="#141517" />
            <polygon points="0,3 3,3 0,6" fill="#141517" />
          </pattern>

          {/* Body Paint Gradient (Papaya Orange / Custom) */}
          <linearGradient id="bodyPaintGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={config.bodyShadow} />
            <stop offset="12%" stopColor={config.bodyColor} />
            <stop offset="28%" stopColor={config.bodyHighlight} />
            <stop offset="50%" stopColor={config.bodyColor} />
            <stop offset="72%" stopColor={config.bodyHighlight} />
            <stop offset="88%" stopColor={config.bodyColor} />
            <stop offset="100%" stopColor={config.bodyShadow} />
          </linearGradient>

          {/* Longitudinal Body Flow Gradient */}
          <linearGradient id="bodyLongitudinalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.25" />
            <stop offset="25%" stopColor="#ffffff" stopOpacity="0.08" />
            <stop offset="70%" stopColor="#ffffff" stopOpacity="0.15" />
            <stop offset="95%" stopColor="#000000" stopOpacity="0.18" />
          </linearGradient>

          {/* Windshield Curved Specular Highlight */}
          <linearGradient id="windshieldGlassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1f2329" />
            <stop offset="45%" stopColor="#2e333d" />
            <stop offset="60%" stopColor="#414856" />
            <stop offset="100%" stopColor="#1b1d22" />
          </linearGradient>

          {/* Windshield Reflection Sweep 1 */}
          <linearGradient id="windshieldSweep1" x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.0" />
            <stop offset="35%" stopColor="#ffffff" stopOpacity="0.28" />
            <stop offset="48%" stopColor="#ffffff" stopOpacity="0.38" />
            <stop offset="65%" stopColor="#ffffff" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
          </linearGradient>

          {/* Windshield Reflection Sweep 2 */}
          <linearGradient id="windshieldSweep2" x1="0%" y1="50%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.0" />
            <stop offset="55%" stopColor="#ffffff" stopOpacity="0.22" />
            <stop offset="70%" stopColor="#ffffff" stopOpacity="0.32" />
            <stop offset="85%" stopColor="#ffffff" stopOpacity="0.0" />
          </linearGradient>

          {/* Roof Glass Tint Gradient */}
          <linearGradient id="roofGlassGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              stopColor={
                config.roofTint === 'electrochromic'
                  ? '#1e3a8a'
                  : config.roofTint === 'smoke'
                  ? '#111317'
                  : '#282d36'
              }
            />
            <stop
              offset="100%"
              stopColor={
                config.roofTint === 'electrochromic'
                  ? '#2563eb'
                  : config.roofTint === 'smoke'
                  ? '#1a1d24'
                  : '#39404d'
              }
            />
          </linearGradient>

          {/* Headlight Beam Glow */}
          <radialGradient id="headlightBeamGlow" cx="0%" cy="50%" r="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="25%" stopColor="#bae6fd" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </radialGradient>

          {/* Brake Light Glow */}
          <radialGradient id="brakeGlow" cx="100%" cy="50%" r="100%">
            <stop offset="0%" stopColor="#ff0033" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#dc2626" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#7f1d1d" stopOpacity="0" />
          </radialGradient>

          {/* Ambient Ground Shadow Filter */}
          <filter id="ambientShadow" x="-15%" y="-20%" width="130%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="16" />
            <feOffset dx="-2" dy="4" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.75" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Glow filter for active blueprint parts */}
          <filter id="partGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* =============================================================== */}
        {/* LAYER 0: HEADLIGHT & BRAKE LIGHT PROJECTIONS ONTO ROAD         */}
        {/* =============================================================== */}
        {config.headlightsOn && (
          <g id="headlight-beams" className="transition-opacity duration-300">
            {/* Upper headlight beam projection */}
            <path
              d="M 890 185 L 1150 110 L 1150 220 Z"
              fill="url(#headlightBeamGlow)"
              opacity="0.65"
              pointerEvents="none"
            />
            {/* Lower headlight beam projection */}
            <path
              d="M 890 315 L 1150 280 L 1150 390 Z"
              fill="url(#headlightBeamGlow)"
              opacity="0.65"
              pointerEvents="none"
            />
          </g>
        )}

        {config.brakeLightsOn && (
          <g id="brakelight-beams" className="transition-opacity duration-300">
            {/* Rear brake light ambient red wash */}
            <path
              d="M 80 140 C 20 180, 0 220, 0 250 C 0 280, 20 320, 80 360 L 60 250 Z"
              fill="url(#brakeGlow)"
              opacity="0.7"
              pointerEvents="none"
            />
          </g>
        )}

        {/* =============================================================== */}
        {/* LAYER 1: CAR AMBIENT OCCLUSION GROUND SHADOW                   */}
        {/* =============================================================== */}
        <path
          d="
            M 938 250
            C 935 220, 915 195, 875 172
            C 825 142, 755 138, 665 142
            C 585 146, 520 152, 435 146
            C 340 140, 240 115, 145 125
            C 110 128, 70 158, 62 210
            C 58 230, 58 270, 62 290
            C 70 342, 110 372, 145 375
            C 240 385, 340 360, 435 354
            C 520 348, 585 354, 665 358
            C 755 362, 825 358, 875 328
            C 915 305, 935 280, 938 250 Z
          "
          fill="#000000"
          opacity="0.7"
          filter="url(#ambientShadow)"
        />

        {/* =============================================================== */}
        {/* LAYER 2: FRONT SPLITTER & UNDERBODY AERODYNAMICS               */}
        {/* =============================================================== */}
        <g
          id="part-front-splitter"
          cursor="pointer"
          onClick={() => onPartClick?.('front-splitter')}
          onMouseEnter={() => onPartHover?.('front-splitter')}
          onMouseLeave={() => onPartHover?.(null)}
          className="transition-all duration-200"
        >
          {/* Carbon Front Splitter Lip */}
          <path
            d="
              M 945 250
              C 942 225, 928 200, 892 176
              C 885 172, 875 168, 865 165
              L 868 172
              C 885 178, 918 198, 935 222
              C 940 236, 942 250, 940 264
              C 918 288, 885 322, 868 328
              L 865 335
              C 875 332, 885 328, 892 324
              C 928 300, 942 275, 945 250 Z
            "
            fill={carbonFill}
            stroke={isPartActive('front-splitter') ? '#38bdf8' : '#000000'}
            strokeWidth={isPartActive('front-splitter') ? 2 : 1}
            filter={isPartActive('front-splitter') ? 'url(#partGlow)' : undefined}
          />
        </g>

        {/* =============================================================== */}
        {/* LAYER 3: MAIN BODY SHELL (McLaren Sculpted Form)               */}
        {/* =============================================================== */}
        <g id="main-body-shell">
          {/* Base sculptured McLaren 720S body */}
          <path
            d="
              M 936 250
              C 932 222, 915 198, 875 175
              C 825 146, 755 142, 665 146
              C 585 150, 520 156, 435 150
              C 335 144, 235 118, 140 128
              C 108 132, 75 160, 68 205
              C 64 225, 64 275, 68 295
              C 75 340, 108 368, 140 372
              C 235 382, 335 356, 435 350
              C 520 344, 585 350, 665 354
              C 755 358, 825 354, 875 325
              C 915 302, 932 278, 936 250 Z
            "
            fill="url(#bodyPaintGrad)"
            stroke={config.accentStroke}
            strokeWidth="1.4"
          />

          {/* Longitudinal lighting gradient for 3D body curvature */}
          <path
            d="
              M 936 250
              C 932 222, 915 198, 875 175
              C 825 146, 755 142, 665 146
              C 585 150, 520 156, 435 150
              C 335 144, 235 118, 140 128
              C 108 132, 75 160, 68 205
              C 64 225, 64 275, 68 295
              C 75 340, 108 368, 140 372
              C 235 382, 335 356, 435 350
              C 520 344, 585 350, 665 354
              C 755 358, 825 354, 875 325
              C 915 302, 932 278, 936 250 Z
            "
            fill="url(#bodyLongitudinalGrad)"
            pointerEvents="none"
          />

          {/* Rear Haunches Muscle Shading (Top & Bottom curves) */}
          <path
            d="
              M 350 144
              C 255 125, 175 126, 125 138
              C 105 144, 85 165, 82 188
              C 95 175, 130 162, 175 160
              C 235 158, 305 165, 350 144 Z
            "
            fill={config.bodyShadow}
            opacity="0.65"
          />
          <path
            d="
              M 350 356
              C 255 375, 175 374, 125 362
              C 105 356, 85 335, 82 312
              C 95 325, 130 338, 175 340
              C 235 342, 305 335, 350 356 Z
            "
            fill={config.bodyShadow}
            opacity="0.65"
          />

          {/* Muscular Shoulder Highlight Ridges */}
          <path
            d="M 680 152 C 580 158, 480 160, 380 152"
            fill="none"
            stroke={config.bodyHighlight}
            strokeWidth="2"
            opacity="0.8"
          />
          <path
            d="M 680 348 C 580 342, 480 340, 380 348"
            fill="none"
            stroke={config.bodyHighlight}
            strokeWidth="2"
            opacity="0.8"
          />
        </g>

        {/* =============================================================== */}
        {/* LAYER 4: FRONT HOOD DETAILED LINES & NOSTRIL AIR VENTS         */}
        {/* =============================================================== */}
        <g id="part-hood-nostril-vents">
          {/* Front Bumper Nose Seam Curve */}
          {config.showPanelLines && (
            <path
              d="
                M 885 190
                C 908 215, 922 235, 926 250
                C 922 265, 908 285, 885 310
              "
              fill="none"
              stroke={config.accentStroke}
              strokeWidth="1.2"
            />
          )}

          {/* Front McLaren Silver Nose Emblem Badge */}
          <ellipse cx="918" cy="250" rx="3.5" ry="1.5" fill="#f8fafc" opacity="0.9" />
          <path
            d="M 915 250 C 917 248, 920 248, 921 250"
            fill="none"
            stroke="#c2410c"
            strokeWidth="0.8"
          />

          {/* Hood Contour Grooves flowing from A-pillars */}
          {config.showPanelLines && (
            <>
              <path
                d="M 750 195 C 790 215, 840 230, 895 242"
                fill="none"
                stroke={config.accentStroke}
                strokeWidth="1.0"
                opacity="0.75"
              />
              <path
                d="M 750 305 C 790 285, 840 270, 895 258"
                fill="none"
                stroke={config.accentStroke}
                strokeWidth="1.0"
                opacity="0.75"
              />
            </>
          )}

          {/* UPPER BOOMERANG HOOD EXTRACTOR (Dark Sickle Duct) */}
          <g
            cursor="pointer"
            onClick={() => onPartClick?.('hood-nostril-vents')}
            onMouseEnter={() => onPartHover?.('hood-nostril-vents')}
            onMouseLeave={() => onPartHover?.(null)}
          >
            {/* Deep black recess */}
            <path
              d="
                M 796 222
                C 824 236, 856 244, 886 248
                C 870 244, 848 234, 830 220
                C 816 210, 804 204, 796 222 Z
              "
              fill="#121316"
              stroke={isPartActive('hood-nostril-vents') ? '#38bdf8' : '#0a0a0c'}
              strokeWidth={isPartActive('hood-nostril-vents') ? 1.8 : 0.8}
              filter={isPartActive('hood-nostril-vents') ? 'url(#partGlow)' : undefined}
            />
            {/* Inside orange accent styling line matching reference image */}
            <path
              d="M 808 221 C 830 232, 854 240, 878 244"
              fill="none"
              stroke={config.bodyHighlight}
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </g>

          {/* LOWER BOOMERANG HOOD EXTRACTOR (Dark Sickle Duct) */}
          <g
            cursor="pointer"
            onClick={() => onPartClick?.('hood-nostril-vents')}
            onMouseEnter={() => onPartHover?.('hood-nostril-vents')}
            onMouseLeave={() => onPartHover?.(null)}
          >
            {/* Deep black recess */}
            <path
              d="
                M 796 278
                C 824 264, 856 256, 886 252
                C 870 256, 848 266, 830 280
                C 816 290, 804 296, 796 278 Z
              "
              fill="#121316"
              stroke={isPartActive('hood-nostril-vents') ? '#38bdf8' : '#0a0a0c'}
              strokeWidth={isPartActive('hood-nostril-vents') ? 1.8 : 0.8}
              filter={isPartActive('hood-nostril-vents') ? 'url(#partGlow)' : undefined}
            />
            {/* Inside orange accent styling line matching reference image */}
            <path
              d="M 808 279 C 830 268, 854 260, 878 256"
              fill="none"
              stroke={config.bodyHighlight}
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </g>
        </g>

        {/* =============================================================== */}
        {/* LAYER 5: EYE-SOCKET HEADLIGHTS & FRONT AERO DUCTS              */}
        {/* =============================================================== */}
        <g
          id="part-eye-socket-headlights"
          cursor="pointer"
          onClick={() => onPartClick?.('eye-socket-headlights')}
          onMouseEnter={() => onPartHover?.('eye-socket-headlights')}
          onMouseLeave={() => onPartHover?.(null)}
        >
          {/* UPPER EYE SOCKET */}
          <g>
            {/* Deep socket cavity */}
            <path
              d="
                M 854 186
                C 872 176, 898 184, 912 216
                C 902 214, 886 206, 868 198
                C 858 194, 852 190, 854 186 Z
              "
              fill="#101215"
              stroke={isPartActive('eye-socket-headlights') ? '#38bdf8' : '#1c1f24'}
              strokeWidth={isPartActive('eye-socket-headlights') ? 2 : 1}
              filter={isPartActive('eye-socket-headlights') ? 'url(#partGlow)' : undefined}
            />
            {/* LED Headlight Curved Blade Strip */}
            <path
              d="M 865 192 C 882 198, 898 206, 908 214"
              fill="none"
              stroke={config.headlightsOn ? '#ffffff' : '#94a3b8'}
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            {/* Headlight inner accent */}
            <circle cx="895" cy="205" r="2.2" fill={config.headlightsOn ? '#bae6fd' : '#475569'} />
          </g>

          {/* LOWER EYE SOCKET */}
          <g>
            {/* Deep socket cavity */}
            <path
              d="
                M 854 314
                C 872 324, 898 316, 912 284
                C 902 286, 886 294, 868 302
                C 858 306, 852 310, 854 314 Z
              "
              fill="#101215"
              stroke={isPartActive('eye-socket-headlights') ? '#38bdf8' : '#1c1f24'}
              strokeWidth={isPartActive('eye-socket-headlights') ? 2 : 1}
              filter={isPartActive('eye-socket-headlights') ? 'url(#partGlow)' : undefined}
            />
            {/* LED Headlight Curved Blade Strip */}
            <path
              d="M 865 308 C 882 302, 898 294, 908 286"
              fill="none"
              stroke={config.headlightsOn ? '#ffffff' : '#94a3b8'}
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            {/* Headlight inner accent */}
            <circle cx="895" cy="295" r="2.2" fill={config.headlightsOn ? '#bae6fd' : '#475569'} />
          </g>
        </g>

        {/* =============================================================== */}
        {/* LAYER 6: DOUBLE-SKIN DIHEDRAL DOORS & AERO DUCTS               */}
        {/* =============================================================== */}
        <g
          id="part-double-skin-doors"
          cursor="pointer"
          onClick={() => onPartClick?.('double-skin-doors')}
          onMouseEnter={() => onPartHover?.('double-skin-doors')}
          onMouseLeave={() => onPartHover?.(null)}
        >
          {/* UPPER DOUBLE SKIN DUCT (Signature McLaren door channel) */}
          <path
            d="
              M 645 158
              C 560 162, 480 165, 410 160
              C 365 156, 320 150, 280 144
              C 335 152, 400 160, 465 160
              C 540 160, 600 156, 645 158 Z
            "
            fill="#121316"
            stroke={isPartActive('double-skin-doors') ? '#38bdf8' : '#1a1c20'}
            strokeWidth={isPartActive('double-skin-doors') ? 2 : 0.8}
            filter={isPartActive('double-skin-doors') ? 'url(#partGlow)' : undefined}
          />
          {/* Door crease / orange boundary ridge */}
          <path
            d="M 645 158 C 555 163, 465 162, 395 158"
            fill="none"
            stroke={config.bodyHighlight}
            strokeWidth="1.1"
          />

          {/* LOWER DOUBLE SKIN DUCT (Signature McLaren door channel) */}
          <path
            d="
              M 645 342
              C 560 338, 480 335, 410 340
              C 365 344, 320 350, 280 356
              C 335 348, 400 340, 465 340
              C 540 340, 600 344, 645 342 Z
            "
            fill="#121316"
            stroke={isPartActive('double-skin-doors') ? '#38bdf8' : '#1a1c20'}
            strokeWidth={isPartActive('double-skin-doors') ? 2 : 0.8}
            filter={isPartActive('double-skin-doors') ? 'url(#partGlow)' : undefined}
          />
          {/* Door crease / orange boundary ridge */}
          <path
            d="M 645 342 C 555 337, 465 338, 395 342"
            fill="none"
            stroke={config.bodyHighlight}
            strokeWidth="1.1"
          />

          {/* Vertical Door Cutline Seam (from B-pillar down to rocker) */}
          {config.showPanelLines && (
            <>
              <path
                d="M 405 160 C 402 145, 400 135, 398 128"
                fill="none"
                stroke={config.accentStroke}
                strokeWidth="1.2"
              />
              <path
                d="M 405 340 C 402 355, 400 365, 398 372"
                fill="none"
                stroke={config.accentStroke}
                strokeWidth="1.2"
              />
            </>
          )}
        </g>

        {/* =============================================================== */}
        {/* LAYER 7: CABIN GREENHOUSE (MONOCAGE II, WINDSHIELD & CANOPY)   */}
        {/* =============================================================== */}
        <g id="greenhouse-assembly">
          {/* Monocage II Dark Structural Frame */}
          <path
            d="
              M 748 190
              C 768 220, 774 250, 768 280
              L 748 310
              C 715 320, 660 324, 580 322
              C 480 318, 380 306, 280 292
              C 240 286, 210 278, 190 270
              L 190 230
              C 210 222, 240 214, 280 208
              C 380 194, 480 182, 580 178
              C 660 176, 715 180, 748 190 Z
            "
            fill={carbonBaseFill}
            stroke="#111316"
            strokeWidth="1.6"
          />

          {/* Interior cockpit preview silhouette (visible through glass) */}
          <g id="interior-cockpit-silhouette" opacity="0.6">
            {/* Dashboard top surface & binnacle */}
            <path
              d="M 720 206 C 732 230, 734 250, 732 270 L 720 294 C 685 292, 650 288, 620 285 L 620 215 C 650 212, 685 208, 720 206 Z"
              fill="#181a1f"
            />
            {/* Steering wheel top arc */}
            <path
              d="M 685 238 C 692 242, 692 258, 685 262"
              fill="none"
              stroke="#2d3139"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            {/* Sport Bucket Seats (Driver & Passenger) */}
            <path
              d="M 520 215 C 500 215, 490 225, 490 240 C 490 242, 505 244, 520 244 Z"
              fill="#15171b"
            />
            <path
              d="M 520 285 C 500 285, 490 275, 490 260 C 490 258, 505 256, 520 256 Z"
              fill="#15171b"
            />
            {/* Center Console Spine */}
            <rect x="520" y="247" width="90" height="6" fill="#24272e" rx="2" />
          </g>

          {/* PANORAMIC WINDSHIELD GLASS */}
          <g
            id="part-monocage-windshield"
            cursor="pointer"
            onClick={() => onPartClick?.('monocage-windshield')}
            onMouseEnter={() => onPartHover?.('monocage-windshield')}
            onMouseLeave={() => onPartHover?.(null)}
          >
            {/* Glass Fill */}
            <path
              d="
                M 745 192
                C 765 220, 770 250, 765 280
                L 745 308
                C 705 316, 650 318, 580 314
                L 580 186
                C 650 182, 705 184, 745 192 Z
              "
              fill="url(#windshieldGlassGrad)"
              stroke={isPartActive('monocage-windshield') ? '#38bdf8' : '#22262d'}
              strokeWidth={isPartActive('monocage-windshield') ? 2 : 1}
              filter={isPartActive('monocage-windshield') ? 'url(#partGlow)' : undefined}
            />

            {/* Windshield Reflection Sweep 1 (Matching reference image diagonal curved reflection) */}
            <path
              d="
                M 750 195
                C 762 225, 764 245, 755 270
                L 720 288
                C 690 250, 660 220, 600 200
                L 615 185
                C 670 190, 715 192, 750 195 Z
              "
              fill="url(#windshieldSweep1)"
              pointerEvents="none"
            />

            {/* Windshield Reflection Sweep 2 */}
            <path
              d="
                M 740 240
                C 745 260, 740 280, 730 295
                L 695 306
                C 660 285, 630 265, 595 250
                L 600 238
                C 645 250, 690 255, 740 240 Z
              "
              fill="url(#windshieldSweep2)"
              pointerEvents="none"
            />

            {/* SINGLE WINDSHIELD WIPER (Detailed articulated arm & blade from reference image) */}
            <g id="windshield-wiper" pointerEvents="none">
              {/* Wiper base pivot assembly */}
              <circle cx="742" cy="266" r="3.5" fill="#0d0e11" stroke="#33373f" strokeWidth="0.8" />
              {/* Wiper primary articulated arm */}
              <path
                d="M 742 266 L 734 250"
                stroke="#17191d"
                strokeWidth="2.8"
                strokeLinecap="round"
              />
              {/* Articulated joint */}
              <circle cx="734" cy="250" r="1.8" fill="#3a3f4a" />
              {/* Wiper blade channel */}
              <path
                d="M 746 274 L 712 196"
                stroke="#090a0c"
                strokeWidth="2.6"
                strokeLinecap="round"
              />
              {/* Specular highlight along blade edge */}
              <path
                d="M 745 272 L 713 198"
                stroke="#64748b"
                strokeWidth="0.9"
                strokeLinecap="round"
              />
            </g>
          </g>

          {/* ROOF CANOPY & GLAZED ROOF PANELS */}
          <g
            id="part-glazed-roof-panels"
            cursor="pointer"
            onClick={() => onPartClick?.('glazed-roof-panels')}
            onMouseEnter={() => onPartHover?.('glazed-roof-panels')}
            onMouseLeave={() => onPartHover?.(null)}
          >
            {/* Structural Carbon Center Spine */}
            <path
              d="
                M 580 245
                L 380 246
                L 380 254
                L 580 255 Z
              "
              fill="#191b1f"
              stroke="#0f1013"
              strokeWidth="0.8"
            />

            {/* UPPER GLAZED ROOF PANEL */}
            <path
              d="
                M 578 186
                L 392 196
                C 390 220, 390 238, 392 245
                L 578 244
                C 576 220, 576 205, 578 186 Z
              "
              fill="url(#roofGlassGrad)"
              stroke={isPartActive('glazed-roof-panels') ? '#38bdf8' : '#1c1f24'}
              strokeWidth={isPartActive('glazed-roof-panels') ? 1.8 : 0.8}
              filter={isPartActive('glazed-roof-panels') ? 'url(#partGlow)' : undefined}
            />

            {/* LOWER GLAZED ROOF PANEL */}
            <path
              d="
                M 578 314
                L 392 304
                C 390 280, 390 262, 392 255
                L 578 256
                C 576 280, 576 295, 578 314 Z
              "
              fill="url(#roofGlassGrad)"
              stroke={isPartActive('glazed-roof-panels') ? '#38bdf8' : '#1c1f24'}
              strokeWidth={isPartActive('glazed-roof-panels') ? 1.8 : 0.8}
              filter={isPartActive('glazed-roof-panels') ? 'url(#partGlow)' : undefined}
            />

            {/* Subtle gloss reflection sheen on roof glass */}
            <path
              d="M 560 190 L 410 198 L 440 244 L 540 244 Z"
              fill="#ffffff"
              opacity="0.08"
              pointerEvents="none"
            />
            <path
              d="M 560 310 L 410 302 L 440 256 L 540 256 Z"
              fill="#ffffff"
              opacity="0.08"
              pointerEvents="none"
            />
          </g>
        </g>

        {/* =============================================================== */}
        {/* LAYER 8: REAR QUARTER FLYING BUTTRESSES & PASS-THROUGHS        */}
        {/* =============================================================== */}
        <g
          id="part-flying-buttresses"
          cursor="pointer"
          onClick={() => onPartClick?.('flying-buttresses')}
          onMouseEnter={() => onPartHover?.('flying-buttresses')}
          onMouseLeave={() => onPartHover?.(null)}
        >
          {/* UPPER FLYING BUTTRESS (Glazed window & aero channel) */}
          <path
            d="
              M 388 196
              C 330 205, 270 215, 210 225
              C 230 208, 270 188, 330 175
              C 365 180, 380 188, 388 196 Z
            "
            fill="#1e2126"
            stroke={isPartActive('flying-buttresses') ? '#38bdf8' : '#15171a'}
            strokeWidth={isPartActive('flying-buttresses') ? 1.8 : 0.8}
            filter={isPartActive('flying-buttresses') ? 'url(#partGlow)' : undefined}
          />
          {/* Orange Outer Buttress Pillar Arch */}
          <path
            d="
              M 388 180
              C 330 172, 260 180, 195 210
              C 220 200, 275 190, 345 185
              L 388 180 Z
            "
            fill={config.bodyColor}
            stroke={config.accentStroke}
            strokeWidth="0.8"
          />

          {/* LOWER FLYING BUTTRESS (Glazed window & aero channel) */}
          <path
            d="
              M 388 304
              C 330 295, 270 285, 210 275
              C 230 292, 270 312, 330 325
              C 365 320, 380 312, 388 304 Z
            "
            fill="#1e2126"
            stroke={isPartActive('flying-buttresses') ? '#38bdf8' : '#15171a'}
            strokeWidth={isPartActive('flying-buttresses') ? 1.8 : 0.8}
            filter={isPartActive('flying-buttresses') ? 'url(#partGlow)' : undefined}
          />
          {/* Orange Outer Buttress Pillar Arch */}
          <path
            d="
              M 388 320
              C 330 328, 260 320, 195 290
              C 220 300, 275 310, 345 315
              L 388 320 Z
            "
            fill={config.bodyColor}
            stroke={config.accentStroke}
            strokeWidth="0.8"
          />

          {/* REAR FENDER AIR EXTRACTOR BLADES (Black slits above rear wheels) */}
          {/* Upper fender vent blade */}
          <path
            d="M 280 152 C 240 162, 200 175, 170 190 L 175 184 C 205 170, 245 158, 285 148 Z"
            fill="#121316"
            stroke="#0a0a0c"
            strokeWidth="0.6"
          />
          {/* Lower fender vent blade */}
          <path
            d="M 280 348 C 240 338, 200 325, 170 310 L 175 316 C 205 330, 245 342, 285 352 Z"
            fill="#121316"
            stroke="#0a0a0c"
            strokeWidth="0.6"
          />
        </g>

        {/* =============================================================== */}
        {/* LAYER 9: 6-TIER LOUVERED ENGINE COVER & M840T POWERTRAIN DECK  */}
        {/* =============================================================== */}
        <g
          id="part-louvered-engine-cover"
          cursor="pointer"
          onClick={() => onPartClick?.('louvered-engine-cover')}
          onMouseEnter={() => onPartHover?.('louvered-engine-cover')}
          onMouseLeave={() => onPartHover?.(null)}
        >
          {/* Central Inverted Teardrop / Shield Engine Deck Carbon Surround */}
          <path
            d="
              M 380 220
              C 360 214, 300 216, 220 224
              C 190 228, 172 238, 168 250
              C 172 262, 190 272, 220 276
              C 300 284, 360 286, 380 280
              C 390 272, 390 228, 380 220 Z
            "
            fill="#202227"
            stroke={isPartActive('louvered-engine-cover') ? '#38bdf8' : '#141619'}
            strokeWidth={isPartActive('louvered-engine-cover') ? 2 : 1}
            filter={isPartActive('louvered-engine-cover') ? 'url(#partGlow)' : undefined}
          />

          {/* Inner Shield Cavity */}
          <path
            d="
              M 370 225
              C 350 220, 290 222, 224 229
              C 198 232, 180 240, 175 250
              C 180 260, 198 268, 224 271
              C 290 278, 350 280, 370 275
              C 378 268, 378 232, 370 225 Z
            "
            fill="#121316"
          />

          {/* Central Structural Spine dividing the louvers */}
          <line
            x1="375"
            y1="250"
            x2="175"
            y2="250"
            stroke="#2d3138"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* THE 6 DISTINCT TIERED ENGINE VENTILATION LOUVERS (Front to Back) */}
          {/* Louver 1 (Frontmost / Widest) */}
          <g>
            <path
              d="M 355 228 L 348 247 L 345 247 L 352 228 Z"
              fill="#08090a"
            />
            <line x1="355" y1="228" x2="348" y2="247" stroke="#4a505b" strokeWidth="1.2" />
            <path
              d="M 355 272 L 348 253 L 345 253 L 352 272 Z"
              fill="#08090a"
            />
            <line x1="355" y1="272" x2="348" y2="253" stroke="#4a505b" strokeWidth="1.2" />
          </g>

          {/* Louver 2 */}
          <g>
            <path
              d="M 325 229 L 318 247 L 315 247 L 322 229 Z"
              fill="#08090a"
            />
            <line x1="325" y1="229" x2="318" y2="247" stroke="#4a505b" strokeWidth="1.2" />
            <path
              d="M 325 271 L 318 253 L 315 253 L 322 271 Z"
              fill="#08090a"
            />
            <line x1="325" y1="271" x2="318" y2="253" stroke="#4a505b" strokeWidth="1.2" />
          </g>

          {/* Louver 3 */}
          <g>
            <path
              d="M 295 231 L 288 247 L 285 247 L 292 231 Z"
              fill="#08090a"
            />
            <line x1="295" y1="231" x2="288" y2="247" stroke="#4a505b" strokeWidth="1.2" />
            <path
              d="M 295 269 L 288 253 L 285 253 L 292 269 Z"
              fill="#08090a"
            />
            <line x1="295" y1="269" x2="288" y2="253" stroke="#4a505b" strokeWidth="1.2" />
          </g>

          {/* Louver 4 */}
          <g>
            <path
              d="M 265 233 L 258 247 L 255 247 L 262 233 Z"
              fill="#08090a"
            />
            <line x1="265" y1="233" x2="258" y2="247" stroke="#4a505b" strokeWidth="1.2" />
            <path
              d="M 265 267 L 258 253 L 255 253 L 262 267 Z"
              fill="#08090a"
            />
            <line x1="265" y1="267" x2="258" y2="253" stroke="#4a505b" strokeWidth="1.2" />
          </g>

          {/* Louver 5 */}
          <g>
            <path
              d="M 235 236 L 228 247 L 225 247 L 232 236 Z"
              fill="#08090a"
            />
            <line x1="235" y1="236" x2="228" y2="247" stroke="#4a505b" strokeWidth="1.2" />
            <path
              d="M 235 264 L 228 253 L 225 253 L 232 264 Z"
              fill="#08090a"
            />
            <line x1="235" y1="264" x2="228" y2="253" stroke="#4a505b" strokeWidth="1.2" />
          </g>

          {/* Louver 6 (Rearmost / Smallest) */}
          <g>
            <path
              d="M 205 240 L 198 247 L 196 247 L 202 240 Z"
              fill="#08090a"
            />
            <line x1="205" y1="240" x2="198" y2="247" stroke="#4a505b" strokeWidth="1.2" />
            <path
              d="M 205 260 L 198 253 L 196 253 L 202 260 Z"
              fill="#08090a"
            />
            <line x1="205" y1="260" x2="198" y2="253" stroke="#4a505b" strokeWidth="1.2" />
          </g>

          {/* High-Mounted Dual Exhaust Outlets (between rear deck and wing) */}
          <g id="part-exhaust-diffuser">
            <ellipse
              cx="135"
              cy="242"
              rx="6"
              ry="4"
              fill="#0d0e11"
              stroke="#64748b"
              strokeWidth="1.2"
            />
            <ellipse
              cx="135"
              cy="258"
              rx="6"
              ry="4"
              fill="#0d0e11"
              stroke="#64748b"
              strokeWidth="1.2"
            />
          </g>
        </g>

        {/* =============================================================== */}
        {/* LAYER 10: SIDE WING MIRRORS (Aero Pods on Stalks)              */}
        {/* =============================================================== */}
        <g
          id="part-wing-mirrors"
          cursor="pointer"
          onClick={() => onPartClick?.('wing-mirrors')}
          onMouseEnter={() => onPartHover?.('wing-mirrors')}
          onMouseLeave={() => onPartHover?.(null)}
        >
          {/* UPPER WING MIRROR */}
          <g>
            {/* Mirror Stalk */}
            <path
              d="M 606 172 L 616 122 L 624 124 L 612 173 Z"
              fill="#181a1d"
              stroke="#0f1012"
              strokeWidth="0.8"
            />
            {/* Mirror Housing (Two-Tone Body Color / Carbon) */}
            <path
              d="
                M 602 122
                C 605 106, 622 104, 638 108
                C 650 112, 654 122, 646 128
                C 630 134, 610 134, 602 122 Z
              "
              fill={config.bodyColor}
              stroke={isPartActive('wing-mirrors') ? '#38bdf8' : config.accentStroke}
              strokeWidth={isPartActive('wing-mirrors') ? 2 : 1}
              filter={isPartActive('wing-mirrors') ? 'url(#partGlow)' : undefined}
            />
            {/* Upper mirror highlight ridge */}
            <path
              d="M 608 114 C 620 108, 634 110, 644 114"
              fill="none"
              stroke={config.bodyHighlight}
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            {/* Lower carbon bottom edge & glass face */}
            <path
              d="M 610 126 C 625 130, 638 128, 644 124"
              fill="none"
              stroke="#1a1c20"
              strokeWidth="2.2"
            />
          </g>

          {/* LOWER WING MIRROR (Symmetrical) */}
          <g>
            {/* Mirror Stalk */}
            <path
              d="M 606 328 L 616 378 L 624 376 L 612 327 Z"
              fill="#181a1d"
              stroke="#0f1012"
              strokeWidth="0.8"
            />
            {/* Mirror Housing (Two-Tone Body Color / Carbon) */}
            <path
              d="
                M 602 378
                C 605 394, 622 396, 638 392
                C 650 388, 654 378, 646 372
                C 630 366, 610 366, 602 378 Z
              "
              fill={config.bodyColor}
              stroke={isPartActive('wing-mirrors') ? '#38bdf8' : config.accentStroke}
              strokeWidth={isPartActive('wing-mirrors') ? 2 : 1}
              filter={isPartActive('wing-mirrors') ? 'url(#partGlow)' : undefined}
            />
            {/* Lower mirror highlight ridge */}
            <path
              d="M 608 386 C 620 392, 634 390, 644 386"
              fill="none"
              stroke={config.bodyHighlight}
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            {/* Upper carbon edge & glass face */}
            <path
              d="M 610 374 C 625 370, 638 372, 644 376"
              fill="none"
              stroke="#1a1c20"
              strokeWidth="2.2"
            />
          </g>
        </g>

        {/* =============================================================== */}
        {/* LAYER 11: ACTIVE CARBON REAR WING & AIRBRAKE                   */}
        {/* =============================================================== */}
        <g
          id="part-active-rear-wing"
          cursor="pointer"
          onClick={() => onPartClick?.('active-rear-wing')}
          onMouseEnter={() => onPartHover?.('active-rear-wing')}
          onMouseLeave={() => onPartHover?.(null)}
          className="transition-transform duration-300"
          style={{ transform: wingTransform, transformOrigin: '100px 250px' }}
        >
          {/* Hydraulic Actuator Struts / Stanchions */}
          <rect x="110" y="210" width="16" height="4" fill="#64748b" rx="1" />
          <rect x="110" y="286" width="16" height="4" fill="#64748b" rx="1" />

          {/* Airbrake Shadow (when tilted upward) */}
          {config.wingMode === 'airbrake' && (
            <path
              d="
                M 130 135
                C 95 180, 75 220, 75 250
                C 75 280, 95 320, 130 365
                L 155 350
                C 115 310, 95 270, 95 250
                C 95 230, 115 190, 155 150 Z
              "
              fill="#000000"
              opacity="0.6"
            />
          )}

          {/* Full-width curved dark active carbon rear wing */}
          <path
            d="
              M 126 136
              C 90 180, 68 220, 68 250
              C 68 280, 90 320, 126 364
              C 105 372, 70 338, 56 250
              C 70 162, 105 128, 126 136 Z
            "
            fill={carbonFill}
            stroke={isPartActive('active-rear-wing') ? '#38bdf8' : '#111316'}
            strokeWidth={isPartActive('active-rear-wing') ? 2.5 : 1.2}
            filter={isPartActive('active-rear-wing') ? 'url(#partGlow)' : undefined}
          />

          {/* Specular Rim Light along the trailing edge */}
          <path
            d="
              M 124 138
              C 104 146, 72 178, 58 250
              C 72 322, 104 354, 124 362
            "
            fill="none"
            stroke="#525b68"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          {/* Integrated High-Mounted Third Brake Light Strip */}
          <path
            d="M 66 235 L 66 265"
            stroke={config.brakeLightsOn || config.wingMode === 'airbrake' ? '#ef4444' : '#7f1d1d'}
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </g>

        {/* =============================================================== */}
        {/* LAYER 12: AERODYNAMIC STREAMLINE PARTICLES (WIND TUNNEL)       */}
        {/* =============================================================== */}
        {showAeroParticles && (
          <g id="aero-wind-tunnel-particles" pointerEvents="none" className="animate-pulse">
            {/* Stream 1: Over nose and windshield */}
            <path
              d="M 990 250 C 930 250, 770 250, 600 250 C 420 250, 200 250, 20 250"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2"
              strokeDasharray="16, 12"
              opacity="0.85"
            />
            {/* Stream 2: Upper hood nostril duct */}
            <path
              d="M 980 210 C 920 210, 850 220, 810 225 C 740 210, 600 200, 400 190 C 250 180, 100 170, 20 180"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="1.8"
              strokeDasharray="20, 10"
              opacity="0.8"
            />
            {/* Stream 3: Lower hood nostril duct */}
            <path
              d="M 980 290 C 920 290, 850 280, 810 275 C 740 290, 600 300, 400 310 C 250 320, 100 330, 20 320"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="1.8"
              strokeDasharray="20, 10"
              opacity="0.8"
            />
            {/* Stream 4: Eye-socket through wheel-arch vortex */}
            <path
              d="M 960 170 C 890 170, 780 150, 650 148 C 500 146, 300 135, 100 130 C 50 130, 20 140, 10 145"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="2.2"
              strokeDasharray="24, 14"
              opacity="0.75"
            />
            {/* Stream 5: Lower eye-socket through wheel-arch vortex */}
            <path
              d="M 960 330 C 890 330, 780 350, 650 352 C 500 354, 300 365, 100 370 C 50 370, 20 360, 10 355"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="2.2"
              strokeDasharray="24, 14"
              opacity="0.75"
            />
            {/* Stream 6: Over the active rear wing downforce compression */}
            <path
              d="M 280 230 C 220 230, 140 215, 60 215 C 30 215, 10 225, 0 230"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2.5"
              strokeDasharray="14, 8"
              opacity="0.9"
            />
            <path
              d="M 280 270 C 220 270, 140 285, 60 285 C 30 285, 10 275, 0 270"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2.5"
              strokeDasharray="14, 8"
              opacity="0.9"
            />
          </g>
        )}

        {/* =============================================================== */}
        {/* LAYER 13: BLUEPRINT DIMENSIONS & CAD OVERLAY                   */}
        {/* =============================================================== */}
        {config.showDimensions && (
          <g id="cad-dimensions" pointerEvents="none" className="text-xs">
            {/* Overall Length Dimension (4,543 mm) */}
            <line x1="68" y1="90" x2="936" y2="90" stroke="#0284c7" strokeWidth="1" strokeDasharray="4, 4" />
            <line x1="68" y1="80" x2="68" y2="100" stroke="#0284c7" strokeWidth="1.5" />
            <line x1="936" y1="80" x2="936" y2="100" stroke="#0284c7" strokeWidth="1.5" />
            <text x="502" y="82" fill="#38bdf8" fontSize="11" fontFamily="JetBrains Mono" textAnchor="middle">
              4,543 mm (OVERALL LENGTH)
            </text>

            {/* Rear Haunches Width (1,930 mm body / 2,161 mm mirrors) */}
            <line x1="140" y1="128" x2="140" y2="372" stroke="#0284c7" strokeWidth="1" strokeDasharray="4, 4" />
            <line x1="130" y1="128" x2="150" y2="128" stroke="#0284c7" strokeWidth="1.5" />
            <line x1="130" y1="372" x2="150" y2="372" stroke="#0284c7" strokeWidth="1.5" />
            <text x="145" y="254" fill="#38bdf8" fontSize="10" fontFamily="JetBrains Mono" transform="rotate(-90 145 254)">
              1,930 mm
            </text>

            {/* Wheelbase Dimension (2,670 mm) */}
            <line x1="240" y1="410" x2="780" y2="410" stroke="#0284c7" strokeWidth="1" strokeDasharray="4, 4" />
            <line x1="240" y1="400" x2="240" y2="420" stroke="#0284c7" strokeWidth="1.5" />
            <line x1="780" y1="400" x2="780" y2="420" stroke="#0284c7" strokeWidth="1.5" />
            <text x="510" y="425" fill="#38bdf8" fontSize="11" fontFamily="JetBrains Mono" textAnchor="middle">
              2,670 mm (WHEELBASE)
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};
