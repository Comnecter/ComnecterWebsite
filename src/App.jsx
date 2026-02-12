// Project: Comnecter Website
// Stack: React + Vite + Framer Motion + React Router
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MobileStoreBanner from './components/MobileStoreBanner';
import NavBar from './components/NavBar';

const colors = {
  primary: '#2563eb',
  secondary: '#0ea5e9',
  accent: '#f59e0b',
  lightBg: '#f8fafc',
  darkBg: '#0f172a',
  textPrimary: '#0f172a',
  textSecondary: '#475569',
  white: '#ffffff',
};

const container = { maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' };

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

function Hero() {
  return (
    <section
      style={{
        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
        color: colors.white,
        padding: '4rem 1.5rem 5rem',
        textAlign: 'center',
      }}
    >
      <div style={container}>
        <motion.h1
          {...fadeUp}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{
            fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
            fontWeight: 700,
            marginBottom: '1rem',
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
          }}
        >
          Comnecter
        </motion.h1>
        <motion.p
          {...fadeUp}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{
            fontSize: '1.2rem',
            maxWidth: '560px',
            margin: '0 auto 2rem',
            opacity: 0.95,
            lineHeight: 1.6,
          }}
        >
          Discover and connect with people nearby. The social radar for the real world.
        </motion.p>
        <motion.a
          href="https://play.google.com/store/apps/details?id=com.comnecter.mobile.production"
          target="_blank"
          rel="noopener noreferrer"
          {...fadeUp}
          transition={{ delay: 0.3, duration: 0.5 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          style={{
            display: 'inline-block',
            padding: '0.875rem 1.75rem',
            background: colors.white,
            color: colors.primary,
            borderRadius: '0.5rem',
            fontWeight: 600,
            textDecoration: 'none',
            boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
          }}
        >
          Get the app
        </motion.a>
      </div>
    </section>
  );
}

const features = [
  {
    title: 'Real-time radar',
    description: 'Find people nearby and see who’s around you in a safe, transparent way.',
    icon: '🔍',
  },
  {
    title: 'Natural networking',
    description: 'Build real connections through mutual interests and local discovery.',
    icon: '🤝',
  },
  {
    title: 'Mobile-first',
    description: 'Designed for how you move. Use it on the go, anywhere.',
    icon: '📱',
  },
  {
    title: 'Privacy-first',
    description: 'You control what you share. We keep your data safe and minimal.',
    icon: '🔒',
  },
];

function Features() {
  return (
    <section style={{ padding: '4rem 1.5rem', background: colors.lightBg }}>
      <div style={container}>
        <motion.h2
          {...fadeUp}
          style={{
            fontSize: '1.75rem',
            fontWeight: 700,
            color: colors.textPrimary,
            textAlign: 'center',
            marginBottom: '2.5rem',
          }}
        >
          Why Comnecter?
        </motion.h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {features.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
              whileHover={{ y: -4 }}
              style={{
                padding: '1.5rem',
                background: colors.white,
                borderRadius: '0.75rem',
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                border: '1px solid rgba(0,0,0,0.06)',
              }}
            >
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{item.icon}</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: colors.textPrimary, marginBottom: '0.5rem' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: colors.textSecondary, lineHeight: 1.5, margin: 0 }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section style={{ padding: '4rem 1.5rem', background: colors.white }}>
      <div style={container}>
        <motion.div
          {...fadeUp}
          style={{
            maxWidth: '640px',
            margin: '0 auto',
            padding: '2.5rem',
            background: colors.lightBg,
            borderRadius: '1rem',
            border: '1px solid rgba(0,0,0,0.06)',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: '1.35rem', fontWeight: 500, color: colors.textPrimary, marginBottom: '0.75rem', lineHeight: 1.5 }}>
            “A bridge between online and offline connection.”
          </p>
          <p style={{ fontSize: '0.95rem', color: colors.textSecondary, fontStyle: 'italic' }}>
            — The Comnecter Team
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        background: colors.darkBg,
        color: colors.white,
        padding: '2.5rem 1.5rem',
        textAlign: 'center',
        fontSize: '0.95rem',
      }}
    >
      <div style={container}>
        <p style={{ margin: 0, fontWeight: 600 }}>Comnecter B.V.</p>
        <p style={{ margin: '0.25rem 0 0', opacity: 0.9 }}>Chamber of Commerce: 94191891 | VAT: NL866672291B01</p>
        <p style={{ margin: '0.5rem 0 0' }}>
          <a href="mailto:info@comnecter.com" style={{ color: colors.accent, textDecoration: 'none' }}>info@comnecter.com</a>
          {' · '}
          <a href="tel:+31687718383" style={{ color: colors.accent, textDecoration: 'none' }}>+31 6 87 71 83 83</a>
        </p>
        <p style={{ marginTop: '1rem' }}>
          <Link to="/privacy-policy" style={{ color: colors.accent, textDecoration: 'none' }}>Privacy Policy</Link>
          {' · '}
          <Link to="/terms-of-service" style={{ color: colors.accent, textDecoration: 'none' }}>Terms of Service</Link>
        </p>
        <p style={{ marginTop: '1rem' }}>
          <a
            href="#top"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{ color: colors.accent, textDecoration: 'underline', cursor: 'pointer' }}
          >
            Back to top ↑
          </a>
        </p>
        <p style={{ marginTop: '1rem', opacity: 0.8 }}>&copy; {new Date().getFullYear()} Comnecter. All rights reserved.</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div id="top">
      <MobileStoreBanner />
      <NavBar />
      <Hero />
      <Features />
      <Quote />
      <Footer />
    </div>
  );
}

export default App;
