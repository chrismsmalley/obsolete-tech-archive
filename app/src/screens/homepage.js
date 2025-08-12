"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { techEntries } from "../data/techEntries";
import Link from "next/link";
import TechCard from "../components/cards/techCard";

function Homepage() {
  const entries = Array.isArray(techEntries) ? techEntries : [];
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sort, setSort] = useState(null);

  const searchParams = useSearchParams();
  useEffect(() => {
    const category = searchParams.get("filterCategory");
    const sortParam = searchParams.get("sort");
    setSelectedCategory(category);
    setSort(sortParam);
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
        overflow: hidden;
        white-space: nowrap;
        border-right: 0.15em solid #4a4a4a;
        animation:
          typing 2.5s steps(30, end),
          blink-caret 0.75s step-end 3;
        animation-fill-mode: forwards;
        font-size: clamp(2.25rem, 6vw, 4.25rem);
        font-weight: 700;
        color: #4a4a4a;
        font-family: "Courier New", Courier, monospace !important;
        visibility: visible !important;
        position: relative;
      }

      .homepage-subtext {
        font-size: clamp(1rem, 2.5vw, 1.5rem) !important;
      }

      .homepage-main {
        padding: 4rem 1rem 4rem;
        background-color: #f7f3eb;
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
        margin-bottom: 16rem;
        padding: 2rem 1rem;
        width: 100%;
        box-sizing: border-box;
        text-align: center;
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
          white-space: normal;
          border-right: none;
          animation: none;
          font-size: 2rem;
          text-align: center;
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
        color: #888;
        font-size: 0.9rem;
        font-weight: 500;
        letter-spacing: 0.05rem;
        text-transform: uppercase;
        cursor: pointer;
        padding: 0;
        text-decoration: none;
        transition: color 0.15s ease, text-decoration-color 0.15s ease;
      }

      .pager-link:hover,
      .pager-link:focus-visible {
        color: #4a4a4a;
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-underline-offset: 3px;
        outline: none;
      }

      .pager-link[aria-current="page"],
      .pager-link--active {
        color: #4a4a4a;
        font-weight: 700;
        cursor: default;
        pointer-events: none;
        text-decoration: none;
      }

      .pager-link:focus-visible {
        outline: 2px solid #4a4a4a;
        outline-offset: 2px;
      }
    `}</style>
    <main className="homepage-main">
      {currentPage === 1 && (
      <section className="homepage-hero">
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "2rem"
        }}>
          <img src="/images/OT image.png" alt="Site Symbol" style={{ width: "90px", maxWidth: "100%", height: "auto", marginBottom: "1.5rem" }} />
          <h1 style={{ margin: 0, maxWidth: "100%", overflow: "hidden", wordWrap: "break-word" }}>
            <span className="typing-text">Welcome to Obsolete Tech</span>
          </h1>
        </div>
        <p
          className="homepage-subtext"
          style={{
            lineHeight: "1.6",
            maxWidth: "900px",
            color: "#888",
            padding: "0 1rem"
          }}
        >
          Obsolete Tech Archive is a digital museum dedicated to preserving the quirky, forgotten, and fascinating gadgets that once captured our imaginations. From short-lived handhelds to early gaming consoles, outdated media formats, and strange tech experiments, we showcase the innovation, ambition, and sometimes misfires of technology&apos;s past. Each artifact tells a story — of what was, what could have been, and how technology continuously evolves. Whether you&apos;re a nostalgic collector or a curious explorer, Obsolete Tech Archive offers a growing collection of devices that defined, and then quietly exited, the tech stage.
        </p>
      </section>
      )}
      <div className="techcard-container">
        {paginatedEntries.map((entry, index) => {
          const slug = (entry.title || "").toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
          console.log("Entry title:", entry.title, "Image filename:", entry.image);
          return (
            <React.Fragment key={index}>
              <Link
                href={`/tech/${slug}`}
                style={{ textDecoration: "none", color: "inherit", width: "100%" }}
              >
                <TechCard
                  title={entry.title || "No title"}
                  description={entry.shortDescription ?? ""}
                  image={(entry.image || "/images/placeholder.png").replace(/^\/images\/+/, "/images/")}
                  layout="horizontal"
                />
              </Link>
              {index === 0 && (
                <>
                  {/* Ezoic - under_first_paragraph - under_first_paragraph */}
                  <div id="ezoic-pub-ad-placeholder-109" style={{ width: "100%" }}></div>
                  {/* End Ezoic - under_first_paragraph - under_first_paragraph */}
                  <script
                    defer
                    dangerouslySetInnerHTML={{
                      __html: `
                        ezstandalone.cmd.push(function () {
                          ezstandalone.showAds(109);
                        });
                      `,
                    }}
                  />
                </>
              )}
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
