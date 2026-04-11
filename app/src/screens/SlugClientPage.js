"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { techEntries } from "@/app/src/data/techEntries";
import { normalizeTechEntry } from "@/app/src/lib/techContent";

export default function SlugClientPage({ slug }) {
  const router = useRouter();
  const rawTech = techEntries.find((entry) => entry.slug === slug);
  const tech = rawTech ? normalizeTechEntry(rawTech) : null;

  if (!tech) {
    return <div>Not Found</div>;
  }

  return (
    <div className="artifact-page">
      <main className="artifact-main">
        <div className="artifact-card">
          <button
            onClick={() => {
              if (window.history.length > 1) {
                router.back();
              } else {
                router.push("/");
              }
            }}
            className="pager-link"
          >
            ← Back
          </button>
          <div className="artifact-hero">
            <div className="artifact-copy">
              <span className="artifact-kicker">{tech.category}</span>
              <h1 className="artifact-title">{tech.title}</h1>
              {tech.shortDescription && (
                <p className="artifact-dek">{tech.shortDescription}</p>
              )}
            </div>
            <div className="artifact-image-panel">
              <Image
                src={tech.image}
                alt={tech.title}
                className="artifact-image"
                width={1200}
                height={900}
                sizes="(max-width: 900px) 100vw, 420px"
              />
            </div>
          </div>

          {tech.facts.length > 0 && (
            <section className="artifact-section artifact-section--facts" aria-label="Artifact facts">
              <h2 className="artifact-section-title artifact-section-title--facts">Quick Bits</h2>
              <div className="artifact-facts">
                {tech.facts.map((fact) => (
                  <div className="artifact-fact" key={`${fact.label}-${fact.value}`}>
                    <span className="artifact-fact-label">{fact.label}</span>
                    <span className="artifact-fact-value">{fact.value}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {tech.sections.map((section) => (
            <section className="artifact-section" key={section.heading}>
              <h2 className="artifact-section-title">{section.heading}</h2>
              <div className="artifact-section-body">
                {section.body.map((paragraph, index) => (
                  <p key={`${section.heading}-${index}`}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          <style jsx>{`
            .artifact-page {
              display: flex;
              flex-direction: column;
              min-height: 88vh;
              width: 100%;
              background: transparent;
            }
            .artifact-main {
              flex: 1;
              display: flex;
              justify-content: center;
              align-items: flex-start;
              width: 100%;
              padding: 3rem 1rem 4rem;
              margin-top: 1rem;
              box-sizing: border-box;
            }
            .artifact-card {
              position: relative;
              width: min(1120px, 100%);
              margin: 0 auto;
              padding: 2.25rem;
              border-radius: 28px;
              border: 1px solid var(--ota-line);
              background:
                linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(248, 251, 254, 0.94));
              box-shadow: var(--ota-shadow);
              overflow: hidden;
            }
            .artifact-card::before {
              content: "";
              position: absolute;
              inset: 0;
              pointer-events: none;
              background:
                radial-gradient(circle at top right, rgba(47, 93, 98, 0.1), transparent 30%),
                radial-gradient(circle at bottom left, rgba(197, 111, 82, 0.08), transparent 24%);
            }
            .artifact-card::after {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              height: 4px;
              background: linear-gradient(90deg, var(--ota-accent), rgba(197, 111, 82, 0.82));
            }
            .pager-link {
              position: relative;
              z-index: 1;
              background: transparent;
              border: none;
              color: var(--ota-muted);
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
              color: var(--ota-accent);
              text-decoration: underline;
              text-decoration-thickness: 2px;
              text-underline-offset: 3px;
              outline: none;
            }
            .pager-link:focus-visible {
              outline: 2px solid var(--ota-accent);
              outline-offset: 2px;
            }
            .artifact-hero {
              position: relative;
              z-index: 1;
              display: grid;
              grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
              gap: 2.25rem;
              align-items: start;
              margin-top: 1rem;
              margin-bottom: 2rem;
            }
            .artifact-copy {
              min-width: 0;
              max-width: 62ch;
            }
            .artifact-kicker {
              display: inline-flex;
              align-items: center;
              min-height: 32px;
              padding: 0.25rem 0.75rem;
              border-radius: 999px;
              background: var(--ota-accent-soft);
              border: 1px solid rgba(47, 93, 98, 0.14);
              color: var(--ota-accent);
              font-size: 0.74rem;
              font-weight: 700;
              letter-spacing: 0.08em;
              text-transform: uppercase;
            }
            .artifact-title {
              margin: 1rem 0 0.85rem;
              color: var(--ota-ink);
              font-size: clamp(2rem, 4vw, 3rem);
              line-height: 1.08;
            }
            .artifact-dek {
              margin: 0;
              color: var(--ota-muted);
              font-size: 1.05rem;
              line-height: 1.7;
            }
            .artifact-image-panel {
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 320px;
              padding: 1.35rem;
              border-radius: 24px;
              border: 1px solid rgba(47, 93, 98, 0.1);
              background:
                radial-gradient(circle at center, rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.25) 58%, transparent 78%),
                linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(243, 248, 252, 0.9));
            }
            .artifact-image {
              width: 100%;
              max-width: 420px;
              height: auto;
              display: block;
              object-fit: contain;
              filter: drop-shadow(0 14px 22px rgba(31, 43, 54, 0.14));
            }
            .artifact-section {
              position: relative;
              z-index: 1;
              margin-top: 1.5rem;
              padding-top: 1.5rem;
              border-top: 1px solid rgba(70, 76, 67, 0.12);
            }
            .artifact-section--facts {
              padding-top: 0;
              border-top: none;
              margin-top: 0;
            }
            .artifact-facts {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
              gap: 0.85rem;
            }
            .artifact-fact {
              display: flex;
              flex-direction: column;
              gap: 0.3rem;
              padding: 0.9rem 1rem;
              border-radius: 18px;
              border: 1px solid rgba(47, 93, 98, 0.1);
              background: rgba(255, 255, 255, 0.82);
            }
            .artifact-fact-label {
              color: var(--ota-muted);
              font-size: 0.74rem;
              font-weight: 700;
              letter-spacing: 0.08em;
            }
            .artifact-fact-value {
              color: var(--ota-ink);
              font-size: 1rem;
              font-weight: 600;
            }
            .artifact-section-title {
              margin: 0 0 0.85rem;
              color: var(--ota-ink);
              font-size: 1.2rem;
              line-height: 1.2;
            }
            .artifact-section-title--facts {
              margin-bottom: 1rem;
            }
            .artifact-section-body :global(p) {
              margin: 0 0 1rem;
              color: #38403a;
              font-size: 1.05rem;
              line-height: 1.8;
            }
            .artifact-section-body :global(p:last-child) {
              margin-bottom: 0;
            }
            @media (max-width: 767px) {
              .artifact-main {
                padding: 1.5rem 0.85rem 3rem;
              }
              .artifact-card {
                padding: 1.35rem;
                border-radius: 22px;
              }
              .artifact-hero {
                grid-template-columns: 1fr;
                gap: 1.25rem;
                margin-bottom: 1.5rem;
              }
              .artifact-image-panel {
                min-height: 220px;
                padding: 1rem;
              }
              .artifact-title {
                font-size: 2rem;
              }
              .artifact-section-body :global(p) {
                font-size: 1rem;
              }
            }
          `}</style>
        </div>
      </main>
    </div>
  );
}
