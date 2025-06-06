import React from 'react';

export default function TechCard(props) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      width: '100%',
    }}>
      <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
        <div style={{
          backgroundColor: '#f7f3eb',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.06)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          height: 'auto',
          minHeight: '250px',
          alignItems: 'stretch',
          borderRadius: '8px',
          marginBottom: '2rem',
          maxWidth: '1000px',
          width: '100%',
          paddingLeft: '0.25in',
          paddingRight: '0.25in',
          boxSizing: 'border-box',
          overflow: 'hidden',
          gap: '4rem',
          // alignItems: 'center', // moved above and replaced with 'stretch'
          paddingTop: '1rem',
          paddingBottom: '1rem',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
          e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.06)';
          e.currentTarget.querySelector('img').style.transform = 'scale(1)';
        }}
        >
          <div style={{ width: '100%', maxWidth: '180px', height: 'auto', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', borderRadius: '4px', transition: 'transform 0.3s ease' }}>
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
          <div style={{ width: '1px', height: '80%', backgroundColor: '#e0e0e0' }}></div>
          <div style={{ padding: '1rem 0', width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '500px' }}>
            <h2 style={{ marginTop: 0, fontSize: '1.75rem', fontWeight: '600', marginBottom: '0.5rem', lineHeight: '1.2' }}>{props.title}</h2>
            <p style={{ overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '1.1rem', lineHeight: '1.6', maxHeight: '4.8em', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}