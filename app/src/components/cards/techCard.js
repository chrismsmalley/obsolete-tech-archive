import Image from 'next/image';
import React from 'react';

export default function TechCard(props) {
  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'stretch',
      }}>
        <div style={{
          width: '100%',
          maxWidth: '1000px',
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          marginTop: '0',
          marginRight: 'auto',
          marginBottom: '0',
          marginLeft: 'auto'
        }}>
          <div
            className="tech-card"
          >
            <div className="tech-card__media">
              <div className="tech-card__media-inner aspect-ratio-fallback">
                <Image
                  src={props.image}
                  alt={props.title}
                  className="tech-card__image"
                  width={1200}
                  height={900}
                  sizes="(max-width: 767px) 100vw, 52vw"
                  style={{
                    display: 'block',
                    width: '100%',
                    maxWidth: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                  priority={props.index === 0}
                />
              </div>
            </div>
            <div className="tech-card__divider" />
            <div className="tech-card__content">
              <div className="tech-card__meta">
                <span className="tech-card__badge">{props.category || 'Archive'}</span>
              </div>
              <h2 className="tech-card__title">{props.title}</h2>
              <p className="tech-card__description">{props.description}</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .tech-card {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          width: 100%;
          min-width: 0;
          height: 280px;
          margin: 0 auto;
          padding: 1rem;
          gap: 3rem;
          box-sizing: border-box;
          overflow: hidden;
          border-radius: 10px;
          border: 1px solid var(--ota-line);
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(248, 251, 254, 0.95));
          box-shadow: var(--ota-shadow);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .tech-card:hover,
        .tech-card:focus-within {
          transform: translateY(-4px);
          box-shadow: 0 18px 34px rgba(31, 43, 54, 0.12);
          border-color: rgba(47, 93, 98, 0.26);
        }

        .tech-card__media {
          flex: 0 0 52%;
          width: 52%;
          max-width: 52%;
          height: 100%;
          min-width: 0;
          border-right: 1px solid #e6e6e6;
          border-radius: 8px 0 0 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background:
            radial-gradient(circle at 18% 16%, rgba(44, 103, 112, 0.07), transparent 22%),
            radial-gradient(circle at 82% 78%, rgba(197, 111, 82, 0.06), transparent 18%),
            linear-gradient(180deg, rgba(252, 253, 254, 0.98), rgba(244, 248, 251, 0.94));
        }

        .tech-card__media-inner {
          width: 100%;
          height: 100%;
          min-height: 0;
          padding: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }
        /* Aspect ratio fallback for image container */
        .aspect-ratio-fallback {
          aspect-ratio: 4 / 3;
          position: relative;
        }
        .aspect-ratio-fallback > :global(img),
        .aspect-ratio-fallback > .tech-card__image {
          position: absolute !important;
          top: 0;
          left: 0;
          width: 100% !important;
          height: 100% !important;
        }

        .tech-card__media-inner::after {
          content: "";
          position: absolute;
          inset: 8%;
          border-radius: 22px;
          border: 1px solid rgba(44, 103, 112, 0.08);
          pointer-events: none;
        }

        .tech-card__image {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
          object-fit: contain;
          background-color: transparent;
          filter: drop-shadow(0 14px 22px rgba(31, 43, 54, 0.14));
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .tech-card:hover .tech-card__image,
        .tech-card:focus-within .tech-card__image {
          transform: scale(1.04);
        }

        .tech-card__divider {
          display: none;
        }

        .tech-card__content {
          flex: 1 1 0;
          min-width: 0;
          height: 100%;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-color: rgba(255, 255, 255, 0.96);
          border-radius: 0 8px 8px 0;
        }

        .tech-card__meta {
          display: flex;
          align-items: center;
          margin-bottom: 0.85rem;
        }

        .tech-card__badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 28px;
          padding: 0.2rem 0.65rem;
          border-radius: 999px;
          background: var(--ota-accent-soft);
          border: 1px solid rgba(47, 93, 98, 0.14);
          color: var(--ota-accent);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .tech-card__title {
          margin-top: 0;
          margin-bottom: 0.5rem;
          color: #2f302b;
          font-size: clamp(1.55rem, 2vw, 1.75rem);
          font-weight: 600;
          line-height: 1.15;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .tech-card__description {
          margin: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          color: var(--ota-muted);
          font-size: 1rem;
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        @media (max-width: 767px) {
          .tech-card {
            flex-direction: column;
            gap: 1rem;
            height: auto;
            min-height: 300px;
            overflow: visible;
          }

          .tech-card__media {
            flex: 0 0 auto;
            width: 100%;
            max-width: 100%;
            height: 38vw;
            min-height: 180px;
            max-height: 260px;
            border-right: none;
            border-radius: 8px;
          }

          .tech-card__media-inner {
            padding: 8px;
            height: 100%;
            min-height: 0;
          }
          /* Remove aspect-ratio fallback height/padding for mobile */
          .aspect-ratio-fallback {
            aspect-ratio: 4 / 3;
            height: 100%;
            padding-bottom: 0;
          }

          .tech-card__media-inner::after {
            inset: 6%;
            border-radius: 18px;
          }

          .tech-card__divider {
            display: block;
            width: 100%;
            height: 2px;
            margin: 0;
            background-color: #e6e6e6;
            flex-shrink: 0;
          }

          .tech-card__content {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            border-radius: 8px;
            justify-content: flex-start;
          }

          .tech-card__meta {
            margin-bottom: 0.75rem;
          }

          .tech-card__title {
            font-size: 1.5rem;
          }

          .tech-card__description {
            font-size: 0.95rem;
            -webkit-line-clamp: 3;
            overflow: visible;
          }
        }
      `}</style>
    </>
  );
}
