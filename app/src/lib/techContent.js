function splitParagraphs(text) {
  return String(text || "")
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function normalizeSections(entry) {
  if (Array.isArray(entry.sections) && entry.sections.length > 0) {
    return entry.sections
      .filter((section) => section && section.heading && section.body)
      .map((section) => ({
        heading: section.heading,
        body: Array.isArray(section.body) ? section.body : [section.body],
      }));
  }

  const paragraphs = splitParagraphs(entry.longDescription);

  if (paragraphs.length === 0) {
    return [];
  }

  if (paragraphs.length === 1) {
    return [
      {
        heading: "The Short Version",
        body: [paragraphs[0]],
      },
    ];
  }

  const derivedSections = [
    {
      heading: "The Deal",
      body: [paragraphs[0]],
    },
  ];

  if (paragraphs[1]) {
    derivedSections.push({
      heading: "Why It Ruled",
      body: [paragraphs[1]],
    });
  }

  if (paragraphs.length > 2) {
    derivedSections.push({
      heading: "How It Bowed Out",
      body: paragraphs.slice(2),
    });
  }

  return derivedSections;
}

function normalizeFacts(entry) {
  const facts = [];

  if (entry.category) {
    facts.push({ label: "Lane", value: entry.category });
  }

  if (entry.yearIntroduced) {
    facts.push({ label: "Dropped", value: String(entry.yearIntroduced) });
  }

  if (entry.peakEra) {
    facts.push({ label: "Peak Era", value: entry.peakEra });
  }

  if (entry.replacedBy) {
    facts.push({ label: "Got Replaced By", value: entry.replacedBy });
  }

  if (Array.isArray(entry.facts)) {
    entry.facts.forEach((fact) => {
      if (fact && fact.label && fact.value) {
        facts.push(fact);
      }
    });
  }

  return facts;
}

export function normalizeTechEntry(entry) {
  return {
    ...entry,
    sections: normalizeSections(entry),
    facts: normalizeFacts(entry),
  };
}
