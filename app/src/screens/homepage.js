// ...existing code removed: file now starts with imports below
"use client";
import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { techEntries } from "../data/techEntries";
import Link from "next/link";
import TechCard from "../components/cards/techCard";

function Homepage() {
  const entries = Array.isArray(techEntries) ? techEntries : [];
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sort, setSort] = useState("recent");

  // const [showBanner, setShowBanner] = useState(true);

  // useEffect(() => {
  //   // Persist dismissal across visits
  //   try {
  //     const dismissed = typeof window !== "undefined" && window.localStorage.getItem("ota_home_banner_dismissed") === "1";
  //     if (dismissed) setShowBanner(false);
  //   } catch (e) {
  //     // ignore storage errors
  //   }
  // }, []);

  // const dismissBanner = () => {
  //   setShowBanner(false);
  //   try {
  //     window.localStorage.setItem("ota_home_banner_dismissed", "1");
  //   } catch (e) {
  //     // ignore storage errors
  //   }
  // };

  const searchParams = useSearchParams();
  useEffect(() => {
    const category = searchParams.get("filterCategory");
    const sortParam = searchParams.get("sort");
    setSelectedCategory(category || null);
    setSort(sortParam || "recent");
    setCurrentPage(1);
  }, [searchParams]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const entriesPerPage = 8;
  const filteredEntries = selectedCategory
    ? entries.filter((entry) => {
        if (!entry.category) return false;
        if (Array.isArray(entry.category)) {
          return entry.category
            .map((c) => c.toLowerCase())
            .includes(selectedCategory.toLowerCase());
        }
        return entry.category.toLowerCase() === selectedCategory.toLowerCase();
      })
    : entries;

  let sortedEntries = [...filteredEntries];
  if (sort === "recent") {
    sortedEntries.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sort === "alpha") {
    sortedEntries.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
  }

  const paginatedEntries = sortedEntries.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );
  const totalPages = Math.ceil(sortedEntries.length / entriesPerPage);

  return (
    <>
    <style jsx>{`
      /* VT323 font import removed, reverting to previous style */
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      /* Diner sign flicker for SVG blue glow only */
      .neon-glow-anim {
        animation: neon-flicker 6.5s infinite steps(1);
        will-change: opacity;
        filter: url(#glow);
        opacity: 1;
      }
      .neon-glow-obs { animation-delay: 0s; }
      .neon-glow-tech { animation-delay: 3.2s; }
      @keyframes neon-flicker {
        0%   { opacity: 0.92; }
        10%  { opacity: 0.18; }
        13%  { opacity: 1; }
        22%  { opacity: 0.08; }
        25%  { opacity: 1; }
        36%  { opacity: 0.3; }
        39%  { opacity: 1; }
        52%  { opacity: 0.7; }
        60%  { opacity: 1; }
        74%  { opacity: 0.2; }
        77%  { opacity: 1; }
        85%  { opacity: 0.6; }
        90%  { opacity: 1; }
        97%  { opacity: 0.3; }
        100% { opacity: 0.92; }
      }
       <main className="homepage-main">
         {currentPage === 1 && (
           <section className="homepage-hero">
             <div className="homepage-hero-panel">
               <div className="homepage-intro">
                 <p className="homepage-kicker">Curated Archive of Retired Tech</p>
                 <div style={{
                   display: "flex",
                   flexDirection: "column",
                   alignItems: "center",
                   marginBottom: "2rem"
                 }}>
                   <div className="eighties-hero-heading" style={{ position: "relative", display: "inline-block", width: 620, height: 200, minWidth: 0, padding: 0, overflow: "visible" }}>
                     <svg
                       width="620"
                       height="200"
                       viewBox="0 0 620 200"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                       style={{
                         position: "absolute",
                         top: 0,
                         left: 0,
                         width: "100%",
                         height: "100%",
                         zIndex: 0,
                         pointerEvents: "none",
                         transform: "translate(-120px, -120px) scale(1.35) skewX(-16deg)",
                         opacity: 1,
                       }}
                     >
                       <defs>
                         <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                           <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#00eaff" floodOpacity="0.7" />
                           <feGaussianBlur stdDeviation="8" />
                         </filter>
                         <filter id="shadow" x="-40%" y="-40%" width="180%" height="180%">
                           <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#001a2e" floodOpacity="0.45" />
                         </filter>
                       </defs>
                       <text
                         className="neon-glow-anim neon-glow-obs"
                         x="50%"
                         y="88"
                         textAnchor="middle"
                         fontFamily="'Times New Roman', Times, serif"
                         fontWeight="900"
                         fontSize="98"
                         letterSpacing="0.08em"
                         fill="none"
                         stroke="#00eaff"
                         strokeWidth="5"
                         style={{
                           paintOrder: "stroke fill",
                           filter: "url(#glow)",
                           opacity: 1,
                         }}
                       >
                         OBSOLETE
                       </text>
                       <text
                         className="neon-glow-anim neon-glow-tech"
                         x="50%"
                         y="178"
                         textAnchor="middle"
                         fontFamily="'Times New Roman', Times, serif"
                         fontWeight="900"
                         fontSize="98"
                         letterSpacing="0.08em"
                         fill="none"
                         stroke="#00eaff"
                         strokeWidth="5"
                         style={{
                           paintOrder: "stroke fill",
                           filter: "url(#glow)",
                           opacity: 1,
                         }}
                       >
                         TECH
                       </text>
                     </svg>
                     <h1
                       className="homepage-title"
                       style={{
                         position: "relative",
                         zIndex: 1,
                         color: "#e6faff",
                         fontFamily: "Times New Roman, Times, serif",
                         fontWeight: 900,
                         letterSpacing: "0.08em",
                         margin: 0,
                         textAlign: "center",
                         textTransform: "uppercase",
                         pointerEvents: "auto",
                         background: "none",
                       }}
                     >
                       OBSOLETE<br />TECH
                     </h1>
                   </div>
                 </div>
                 <p
                   className="homepage-subtext"
                   style={{
                     lineHeight: "1.7",
                     maxWidth: "900px",
                     padding: "0 1rem",
                     margin: "0 auto"
                   }}
                 >
                   Obsolete Tech Archive is your totally rad digital museum for the weird, wild, and wonderful gadgets that once ruled our bedrooms and basements. From blink-and-you-missed-it handhelds to gnarly game consoles, dead media formats, and tech experiments that probably shouldn’t have left the lab, we’re here to celebrate the bold, the bizarre, and the “what were they thinking?” moments of tech history. Every artifact is a blast from the past—reminding us how far we’ve come, and how much fun we had getting here. Whether you’re a nostalgia junkie, a curious explorer, or just here for the retro vibes, Obsolete Tech Archive is your backstage pass to the gadgets that defined—and then totally ghosted—the tech scene.
                 </p>
                 <div className="homepage-rule" style={{
                   width: "min(180px, 40%)",
                   height: "3px",
                   margin: "1.75rem auto 0",
                   background: "#b0b0b0",
                   boxShadow: "none",
                   borderRadius: "2px"
                 }} />
               </div>
             </div>
           </section>
         )}
        font-family: "Courier New", Courier, monospace !important;
        visibility: visible !important;
        position: relative;
        line-height: 1.08;
        vertical-align: bottom;
      }

      @supports (width: 1ch) {
        .typing-text {
          animation:
            typing-width 2.4s steps(24, end) forwards,
            blink-caret 0.75s step-end 4;
        }
      }

      @keyframes typing-width {
        from { width: 0 }
        to { width: 24ch }
      }

      .homepage-subtext {
        font-size: clamp(1rem, 2.5vw, 1.5rem) !important;
        color: var(--ota-muted);
      }

      .homepage-main {
        padding: 4rem 1rem 4rem;
        background-color: transparent;
      }

      @media (min-width: 768px) {
        .homepage-main {
          padding: 6rem 2rem 6rem;
        }
      }

      .homepage-hero {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 60vh;
        margin-bottom: 12rem;
        padding: 2rem 1rem;
        width: 100%;
        box-sizing: border-box;
        text-align: center;
      }

      .homepage-hero-panel {
        width: min(980px, 100%);
        padding: clamp(1.5rem, 3vw, 2.5rem);
        border: 1px solid var(--ota-line);
        border-radius: 28px;
        background:
          linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(250, 252, 255, 0.9));
        box-shadow: var(--ota-shadow);
        position: relative;
        overflow: hidden;
      }

      .homepage-hero-panel::before {
        content: "";
        position: absolute;
        inset: 0;
        background:
          radial-gradient(circle at top right, rgba(47, 93, 98, 0.12), transparent 30%),
          radial-gradient(circle at bottom left, rgba(197, 111, 82, 0.08), transparent 26%),
          linear-gradient(transparent, rgba(255, 255, 255, 0.22));
        pointer-events: none;
      }

      .homepage-hero-panel::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: none;
        box-shadow: 0 2px 12px 0 rgba(44,103,112,0.10), 0 1.5px 0 0 rgba(0,0,0,0.06);
      }

      .homepage-kicker {
        margin: 0 0 1rem;
        font-size: 0.72rem;
        letter-spacing: 0.24em;
        text-transform: uppercase;
        color: var(--ota-muted);
        font-weight: 700;
        text-shadow: none;
      }

      .homepage-intro {
        position: relative;
        z-index: 1;
      }

      .homepage-rule {
        width: min(180px, 40%);
        height: 3px;
        margin: 1.75rem auto 0;
        background: #b0b0b0;
        box-shadow: none;
        border-radius: 2px;
      }

      @media (min-width: 768px) {
        .homepage-hero {
          padding: 4rem 2rem;
        }
      }

      @media (max-width: 768px) {
        .homepage-hero h1 {
          font-size: 1.75rem;
          line-height: 1.2;
          text-align: center;
          word-break: break-word;
        }
        .typing-text {
          width: auto;
          max-width: 100%;
                  <h1 className="eighties-hero-heading">
                    Obsolete Tech
                  </h1>
          animation: none;
          font-size: 2rem;
          text-align: center;
        }
        .homepage-hero {
          margin-bottom: 7rem;
        }
        .homepage-hero-panel {
          border-radius: 22px;
        }
      }

      .techcard-container {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        align-items: stretch;
        margin-top: 2rem;
        width: 100%;
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
      }

      @media (min-width: 768px) {
        .techcard-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }
      }

      /* Pagination link styles */
      .pager-link {
        background: transparent;
        border: none;
        color: var(--ota-muted);
        font-size: 0.9rem;
        font-weight: 500;
        letter-spacing: 0.05rem;
        text-transform: uppercase;
        cursor: pointer;
        padding: 0.35rem 0.5rem;
        border-radius: 999px;
        text-decoration: none;
        transition: color 0.15s ease, text-decoration-color 0.15s ease, background-color 0.15s ease;
      }

      .pager-link:hover,
      .pager-link:focus-visible {
        color: var(--ota-accent);
        background: var(--ota-accent-soft);
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-underline-offset: 3px;
        outline: none;
      }

      .pager-link[aria-current="page"],
      .pager-link--active {
        color: var(--ota-accent);
        font-weight: 700;
        cursor: default;
        pointer-events: none;
        text-decoration: none;
        background: rgba(47, 93, 98, 0.08);
      }

      .pager-link:focus-visible {
        outline: 2px solid var(--ota-accent);
        outline-offset: 2px;
      }

      /* Temporary homepage banner */
      .temp-banner {
        position: sticky;
        top: 0;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        width: 100%;
        box-sizing: border-box;
        padding: 0.75rem 1rem;
        background: #FFF3B0; /* warm retro yellow */
        border: 1px solid #E6D27A;
        color: #4a4a4a;
        font-size: clamp(0.9rem, 2.2vw, 1rem);
        text-align: center;
      }
      .temp-banner__text {
        margin: 0;
      }
      .temp-banner__close {
        margin-left: 0.5rem;
        background: transparent;
        border: none;
        font-weight: 700;
        cursor: pointer;
        line-height: 1;
        padding: 0.25rem 0.5rem;
        color: #4a4a4a;
      }
      .temp-banner__close:focus-visible {
        outline: 2px solid #4a4a4a;
        outline-offset: 2px;
      }
    `}</style>
    <main className="homepage-main">
      {/* {showBanner && (
        <div className="temp-banner" role="status" aria-live="polite">
          <p className="temp-banner__text">
            💾 Pardon the dial‑up vibes — this page is a bit of a hot mess. We’re tuning it up to make it cleaner and better soon.
          </p>
          <button
            type="button"
            className="temp-banner__close"
            aria-label="Dismiss message"
            onClick={dismissBanner}
            title="Dismiss"
          >
            ×
          </button>
        </div>
      )} */}
      {currentPage === 1 && (
      <section className="homepage-hero">
        <div className="homepage-hero-panel">
          <div className="homepage-intro">
            <p className="homepage-kicker">Curated Archive of Retired Tech</p>
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "2rem"
            }}>
              {/* Logo removed from here, now in header */}
                   <div className="eighties-hero-heading">
                {/* SVG: neon text with trailing extrusion highlights */}
                <svg
                  width="620"
                  height="200"
                  viewBox="0 0 620 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 0,
                    pointerEvents: "none",
                  }}
                >
                  <defs>
                    {/* Neon blue glow with reduced opacity */}
                    <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                      <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#00eaff" floodOpacity="0.7" />
                      <feGaussianBlur stdDeviation="8" />
                    </filter>
                    {/* Subtle dark drop shadow for legibility */}
                    <filter id="shadow" x="-40%" y="-40%" width="180%" height="180%">
                      <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#001a2e" floodOpacity="0.45" />
                    </filter>
                  </defs>
                  {/* 80s-style sharp streaks: trailing effect is lighter blue, main text is darker blue */}
                  {[
                    { dx: -8, dy: 12, opacity: 0.18, color: '#b3f0ff', blur: 0 },
                    { dx: -16, dy: 24, opacity: 0.13, color: '#80eaff', blur: 0 },
                    { dx: -24, dy: 36, opacity: 0.09, color: '#4dd2ff', blur: 0 },
                    { dx: -32, dy: 48, opacity: 0.06, color: '#1ac6ff', blur: 0 },
                    { dx: -40, dy: 60, opacity: 0.04, color: '#00eaff', blur: 0 },
                  ].map((trail, idx) => (
                    <g key={idx}>
                      <text
                        x="50%"
                        y={88 + trail.dy}
                        textAnchor="middle"
                        fontFamily="'Times New Roman', Times, serif"
                        fontWeight="900"
                        fontSize="98"
                        letterSpacing="0.08em"
                        fill="transparent"
                        stroke={trail.color}
                        strokeWidth="2.5"
                        style={{
                          paintOrder: 'stroke fill',
                          filter: trail.blur ? `blur(${trail.blur}px)` : 'none',
                          opacity: trail.opacity,
                          transform: `translate(${-trail.dx}px, 0)`
                        }}
                      >
                        OBSOLETE
                      </text>
                      <text
                        x="50%"
                        y={178 + trail.dy}
                        textAnchor="middle"
                        fontFamily="'Times New Roman', Times, serif"
                        fontWeight="900"
                        fontSize="98"
                        letterSpacing="0.08em"
                        fill="transparent"
                        stroke={trail.color}
                        strokeWidth="2.5"
                        style={{
                          paintOrder: 'stroke fill',
                          filter: trail.blur ? `blur(${trail.blur}px)` : 'none',
                          opacity: trail.opacity,
                          transform: `translate(${-trail.dx}px, 0)`
                        }}
                      >
                        TECH
                      </text>
                    </g>
                  ))}
                  {/* Neon trailing effect: multiple blurred text layers (centered) */}
                  {[20, 10, 5].map((blur, idx) => (
                    <g key={blur}>
                      <text
                        x="50%"
                        y="88"
                        textAnchor="middle"
                        fontFamily="'Times New Roman', Times, serif"
                        fontWeight="900"
                        fontSize="98"
                        letterSpacing="0.08em"
                        fill="transparent"
                        stroke="#00eaff"
                        strokeWidth="2.5"
                        style={{
                          paintOrder: 'stroke fill',
                          filter: `blur(${blur}px)`,
                          opacity: 0.18 + 0.13 * (2 - idx),
                        }}
                      >
                        OBSOLETE
                      </text>
                      <text
                        x="50%"
                        y="178"
                        textAnchor="middle"
                        fontFamily="'Times New Roman', Times, serif"
                        fontWeight="900"
                        fontSize="98"
                        letterSpacing="0.08em"
                        fill="transparent"
                        stroke="#00eaff"
                        strokeWidth="2.5"
                        style={{
                          paintOrder: 'stroke fill',
                          filter: `blur(${blur}px)`,
                          opacity: 0.18 + 0.13 * (2 - idx),
                        }}
                      >
                        TECH
                      </text>
                    </g>
                  ))}
                  {/* Main neon text: all legibility improvements */}
                  {/* 1. Subtle dark drop shadow */}
                  <text
                    x="50%"
                    y="88"
                    textAnchor="middle"
                    fontFamily="'Times New Roman', Times, serif"
                    fontWeight="900"
                    fontSize="98"
                    letterSpacing="0.08em"
                    fill="none"
                    stroke="#001a2e"
                    strokeWidth="7"
                    style={{
                      paintOrder: 'stroke fill',
                      filter: 'url(#shadow)',
                      opacity: 0.7,
                    }}
                  >
                    OBSOLETE
                  </text>
                  <text
                    x="50%"
                    y="178"
                    textAnchor="middle"
                    fontFamily="'Times New Roman', Times, serif"
                    fontWeight="900"
                    fontSize="98"
                    letterSpacing="0.08em"
                    fill="none"
                    stroke="#001a2e"
                    strokeWidth="7"
                    style={{
                      paintOrder: 'stroke fill',
                      filter: 'url(#shadow)',
                      opacity: 0.7,
                    }}
                  >
                    TECH
                  </text>
                  {/* 2. Thicker neon blue outline with glow */}
                  <g className="neon-glow-anim">
                    <text
                      x="50%"
                      y="88"
                      textAnchor="middle"
                      fontFamily="'Times New Roman', Times, serif"
                      fontWeight="900"
                      fontSize="98"
                      letterSpacing="0.08em"
                      fill="none"
                      stroke="#00eaff"
                      strokeWidth="5"
                      style={{
                        paintOrder: 'stroke fill',
                        filter: 'url(#glow)',
                        opacity: 1,
                      }}
                    >
                      OBSOLETE
                    </text>
                    <text
                      x="50%"
                      y="178"
                      textAnchor="middle"
                      fontFamily="'Times New Roman', Times, serif"
                      fontWeight="900"
                      fontSize="98"
                      letterSpacing="0.08em"
                      fill="none"
                      stroke="#00eaff"
                      strokeWidth="5"
                      style={{
                        paintOrder: 'stroke fill',
                        filter: 'url(#glow)',
                        opacity: 1,
                      }}
                    >
                      TECH
                    </text>
                  </g>

                  {/* 3. Off-white fill for less glare */}
                  <text
                    x="50%"
                    y="88"
                    textAnchor="middle"
                    fontFamily="'Times New Roman', Times, serif"
                    fontWeight="900"
                    fontSize="98"
                    letterSpacing="0.08em"
                    fill="#e6faff"
                    stroke="none"
                    style={{
                      paintOrder: 'stroke fill',
                      opacity: 1,
                    }}
                  >
                    OBSOLETE
                  </text>
                  <text
                    x="50%"
                    y="178"
                    textAnchor="middle"
                    fontFamily="'Times New Roman', Times, serif"
                    fontWeight="900"
                    fontSize="98"
                    letterSpacing="0.08em"
                    fill="#e6faff"
                    stroke="none"
                    style={{
                      paintOrder: 'stroke fill',
                      opacity: 1,
                    }}
                  >
                    TECH
                  </text>
                  {/* 4. Thin inner dark stroke for definition */}
                  <text
                    x="50%"
                    y="88"
                    textAnchor="middle"
                    fontFamily="'Times New Roman', Times, serif"
                    fontWeight="900"
                    fontSize="98"
                    letterSpacing="0.08em"
                    fill="none"
                    stroke="#00334d"
                    strokeWidth="1.2"
                    style={{
                      paintOrder: 'stroke fill',
                      opacity: 0.85,
                    }}
                  >
                    OBSOLETE
                  </text>
                  <text
                    x="50%"
                    y="178"
                    textAnchor="middle"
                    fontFamily="'Times New Roman', Times, serif"
                    fontWeight="900"
                    fontSize="98"
                    letterSpacing="0.08em"
                    fill="none"
                    stroke="#00334d"
                    strokeWidth="1.2"
                    style={{
                      paintOrder: 'stroke fill',
                      opacity: 0.85,
                    }}
                  >
                    TECH
                  </text>
                  {/* Main neon text, always on top, two lines, larger */}
                  <text
                    x="50%"
                    y="88"
                    textAnchor="middle"
                    fontFamily="'Times New Roman', Times, serif"
                    fontWeight="900"
                    fontSize="98"
                    letterSpacing="0.08em"
                    fill="transparent"
                    stroke="#00eaff"
                    strokeWidth="2.5"
                    style={{
                      paintOrder: 'stroke fill',
                      filter: 'none',
                    }}
                  >
                    OBSOLETE
                  </text>
                  <text
                    x="50%"
                    y="178"
                    textAnchor="middle"
                    fontFamily="'Times New Roman', Times, serif"
                    fontWeight="900"
                    fontSize="98"
                    letterSpacing="0.08em"
                    fill="transparent"
                    stroke="#00eaff"
                    strokeWidth="2.5"
                    style={{
                      paintOrder: 'stroke fill',
                      filter: 'none',
                    }}
                  >
                    TECH
                  </text>
                </svg>
              </div>
            </div>
            <p
              className="homepage-subtext"
              style={{
                lineHeight: "1.7",
                maxWidth: "900px",
                padding: "0 1rem",
                margin: "0 auto"
              }}
            >
              Obsolete Tech Archive is your totally rad digital museum for the weird, wild, and wonderful gadgets that once ruled our bedrooms and basements. From blink-and-you-missed-it handhelds to gnarly game consoles, dead media formats, and tech experiments that probably shouldn’t have left the lab, we’re here to celebrate the bold, the bizarre, and the “what were they thinking?” moments of tech history. Every artifact is a blast from the past—reminding us how far we’ve come, and how much fun we had getting here. Whether you’re a nostalgia junkie, a curious explorer, or just here for the retro vibes, Obsolete Tech Archive is your backstage pass to the gadgets that defined—and then totally ghosted—the tech scene.
            </p>
            <div className="homepage-rule" />
          </div>
        </div>
      </section>
      )}
      <div className="techcard-container">
        {paginatedEntries.map((entry, index) => {
          const slug = entry.slug || (entry.title || "").toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
          return (
            <React.Fragment key={slug}>
              <Link
                href={`/tech/${slug}`}
                style={{ textDecoration: "none", color: "inherit", width: "100%" }}
              >
                <TechCard
                  title={entry.title || "No title"}
                  description={entry.shortDescription ?? ""}
                  category={Array.isArray(entry.category) ? entry.category[0] : entry.category}
                  image={(entry.image || "/images/placeholder.png").replace(/^\/images\/+/, "/images/")}
                  layout="horizontal"
                  index={index}
                />
              </Link>
            </React.Fragment>
          );
        })}
      </div>

      {/* Pagination controls */}
      <div style={{ display: "flex", justifyContent: "center", margin: "2.5rem 0 0" }}>
        {Array.from({ length: totalPages }, (_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`pager-link${currentPage === page ? " pager-link--active" : ""}`}
              aria-current={currentPage === page ? "page" : undefined}
              disabled={currentPage === page}
              style={{ margin: "0 0.25rem" }}
            >
              {page}
            </button>
          );
        })}

        {currentPage < totalPages && (
          <button
            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
            className="pager-link"
          >
            Next →
          </button>
        )}
      </div>
    </main>
    </>
  );
  }

export default function HomepageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Homepage />
    </Suspense>
  );
}
