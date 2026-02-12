// Project: Comnecter Website
// Stack: React + Vite + Framer Motion + React Router
// Focus: Enhanced UI/UX, Interactive Animations, Audio Feedback
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const colors = {
  primary: '#3E64FF',
  secondary: '#5EDFFF',
  accent: '#FFC857',
  lightBg: '#F5F7FB',
  darkBg: '#121212',
  textPrimary: '#333333',
  textSecondary: '#666666',
  white: '#FFFFFF'
};

const clickSound = new Audio('https://actions.google.com/sounds/v1/cartoon/pop.ogg');

function Header() {
  return (
    <motion.header
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '6rem 1rem 4rem', background: `linear-gradient(to bottom, ${colors.primary}, ${colors.secondary})`, color: colors.white }}
    >
      <motion.h1
        style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '1rem', letterSpacing: '1px' }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        Comnecter
      </motion.h1>
      <motion.p
        style={{ fontSize: '1.5rem', maxWidth: '680px', fontWeight: '300' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Discover and connect with people nearby. The social radar for the real world.
      </motion.p>
      <motion.button
        style={{ marginTop: '2.5rem', padding: '1rem 2.5rem', backgroundColor: colors.accent, color: colors.darkBg, border: 'none', borderRadius: '0.75rem', fontSize: '1.1rem', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          clickSound.play();
          window.scrollTo({ top: 800, behavior: 'smooth' });
        }}
      >
        Learn More
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        style={{ marginTop: '5rem', maxWidth: '800px', textAlign: 'left', lineHeight: 1.8, fontSize: '1.125rem' }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Why Comnecter?</h2>
        <ul>
          <li>🔍 Real-time radar to find people nearby</li>
          <li>🤝 Network in a natural, secure way</li>
          <li>📱 Fully mobile-optimized and user-friendly</li>
          <li>🔒 Privacy-first design</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1 }}
        style={{ marginTop: '4rem', padding: '2.5rem', borderRadius: '1.25rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(12px)', maxWidth: '650px' }}
      >
        <h3 style={{ fontSize: '1.75rem', marginBottom: '0.75rem', fontWeight: '500' }}>“A bridge between online and offline connection.”</h3>
        <p style={{ fontStyle: 'italic', fontSize: '1.05rem' }}>- The Comnecter Team</p>
      </motion.div>
    </motion.header>
  );
}

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: colors.darkBg,
        color: colors.white,
        padding: '2.5rem 1.5rem',
        textAlign: 'center',
        fontSize: '1rem'
      }}
    >
      <p><strong>Comnecter B.V.</strong></p>
      <p>Chamber of Commerce: 94191891 | VAT: NL866672291B01</p>
      <p>Email: <a href="mailto:info@comnecter.com" style={{ color: colors.accent, textDecoration: 'none' }}>info@comnecter.com</a></p>
      <p>Phone: <a href="tel:+31687718383" style={{ color: colors.accent, textDecoration: 'none' }}>+31687718383</a></p>
      <p style={{ marginTop: '1rem' }}>
        <Link to="/privacy-policy" style={{ color: colors.accent, textDecoration: 'none' }}>Privacy Policy</Link>
        {' · '}
        <Link to="/terms-of-service" style={{ color: colors.accent, textDecoration: 'none' }}>Terms of Service</Link>
      </p>
      <p style={{ marginTop: '1.5rem' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ color: colors.accent, textDecoration: 'underline', cursor: 'pointer' }}>
          Back to top ↑
        </a>
      </p>
      <p style={{ marginTop: '1rem' }}>&copy; {new Date().getFullYear()} Comnecter. All rights reserved.</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default App;
