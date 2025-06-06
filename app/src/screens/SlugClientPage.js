"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";


export default function SlugClientPage() {
  const techEntries = [
    {
      title: "Compact Disc",
      description: "A shiny disc that replaced cassettes and became a standard for music and software distribution.",
      image: "Compact_Disc_image.png",
    },
    // You can add more entries here as needed
  ];
  const params = useParams();
  const slug = params?.slug;
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    if (slug) {
      const normalizedSlug = slug.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
      console.log("Current slug:", slug);
      console.log("Normalized slug:", normalizedSlug);
      console.log("Available slugs:", techEntries.map(item =>
        item.title?.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "")));
      
      const found = techEntries.find(
        (item) =>
          item.title?.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "") === normalizedSlug
      );

      if (!found) {
        console.warn("No matching entry found for slug:", normalizedSlug);
      }

      setEntry(found);
    }
  }, [slug]);

  if (!entry) {
    return (
      <div style={{ padding: "2rem", textAlign: "center", color: "#333" }}>
        <h2>Not Found</h2>
        <p>This page doesn&apos;t seem to exist. Try returning to the archive.</p>
      </div>
    );
  }

  console.log("Resolved entry:", entry);
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
        {entry.image && (
          <img
            src={`/images/${entry.image}`}
            alt={entry.title}
            style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
          />
        )}
      </main>
    </div>
  );
}