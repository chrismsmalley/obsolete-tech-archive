

"use client";
import { useEffect, useRef } from "react";

/**
 * Google AdSense reusable slot component
 * Usage: <AdsSlot slot="YOUR_SLOT_ID" format="auto" />
 * Note: This file mirrors AdSlot.js to avoid import typos.
 */
export default function AdSlot({
  slot = "",
  layout = "",
  format = "auto",
  fullWidth = true,
  style = {},
  className = "",
}) {
  const insRef = useRef(null);

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      // AdSense retries on its own; safe to ignore
    }
  }, []);

  return (
    <ins
      ref={insRef}
      className={`adsbygoogle ${className}`}
      style={{ display: "block", textAlign: "center", ...style }}
      data-ad-client="ca-pub-2068398627088024"
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={fullWidth ? "true" : "false"}
      data-ad-layout={layout || undefined}
    />
  );
}