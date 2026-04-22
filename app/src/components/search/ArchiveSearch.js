'use client';

import React, { startTransition, useEffect, useId, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const SEARCH_EVENT_NAME = 'ota:search-query-change';

function buildHomepageHref(pathname, searchParams, query, { includeResultsHash = false } = {}) {
  const params = new URLSearchParams(pathname === '/' ? searchParams.toString() : '');
  const trimmedQuery = query.trim();

  if (trimmedQuery) {
    params.set('q', trimmedQuery);
  } else {
    params.delete('q');
  }

  const queryString = params.toString();
  const baseHref = queryString ? `/?${queryString}` : '/';
  return includeResultsHash ? `${baseHref}#archive-results` : baseHref;
}

export default function ArchiveSearch({
  liveOnHome = true,
  onNavigate,
  placeholder = 'Dig up a dusty relic...',
  variant = 'header',
}) {
  const inputId = useId();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeQuery = searchParams.get('q') ?? '';
  const [value, setValue] = useState(activeQuery);

  useEffect(() => {
    setValue(activeQuery);
  }, [activeQuery]);

  const syncHomepageSearch = (nextValue, options = {}) => {
    const shouldScrollToResults = Boolean(
      options.scrollToResults || options.includeResultsHash
    );
    const href = buildHomepageHref(pathname, searchParams, nextValue, {
      includeResultsHash: shouldScrollToResults,
    });

    window.history.replaceState(window.history.state, '', href);
    window.dispatchEvent(
      new CustomEvent(SEARCH_EVENT_NAME, {
        detail: {
          query: nextValue.trim(),
          scrollToResults: shouldScrollToResults,
        },
      })
    );

    onNavigate?.();
  };

  const commitQuery = (nextValue, options) => {
    if (pathname === '/') {
      syncHomepageSearch(nextValue, options);
      return;
    }

    const href = buildHomepageHref(pathname, searchParams, nextValue, options);

    startTransition(() => {
      router.push(href);
    });

    onNavigate?.();
  };

  const handleChange = (event) => {
    const nextValue = event.target.value;
    setValue(nextValue);

    if (liveOnHome && pathname === '/') {
      syncHomepageSearch(nextValue);
    }
  };

  const handleSubmit = (event) => {
    if (event?.preventDefault) {
      event.preventDefault();
    }
    commitQuery(value, { includeResultsHash: true });
    setValue('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  const handleClear = () => {
    setValue('');
    commitQuery('');
  };

  const isMenu = variant === 'menu';

  return (
    <>
      <div
        className={`archive-search archive-search--${variant}`}
        role="search"
        aria-label="Search archive titles"
      >
        <label className="archive-search__label" htmlFor={inputId}>
          Search archive titles
        </label>
        <div className={`archive-search__field${value ? ' archive-search__field--has-clear' : ''}`}>
          <input
            id={inputId}
            type="search"
            inputMode="search"
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className="archive-search__input"
            autoComplete="off"
            spellCheck="false"
            onKeyDown={handleKeyDown}
          />
          {value ? (
            <button
              type="button"
              className="archive-search__icon-button archive-search__clear"
              onClick={handleClear}
              aria-label="Clear search"
            >
              ×
            </button>
          ) : null}
          <button
            type="button"
            className="archive-search__icon-button archive-search__submit"
            aria-label={isMenu ? 'Search titles' : 'Submit search'}
            onClick={handleSubmit}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="archive-search__icon"
            >
              <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
              <path d="M16 16l4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
      <style jsx>{`
        .archive-search {
          width: 100%;
        }

        .archive-search__label {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .archive-search__field {
          position: relative;
          width: 100%;
        }

        .archive-search__input {
          width: 100%;
          border: 1px solid rgba(47, 93, 98, 0.18);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.94);
          color: #213137;
          padding: 0.75rem 3rem 0.75rem 1rem;
          font-size: 0.95rem;
          line-height: 1.2;
          box-shadow: inset 0 1px 2px rgba(31, 43, 54, 0.06);
        }

        .archive-search__field--has-clear .archive-search__input {
          padding-right: 5.3rem;
        }

        .archive-search__input::placeholder {
          color: #6f7f87;
        }

        .archive-search__input::-webkit-search-cancel-button,
        .archive-search__input::-webkit-search-decoration,
        .archive-search__input::-webkit-search-results-button,
        .archive-search__input::-webkit-search-results-decoration {
          -webkit-appearance: none;
          appearance: none;
          display: none;
        }

        .archive-search__input:focus {
          outline: 2px solid rgba(0, 234, 255, 0.28);
          outline-offset: 2px;
          border-color: rgba(47, 93, 98, 0.38);
        }

        .archive-search__icon-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          border: none;
          border-radius: 999px;
          background: transparent;
          color: #7a848a;
          cursor: pointer;
          transition: color 0.15s ease, background-color 0.15s ease;
        }

        .archive-search__clear {
          right: 2.5rem;
          font-size: 1.2rem;
          line-height: 1;
        }

        .archive-search__submit {
          right: 0.45rem;
        }

        .archive-search__icon {
          width: 1rem;
          height: 1rem;
        }

        .archive-search__icon-button:hover,
        .archive-search__icon-button:focus-visible,
        .archive-search__submit:hover,
        .archive-search__submit:focus-visible {
          color: #4f5b61;
          background: rgba(47, 93, 98, 0.08);
          outline: none;
        }

        .archive-search--menu {
          width: 100%;
        }
      `}</style>
    </>
  );
}
