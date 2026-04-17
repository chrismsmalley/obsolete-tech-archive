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
      backgroundColor: 'rgba(255, 255, 255, 0.86)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      padding: '10px 16px',
      borderBottom: '1px solid rgba(44, 103, 112, 0.12)',
      boxShadow: '0 8px 24px rgba(31, 43, 54, 0.05)',
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
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: 'inherit',
            margin: 0,
            lineHeight: '1',
            padding: '4px 0',
          }}
        >
          <img
            src="/images/ot_logo-removebg-preview.png"
            alt="Obsolete Tech Archive logo"
            width={36}
            height={36}
            style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '0.5rem', borderRadius: '7px', background: '#fff' }}
          />
        </Link>
        <div className="burger-wrapper">
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
}
