import React, { useState, useEffect } from 'react';

export default function TechCard(props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      alignItems: 'center',
    }}>
      <div style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        marginTop: '0',
        marginRight: 'auto',
        marginBottom: '0',
        marginLeft: 'auto'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          backgroundColor: 'transparent',
          alignItems: isMobile ? 'center' : 'stretch',
          marginBottom: '2rem',
          width: '100%',
          maxWidth: '1000px',
          minWidth: '300px',
          margin: '0 auto',
          gap: isMobile ? '1rem' : '3rem',
          padding: '1rem',
          boxSizing: 'border-box',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
          height: isMobile ? '300px' : '280px',
          overflow: 'hidden',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          borderRadius: '10px',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)';
          e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.12)';
          e.currentTarget.querySelector('img').style.transform = 'scale(1)';
        }}
        >
          <div style={{
            flex: isMobile ? '0 0 auto' : '0 0 52%',
            width: isMobile ? '100%' : '52%',
            maxWidth: isMobile ? '100%' : '52%',
            height: isMobile ? '160px' : '100%',
            // backgroundColor removed for image container
            borderRadius: isMobile ? '8px' : '8px 0 0 8px',
            borderRight: isMobile ? 'none' : '1px solid #e6e6e6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              padding: isMobile ? '8px' : '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}>
              <img
                src={props.image}
                alt={props.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  backgroundColor: 'transparent',
                  transition: 'transform 0.3s ease'
                }}
              />
            </div>
          </div>
          <div style={{
            width: '100%',
            height: '2px',
            backgroundColor: '#e6e6e6',
            margin: '1rem 0',
            flexShrink: 0,
            display: isMobile ? 'block' : 'none'
          }}></div>
          <div style={{
            flex: '1',
            width: '100%',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            maxWidth: 'none',
            backgroundColor: '#ffffff',
            borderRadius: isMobile ? '8px' : '0 8px 8px 0'
          }}>
            <h2 style={{ marginTop: 0, fontSize: '1.75rem', fontWeight: '600', marginBottom: '0.5rem', lineHeight: '1.2', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{props.title}</h2>
            <p style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              fontSize: isMobile ? '0.95rem' : '1.05rem',
              lineHeight: 1.5,
              display: '-webkit-box',
              WebkitLineClamp: isMobile ? 3 : 2,
              WebkitBoxOrient: 'vertical'
            }}>
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}