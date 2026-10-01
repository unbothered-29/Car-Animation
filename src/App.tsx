/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#121212] flex items-center justify-center p-0 m-0 overflow-hidden select-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 327"
        className="w-full h-auto max-w-[1280px] shadow-2xl block"
        style={{ width: '100%', height: 'auto' }}
      >
        <defs>
          {/* Symmetrical Top Half of the Car (Mirrored across y = 163.5) */}
          <g id="car-half">
            {/* 1. ORANGE REAR BUMPER - EXTENDS OUTSIDE AND BEHIND WING TIP */}
            <path
              d="
                M 34 163.5
                C 34 132, 48 92, 75 57
                C 85 44, 102 31, 120 27
                L 145 27
                L 145 39
                C 125 39, 105 49, 88 67
                C 70 87, 56 117, 50 163.5
                Z
              "
              fill="#f58220"
              stroke="#c4601a"
              strokeWidth="0.8"
            />

            {/* 2. SCULPTED MAIN BODY SHELL (REAR TO WINDSHIELD) */}
            <path
              d="
                M 44 163.5
                C 44 140, 52 110, 68 82
                C 85 54, 112 32, 148 29
                C 182 27, 218 32, 248 37
                C 285 41, 325 42, 365 41
                C 405 39, 435 36, 465 35
                C 498 34, 530 40, 558 54
                C 586 70, 612 102, 630 134
                C 634 146, 635 156, 635 163.5
                Z
              "
              fill="#f58220"
            />

            {/* 3. REAR HAUNCH FACETED PANELS & SHADOWS */}
            <path
              d="
                M 42 150
                L 70 120
                L 96 125
                L 78 138
                L 44 153
                Z
              "
              fill="#f58220"
              stroke="#c4601a"
              strokeWidth="0.7"
            />
            <path
              d="
                M 70 120
                L 115 88
                L 140 82
                L 118 108
                L 96 125
                Z
              "
              fill="#e8741a"
              opacity="0.9"
            />
            <path
              d="
                M 60 118
                C 74 85, 96 52, 130 36
                C 155 29, 185 30, 215 34
                L 210 43
                C 182 39, 155 39, 132 48
                C 104 62, 78 92, 66 122
                Z
              "
              fill="#e8741a"
            />
            <path d="M 42 150 L 70 120 L 115 88 L 168 80" fill="none" stroke="#c4601a" strokeWidth="0.8" />
            <path d="M 165 32 C 160 52, 154 78, 146 102" fill="none" stroke="#c4601a" strokeWidth="0.5" strokeOpacity="0.3" />
            <path d="M 378 40 C 374 62, 368 88, 362 110" fill="none" stroke="#c4601a" strokeWidth="0.5" strokeOpacity="0.3" />

            {/* 4. REAR FLANK INTAKES */}
            <g id="rear-intakes-top">
              <path
                d="
                  M 58 108
                  C 72 78, 98 56, 134 46
                  C 142 44, 146 47, 140 50
                  C 118 60, 92 82, 72 106
                  C 64 116, 58 118, 58 108
                  Z
                "
                fill="#202225"
                stroke="#121315"
                strokeWidth="0.7"
              />
              <path
                d="M 134 46 C 112 55, 88 76, 70 102"
                fill="none"
                stroke="#55585d"
                strokeWidth="0.9"
                strokeLinecap="round"
              />
              <path
                d="
                  M 74 135
                  L 98 112
                  L 138 96
                  L 145 99
                  L 102 117
                  L 80 141
                  Z
                "
                fill="#181a1d"
                stroke="#101113"
                strokeWidth="0.6"
              />
              <path d="M 98 112 L 138 96" fill="none" stroke="#45484e" strokeWidth="0.8" />
              <path
                d="
                  M 152 100
                  C 180 96, 215 93, 248 91
                  C 232 96, 196 100, 160 103
                  Z
                "
                fill="#1c1c1c"
              />
              <path
                d="
                  M 258 91
                  C 272 90, 288 89, 302 89
                  C 292 92, 276 93, 262 93
                  Z
                "
                fill="#1c1c1c"
              />
            </g>

            {/* 5. SIDE MIRROR - ANGULAR WING SHAPE AT A-PILLAR EDGE */}
            <g id="mirror-top">
              <path
                d="
                  M 422 39
                  C 422 34, 418 29, 412 26
                  C 405 23, 396 23, 390 25
                  C 392 29, 400 34, 408 37
                  C 414 39, 418 40, 422 39
                  Z
                "
                fill="#2b2b2b"
                stroke="#1c1c1c"
                strokeWidth="0.6"
              />
              <path
                d="M 390 25 C 396 28, 405 34, 414 38 C 418 39, 421 39, 422 39"
                fill="none"
                stroke="#f58220"
                strokeWidth="0.8"
                strokeLinecap="round"
              />
            </g>
          </g>
        </defs>

        {/* =============================================================== */}
        {/* 1. BACKGROUND                                                   */}
        {/* =============================================================== */}
        <g id="background">
          {/* Top and bottom light-gray strips (#d4d4d4, ~8px each) */}
          <rect x="0" y="0" width="640" height="8" fill="#d4d4d4" />
          <rect x="0" y="319" width="640" height="8" fill="#d4d4d4" />

          {/* Left bright-green rectangle (#44dd7a, ~112px wide) */}
          <rect x="0" y="8" width="112" height="311" fill="#44dd7a" />

          {/* Right dark-charcoal asphalt rectangle (#1f1f1f) */}
          <rect x="112" y="8" width="528" height="311" fill="#1f1f1f" />
        </g>

        {/* =============================================================== */}
        {/* 2. BODY SHELL - SYMMETRICAL REAR & SIDES                        */}
        {/* =============================================================== */}
        <g id="body-rear">
          <use href="#car-half" />
          <use href="#car-half" transform="translate(0 327) scale(1 -1)" />
        </g>

        {/* =============================================================== */}
        {/* 3. FRONT NOSE AREA (EXACT MATCH TO REFERENCE CROP)              */}
        {/* =============================================================== */}
        <g id="nose-section">
          {/* (A) Orange Body Base for the Nose (Smooth broad curve to rounded tip) */}
          <path
            d="
              M 480 36
              C 520 42, 560 58, 595 86
              C 622 110, 636 136, 636 163.5
              C 636 191, 622 217, 595 241
              C 560 269, 520 285, 480 291
              Z
            "
            fill="#f58220"
          />

          {/* (B) Narrow Darker-Orange Fender Bands (#e8741a, 80% opacity, following nose outline) */}
          {/* Top Fender Band */}
          <path
            d="
              M 480 36
              C 520 42, 560 58, 595 86
              C 618 108, 632 135, 635 156
              L 629 157
              C 618 132, 595 106, 568 84
              C 538 66, 506 50, 480 46
              Z
            "
            fill="#e8741a"
            opacity="0.8"
          />
          {/* Bottom Fender Band (Mirrored across y = 163.5) */}
          <path
            d="
              M 480 291
              C 520 285, 560 269, 595 241
              C 618 219, 632 192, 635 171
              L 629 170
              C 618 195, 595 221, 568 243
              C 538 261, 506 277, 480 281
              Z
            "
            fill="#e8741a"
            opacity="0.8"
          />

          {/* (C) Lighter-Orange Hood Center Panel (#f98a28) with soft curved right edge (~60% of nose) */}
          <path
            d="
              M 480 78
              C 522 75, 555 86, 578 112
              C 592 128, 598 146, 598 163.5
              C 598 181, 592 199, 578 215
              C 555 241, 522 252, 480 249
              Z
            "
            fill="#f98a28"
          />

          {/* Faint Center Seam Line */}
          <line x1="480" y1="163.5" x2="634" y2="163.5" stroke="#c4601a" strokeWidth="0.5" strokeOpacity="0.25" />

          {/* (D) Thin Rounded-Rectangle Seam Line around the hood (0.8px, 50% opacity, no diagonal creases) */}
          <path
            d="
              M 480 82
              C 525 82, 560 92, 584 118
              C 602 136, 612 152, 614 163.5
              C 612 175, 602 191, 584 209
              C 560 235, 525 245, 480 245
            "
            fill="none"
            stroke="#ff9a3c"
            strokeWidth="0.8"
            strokeOpacity="0.5"
          />

          {/* (E) FRONT VENT BLADES (Wide dark grey #2b2b2b slabs just inside nose edge, ~10% thinner, 0.8px #4a4a4a stroke) */}
          {/* Top Vent Blade */}
          <g id="front-vent-top">
            <path
              d="
                M 504 54
                C 536 67, 566 87, 588 112
                C 594 119, 598 126, 600 130
                C 598 129, 592 121, 584 112
                C 562 89, 534 70, 507 58
                C 503 56, 502 53, 504 54
                Z
              "
              fill="#2b2b2b"
              stroke="#4a4a4a"
              strokeWidth="0.8"
            />
          </g>

          {/* Bottom Vent Blade (Mirrored across y = 163.5) */}
          <g id="front-vent-bottom">
            <path
              d="
                M 504 273
                C 536 260, 566 240, 588 215
                C 594 208, 598 201, 600 197
                C 598 198, 592 206, 584 215
                C 562 238, 534 257, 507 269
                C 503 271, 502 274, 504 273
                Z
              "
              fill="#2b2b2b"
              stroke="#4a4a4a"
              strokeWidth="0.8"
            />
          </g>

          {/* (F) HEADLIGHTS (~19% car height from centerline, angled diagonally with pointed tail to cabin, rounded head to nose, ~15% slimmer) */}
          {/* Top Headlight Slash (Tail at x ≈ 516, y ≈ 82; Head at x ≈ 574, y ≈ 117) */}
          <g id="headlight-top">
            <path
              d="
                M 516 82
                C 525 84, 545 95, 562 108
                C 572 116, 575 120, 571 121
                C 567 122, 560 118, 552 111
                C 536 99, 521 89, 516 82
                Z
              "
              fill="#0a0a0a"
            />
            {/* Thin light-grey inner line (1.5px) with small black margin */}
            <path
              d="M 522 86 C 536 96, 552 108, 567 117"
              fill="none"
              stroke="#bdbdbd"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </g>

          {/* Bottom Headlight Slash (Mirrored across y = 163.5: Tail at x ≈ 516, y ≈ 245; Head at x ≈ 574, y ≈ 210) */}
          <g id="headlight-bottom">
            <path
              d="
                M 516 245
                C 525 243, 545 232, 562 219
                C 572 211, 575 207, 571 206
                C 567 205, 560 209, 552 216
                C 536 228, 521 238, 516 245
                Z
              "
              fill="#0a0a0a"
            />
            <path
              d="M 522 241 C 536 231, 552 219, 567 210"
              fill="none"
              stroke="#bdbdbd"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </g>

          {/* (G) NOSE OUTER STROKE (#c4601a, 2px thick) */}
          <path
            d="
              M 480 36
              C 520 42, 560 58, 595 86
              C 622 110, 636 136, 636 163.5
              C 636 191, 622 217, 595 241
              C 560 269, 520 285, 480 291
            "
            fill="none"
            stroke="#c4601a"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>

        {/* =============================================================== */}
        {/* 4. ENGINE COVER & LOUVERS (MATCHING CROP EXACTLY)              */}
        {/* =============================================================== */}
        <g id="engine-bay">
          {/* Orange Body Bridge right behind the engine bay notch */}
          <path
            d="
              M 35 150
              L 41 146
              L 44 149
              L 44 178
              L 41 181
              L 35 177
              Z
            "
            fill="#f58220"
            stroke="#c4601a"
            strokeWidth="0.8"
          />

          {/* Thin Teal Accent Line (#1fa2ad, ~1.2px) tracing outer border of engine frame */}
          <path
            d="
              M 35 152
              L 41 148
              L 97 124
              L 136 132
              L 142 163.5
              L 136 195
              L 97 203
              L 41 179
              L 35 175
              Z
            "
            fill="none"
            stroke="#1fa2ad"
            strokeWidth="1.2"
          />

          {/* Main Dark Grey Engine Cover Outer Housing (#45484f) */}
          <path
            d="
              M 34 153
              L 40 149
              L 97 125
              L 136 133
              L 141 163.5
              L 136 194
              L 97 202
              L 40 178
              L 34 174
              Z
            "
            fill="#45484f"
            stroke="#202226"
            strokeWidth="0.8"
          />

          {/* Fine Light Grey / Silver Inner Bevel Border (#828892) */}
          <path
            d="
              M 37 154
              L 42 151
              L 96 128
              L 134 135
              L 139 163.5
              L 134 192
              L 96 199
              L 42 176
              L 37 173
              Z
            "
            fill="none"
            stroke="#828892"
            strokeWidth="0.9"
          />

          {/* Slot 1 - Reamost black slot */}
          <path
            d="
              M 48 155
              C 50 154, 52 154, 52 156
              L 52 171
              C 52 173, 50 173, 48 172
              L 46 170
              L 46 157
              Z
            "
            fill="#121315"
          />

          {/* Slot 2 - Chevron slot */}
          <path
            d="
              M 55 151
              L 60 150
              L 62 163.5
              L 60 177
              L 55 176
              L 57 163.5
              Z
            "
            fill="#121315"
          />

          {/* Slot 3 - Taller chevron slot */}
          <path
            d="
              M 64 146
              L 70 145
              L 73 163.5
              L 70 182
              L 64 181
              L 67 163.5
              Z
            "
            fill="#121315"
          />

          {/* Slot 4 - Tall chevron slot */}
          <path
            d="
              M 74 140
              L 81 139
              L 85 163.5
              L 81 188
              L 74 187
              L 78 163.5
              Z
            "
            fill="#121315"
          />

          {/* Slot 5 - Tallest chevron slot */}
          <path
            d="
              M 85 133
              L 93 131
              L 98 163.5
              L 93 196
              L 85 194
              L 90 163.5
              Z
            "
            fill="#121315"
          />

          {/* Front Main Dark Shield - Large Black Pentagonal Cavity */}
          <path
            d="
              M 97 130
              L 110 133
              C 124 137, 132 147, 133 163.5
              C 132 180, 124 190, 110 194
              L 97 197
              L 102 163.5
              Z
            "
            fill="#121315"
          />
          <path
            d="
              M 99 133
              L 110 136
              C 122 140, 130 149, 131 163.5
              C 130 178, 122 187, 110 191
              L 99 194
            "
            fill="none"
            stroke="#2e3137"
            strokeWidth="0.8"
          />

          {/* Rear U-Notch Inset Lip at left */}
          <path
            d="
              M 34 154
              L 38 152
              L 44 154
              L 44 173
              L 38 175
              L 34 173
              Z
            "
            fill="#222427"
          />
        </g>

        {/* =============================================================== */}
        {/* 5. REAR WING (PIXEL PERFECT MATCH TO CROPPED IMAGE)             */}
        {/* =============================================================== */}
        <g id="rear-wing">
          {/* Main Thick Curved Glossy Black Wing Blade */}
          <path
            d="
              M 76 40
              C 38 72, 17 114, 17 163.5
              C 17 213, 38 255, 76 287
              C 84 292, 92 284, 88 273
              C 68 238, 48 198, 42 163.5
              C 48 129, 68 89, 88 54
              C 92 43, 84 35, 76 40
              Z
            "
            fill="#26272a"
            stroke="#141517"
            strokeWidth="0.9"
          />

          {/* Wing Outer Left Perimeter Shaded Border */}
          <path
            d="
              M 76 40
              C 38 72, 17 114, 17 163.5
              C 17 213, 38 255, 76 287
              L 72 284
              C 36 253, 19 212, 19 163.5
              C 19 215, 36 74, 72 43
              Z
            "
            fill="#18191b"
          />

          {/* Wing Rounded Bottom Tip Shadow Layer */}
          <path
            d="
              M 72 278
              C 78 288, 86 288, 88 274
              C 82 268, 76 262, 72 255
              Z
            "
            fill="#151618"
            opacity="0.85"
          />
          {/* Wing Rounded Top Tip Shadow Layer */}
          <path
            d="
              M 72 49
              C 78 39, 86 39, 88 53
              C 82 59, 76 65, 72 72
              Z
            "
            fill="#151618"
            opacity="0.85"
          />

          {/* Inner Wing Edge Line facing the engine cradle */}
          <path
            d="
              M 84 57
              C 66 91, 47 129, 41 163.5
              C 47 198, 66 236, 84 270
            "
            fill="none"
            stroke="#303236"
            strokeWidth="0.8"
          />
        </g>

        {/* =============================================================== */}
        {/* 6. CABIN & GLASSHOUSE (x 135-480)                              */}
        {/* =============================================================== */}
        <g id="cabin">
          {/* Thin Teal/Cyan Accent Line (#1fa2ad, ~1.1px) tracing glasshouse perimeter */}
          <path
            d="
              M 480 163.5
              C 480 186, 465 210, 442 222
              C 410 236, 360 240, 290 236
              C 220 232, 160 218, 138 198
              L 138 129
              C 160 109, 220 95, 290 91
              C 360 87, 410 91, 442 105
              C 465 117, 480 141, 480 163.5
              Z
            "
            fill="none"
            stroke="#1fa2ad"
            strokeWidth="1.1"
          />

          {/* Dark Glasshouse Base */}
          <path
            d="
              M 478 163.5
              C 478 185, 463 208, 440 220
              C 408 234, 358 238, 288 234
              C 218 230, 158 216, 136 196
              L 136 131
              C 158 111, 218 97, 288 93
              C 358 89, 408 93, 440 107
              C 463 119, 478 142, 478 163.5
              Z
            "
            fill="#1c1c1c"
          />

          {/* Rear Canopy Engine Glass (x 135-260, #2a2a2a) */}
          <path
            d="
              M 136 163.5
              C 136 149, 142 134, 152 123
              C 178 108, 220 100, 262 98
              L 262 229
              C 220 227, 178 219, 152 204
              C 142 193, 136 178, 136 163.5
              Z
            "
            fill="#2a2a2a"
            stroke="#1c1c1c"
            strokeWidth="0.8"
          />

          {/* Mid-Grey Roof Panel (x 260-375, #555) with curved edges following canopy */}
          <path
            d="
              M 262 98
              C 298 94, 335 95, 375 102
              C 378 122, 380 142, 380 163.5
              C 380 185, 378 205, 375 225
              C 335 232, 298 233, 262 229
              C 260 206, 258 184, 258 163.5
              C 258 143, 260 121, 262 98
              Z
            "
            fill="#555555"
            stroke="#444444"
            strokeWidth="0.8"
          />

          {/* Roof Center Structural Spine & Notch */}
          <line x1="260" y1="163.5" x2="378" y2="163.5" stroke="#333333" strokeWidth="1.2" />
          <path d="M 350 156 L 366 163.5 L 350 171 Z" fill="#333333" />

          {/* Windshield Glass (x 375-478, Darker Base #333, curved front) */}
          <path
            d="
              M 375 102
              C 410 108, 442 120, 465 141
              C 476 151, 478 158, 478 163.5
              C 478 169, 476 176, 465 186
              C 442 207, 410 219, 375 225
              C 378 205, 380 185, 380 163.5
              C 380 142, 378 122, 375 102
              Z
            "
            fill="#333333"
            stroke="#1c1c1c"
            strokeWidth="0.8"
          />

          {/* 2 Curved Diagonal Reflection Bands (#6e6e6e / #7a7a7a) */}
          <path
            d="
              M 384 108
              C 414 116, 442 130, 462 148
              L 455 153
              C 436 136, 408 123, 380 115
              Z
            "
            fill="#7a7a7a"
            opacity="0.5"
          />
          <path
            d="
              M 392 134
              C 420 145, 444 158, 468 172
              L 463 178
              C 440 164, 414 150, 386 141
              Z
            "
            fill="#6e6e6e"
            opacity="0.4"
          />

          {/* Small Dark Rectangle (Rear-View Mirror) at x ≈ 385, y ≈ 148 */}
          <rect x="384" y="148" width="6" height="15" rx="1.2" fill="#1c1c1c" />

          {/* Black A-Pillar Outer Frame */}
          <path
            d="
              M 375 102
              C 410 108, 442 120, 465 141
              L 468 145
              C 445 123, 412 111, 376 105
              Z
            "
            fill="#1c1c1c"
          />
          <path
            d="
              M 375 225
              C 410 219, 442 207, 465 186
              L 468 182
              C 445 204, 412 216, 376 222
              Z
            "
            fill="#1c1c1c"
          />
        </g>

        {/* =============================================================== */}
        {/* 7. SIDE MIRRORS (x ≈ 390-420, Angled Wing Housings on Edges)    */}
        {/* =============================================================== */}
        <g id="mirrors">
          <use href="#mirror-top" />
          <use href="#mirror-top" transform="translate(0 327) scale(1 -1)" />
        </g>
      </svg>
    </div>
  );
}
