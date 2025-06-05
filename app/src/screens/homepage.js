"use client";
import React, { useState } from "react";
import { techEntries } from "../data/techEntries";
import Link from "next/link";
import TechCard from "../components/cards/techCard";
import { useSearchParams } from "next/navigation";

export default function Homepage() {
  const entries = Array.isArray(techEntries) ? techEntries : [];
  const [currentPage, setCurrentPage] = useState(1);
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");

  const entriesPerPage = 8;
  const filteredEntries = selectedCategory
    ? entries.filter(
        (entry) =>
          entry.category?.toLowerCase() === selectedCategory.toLowerCase()
      )
    : entries;

  const paginatedEntries = filteredEntries.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );
  const totalPages = Math.ceil(filteredEntries.length / entriesPerPage);

  return (
    <>
    <style jsx>{`
      @keyframes typing {
        from { width: 0 }
        to { width: 100% }
      }

      .typing-text {
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
        border-right: 0.15em solid #4a4a4a;
        animation: typing 2.5s steps(30, end), blink-caret 0.75s step-end 3;
        animation-fill-mode: forwards;
        font-size: 8rem;
        font-weight: 700;
        color: #4a4a4a;
      }

      @keyframes blink-caret {
        0%, 100% { border-color: transparent }
        50% { border-color: #4a4a4a }
      }
    `}</style>
    <main style={{
      padding: "6rem 0 2rem"
    }}>
      {currentPage === 1 && (
      <section style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
        marginBottom: "9rem",
        padding: "1rem 2rem",
        textAlign: "center"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "0rem"
        }}>
          <img src="/images/OT image.png" alt="Site Symbol" style={{ width: "120px", height: "auto", marginBottom: "1.5rem" }} />
        </div>
        <h1>
          <span className="typing-text">Welcome to Obsolete Tech</span>
        </h1>
        <p style={{
          fontSize: "1.25rem",
          maxWidth: "900px",
          color: "#888"
        }}>
          Unearth forgotten gadgets, doomed devices, and digital flops that once had their moment—then faded into tech obscurity.
        </p>
      </section>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          alignItems: "stretch",
          marginTop: "2rem",
          width: "100%",
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        {paginatedEntries.map((entry, index) => {
          const slug = (entry.title || "").toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
          console.log("Entry title:", entry.title, "Image filename:", entry.image);
          return (
            <Link
              key={index}
              href={`/tech/${slug}`}
              style={{ textDecoration: "none", color: "inherit", width: "100%" }}
            >
              <TechCard
                title={entry.title || "No title"}
                description={entry.shortDescription ?? ""}
                image={(entry.image || "/images/placeholder.png").replace(/^\/images\/+/, "/images/")}
              />
            </Link>
          );
        })}
      </div>

      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: currentPage > 1 ? "space-between" : "flex-end",
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
            style={{
              backgroundColor: "transparent",
              color: "#888",
              border: "none",
              fontSize: "0.9rem",
              fontWeight: "500",
              letterSpacing: "0.05rem",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            ← Previous
          </button>
        )}
        {currentPage < totalPages && (
          <button
            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
            style={{
              backgroundColor: "transparent",
              color: "#888",
              border: "none",
              fontSize: "0.9rem",
              fontWeight: "500",
              letterSpacing: "0.05rem",
              textTransform: "uppercase",
              cursor: "pointer",
              marginLeft: currentPage > 1 ? undefined : "auto"
            }}
          >
            Next →
          </button>
        )}
      </div>
    </main>
    </>
  );
}
