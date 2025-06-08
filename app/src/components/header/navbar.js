'use client';
import React from 'react';
import Link from 'next/link';
import BurgerMenu from '../features/burger_menu';

export default function Navbar() {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: '#f5f2ea',
      padding: '10px 16px',
      borderBottom: '1px solid #eee',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1000px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: '0 8px',
        position: 'relative',
      }}>
        <Link
          href="/"
          aria-label="Go to homepage"
          className="logo-font"
          style={{
            fontSize: 'clamp(1.25rem, 6vw, 1.75rem)',
            textDecoration: 'none',
            color: 'inherit',
            margin: 0,
            lineHeight: '1',
            padding: '4px 0',
          }}
        >
          OT
        </Link>
        <div className="burger-wrapper">
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
}
