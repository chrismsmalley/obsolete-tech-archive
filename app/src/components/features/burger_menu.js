'use client';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showExplore, setShowExplore] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef();
  const toggleRef = useRef();

  const toggleMenu = () => {
    if (isOpen) {
      setShowCategories(false);
      setShowExplore(false);
      setShowAbout(false);
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setIsOpen(false);
        setShowCategories(false);
        setShowExplore(false);
        setShowAbout(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <button
        ref={toggleRef}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          width: '30px',
          height: '30px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 0,
        }}
      >
        <span
          style={{
            position: 'absolute',
            width: '100%',
            height: '4px',
            backgroundColor: 'black',
            borderRadius: '2px',
            transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'translateY(-8px)',
            transition: 'transform 0.3s ease-in-out',
          }}
        />
        <span
          style={{
            position: 'absolute',
            width: '100%',
            height: '4px',
            backgroundColor: 'grey',
            borderRadius: '2px',
            opacity: isOpen ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out',
          }}
        />
        <span
          style={{
            position: 'absolute',
            width: '100%',
            height: '4px',
            backgroundColor: 'black',
            borderRadius: '2px',
            transform: isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'translateY(8px)',
            transition: 'transform 0.3s ease-in-out',
          }}
        />
      </button>
      {isOpen && (
        <div
          ref={menuRef}
          role="menu"
          style={{
            position: 'fixed',
            top: '60px',
            right: isMobile ? '1rem' : 'auto',
            left: isMobile ? 'auto' : 'auto',
            transform: 'none',
            width: isMobile ? '220px' : 'auto',
            backgroundColor: 'white',
            borderRadius: '8px',
            border: '1px solid #ccc',
            padding: '1rem',
            zIndex: 10000,
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            animation: 'fadeIn 0.3s ease-out',
          }}
        >
          <style>
            {`
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: scale(0.95);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
            `}
          </style>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {/* Categories Section */}
            <li
              onClick={() => setShowCategories(!showCategories)}
              style={{
                fontFamily: '"Courier New", Courier, monospace',
                fontWeight: 'normal',
                fontSize: '0.9rem',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                marginTop: '1rem',
                cursor: 'pointer',
                color: '#666',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid transparent',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#222';
                e.currentTarget.style.borderBottom = '1px solid #666';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#666';
                e.currentTarget.style.borderBottom = '1px solid transparent';
              }}
            >
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                Browse{' '}
                <span
                  style={{
                    transform: showCategories ? 'rotate(90deg)' : 'rotate(180deg)',
                    transition: 'transform 0.2s',
                    display: 'inline-block',
                  }}
                >
                  ❯
                </span>
              </span>
            </li>
            {showCategories && (
              <>
                <li
                  style={{
                    fontFamily: '"Courier New", Courier, monospace',
                    fontWeight: 'normal',
                    fontSize: '0.9rem',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    color: '#555',
                  }}
                >
                  <Link
                    role="menuitem"
                    href="/?filterCategory=media&sort=recent"
                    style={{
                      textDecoration: 'none',
                      color: '#555',
                      fontFamily: '"Courier New", Courier, monospace',
                      fontSize: '0.9rem',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      padding: '0.25rem 0.5rem',
                      display: 'inline-block',
                      transition: 'color 0.2s ease, transform 0.2s ease',
                    }}
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#2f4f4f';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'black';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    Media
                  </Link>
                </li>
                <li
                  style={{
                    fontFamily: '"Courier New", Courier, monospace',
                    fontWeight: 'normal',
                    fontSize: '0.9rem',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    color: '#555',
                  }}
                >
                  <Link
                    role="menuitem"
                    href="/?filterCategory=storage&sort=recent"
                    style={{
                      textDecoration: 'none',
                      color: '#555',
                      fontFamily: '"Courier New", Courier, monospace',
                      fontSize: '0.9rem',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      padding: '0.25rem 0.5rem',
                      display: 'inline-block',
                      transition: 'color 0.2s ease, transform 0.2s ease',
                    }}
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#2f4f4f';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'black';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    Storage
                  </Link>
                </li>
                <li
                  style={{
                    fontFamily: '"Courier New", Courier, monospace',
                    fontWeight: 'normal',
                    fontSize: '0.9rem',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    color: '#555',
                  }}
                >
                  <Link
                    role="menuitem"
                    href="/?filterCategory=communication&sort=recent"
                    style={{
                      textDecoration: 'none',
                      color: '#555',
                      fontFamily: '"Courier New", Courier, monospace',
                      fontSize: '0.9rem',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      padding: '0.25rem 0.5rem',
                      display: 'inline-block',
                      transition: 'color 0.2s ease, transform 0.2s ease',
                    }}
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#2f4f4f';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'black';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    Communication
                  </Link>
                </li>
                {/*
                <li
                  style={{
                    fontFamily: '"Courier New", Courier, monospace',
                    fontWeight: 'normal',
                    fontSize: '0.75rem',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    color: '#555',
                  }}
                >
                  <Link
                    role="menuitem"
                    href="/random"
                    style={{
                      textDecoration: 'none',
                      color: '#555',
                      fontFamily: '"Courier New", Courier, monospace',
                      fontSize: '0.75rem',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      padding: '0.25rem 0.5rem',
                      display: 'inline-block',
                      transition: 'color 0.2s ease, transform 0.2s ease',
                    }}
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#2f4f4f';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'black';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    Random Entry
                  </Link>
                </li>
                */}
                <li
                  style={{
                    fontFamily: '"Courier New", Courier, monospace',
                    fontWeight: 'normal',
                    fontSize: '0.9rem',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    color: '#555',
                  }}
                >
                  <Link
                    role="menuitem"
                    href="/?sort=recent"
                    style={{
                      textDecoration: 'none',
                      color: '#555',
                      fontFamily: '"Courier New", Courier, monospace',
                      fontSize: '0.9rem',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      padding: '0.25rem 0.5rem',
                      display: 'inline-block',
                      transition: 'color 0.2s ease, transform 0.2s ease',
                      fontWeight: 'normal',
                    }}
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#2f4f4f';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'black';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    All
                  </Link>
                </li>
                {/*
                <li>
                  <Link
                    role="menuitem"
                    href="/?category=gaming"
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                      fontWeight: '500',
                      padding: '0.25rem 0.5rem',
                      display: 'inline-block',
                      transition: 'color 0.2s ease, transform 0.2s ease',
                    }}
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#0070f3';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'black';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    Gaming
                  </Link>
                </li>
                <li>
                  <Link
                    role="menuitem"
                    href="/?category=computing"
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                      fontWeight: '500',
                      padding: '0.25rem 0.5rem',
                      display: 'inline-block',
                      transition: 'color 0.2s ease, transform 0.2s ease',
                    }}
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#0070f3';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'black';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    Computing
                  </Link>
                </li>
                <li>
                  <Link
                    role="menuitem"
                    href="/?category=audio"
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                      fontWeight: '500',
                      padding: '0.25rem 0.5rem',
                      display: 'inline-block',
                      transition: 'color 0.2s ease, transform 0.2s ease',
                    }}
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#0070f3';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'black';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    Audio
                  </Link>
                </li>
                <li>
                  <Link
                    role="menuitem"
                    href="/?category=video"
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                      fontWeight: '500',
                      padding: '0.25rem 0.5rem',
                      display: 'inline-block',
                      transition: 'color 0.2s ease, transform 0.2s ease',
                    }}
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#0070f3';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'black';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    Video
                  </Link>
                </li>
                <li>
                  <Link
                    role="menuitem"
                    href="/?category=photography"
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                      fontWeight: '500',
                      padding: '0.25rem 0.5rem',
                      display: 'inline-block',
                      transition: 'color 0.2s ease, transform 0.2s ease',
                    }}
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#0070f3';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'black';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    Photography
                  </Link>
                </li>
                <li>
                  <Link
                    role="menuitem"
                    href="/?category=wearables"
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                      fontWeight: '500',
                      padding: '0.25rem 0.5rem',
                      display: 'inline-block',
                      transition: 'color 0.2s ease, transform 0.2s ease',
                    }}
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#0070f3';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'black';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    Wearables
                  </Link>
                </li>
                <li>
                  <Link
                    role="menuitem"
                    href="/?category=office"
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                      fontWeight: '500',
                      padding: '0.25rem 0.5rem',
                      display: 'inline-block',
                      transition: 'color 0.2s ease, transform 0.2s ease',
                    }}
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#0070f3';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'black';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    Office Tech
                  </Link>
                </li>
                <li>
                  <Link
                    role="menuitem"
                    href="/?category=utilities"
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                      fontWeight: '500',
                      padding: '0.25rem 0.5rem',
                      display: 'inline-block',
                      transition: 'color 0.2s ease, transform 0.2s ease',
                    }}
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#0070f3';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'black';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    Utilities
                  </Link>
                </li>
                */}
              </>
            )}
            {/* Get Involved Section */}
            <li
              onClick={() => setShowExplore(!showExplore)}
              style={{
                fontFamily: '"Courier New", Courier, monospace',
                fontWeight: 'normal',
                fontSize: '0.9rem',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                marginTop: '1rem',
                cursor: 'pointer',
                color: '#666',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid transparent',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#222';
                e.currentTarget.style.borderBottom = '1px solid #666';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#666';
                e.currentTarget.style.borderBottom = '1px solid transparent';
              }}
            >
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                Get Involved{' '}
                <span
                  style={{
                    transform: showExplore ? 'rotate(90deg)' : 'rotate(180deg)',
                    transition: 'transform 0.2s',
                    display: 'inline-block',
                  }}
                >
                  ❯
                </span>
              </span>
            </li>
            {showExplore && (
              <>
                <li
                  style={{
                    fontFamily: '"Courier New", Courier, monospace',
                    fontWeight: 'normal',
                    fontSize: '0.9rem',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    color: 'black',
                  }}
                >
                  <Link
                    role="menuitem"
                    href="/newsletter"
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                      fontFamily: '"Courier New", Courier, monospace',
                      fontSize: '0.9rem',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      padding: '0.25rem 0.5rem',
                      display: 'inline-block',
                      transition: 'color 0.2s ease, transform 0.2s ease',
                    }}
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#2f4f4f';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'black';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    Newsletter
                  </Link>
                </li>
                <li
                  style={{
                    fontFamily: '"Courier New", Courier, monospace',
                    fontWeight: 'normal',
                    fontSize: '0.9rem',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    color: 'black',
                  }}
                >
                  <Link
                    role="menuitem"
                    href="/submit"
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                      fontFamily: '"Courier New", Courier, monospace',
                      fontSize: '0.9rem',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      padding: '0.25rem 0.5rem',
                      display: 'inline-block',
                      transition: 'color 0.2s ease, transform 0.2s ease',
                    }}
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#2f4f4f';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'black';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    Submit an Artifact
                  </Link>
                </li>
              </>
            )}
            {/* Info Section */}
            <li
              onClick={() => setShowAbout(!showAbout)}
              style={{
                fontFamily: '"Courier New", Courier, monospace',
                fontWeight: 'normal',
                fontSize: '0.9rem',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                marginTop: '1rem',
                cursor: 'pointer',
                color: '#666',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid transparent',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#222';
                e.currentTarget.style.borderBottom = '1px solid #666';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#666';
                e.currentTarget.style.borderBottom = '1px solid transparent';
              }}
            >
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                Info{' '}
                <span
                  style={{
                    transform: showAbout ? 'rotate(90deg)' : 'rotate(180deg)',
                    transition: 'transform 0.2s',
                    display: 'inline-block',
                  }}
                >
                  ❯
                </span>
              </span>
            </li>
            {showAbout && (
              <>
                <li
                  style={{
                    fontFamily: '"Courier New", Courier, monospace',
                    fontWeight: 'normal',
                    fontSize: '0.9rem',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    color: 'black',
                  }}
                >
                  <Link
                    role="menuitem"
                    href="/about"
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                      fontFamily: '"Courier New", Courier, monospace',
                      fontSize: '0.9rem',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      padding: '0.25rem 0.5rem',
                      display: 'inline-block',
                      transition: 'color 0.2s ease, transform 0.2s ease',
                    }}
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#2f4f4f';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'black';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    About
                  </Link>
                </li>
                <li
                  style={{
                    fontFamily: '"Courier New", Courier, monospace',
                    fontWeight: 'normal',
                    fontSize: '0.9rem',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    color: 'black',
                  }}
                >
                  <Link
                    role="menuitem"
                    href="/privacy_policy"
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                      fontFamily: '"Courier New", Courier, monospace',
                      fontSize: '0.9rem',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      padding: '0.25rem 0.5rem',
                      display: 'inline-block',
                      transition: 'color 0.2s ease, transform 0.2s ease',
                    }}
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#2f4f4f';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'black';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li
                  style={{
                    fontFamily: '"Courier New", Courier, monospace',
                    fontWeight: 'normal',
                    fontSize: '0.9rem',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    color: 'black',
                  }}
                >
                  <Link
                    role="menuitem"
                    href="/contact"
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                      fontFamily: '"Courier New", Courier, monospace',
                      fontSize: '0.9rem',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      padding: '0.25rem 0.5rem',
                      display: 'inline-block',
                      transition: 'color 0.2s ease, transform 0.2s ease',
                    }}
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#2f4f4f';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'black';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    Contact
                  </Link>
                </li>
                <li
                  style={{
                    fontFamily: '"Courier New", Courier, monospace',
                    fontWeight: 'normal',
                    fontSize: '0.9rem',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    color: 'black',
                  }}
                >
                                    <Link
                    role="menuitem"
                    href="/cookie"
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                      fontFamily: '"Courier New", Courier, monospace',
                      fontSize: '0.9rem',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      padding: '0.25rem 0.5rem',
                      display: 'inline-block',
                      transition: 'color 0.2s ease, transform 0.2s ease',
                    }}
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#2f4f4f';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'black';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    Cookie Policy
                  </Link>
                </li>
                <li
                  style={{
                    fontFamily: '"Courier New", Courier, monospace',
                    fontWeight: 'normal',
                    fontSize: '0.9rem',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    color: 'black',
                  }}
                >
                  <a
                    role="menuitem"
                    href="https://coff.ee/obsoletetecharchive"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                      fontFamily: '"Courier New", Courier, monospace',
                      fontSize: '0.9rem',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      padding: '0.25rem 0.5rem',
                      display: 'inline-block',
                      transition: 'color 0.2s ease, transform 0.2s ease',
                    }}
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#2f4f4f';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'black';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    Support the Archive
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
