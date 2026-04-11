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
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 18px 34px rgba(31, 43, 54, 0.12)';
              e.currentTarget.style.borderColor = 'rgba(47, 93, 98, 0.26)';
              e.currentTarget.querySelector('.tech-card__image').style.transform = 'scale(1.06)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--ota-shadow)';
              e.currentTarget.style.borderColor = 'var(--ota-line)';
              e.currentTarget.querySelector('.tech-card__image').style.transform = 'scale(1)';
            }}
          >
            <div className="tech-card__media">
              <div className="tech-card__media-inner">
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
            radial-gradient(circle at 50% 52%, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.45) 28%, transparent 52%),
            radial-gradient(circle at 25% 20%, rgba(44, 103, 112, 0.11), transparent 24%),
            radial-gradient(circle at 78% 78%, rgba(197, 111, 82, 0.08), transparent 20%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(243, 248, 252, 0.92));
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

        .tech-card__media-inner::before {
          content: "";
          position: absolute;
          inset: 12% 14%;
          border-radius: 24px;
          background:
            radial-gradient(circle at center, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.2) 58%, transparent 75%);
          opacity: 0.9;
          pointer-events: none;
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
            height: 160px;
            border-right: none;
            border-radius: 8px;
          }

          .tech-card__media-inner {
            padding: 8px;
          }

          .tech-card__media-inner::before {
            inset: 10% 10%;
            border-radius: 20px;
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
