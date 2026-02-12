// Project: Comnecter Website – Upgraded
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import MobileStoreBanner from './components/MobileStoreBanner';
import NavBar from './components/NavBar';

const colors = {
  primary: '#2563eb',
  primaryDark: '#1d4ed8',
  secondary: '#0ea5e9',
  accent: '#f59e0b',
  lightBg: '#f8fafc',
  darkBg: '#0f172a',
  textPrimary: '#0f172a',
  textSecondary: '#475569',
  white: '#ffffff',
};

const container = { maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' };
const sectionPad = { padding: 'clamp(3rem, 6vw, 5rem) 1.5rem' };

function AnimatedSection({ children, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(145deg, ${colors.primary} 0%, #1d4ed8 40%, ${colors.secondary} 100%)`,
        color: colors.white,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 50% at 50% 120%, rgba(255,255,255,0.12) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />
      <div style={{ ...container, position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          style={{
            display: 'inline-block',
            padding: '0.35rem 0.9rem',
            background: 'rgba(255,255,255,0.2)',
            borderRadius: '9999px',
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: '0.02em',
            marginBottom: '1.25rem',
          }}
        >
          The social radar for the real world
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '1rem',
          }}
        >
          Comnecter
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
            maxWidth: '520px',
            margin: '0 auto 2rem',
            opacity: 0.95,
            lineHeight: 1.6,
          }}
        >
          Discover and connect with people nearby. Build real friendships, in person.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', alignItems: 'center' }}
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/get-the-app"
              style={{
                display: 'inline-block',
                padding: '0.9rem 1.75rem',
                background: colors.white,
                color: colors.primary,
                borderRadius: '0.5rem',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              }}
            >
              Get the app
            </Link>
          </motion.div>
          <motion.a
            href="#how-it-works"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'inline-block',
              padding: '0.9rem 1.5rem',
              background: 'transparent',
              color: colors.white,
              border: '2px solid rgba(255,255,255,0.7)',
              borderRadius: '0.5rem',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            How it works
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          style={{ marginTop: '3rem' }}
        >
          <a
            href="#how-it-works"
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: 'rgba(255,255,255,0.8)',
              textDecoration: 'none',
              fontSize: '0.8rem',
              fontWeight: 500,
            }}
          >
            <span style={{ marginBottom: '0.25rem' }}>Scroll to explore</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              ↓
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

const steps = [
  { step: '1', title: 'Open the app', text: 'Allow location (you stay in control). Comnecter shows you who’s nearby in a safe, transparent way.' },
  { step: '2', title: 'See who’s around', text: 'Browse nearby people and their interests. No spam—just real profiles of people in your area.' },
  { step: '3', title: 'Connect in person', text: 'Send a request, chat in the app, and meet up. Turn online connection into real friendship.' },
];

