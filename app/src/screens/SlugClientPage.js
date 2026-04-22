"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { techEntries } from "@/app/src/data/techEntries";
import { normalizeTechEntry } from "@/app/src/lib/techContent";

const SITE_URL = "https://obsoletetecharchive.com";
const EDITORIAL_UPDATED_LABEL = "April 22, 2026";
const EDITORIAL_UPDATED_ISO = "2026-04-22";
const RELATED_CARD_LIMIT = 4;
const STOP_WORDS = new Set([
  "and",
  "the",
  "for",
  "with",
  "from",
  "that",
  "this",
  "into",
  "your",
  "than",
  "later",
  "other",
  "more",
  "like",
  "early",
  "late",
]);

function splitParagraphs(text) {
  return String(text || "")
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function countWords(tech) {
  const sectionWords = Array.isArray(tech.sections)
    ? tech.sections.flatMap((section) => section.body || [])
    : [];

  return [tech.shortDescription, tech.longDescription, ...sectionWords]
    .join(" ")
    .split(/\s+/)
    .map((word) => word.trim())
    .filter(Boolean).length;
}

function getReadTimeLabel(tech) {
  const minutes = Math.max(1, Math.round(countWords(tech) / 180));
  return `${minutes} min read`;
}

function getCategories(entry) {
  if (Array.isArray(entry.category)) {
    return entry.category.filter(Boolean);
  }

  return entry.category ? [entry.category] : [];
}

function getPrimaryCategory(entry) {
  return getCategories(entry)[0] || "";
}

function getKeywordSet(...values) {
  const tokens = values
    .flatMap((value) =>
      String(value || "")
        .toLowerCase()
        .split(/[^a-z0-9]+/),
    )
    .map((token) => token.trim())
    .filter((token) => token.length >= 3 && !STOP_WORDS.has(token));

  return new Set(tokens);
}

function getDecade(year) {
  if (!Number.isFinite(Number(year))) {
    return null;
  }

  return Math.floor(Number(year) / 10) * 10;
}

function getSharedCount(leftSet, rightSet) {
  let count = 0;

  leftSet.forEach((value) => {
    if (rightSet.has(value)) {
      count += 1;
    }
  });

  return count;
}

function getRelatedReason({
  sharedCategoryCount,
  sharedReplacementCount,
  sharedEraCount,
  sameDecade,
}) {
  if (sharedCategoryCount > 0 && sameDecade) {
    return "Same lane • same era";
  }

  if (sharedCategoryCount > 0 && sharedReplacementCount > 0) {
    return "Same lane • same ending";
  }

  if (sharedCategoryCount > 0 && sharedEraCount > 0) {
    return "Same lane • same vibe";
  }

  if (sharedCategoryCount > 0) {
    return "Same lane";
  }

  if (sameDecade) {
    return "Same era";
  }

  return "Nearby relic";
}

function buildArchiveCategoryHref(category) {
  if (!category) {
    return "/#archive-results";
  }

  return `/?filterCategory=${encodeURIComponent(category)}#archive-results`;
}

function getRelatedEntries(currentTech) {
  const currentCategories = getCategories(currentTech);
  const currentCategorySet = new Set(
    currentCategories.map((category) => category.toLowerCase()),
  );
  const currentReplacementSet = getKeywordSet(currentTech.replacedBy);
  const currentEraSet = getKeywordSet(currentTech.peakEra);
  const currentTitleSet = getKeywordSet(currentTech.title);
  const currentDecade = getDecade(currentTech.yearIntroduced);

  return techEntries
    .filter((entry) => entry.slug !== currentTech.slug)
    .map((entry) => {
      const entryCategories = getCategories(entry);
      const entryCategorySet = new Set(
        entryCategories.map((category) => category.toLowerCase()),
      );
      const entryReplacementSet = getKeywordSet(entry.replacedBy);
      const entryEraSet = getKeywordSet(entry.peakEra);
      const entryTitleSet = getKeywordSet(entry.title);
      const sameDecade =
        currentDecade !== null &&
        currentDecade === getDecade(entry.yearIntroduced);
      const sharedCategoryCount = getSharedCount(
        currentCategorySet,
        entryCategorySet,
      );
      const sharedReplacementCount = getSharedCount(
        currentReplacementSet,
        entryReplacementSet,
      );
      const sharedEraCount = getSharedCount(currentEraSet, entryEraSet);
      const sharedTitleCount = getSharedCount(currentTitleSet, entryTitleSet);

      const score =
        sharedCategoryCount * 12 +
        sharedReplacementCount * 4 +
        sharedEraCount * 3 +
        sharedTitleCount * 2 +
        (sameDecade ? 3 : 0);

      return {
        ...entry,
        score,
        relatedReason: getRelatedReason({
          sharedCategoryCount,
          sharedReplacementCount,
          sharedEraCount,
          sameDecade,
        }),
      };
    })
    .filter((entry) => entry.score > 0)
    .sort(
      (left, right) =>
        right.score - left.score || left.title.localeCompare(right.title),
    )
    .slice(0, RELATED_CARD_LIMIT);
}

export default function SlugClientPage({ slug }) {
  const router = useRouter();
  const rawTech = techEntries.find((entry) => entry.slug === slug);
  const tech = rawTech ? normalizeTechEntry(rawTech) : null;

  if (!tech) {
    return <div>Not Found</div>;
  }

  const readTimeLabel = getReadTimeLabel(tech);
  const relatedEntries = getRelatedEntries(tech);
  const primaryCategory = getPrimaryCategory(tech);
  const browseLaneHref = buildArchiveCategoryHref(primaryCategory);
  const leadParagraphs = splitParagraphs(tech.longDescription);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: tech.title,
    description: tech.shortDescription || tech.longDescription,
    image: tech.image
      ? `${SITE_URL}${tech.image}`
      : `${SITE_URL}/images/OT image.png`,
    author: {
      "@type": "Organization",
      name: "Obsolete Tech Archive Editorial Desk",
    },
    publisher: {
      "@type": "Organization",
      name: "Obsolete Tech Archive",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/OT image.png`,
      },
    },
    dateModified: EDITORIAL_UPDATED_ISO,
    mainEntityOfPage: `${SITE_URL}/tech/${tech.slug}`,
    articleSection: Array.isArray(tech.category)
      ? tech.category[0]
      : tech.category,
    keywords: [tech.title, tech.replacedBy, tech.peakEra, tech.category]
      .filter(Boolean)
      .join(", "),
    citation: tech.sources.map((source) => source.url),
  };

  return (
    <div className="artifact-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="artifact-main">
        <div className="artifact-card">
          <div className="artifact-hero">
            <div className="artifact-copy">
              <span className="artifact-kicker">{tech.category}</span>
              <h1 className="artifact-title">{tech.title}</h1>
              <div
                className="artifact-editorial-meta"
                aria-label="Entry metadata"
              >
                <span>Obsolete Tech Archive Editorial Desk</span>
                <span>{EDITORIAL_UPDATED_LABEL}</span>
                <span>{readTimeLabel}</span>
              </div>
              {tech.shortDescription && (
                <p className="artifact-dek">{tech.shortDescription}</p>
              )}
            </div>

            <div className="artifact-image-panel">
              <Image
                src={tech.image}
                alt={tech.title}
                className="artifact-image"
                fill
                sizes="(max-width: 900px) 100vw, 420px"
              />
            </div>
          </div>

          {leadParagraphs.length > 0 && (
            <section
              className="artifact-lead"
              aria-label="Artifact description"
            >
              {leadParagraphs.map((paragraph, index) => (
                <p key={`${tech.slug}-lead-${index}`}>{paragraph}</p>
              ))}
            </section>
          )}

          {tech.facts.length > 0 && (
            <section
              className="artifact-section artifact-section--facts"
              aria-label="Artifact facts"
            >
              <h2 className="artifact-section-title artifact-section-title--facts">
                Quick Bits
              </h2>
              <div className="artifact-facts">
                {tech.facts.map((fact) => (
                  <div
                    className="artifact-fact"
                    key={`${fact.label}-${fact.value}`}
                  >
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
          <br />
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
          <section
            className="artifact-section artifact-section--editorial"
            aria-label="Editorial note"
          >
            <div className="artifact-editorial-shell">
              <h2 className="artifact-section-title artifact-section-title--editorial">
                Archive Note
              </h2>
              <div className="artifact-editorial-grid">
                <div className="artifact-editorial-card">
                  <span className="artifact-editorial-label">
                    How These Entries Work
                  </span>
                  <p>
                    Each archive page is an original editorial summary built to
                    give quick historical context, why the tech mattered, and
                    why it fell out of the spotlight. The tone is intentionally
                    cheeky, but the goal is still to be clear, useful, and
                    grounded in the real product story.
                  </p>
                </div>

                <div className="artifact-editorial-card">
                  <span className="artifact-editorial-label">
                    What This Is Not
                  </span>
                  <p>
                    This is not an academic paper, collector price guide, or
                    exhaustive spec sheet. It is a concise archive entry meant
                    to make old tech legible, memorable, and easy to browse
                    without sanding off all the personality.
                  </p>
                </div>

                <div className="artifact-editorial-card">
                  <span className="artifact-editorial-label">
                    Corrections And Suggestions
                  </span>
                  <p>
                    If you spot something off or want to nominate a better
                    forgotten gadget for the archive, head over to the{" "}
                    <Link href="/contact">contact page</Link> and say so.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {tech.sources.length > 0 && (
            <section
              className="artifact-section"
              aria-label="Sources and further reading"
            >
              <div className="artifact-section-header">
                <div>
                  <h2 className="artifact-section-title">
                    Sources And Further Reading
                  </h2>
                  <p className="artifact-section-intro">
                    Selected links used to ground the historical timeline,
                    format details, or product context.
                  </p>
                </div>
              </div>
              <div className="artifact-sources-list">
                {tech.sources.map((source) => (
                  <a
                    key={`${source.title}-${source.url}`}
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="artifact-source-card"
                  >
                    <strong>{source.title}</strong>
                    {(source.publisher || source.note) && (
                      <span className="artifact-source-meta">
                        {[source.publisher, source.note]
                          .filter(Boolean)
                          .join(" • ")}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </section>
          )}

          {relatedEntries.length > 0 && (
            <section
              className="artifact-section"
              aria-label="Related artifacts"
            >
              <div className="artifact-section-header">
                <div>
                  <h2 className="artifact-section-title">
                    More From This Lane
                  </h2>
                  <p className="artifact-section-intro">
                    A few neighboring relics chosen by lane, era, and how they
                    got replaced.
                  </p>
                </div>
                <Link href={browseLaneHref} className="artifact-section-link">
                  Browse {primaryCategory || "the archive"}
                </Link>
              </div>
              <div className="artifact-related-grid">
                {relatedEntries.map((entry) => (
                  <Link
                    key={entry.slug}
                    href={`/tech/${entry.slug}`}
                    className="artifact-related-card"
                  >
                    <span className="artifact-related-kicker">
                      {entry.relatedReason}
                    </span>
                    <strong>{entry.title}</strong>
                    <span className="artifact-related-meta">
                      {getPrimaryCategory(entry)} • {entry.peakEra}
                    </span>
                    <p>{entry.shortDescription}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <style jsx>{`
            .artifact-back-wrapper {
              display: flex;
              justify-content: center;
              margin-top: 4.5rem;
              margin-bottom: 1rem;
            }

            .pager-link {
              background: transparent;
              border: none;
              color: var(--ota-muted);
              font-size: 0.8rem;
              font-weight: 600;
              letter-spacing: 0.08em;
              text-transform: uppercase;
              cursor: pointer;
              padding: 0.4rem 0.75rem;
              border-radius: 999px;
              border: 1px solid rgba(70, 76, 67, 0.15);
              transition: all 0.15s ease;
            }

            .pager-link:hover,
            .pager-link:focus-visible {
              color: var(--ota-accent);
              border-color: var(--ota-accent);
              background: rgba(47, 93, 98, 0.05);
              outline: none;
            }
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
              background: linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.96),
                rgba(248, 251, 254, 0.94)
              );
              box-shadow: var(--ota-shadow);
              overflow: hidden;
            }

            .artifact-card::before {
              content: "";
              position: absolute;
              inset: 0;
              pointer-events: none;
              background:
                radial-gradient(
                  circle at top right,
                  rgba(47, 93, 98, 0.1),
                  transparent 30%
                ),
                radial-gradient(
                  circle at bottom left,
                  rgba(197, 111, 82, 0.08),
                  transparent 24%
                );
            }

            .artifact-card::after {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              height: 4px;
              background: linear-gradient(
                90deg,
                var(--ota-accent),
                rgba(197, 111, 82, 0.82)
              );
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
              transition:
                color 0.15s ease,
                text-decoration-color 0.15s ease;
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

            .artifact-editorial-meta {
              display: flex;
              flex-wrap: wrap;
              gap: 0.6rem 1rem;
              margin-bottom: 0.95rem;
              color: var(--ota-muted);
              font-size: 0.82rem;
              letter-spacing: 0.04em;
              text-transform: uppercase;
            }

            .artifact-editorial-meta span {
              position: relative;
            }

            .artifact-editorial-meta span:not(:last-child)::after {
              content: "•";
              position: absolute;
              right: -0.65rem;
              color: rgba(70, 76, 67, 0.4);
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
              overflow: hidden;
              background:
                radial-gradient(
                  circle at center,
                  rgba(255, 255, 255, 0.94),
                  rgba(255, 255, 255, 0.25) 58%,
                  transparent 78%
                ),
                linear-gradient(
                  180deg,
                  rgba(255, 255, 255, 0.96),
                  rgba(243, 248, 252, 0.9)
                );
            }

            .artifact-image {
              object-fit: contain;
              object-position: center;
              padding: 1.35rem;
              filter: drop-shadow(0 14px 22px rgba(31, 43, 54, 0.14));
            }

            .artifact-lead {
              position: relative;
              z-index: 1;
              margin: 0 0 1.35rem;
              padding: 1.2rem 1.3rem;
              border-radius: 22px;
              border: 1px solid rgba(47, 93, 98, 0.1);
              background: linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.92),
                rgba(243, 248, 252, 0.88)
              );
              box-shadow: 0 10px 18px rgba(31, 43, 54, 0.05);
            }

            .artifact-lead :global(p) {
              margin: 0 0 0.95rem;
              color: #2f302b;
              font-size: 1.08rem;
              line-height: 1.82;
            }

            .artifact-lead :global(p:last-child) {
              margin-bottom: 0;
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

            .artifact-section--editorial {
              margin-top: 2rem;
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

            .artifact-section-title--editorial {
              margin-bottom: 0.8rem;
              font-size: 1rem;
              letter-spacing: 0.04em;
              text-transform: uppercase;
              color: var(--ota-muted);
            }

            .artifact-section-header {
              display: flex;
              justify-content: space-between;
              align-items: end;
              gap: 1rem;
              margin-bottom: 1rem;
            }

            .artifact-section-intro {
              margin: 0;
              color: var(--ota-muted);
              line-height: 1.6;
            }

            .artifact-section-link {
              flex: 0 0 auto;
              color: var(--ota-accent);
              font-size: 0.86rem;
              font-weight: 700;
              letter-spacing: 0.05em;
              text-decoration: none;
              text-transform: uppercase;
            }

            .artifact-section-link:hover,
            .artifact-section-link:focus-visible {
              text-decoration: underline;
              text-underline-offset: 3px;
              outline: none;
            }

            .artifact-editorial-shell {
              max-width: 920px;
            }

            .artifact-editorial-grid,
            .artifact-related-grid,
            .artifact-sources-list {
              display: grid;
              gap: 1rem;
            }

            .artifact-editorial-grid {
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: 0.8rem;
            }

            .artifact-editorial-card,
            .artifact-related-card,
            .artifact-source-card {
              padding: 1rem 1.05rem;
              border-radius: 20px;
              border: 1px solid rgba(47, 93, 98, 0.1);
              background: rgba(255, 255, 255, 0.82);
            }

            .artifact-editorial-card {
              padding: 0.85rem 0.95rem;
              border-radius: 16px;
              background: rgba(250, 252, 253, 0.72);
            }

            .artifact-editorial-card p,
            .artifact-related-card p {
              margin: 0;
              color: #38403a;
              line-height: 1.75;
            }

            .artifact-editorial-card p {
              font-size: 0.95rem;
              line-height: 1.65;
              color: #4a514b;
            }

            .artifact-sources-list {
              grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            }

            .artifact-source-card {
              text-decoration: none;
              transition:
                transform 0.18s ease,
                box-shadow 0.18s ease,
                border-color 0.18s ease;
            }

            .artifact-source-card strong {
              display: block;
              color: var(--ota-ink);
              font-size: 1rem;
              line-height: 1.45;
            }

            .artifact-source-meta {
              display: block;
              margin-top: 0.5rem;
              color: var(--ota-muted);
              font-size: 0.8rem;
              line-height: 1.5;
            }

            .artifact-editorial-card :global(a) {
              color: var(--ota-accent);
              text-decoration: none;
              font-weight: 600;
            }

            .artifact-editorial-card :global(a:hover) {
              text-decoration: underline;
            }

            .artifact-editorial-label,
            .artifact-related-kicker {
              display: inline-flex;
              align-items: center;
              margin-bottom: 0.75rem;
              padding: 0.3rem 0.7rem;
              border-radius: 999px;
              background: var(--ota-accent-soft);
              color: var(--ota-accent);
              font-size: 0.72rem;
              font-weight: 700;
              letter-spacing: 0.08em;
              text-transform: uppercase;
            }

            .artifact-editorial-label {
              margin-bottom: 0.55rem;
              padding: 0.24rem 0.55rem;
              font-size: 0.64rem;
              letter-spacing: 0.07em;
            }

            .artifact-related-grid {
              grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            }

            .artifact-related-card {
              text-decoration: none;
              transition:
                transform 0.18s ease,
                box-shadow 0.18s ease,
                border-color 0.18s ease;
            }

            .artifact-related-card strong {
              display: block;
              margin-bottom: 0.5rem;
              color: var(--ota-ink);
              font-size: 1rem;
              line-height: 1.3;
            }

            .artifact-related-meta {
              display: block;
              margin-bottom: 0.6rem;
              color: var(--ota-muted);
              font-size: 0.8rem;
              line-height: 1.5;
            }

            .artifact-related-card:hover,
            .artifact-related-card:focus-visible,
            .artifact-source-card:hover,
            .artifact-source-card:focus-visible {
              transform: translateY(-2px);
              border-color: rgba(47, 93, 98, 0.22);
              box-shadow: 0 14px 24px rgba(31, 43, 54, 0.08);
              outline: none;
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

              .artifact-lead {
                padding: 1rem 1rem 1.05rem;
              }

              .artifact-lead :global(p) {
                font-size: 1rem;
                line-height: 1.75;
              }

              .artifact-title {
                font-size: 2rem;
              }

              .artifact-section-header {
                align-items: start;
                flex-direction: column;
              }

              .artifact-editorial-meta {
                gap: 0.35rem 0.8rem;
                font-size: 0.76rem;
              }

              .artifact-section-body :global(p) {
                font-size: 1rem;
              }

              .artifact-editorial-grid {
                grid-template-columns: 1fr;
              }
            }
          `}</style>
        </div>
      </main>
    </div>
  );
}
