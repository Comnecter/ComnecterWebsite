import React, { useEffect, useState } from 'react';

// Update these when your app is live on the stores
const STORE_CONFIG = {
  androidAvailable: true,
  iosAvailable: true,
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.comnecter.mobile.production',
  appStoreUrl: 'https://apps.apple.com/app/comnecter/id000000000',
};

function getMobilePlatform() {
  if (typeof navigator === 'undefined') return null;
  const ua = navigator.userAgent || navigator.vendor || '';
  if (/android/i.test(ua)) return 'android';
  if (/iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) return 'ios';
  return null;
}

const colors = {
  primary: '#2563eb',
  white: '#FFFFFF',
};

function MobileStoreBanner() {
  const [platform, setPlatform] = useState(null);

  useEffect(() => {
    setPlatform(getMobilePlatform());
  }, []);

  if (!platform) return null;
  if (platform === 'android' && !STORE_CONFIG.androidAvailable) return null;
  if (platform === 'ios' && !STORE_CONFIG.iosAvailable) return null;

  const url = platform === 'android' ? STORE_CONFIG.playStoreUrl : STORE_CONFIG.appStoreUrl;
  const label = platform === 'android' ? 'Get it on Google Play' : 'Download on the App Store';

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'block',
        padding: '0.75rem 1rem',
        background: `linear-gradient(135deg, ${colors.primary}, #5EDFFF)`,
        color: colors.white,
        textAlign: 'center',
        textDecoration: 'none',
        fontSize: '0.95rem',
        fontWeight: 600,
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      }}
    >
      📱 {label}
    </a>
  );
}

export default MobileStoreBanner;