function HowItWorks() {
  return (
    <section id="how-it-works" style={{ ...sectionPad, background: colors.white }}>
      <div style={container}>
        <AnimatedSection>
          <p style={{ color: colors.primary, fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Simple as 1-2-3
          </p>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 700, color: colors.textPrimary, marginBottom: '2.5rem' }}>
            How it works
          </h2>
        </AnimatedSection>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
          {steps.map((item, i) => (
            <AnimatedSection key={item.step}>
              <motion.div
                style={{
                  padding: '1.75rem',
                  background: colors.lightBg,
                  borderRadius: '1rem',
                  border: '1px solid rgba(0,0,0,0.06)',
                  height: '100%',
                }}
                whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(0,0,0,0.08)' }}
                transition={{ duration: 0.2 }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '0.5rem',
                    background: colors.primary,
                    color: colors.white,
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    marginBottom: '1rem',
                  }}
                >
                  {item.step}
                </span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: colors.textPrimary, marginBottom: '0.5rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: colors.textSecondary, lineHeight: 1.6, margin: 0 }}>
                  {item.text}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  { title: 'Real-time radar', description: 'See who’s nearby in a safe, transparent way. No guessing—just real people around you.', icon: '🔍' },
  { title: 'Natural networking', description: 'Build friendships through mutual interests and local discovery, not endless scrolling.', icon: '🤝' },
  { title: 'Mobile-first', description: 'Designed for life on the go. Use it anywhere, anytime.', icon: '📱' },
  { title: 'Privacy-first', description: 'You control what you share. We keep your data safe and minimal.', icon: '🔒' },
];

function Features() {
  return (
    <section style={{ ...sectionPad, background: colors.lightBg }}>
      <div style={container}>
        <AnimatedSection>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 700, color: colors.textPrimary, textAlign: 'center', marginBottom: '2.5rem' }}>
            Why Comnecter?
          </h2>
        </AnimatedSection>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          {features.map((item, i) => (
            <AnimatedSection key={item.title}>
              <motion.div
                style={{
                  padding: '1.75rem',
                  background: colors.white,
                  borderRadius: '1rem',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                  border: '1px solid rgba(0,0,0,0.05)',
                  height: '100%',
                }}
                whileHover={{ y: -4, boxShadow: '0 12px 28px rgba(0,0,0,0.1)' }}
                transition={{ duration: 0.2 }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: colors.textPrimary, marginBottom: '0.5rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: colors.textSecondary, lineHeight: 1.6, margin: 0 }}>
                  {item.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section style={{ ...sectionPad, background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`, color: colors.white }}>
      <div style={container}>
        <AnimatedSection>
          <blockquote
            style={{
              maxWidth: '640px',
              margin: '0 auto',
              textAlign: 'center',
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 600,
              lineHeight: 1.5,
              opacity: 0.98,
            }}
          >
            “A bridge between online and offline connection.”
          </blockquote>
          <p style={{ marginTop: '1rem', fontSize: '0.95rem', opacity: 0.9, fontStyle: 'italic' }}>
            — The Comnecter Team
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

const faqs = [
  { q: 'Is Comnecter free?', a: 'You can download and use core features for free. Some premium features may require a subscription.' },
  { q: 'How does the radar work?', a: 'With your permission, Comnecter uses your device’s location to show you other users who are nearby. You control what you share and with whom.' },
  { q: 'Is my data safe?', a: 'Yes. We use encryption and follow privacy best practices. Location data is automatically deleted after 30 days. See our Privacy Policy for details.' },
  { q: 'Where is Comnecter available?', a: 'Comnecter is gradually becoming available across regions and devices. Click the "Get the App" button to check your store and see whether it is currently accessible for your device.' },
];

function FAQ() {
  return (
    <section style={{ ...sectionPad, background: colors.white }}>
      <div style={container}>
        <AnimatedSection>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 700, color: colors.textPrimary, textAlign: 'center', marginBottom: '2rem' }}>
            Frequently asked questions
          </h2>
        </AnimatedSection>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          {faqs.map((item, i) => (
            <AnimatedSection key={item.q}>
              <div
                style={{
                  padding: '1.25rem 0',
                  borderBottom: i < faqs.length - 1 ? '1px solid rgba(0,0,0,0.08)' : 'none',
                }}
              >
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: colors.textPrimary, marginBottom: '0.5rem' }}>
                  {item.q}
                </h3>
                <p style={{ fontSize: '0.95rem', color: colors.textSecondary, lineHeight: 1.6, margin: 0 }}>
                  {item.a}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section style={{ ...sectionPad, background: colors.lightBg }}>
      <div style={container}>
        <AnimatedSection>
          <div
            style={{
              textAlign: 'center',
              padding: '3rem 2rem',
              background: colors.white,
              borderRadius: '1.25rem',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              border: '1px solid rgba(0,0,0,0.05)',
            }}
          >
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: colors.textPrimary, marginBottom: '0.75rem' }}>
              Ready to connect?
            </h2>
            <p style={{ fontSize: '1rem', color: colors.textSecondary, marginBottom: '1.5rem', maxWidth: '400px', margin: '0 auto 1.5rem' }}>
              Download Comnecter and start meeting people nearby today.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/get-the-app"
                style={{
                  display: 'inline-block',
                  padding: '1rem 2rem',
                  background: colors.primary,
                  color: colors.white,
                  borderRadius: '0.5rem',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(37, 99, 235, 0.4)',
                }}
              >
                Get the app
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>
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
        padding: '3rem 1.5rem 2rem',
      }}
    >
      <div style={{ ...container, maxWidth: '1100px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginBottom: '2.5rem',
          }}
        >
          <div>
            <p style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Comnecter</p>
            <p style={{ fontSize: '0.9rem', opacity: 0.85, margin: 0 }}>
              The social radar for the real world.
            </p>
          </div>
          <div>
            <p style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>Company</p>
            <p style={{ fontSize: '0.9rem', opacity: 0.9, margin: 0 }}>Comnecter B.V.</p>
            <p style={{ fontSize: '0.85rem', opacity: 0.8, margin: '0.25rem 0 0' }}>Chamber of Commerce: 94191891</p>
            <p style={{ fontSize: '0.85rem', opacity: 0.8, margin: '0.15rem 0 0' }}>VAT: NL866672291B01</p>
          </div>
          <div>
            <p style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>Contact</p>
            <p style={{ margin: 0 }}>
              <a href="mailto:info@comnecter.com" style={{ color: colors.accent, textDecoration: 'none', fontSize: '0.9rem' }}>info@comnecter.com</a>
            </p>
            <p style={{ margin: '0.25rem 0 0' }}>
              <a href="tel:+31687718383" style={{ color: colors.accent, textDecoration: 'none', fontSize: '0.9rem' }}>+31 6 87 71 83 83</a>
            </p>
          </div>
          <div>
            <p style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>Legal</p>
            <p style={{ margin: 0 }}>
              <Link to="/privacy-policy" style={{ color: colors.accent, textDecoration: 'none', fontSize: '0.9rem' }}>Privacy Policy</Link>
            </p>
            <p style={{ margin: '0.25rem 0 0' }}>
              <Link to="/terms-of-service" style={{ color: colors.accent, textDecoration: 'none', fontSize: '0.9rem' }}>Terms of Service</Link>
            </p>
          </div>
        </div>
        <div style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8 }}>&copy; {new Date().getFullYear()} Comnecter. All rights reserved.</p>
          <a
            href="#top"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{ color: colors.accent, textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}
          >
            Back to top ↑
          </a>
        </div>
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
      <HowItWorks />
      <Features />
      <Quote />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
