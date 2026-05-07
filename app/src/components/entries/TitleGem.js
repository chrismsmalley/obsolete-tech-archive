import React from "react";

function getToneStyles(tone) {
  switch (tone) {
    case "gold":
      return {
        background:
          "linear-gradient(135deg, rgba(255, 248, 195, 0.99), rgba(240, 185, 30, 0.97))",
        borderColor: "rgba(140, 88, 0, 0.42)",
        color: "#5c3600",
        shadow: "0 0 0 1.5px rgba(255, 255, 255, 0.55) inset, 0 6px 20px rgba(200, 140, 10, 0.32)",
        glow: "rgba(255, 210, 60, 0.85)",
        iconBody:
          "linear-gradient(145deg, rgba(255, 236, 120, 0.99) 0%, rgba(252, 196, 28, 0.99) 40%, rgba(255, 220, 80, 0.99) 65%, rgba(230, 160, 10, 0.99) 100%)",
        iconMetal:
          "linear-gradient(180deg, rgba(255, 252, 220, 0.99), rgba(255, 220, 80, 0.99))",
        iconLabel: "rgba(255, 253, 235, 0.98)",
        animated: true,
      };
    default:
      return {
        background:
          "linear-gradient(135deg, rgba(231, 239, 244, 0.98), rgba(205, 218, 226, 0.95))",
        borderColor: "rgba(78, 91, 101, 0.2)",
        color: "#31424a",
        shadow: "0 0 0 1px rgba(255, 255, 255, 0.42) inset, 0 8px 18px rgba(62, 76, 87, 0.12)",
        glow: "rgba(150, 165, 180, 0.4)",
        iconBody:
          "linear-gradient(180deg, rgba(89, 99, 108, 0.95), rgba(58, 68, 77, 0.98))",
        iconMetal:
          "linear-gradient(180deg, rgba(245, 248, 251, 0.96), rgba(204, 214, 221, 0.96))",
        iconLabel: "rgba(240, 246, 249, 0.92)",
      };
  }
}

export default function TitleGem({ gem, compact = false }) {
  if (!gem?.label) {
    return null;
  }

  const tone = getToneStyles(gem.tone);
  const sizeClass = compact ? "title-gem--compact" : "title-gem--default";

  return (
    <>
      <span
        className={`title-gem ${sizeClass}${tone.animated ? " title-gem--animated" : ""}`}
        aria-label={gem.ariaLabel || gem.label}
        title={gem.label}
        style={{
          color: tone.color,
          "--title-gem-glow": tone.glow,
          "--title-gem-icon-body": tone.iconBody,
          "--title-gem-icon-metal": tone.iconMetal,
          "--title-gem-icon-label": tone.iconLabel,
        }}
      >
        <span className="title-gem__icon" aria-hidden="true">
          <span className="title-gem__icon-notch" />
          <span className="title-gem__icon-label" />
          <span className="title-gem__icon-shutter" />
        </span>
        <span className="title-gem__sr">{gem.label}</span>
      </span>
      <style jsx>{`
        .title-gem {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          color: inherit;
        }

        .title-gem::before {
          content: "";
          position: absolute;
          inset: -40%;
          z-index: -1;
          border-radius: 999px;
          background: radial-gradient(circle, var(--title-gem-glow), transparent 68%);
          opacity: 0.55;
          filter: blur(10px);
        }

        .title-gem--default {
          width: 1.5rem;
          height: 1.5rem;
        }

        .title-gem--compact {
          width: 1.15rem;
          height: 1.15rem;
        }

        /* 5.25" floppy jacket */
        .title-gem__icon {
          position: relative;
          flex: 0 0 auto;
          width: 1.15rem;
          height: 1.15rem;
          border-radius: 0.16rem;
          background: var(--title-gem-icon-body);
          overflow: hidden;
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.14) inset,
            0 0 0 1px rgba(0, 0, 0, 0.4),
            0 4px 12px rgba(0, 0, 0, 0.28);
        }

        /* Large center hole exposing the magnetic disk */
        .title-gem__icon::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -42%);
          width: 0.46rem;
          height: 0.46rem;
          border-radius: 50%;
          background: rgba(5, 2, 0, 0.97);
          box-shadow: 0 0 0 0.03rem rgba(255, 255, 255, 0.08) inset;
          z-index: 3;
        }

        .title-gem--compact .title-gem__icon {
          width: 0.95rem;
          height: 0.95rem;
        }

        /* Write-protect notch — rectangular cutout on the right side */
        .title-gem__icon-notch {
          position: absolute;
          top: 0.3rem;
          right: 0;
          width: 0.09rem;
          height: 0.22rem;
          background: rgba(5, 2, 0, 0.95);
          z-index: 2;
        }

        /* Label strip across the top */
        .title-gem__icon-label {
          position: absolute;
          left: 0.09rem;
          right: 0.09rem;
          top: 0.07rem;
          height: 0.27rem;
          border-radius: 0.03rem;
          background: var(--title-gem-icon-label);
          box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.2);
          z-index: 2;
        }

        /* Head access slot — oblong opening at the bottom */
        .title-gem__icon-shutter {
          position: absolute;
          left: 0.19rem;
          right: 0.19rem;
          bottom: 0.1rem;
          height: 0.09rem;
          border-radius: 0.05rem;
          background: rgba(5, 2, 0, 0.95);
          z-index: 2;
        }

        /* Index hole — small circle beside the center hole */
        .title-gem__icon-shutter::before {
          content: "";
          position: absolute;
          right: -0.38rem;
          top: 50%;
          transform: translateY(-50%);
          width: 0.1rem;
          height: 0.1rem;
          border-radius: 50%;
          background: rgba(5, 2, 0, 0.9);
        }

        .title-gem__sr {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        @keyframes gem-pulse {
          0%, 100% { opacity: 0.15; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(2); }
        }

        @keyframes gem-filter-glow {
          0%, 100% {
            filter: drop-shadow(0 0 1px rgba(255, 200, 30, 0.1));
          }
          50% {
            filter:
              drop-shadow(0 0 5px rgba(255, 210, 40, 1))
              drop-shadow(0 0 12px rgba(255, 180, 0, 0.75));
          }
        }

        @keyframes gem-glint {
          0% { left: -80%; opacity: 0; }
          15% { opacity: 1; }
          40% { left: 140%; opacity: 0; }
          100% { left: 140%; opacity: 0; }
        }

        .title-gem--animated {
          animation: gem-filter-glow 2.8s ease-in-out infinite;
        }

        .title-gem--animated::before {
          animation: gem-pulse 2.8s ease-in-out infinite;
        }

        .title-gem--animated .title-gem__icon::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(
            105deg,
            transparent 20%,
            rgba(255, 255, 255, 0.9) 50%,
            transparent 80%
          );
          width: 55%;
          animation: gem-glint 3.4s ease-in-out infinite;
          pointer-events: none;
        }
      `}</style>
    </>
  );
}
