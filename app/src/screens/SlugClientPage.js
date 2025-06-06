"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { techEntries } from '../data/techEntries';
import Image from "next/image";

export default function SlugClientPage() {
  const params = useParams();
  const slug = params?.slug;
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    if (slug) {
      const found = techEntries.find(
        (item) =>
          item.title &&
          item.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") === slug
      );
      setEntry(found);
    }
  }, [slug]);

  if (!entry) {
    return <div style={{ padding: "2rem", textAlign: "center" }}>Loading...</div>;
  }

  return (
    <div style={{ backgroundColor: "#f7f3eb", minHeight: "100vh" }}>
      <main
        style={{
          padding: "2rem",
          maxWidth: "800px",
          margin: "0 auto",
          width: "90vw",
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
        <Image
          src={`/images/${entry.image}`}
          alt={entry.title}
          width={800}
          height={450}
          style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
        />
      </main>
    </div>
  );
}