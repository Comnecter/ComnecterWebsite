import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MobileStoreBanner from '../components/MobileStoreBanner';
import NavBar from '../components/NavBar';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.comnecter.mobile.production';

function getPlatform() {
  if (typeof navigator === 'undefined') return 'other';
  const ua = navigator.userAgent || navigator.vendor || '';
  if (/android/i.test(ua)) return 'android';
  if (/iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) return 'ios';
  return 'other';
}

const colors = {
  primary: '#2563eb',
  darkBg: '#0f172a',
  textPrimary: '#0f172a',
  textSecondary: '#475569',
  accent: '#f59e0b',
};

function GetTheApp() {
  const [status, setStatus] = useState('checking'); // 'checking' | 'redirecting' | 'unavailable'

  useEffect(() => {
    const platform = getPlatform();
    if (platform === 'android') {
      setStatus('redirecting');
      window.location.href = PLAY_STORE_URL;
      return;
    }
    setStatus('unavailable');
  }, []);

  if (status === 'checking' || status === 'redirecting') {
    return (
      <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
        <MobileStoreBanner />
        <NavBar />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '50vh', padding: '1.5rem' }}>
          <p style={{ fontSize: '1.1rem', color: colors.textSecondary }}>Taking you to the store…</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <MobileStoreBanner />
      <NavBar />
      <div
        style={{
          maxWidth: '560px',
          margin: '0 auto',
          padding: '4rem 1.5rem',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            padding: '2.5rem 2rem',
            background: '#fff',
            borderRadius: '1rem',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            border: '1px solid rgba(0,0,0,0.06)',
          }}
        >
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱</div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: colors.textPrimary, marginBottom: '1rem' }}>
            Not available yet for your device or region
          </h1>
          <p style={{ fontSize: '1.05rem', color: colors.textSecondary, lineHeight: 1.6, marginBottom: '1.5rem' }}>
            We’re not currently available for your device or region. We’re launching for you as soon as possible.
          </p>
          <Link
            to="/"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              background: colors.primary,
              color: '#fff',
              borderRadius: '0.5rem',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GetTheApp;
