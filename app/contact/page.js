'use client';
import React from 'react';
export default function Contact() {
  return (
    <div style={{ padding: "1rem", maxWidth: "700px", margin: "0 auto", fontFamily: "sans-serif", display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "calc(100vh - 8rem)" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem", textAlign: "center" }}>Get in Touch (Like It&apos;s 1999)</h1>
      <p style={{ textAlign: "center" }}>
        Got a burning question about Betamax? Want to tell us your cousin still uses a Zune?
        We&apos;d love to hear from you.
      </p>

      <p style={{ textAlign: "center", marginTop: "1rem" }}>
        For all inquiries, nostalgic rants, or just to say hi, email us at:
      </p>

      <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "1.1rem", marginTop: "0.5rem" }}>
        obsoletetecharchive@gmail.com
      </p>

      <p style={{ textAlign: "center", marginTop: "2rem" }}>
        We’ll get back to you faster than a dial-up handshake. (Okay, maybe a little faster.)
      </p>
    </div>
  );
}
