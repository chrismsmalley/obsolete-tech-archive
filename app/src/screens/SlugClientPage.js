"use client";
import React from "react";
import { techEntries } from "@/app/src/data/techEntries";

export default function SlugClientPage({ slug }) {
  const tech = techEntries.find((entry) => entry.slug === slug);

  if (!tech) {
    return <div>Not Found</div>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "88vh" }}>
      <main style={{ flex: 1, display: "flex", justifyContent: "center", padding: "2rem", marginTop: "2rem" }}>
        <div
          style={{
            maxWidth: "800px",
            width: "100%",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            padding: "2rem",
          }}
        >
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
        </div>
      </main>
    </div>
  );
}