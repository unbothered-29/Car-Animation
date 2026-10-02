/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import carImage from './assets/car.png';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const greenPanelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Refresh ScrollTrigger once fonts are loaded to get exact text measurements
    if (typeof document !== 'undefined' && document.fonts) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }

    const ctx = gsap.context(() => {
      // Start: Car and road positioned slightly more towards the left
      const getCarStartX = () => 0;

      // End: Car stops very slightly further ahead
      const getCarEndX = () => {
        if (headlineRef.current && headlineRef.current.offsetWidth > 0) {
          const textEnd = headlineRef.current.offsetLeft + headlineRef.current.offsetWidth;
          return textEnd - 8;
        }
        return Math.round(window.innerWidth * 0.80);
      };

      // Exact point where green road ends & black road begins in respect to the car:
      const CAR_ROAD_OFFSET = 98;

      // Green road trail locked 1:1 to car position
      const getGreenStartWidth = () => getCarStartX() + CAR_ROAD_OFFSET;
      const getGreenEndWidth = () => getCarEndX() + CAR_ROAD_OFFSET;

      // Master Timeline scrubbed smoothly by vertical scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=260%',
          pin: stageRef.current,
          scrub: 0.35,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 1. Car Motion (centered vertically with yPercent: -50)
      tl.fromTo(
        carRef.current,
        { x: getCarStartX(), yPercent: -50 },
        { x: getCarEndX, yPercent: -50, ease: 'none', duration: 1 },
        0
      );

      // 2. Green Road Trail (moves in lockstep with the car)
      tl.fromTo(
        greenPanelRef.current,
        { width: getGreenStartWidth() },
        { width: getGreenEndWidth, ease: 'none', duration: 1 },
        0
      );

      // 3. Statistic Cards Entrance (opacity + translateY + scale)
      // Card 1: 58% Lime (Above) - appears at progress 0.22 -> 0.36
      tl.fromTo(
        card1Ref.current,
        { opacity: 0, y: 20, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, ease: 'power2.out', duration: 0.14 },
        0.22
      );

      // Card 3: 23% Blue (Below) - appears at progress 0.36 -> 0.50
      tl.fromTo(
        card3Ref.current,
        { opacity: 0, y: 20, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, ease: 'power2.out', duration: 0.14 },
        0.36
      );

      // Card 2: 27% Dark (Above/Right) - appears at progress 0.48 -> 0.62
      tl.fromTo(
        card2Ref.current,
        { opacity: 0, y: 20, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, ease: 'power2.out', duration: 0.14 },
        0.48
      );

      // Card 4: 40% Orange (Below/Right) - appears at progress 0.62 -> 0.78
      tl.fromTo(
        card4Ref.current,
        { opacity: 0, y: 20, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, ease: 'power2.out', duration: 0.14 },
        0.62
      );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="relative w-full bg-[#d3d3d3] text-[#111111] overflow-x-hidden selection:bg-black selection:text-white">
      {/* SCROLL SCENE CONTAINER */}
      <section
        ref={containerRef}
        className="scroll-scene relative w-full"
        style={{ height: '360vh' }}
      >
        {/* STICKY PINNED STAGE (100VH) */}
        <div
          ref={stageRef}
          className="scene-sticky w-full h-screen relative overflow-hidden flex flex-col justify-center items-center bg-[#d3d3d3] select-none"
        >
          {/* ========================================================= */}
          {/* STATISTIC CARDS (OUTSIDE THE HORIZONTAL STRIP)           */}
          {/* ========================================================= */}

          {/* CARD 1: 58% Yellow (#DEF54F) - Above the strip */}
          <div
            ref={card1Ref}
            className="absolute rounded-[18px] flex flex-col justify-center will-change-transform shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            style={{
              backgroundColor: '#DEF54F',
              bottom: 'calc(50% + 128px + 24px)',
              left: '46vw',
              width: '23vw',
              minWidth: '210px',
              height: 'clamp(165px, 23.5vh, 240px)',
              padding: 'clamp(24px, 2.8vw, 48px) clamp(10px, 1.0vw, 20px) clamp(24px, 2.8vw, 48px) clamp(26px, 2.4vw, 44px)',
              zIndex: 10,
            }}
          >
            <div
              className="font-bold text-[#111111] leading-none tracking-tight"
              style={{ fontSize: 'clamp(46px, 4.4vw, 84px)', fontFamily: 'Arial, sans-serif' }}
            >
              58%
            </div>
            <div
              className="text-[#111111] font-normal leading-snug whitespace-nowrap"
              style={{
                fontSize: 'clamp(15px, 1.38vw, 22.5px)',
                marginTop: 'clamp(8px, 0.7vw, 13px)',
                fontFamily: 'Arial, sans-serif',
              }}
            >
              Increase in pick up point use
            </div>
          </div>

          {/* CARD 2: 27% Dark (#333333) - Above the strip, overlaps Card 1 */}
          <div
            ref={card2Ref}
            className="absolute rounded-[18px] flex flex-col justify-center will-change-transform shadow-[0_12px_32px_rgba(0,0,0,0.18)]"
            style={{
              backgroundColor: '#333333',
              bottom: 'calc(50% + 128px + 24px)',
              left: '68vw',
              width: '20.5vw',
              minWidth: '190px',
              height: 'clamp(165px, 23.5vh, 240px)',
              padding: 'clamp(24px, 2.8vw, 48px) clamp(10px, 1.0vw, 20px) clamp(24px, 2.8vw, 48px) clamp(16px, 1.6vw, 28px)',
              zIndex: 20,
            }}
          >
            <div
              className="font-bold text-white leading-none tracking-tight"
              style={{ fontSize: 'clamp(46px, 4.4vw, 84px)', fontFamily: 'Arial, sans-serif' }}
            >
              27%
            </div>
            <div
              className="text-white font-normal leading-snug whitespace-nowrap"
              style={{
                fontSize: 'clamp(15px, 1.38vw, 22.5px)',
                marginTop: 'clamp(8px, 0.7vw, 13px)',
                fontFamily: 'Arial, sans-serif',
              }}
            >
              Increase in pick up point use
            </div>
          </div>

          {/* CARD 3: 23% Blue (#6AC9FF) - Below the strip */}
          <div
            ref={card3Ref}
            className="absolute rounded-[18px] flex flex-col justify-center will-change-transform border border-[#9de0ff] shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            style={{
              backgroundColor: '#6AC9FF',
              top: 'calc(50% + 128px + 24px)',
              left: '39.5vw',
              width: '23vw',
              minWidth: '210px',
              height: 'clamp(165px, 23.5vh, 240px)',
              padding: 'clamp(24px, 2.8vw, 48px) clamp(10px, 1.0vw, 20px) clamp(24px, 2.8vw, 48px) clamp(26px, 2.4vw, 44px)',
              zIndex: 10,
            }}
          >
            <div
              className="font-bold text-[#111111] leading-none tracking-tight"
              style={{ fontSize: 'clamp(46px, 4.4vw, 84px)', fontFamily: 'Arial, sans-serif' }}
            >
              23%
            </div>
            <div
              className="text-[#111111] font-normal leading-snug whitespace-nowrap"
              style={{
                fontSize: 'clamp(14px, 1.25vw, 20px)',
                marginTop: 'clamp(8px, 0.7vw, 13px)',
                fontFamily: 'Arial, sans-serif',
              }}
            >
              Decreased in customer phone calls
            </div>
          </div>

          {/* CARD 4: 40% Orange (#FA7328) - Below the strip, overlaps Card 3 */}
          <div
            ref={card4Ref}
            className="absolute rounded-[18px] flex flex-col justify-center will-change-transform shadow-[0_12px_32px_rgba(0,0,0,0.12)]"
            style={{
              backgroundColor: '#FA7328',
              top: 'calc(50% + 128px + 24px)',
              left: '61.5vw',
              width: '23vw',
              minWidth: '210px',
              height: 'clamp(165px, 23.5vh, 240px)',
              padding: 'clamp(24px, 2.8vw, 48px) clamp(10px, 1.0vw, 20px) clamp(24px, 2.8vw, 48px) clamp(26px, 2.4vw, 44px)',
              zIndex: 20,
            }}
          >
            <div
              className="font-bold text-[#111111] leading-none tracking-tight"
              style={{ fontSize: 'clamp(46px, 4.4vw, 84px)', fontFamily: 'Arial, sans-serif' }}
            >
              40%
            </div>
            <div
              className="text-[#111111] font-normal leading-snug whitespace-nowrap"
              style={{
                fontSize: 'clamp(14px, 1.25vw, 20px)',
                marginTop: 'clamp(8px, 0.7vw, 13px)',
                fontFamily: 'Arial, sans-serif',
              }}
            >
              Decreased in customer phone calls
            </div>
          </div>

          {/* ========================================================= */}
          {/* CENTRAL RACING STRIP (256PX HIGH, VERTICALLY CENTERED)     */}
          {/* ========================================================= */}
          <div
            className="track w-full relative flex items-center"
            style={{
              height: '256px',
              backgroundColor: '#1c1c1c',
              zIndex: 5,
            }}
          >
            {/* GREEN SECTION ON THE LEFT (#45dc7a) */}
            <div
              ref={greenPanelRef}
              className="green-panel absolute left-0 top-0 h-full overflow-hidden flex items-center will-change-[width]"
              style={{
                backgroundColor: '#45dc7a',
                width: '98px',
                zIndex: 2,
              }}
            >
              {/* GIANT HEADLINE (INSIDE GREEN SECTION, PROGRESSIVELY REVEALED) */}
              <div
                ref={headlineRef}
                className="headline uppercase whitespace-nowrap leading-none select-none pointer-events-none"
                style={{
                  position: 'absolute',
                  left: 'clamp(64px, 5.5vw, 110px)',
                  fontSize: 'clamp(86px, 9.8vw, 195px)',
                  fontWeight: 700,
                  letterSpacing: '0.03em',
                  color: '#000000',
                  fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                }}
              >
                WELCOME ITZFI
              </div>
            </div>

            {/* THE McLAREN 720S CAR (SITS ABOVE STRIP & HEADLINE) */}
            <div
              ref={carRef}
              className="car absolute pointer-events-none will-change-transform"
              style={{
                left: 0,
                top: '50%',
                transform: 'translate3d(0px, -50%, 0)',
                height: '256px',
                width: 'auto',
                aspectRatio: '1024 / 488',
                zIndex: 4,
              }}
            >
              <img
                src={carImage}
                alt="McLaren 720S"
                className="h-full w-auto object-contain block drop-shadow-none select-none pointer-events-none"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
