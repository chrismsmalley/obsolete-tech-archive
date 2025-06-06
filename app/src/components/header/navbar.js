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
      }}>
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }} aria-label="Go to homepage">
          <div className="logo-font" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', margin: 0 }}>
            OT
          </div>
        </Link>
        <BurgerMenu />
      </div>
    </header>
  );
}
