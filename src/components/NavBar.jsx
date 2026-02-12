import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const colors = {
  primary: '#2563eb',
  white: '#ffffff',
  dark: '#0f172a',
  muted: '#64748b',
};

const linkStyle = {
  color: colors.muted,
  textDecoration: 'none',
  fontWeight: 500,
  fontSize: '0.95rem',
  transition: 'color 0.2s ease',
};

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(255, 255, 255, 0.94)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0.875rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link
          to="/"
          style={{
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            fontSize: '1.4rem',
            fontWeight: 700,
            color: colors.dark,
            textDecoration: 'none',
            letterSpacing: '-0.02em',
          }}
        >
          Comnecter
        </Link>

        <div
          style={{
            display: 'none',
            gap: '1.5rem',
            alignItems: 'center',
          }}
          className="nav-desktop"
        >
          <Link to="/privacy-policy" style={linkStyle}>Privacy</Link>
          <Link to="/terms-of-service" style={linkStyle}>Terms</Link>
          <a
            href="https://play.google.com/store/apps/details?id=com.comnecter.mobile.production"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.5rem 1rem',
              background: colors.primary,
              color: colors.white,
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.9rem',
            }}
          >
            Get the app
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{
            display: 'flex',
            padding: '0.5rem',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            color: colors.dark,
          }}
          className="nav-mobile-toggle"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M3 12h18M3 6h18M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              overflow: 'hidden',
              borderTop: '1px solid rgba(0,0,0,0.06)',
              background: 'rgba(255,255,255,0.98)',
            }}
            className="nav-mobile-menu"
          >
            <div style={{ padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link to="/privacy-policy" onClick={() => setMenuOpen(false)} style={{ ...linkStyle, color: colors.dark, padding: '0.5rem 0' }}>
                Privacy
              </Link>
              <Link to="/terms-of-service" onClick={() => setMenuOpen(false)} style={{ ...linkStyle, color: colors.dark, padding: '0.5rem 0' }}>
                Terms
              </Link>
              <a
                href="https://play.google.com/store/apps/details?id=com.comnecter.mobile.production"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: '0.75rem',
                  background: colors.primary,
                  color: colors.white,
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontWeight: 600,
                  textAlign: 'center',
                  marginTop: '0.25rem',
                }}
              >
                Get the app
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
