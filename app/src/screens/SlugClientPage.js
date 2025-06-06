"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { techEntries } from "../../data/techEntries";

export default function SlugClientPage() {
  const params = useParams();
  const slug = params?.slug;
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    if (slug) {
      const normalizedSlug = slug.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
      const found = techEntries.find(
        (item) =>
          item.title?.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "") === normalizedSlug
      );

      setEntry(found);
    }
  }, [slug]);

  if (!entry) {
    return (
      <div style={{ padding: "2rem", textAlign: "center", color: "#333", marginTop: "4rem" }}>
        <h2>Not Found</h2>
        <p>This page doesn&apos;t seem to exist. Try returning to the archive.</p>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#f7f3eb", minHeight: "100vh" }}>
      <main
        style={{
          padding: "1rem 1rem 3rem",
          maxWidth: "800px",
          margin: "0 auto",
          width: "90vw",
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            fontFamily: "'VT323', 'Courier New', Courier, monospace",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: "normal",
            color: "#333",
          }}
        >
          {entry.title}
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
            color: "#555",
            marginBottom: "2rem",
          }}
        >
          {entry.description}
        </p>
        {entry.image ? (
          <img
            src={`/images/${entry.image}`}
            alt={entry.title}
            style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
          />
        ) : (
          <p style={{ color: "#999" }}>Image unavailable for this entry.</p>
        )}
      </main>
    </div>
  );
}