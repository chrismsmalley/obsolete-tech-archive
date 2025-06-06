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
          alignItems: 'center',
          marginBottom: '2rem',
          width: '100%',
          maxWidth: '1000px',
          minWidth: '300px',
          margin: '0 auto',
          gap: isMobile ? '1rem' : '3rem',
          padding: '1rem',
          boxSizing: 'border-box',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
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
            flex: '0 0 auto',
            width: isMobile ? '80%' : '250px',
            height: isMobile ? 'auto' : '250px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{ width: '180px', height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', borderRadius: '4px', transition: 'transform 0.3s ease' }}>
              <img
                src={props.image}
                alt={props.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  backgroundColor: 'transparent',
                  borderRadius: '4px',
                  transition: 'transform 0.3s ease'
                }}
              />
            </div>
          </div>
          <div style={{
            width: isMobile ? '100%' : '2px',
            height: isMobile ? '2px' : '80%',
            backgroundColor: '#b0b0b0',
            margin: isMobile ? '1rem 0' : '0 1.5rem',
            flexShrink: 0
          }}></div>
          <div style={{
            flex: '1',
            width: '100%',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            maxWidth: '500px'
          }}>
            <h2 style={{ marginTop: 0, fontSize: '1.75rem', fontWeight: '600', marginBottom: '0.5rem', lineHeight: '1.2' }}>{props.title}</h2>
            <p style={{ overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '1.1rem', lineHeight: '1.6', maxHeight: '4.8em', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}