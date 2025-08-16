"use client";
import React from "react";
import Link from "next/link";
import { techEntries } from "@/app/src/data/techEntries";

export default function SlugClientPage({ slug }) {
  const tech = techEntries.find((entry) => entry.slug === slug);

  if (!tech) {
    return <div>Not Found</div>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "88vh", backgroundColor: "#FAFAFA" }}>
      <main style={{ flex: 1, display: "flex", justifyContent: "center", padding: "2rem", marginTop: "2rem", backgroundColor: "#FAFAFA", boxSizing: "border-box" }}>
        <div
          style={{
            maxWidth: "800px",
            width: "100%",
            borderRadius: "8px",
            boxShadow: "0 6px 18px rgba(0, 0, 0, 0.08)",
            padding: "2rem",
            backgroundColor: "#ffffff",
            border: "1px solid #eeeeee",
          }}
        >
          <button
            onClick={() => {
              const savedPage = sessionStorage.getItem("currentPage");
              const savedScroll = sessionStorage.getItem("scrollY");
              if (savedPage) {
                window.location.href = `/?page=${savedPage}#scroll-${savedScroll}`;
              } else {
                window.history.back();
              }
            }}
            className="pager-link"
          >
            ← Back
          </button>
          <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem", fontWeight: "600", borderBottom: "1px solid #e0e0e0", paddingBottom: "0.5rem" }}>
            {tech.title}
          </h1>
          <img
            src={tech.image}
            alt={tech.title}
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "auto",
              display: "block",
              margin: "0 auto 1.5rem auto",
              borderRadius: "4px",
            }}
          />
          <p style={{ lineHeight: "1.6", fontSize: "1.1rem", color: "#333" }}>
            {tech.longDescription}
          </p>
          <style jsx>{`
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
            .pager-link:focus-visible {
              outline: 2px solid #4a4a4a;
              outline-offset: 2px;
            }
            h1 {
              color: #222;
            }
            p {
              color: #333;
            }
          `}</style>
        </div>
      </main>
    </div>
  );
}