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
  const [isHydrated, setIsHydrated] = useState(false);

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
    setSelectedCategory(category);
    setSort(sortParam);
    setCurrentPage(1);
  }, [searchParams]);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

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
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes typing {
        from { width: 0 }
        to { width: 100% }
      }

      @keyframes blink {
        50% { border-color: transparent }
      }

      @keyframes blink-caret {
        0%, 100% { border-color: transparent }
        50% { border-color: #4a4a4a }
      }

      .hide-before-animate {
        visibility: hidden;
        animation: fadeIn 0.2s ease-in forwards;
        animation-delay: 0.1s;
      }

      .typing-text {
        display: inline-block;
        width: 0;
        max-width: 100%;
        overflow: hidden;
        white-space: nowrap;
        border-right: 0.12em solid #4a4a4a;
        animation:
          typing 2.4s steps(24, end) forwards,
          blink-caret 0.75s step-end 4;
        font-size: clamp(2rem, 5vw, 3.75rem);
        font-weight: 700;
        color: #4a4a4a;
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
        background: linear-gradient(90deg, var(--ota-accent), rgba(197, 111, 82, 0.8));
      }

      .homepage-kicker {
        margin: 0 0 1rem;
        font-size: 0.72rem;
        letter-spacing: 0.24em;
        text-transform: uppercase;
        color: var(--ota-accent);
        font-weight: 700;
      }

      .homepage-intro {
        position: relative;
        z-index: 1;
      }

      .homepage-rule {
        width: min(180px, 40%);
        height: 1px;
        margin: 1.75rem auto 0;
        background: linear-gradient(90deg, transparent, rgba(47, 93, 98, 0.45), transparent);
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
          overflow: visible;
          white-space: normal;
          border-right: none;
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

      .techcard-container--hidden {
        visibility: hidden;
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
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  padding: "10px 12px",
                  borderRadius: "14px",
                  display: "inline-block",
                  border: "1px solid var(--ota-line)",
                  boxShadow: "0 10px 24px rgba(31, 43, 54, 0.08)"
                }}
              >
                <Image
                  src="/images/ot_logo-removebg-preview.png"
                  alt="Obsolete Tech Archive logo"
                  width={90}
                  height={90}
                  priority
                  style={{ width: "90px", maxWidth: "100%", height: "auto", marginBottom: "1.5rem" }}
                />
              </div>
              <h1 style={{ margin: "1.25rem 0 0", maxWidth: "100%", overflow: "visible", wordWrap: "break-word" }}>
                <span className="typing-text">Welcome to Obsolete Tech</span>
              </h1>
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
              Obsolete Tech Archive is a digital museum dedicated to preserving the quirky, forgotten, and fascinating gadgets that once captured our imaginations. From short-lived handhelds to early gaming consoles, outdated media formats, and strange tech experiments, we showcase the innovation, ambition, and sometimes misfires of technology&apos;s past. Each artifact tells a story of what was, what could have been, and how technology continuously evolves. Whether you&apos;re a nostalgic collector or a curious explorer, Obsolete Tech Archive offers a growing collection of devices that defined, and then quietly exited, the tech stage.
            </p>
            <div className="homepage-rule" />
          </div>
        </div>
      </section>
      )}
      <div className={`techcard-container${isHydrated ? "" : " techcard-container--hidden"}`}>
        {isHydrated && paginatedEntries.map((entry, index) => {
          const slug = (entry.title || "").toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
          return (
            <React.Fragment key={index}>
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
                />
              </Link>
            </React.Fragment>
          );
        })}
      </div>

      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: currentPage > 1 && currentPage < totalPages ? "space-between" : "center",
          gap: "1rem",
          width: "100%",
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "0 0.5rem"
        }}
      >
        {currentPage > 1 && (
          <button
            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
            className="pager-link"
          >
            ← Previous
          </button>
        )}

        <div
          role="navigation"
          aria-label="Pagination"
          style={{ display: "flex", gap: "0.5rem", justifyContent: "center", flexWrap: "wrap", flex: 1 }}
        >
          {[...Array(totalPages)].map((_, i) => {
            const page = i + 1;
            const isActive = page === currentPage;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                aria-current={isActive ? "page" : undefined}
                disabled={isActive}
                className={`pager-link${isActive ? " pager-link--active" : ""}`}
              >
                {page}
              </button>
            );
          })}
        </div>

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
