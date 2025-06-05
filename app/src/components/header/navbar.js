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
      padding: '10px 20px',
      borderBottom: '1px solid #eee',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '100%',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="logo-font" style={{ fontSize: '1.75rem', margin: 0 }}>
            OT
          </div>
        </Link>
        <BurgerMenu />
      </div>
    </header>
  );
}
