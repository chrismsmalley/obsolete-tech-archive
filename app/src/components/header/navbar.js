'use client';
import React, { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BurgerMenu from '../features/burger_menu';
import ArchiveSearch from '../search/ArchiveSearch';

export default function Navbar() {
  return (
    <>
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
        <div className="navbar-shell">
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
            <Image
              src="/images/ot_logo-removebg-preview.png"
              alt="Obsolete Tech Archive logo"
              width={36}
              height={36}
              priority
              style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '0.5rem', borderRadius: '7px', background: '#fff' }}
            />
        </Link>
          <div className="navbar-search">
            <Suspense fallback={<div className="navbar-search__fallback" aria-hidden="true" />}>
              <ArchiveSearch />
            </Suspense>
          </div>
          <div className="burger-wrapper">
            <BurgerMenu />
          </div>
        </div>
      </header>
      <style jsx>{`
        .navbar-shell {
          width: 100%;
          max-width: 1000px;
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0 8px;
          position: relative;
        }

        .navbar-search {
          flex: 1 1 auto;
          min-width: 0;
          max-width: 420px;
          margin-left: auto;
        }

        .navbar-search__fallback {
          height: 46px;
          width: 100%;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(47, 93, 98, 0.08);
        }

        .burger-wrapper {
          flex: 0 0 auto;
        }

        @media (max-width: 768px) {
          .navbar-shell {
            gap: 0.75rem;
          }

          .navbar-search {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
