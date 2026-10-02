/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CarSvg } from './components/CarSvg';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const greenPanelRef = useRef<HTMLDivElement>(null);

  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Start: Rear wing and bumper fully visible inside left margin
      const getCarStartX = () => 20;

      // End: Car stops with its rear wing right next to the "I" of "WELCOME ITZFI"
      // Rear half remains prominently on-screen at ~76% viewport width
      const getCarEndX = () => Math.round(window.innerWidth * 0.76);

      // Exact point where green road ends & black road begins in respect to the car:
      // Aligns with the rear haunch step / corner (SVG x ≈ 260 => 260 * (270 / 327) ≈ 215px)
      const CAR_ROAD_OFFSET = 215;

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

          {/* CARD 1: 58% Lime (#e8ff38) - Above the strip */}
          <div
            ref={card1Ref}
            className="absolute rounded-[18px] flex flex-col justify-center will-change-transform shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            style={{
              backgroundColor: '#e8ff38',
              bottom: 'calc(50% + 135px + 24px)',
              left: '45vw',
              width: '22.8vw',
              minWidth: '220px',
              height: 'clamp(145px, 20.5vh, 210px)',
              padding: 'clamp(20px, 2.4vw, 44px) clamp(24px, 2.6vw, 48px)',
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
              className="text-[#111111] font-normal leading-snug"
              style={{
                fontSize: 'clamp(14px, 1.3vw, 24px)',
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
              bottom: 'calc(50% + 135px + 24px)',
              left: '67vw',
              width: '21vw',
              minWidth: '200px',
              height: 'clamp(145px, 20.5vh, 210px)',
              padding: 'clamp(20px, 2.4vw, 44px) clamp(24px, 2.6vw, 48px)',
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
              className="text-white font-normal leading-snug"
              style={{
                fontSize: 'clamp(14px, 1.3vw, 24px)',
                marginTop: 'clamp(8px, 0.7vw, 13px)',
                fontFamily: 'Arial, sans-serif',
              }}
            >
              Increase in pick up point use
            </div>
          </div>

          {/* CARD 3: 23% Light Blue (#69c5ee) - Below the strip */}
          <div
            ref={card3Ref}
            className="absolute rounded-[18px] flex flex-col justify-center will-change-transform border border-[#8ad7ff] shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            style={{
              backgroundColor: '#69c5ee',
              top: 'calc(50% + 135px + 24px)',
              left: '38.5vw',
              width: '24.5vw',
              minWidth: '230px',
              height: 'clamp(145px, 20.5vh, 210px)',
              padding: 'clamp(20px, 2.4vw, 44px) clamp(24px, 2.6vw, 48px)',
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
              className="text-[#111111] font-normal leading-snug"
              style={{
                fontSize: 'clamp(14px, 1.3vw, 24px)',
                marginTop: 'clamp(8px, 0.7vw, 13px)',
                fontFamily: 'Arial, sans-serif',
              }}
            >
              Decreased in customer phone calls
            </div>
          </div>

          {/* CARD 4: 40% Vivid Orange (#ff762d) - Below the strip, overlaps Card 3 */}
          <div
            ref={card4Ref}
            className="absolute rounded-[18px] flex flex-col justify-center will-change-transform shadow-[0_12px_32px_rgba(0,0,0,0.12)]"
            style={{
              backgroundColor: '#ff762d',
              top: 'calc(50% + 135px + 24px)',
              left: '61vw',
              width: '24.5vw',
              minWidth: '230px',
              height: 'clamp(145px, 20.5vh, 210px)',
              padding: 'clamp(20px, 2.4vw, 44px) clamp(24px, 2.6vw, 48px)',
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
              className="text-[#111111] font-normal leading-snug"
              style={{
                fontSize: 'clamp(14px, 1.3vw, 24px)',
                marginTop: 'clamp(8px, 0.7vw, 13px)',
                fontFamily: 'Arial, sans-serif',
              }}
            >
              Decreased in customer phone calls
            </div>
          </div>

          {/* ========================================================= */}
          {/* CENTRAL RACING STRIP (270PX HIGH, VERTICALLY CENTERED)     */}
          {/* ========================================================= */}
          <div
            className="track w-full relative flex items-center"
            style={{
              height: '270px',
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
                width: '235px',
                zIndex: 2,
              }}
            >
              {/* GIANT HEADLINE (INSIDE GREEN SECTION, PROGRESSIVELY REVEALED) */}
              <div
                className="headline uppercase whitespace-nowrap leading-none select-none pointer-events-none"
                style={{
                  position: 'absolute',
                  left: 'clamp(30px, 3.5vw, 64px)',
                  fontSize: 'clamp(84px, 9.6vw, 180px)',
                  fontWeight: 900,
                  letterSpacing: '-0.025em',
                  color: '#000000',
                  fontFamily: '"Arial Black", Impact, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
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
                transform: 'translate3d(20px, -50%, 0)',
                height: '270px',
                width: 'auto',
                aspectRatio: '640 / 327',
                zIndex: 4,
              }}
            >
              <CarSvg className="h-full w-auto object-contain block drop-shadow-none" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
