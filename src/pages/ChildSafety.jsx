import React from 'react';
import { Link } from 'react-router-dom';
import MobileStoreBanner from '../components/MobileStoreBanner';
import NavBar from '../components/NavBar';

const colors = {
  primary: '#2563eb',
  accent: '#f59e0b',
  darkBg: '#0f172a',
  textPrimary: '#0f172a',
  textSecondary: '#475569',
  white: '#FFFFFF',
};

const sectionStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '2rem 1.5rem 4rem',
  color: colors.textPrimary,
  lineHeight: 1.7,
};

const heading1Style = { fontSize: '2rem', marginBottom: '0.5rem', color: colors.textPrimary };
const heading2Style = { fontSize: '1.35rem', marginTop: '2rem', marginBottom: '0.75rem', color: colors.textPrimary };
const listStyle = { marginLeft: '1.5rem', marginBottom: '1rem' };
const linkStyle = { color: colors.primary, textDecoration: 'none', fontWeight: 500 };

function ChildSafety() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      <MobileStoreBanner />
      <NavBar />
      <main style={sectionStyle}>
        <h1 style={heading1Style}>Child Safety & Protection Policy — Comnecter</h1>
        <p style={{ color: colors.textSecondary, marginBottom: '2rem' }}>
          <strong>Last Updated:</strong> February 2026
        </p>

        <p>
          Comnecter is committed to protecting children and preventing any form of child sexual abuse and exploitation (CSAE). We maintain a zero-tolerance policy toward any content or behavior that endangers minors.
        </p>
        <p>
          This policy forms part of Comnecter’s published Community Standards and applies to all users of the Comnecter platform.
        </p>

        <h2 style={heading2Style}>1. Zero-Tolerance Policy</h2>
        <p>
          Comnecter strictly prohibits the use of the Comnecter platform for any activity involving child sexual abuse or exploitation, including but not limited to:
        </p>
        <ul style={listStyle}>
          <li>Creating, uploading, sharing, or distributing child sexual abuse material (CSAM)</li>
          <li>Grooming or predatory behavior toward minors</li>
          <li>Soliciting or exchanging sexual content involving minors</li>
          <li>Sexualizing or exploiting minors in any form</li>
          <li>Sextortion involving minors</li>
          <li>Advertising, solicitation, or trafficking of minors</li>
          <li>Harassing or targeting minors with harmful or inappropriate behavior</li>
        </ul>
        <p>
          Any violation will result in immediate account suspension and may be reported to appropriate authorities.
        </p>

        <h2 style={heading2Style}>2. Detection & Enforcement</h2>
        <p>
          Comnecter actively works to detect and prevent CSAE through:
        </p>
        <ul style={listStyle}>
          <li>User reporting systems</li>
          <li>Automated moderation tools</li>
          <li>Manual review processes</li>
        </ul>
        <p>
          When Comnecter obtains actual knowledge of CSAM or CSAE activity, we will:
        </p>
        <ul style={listStyle}>
          <li>Remove the content immediately</li>
          <li>Suspend or permanently ban the responsible account</li>
          <li>Preserve evidence as required by law</li>
          <li>Report the incident to the National Center for Missing & Exploited Children (NCMEC) or the relevant regional authority</li>
        </ul>
        <p>
          Comnecter complies with applicable child safety laws and regulations in jurisdictions where the service operates.
        </p>

        <h2 style={heading2Style}>3. Reporting Child Safety Concerns</h2>
        <p>
          Comnecter provides in-app reporting tools that allow users to report suspected child exploitation or unsafe behavior through:
        </p>
        <ul style={listStyle}>
          <li>In-app reporting tools</li>
          <li>Email: <a href="mailto:safety@comnecter.com" style={linkStyle}>safety@comnecter.com</a></li>
        </ul>
        <p>
          Reports are reviewed with priority and handled confidentially.
        </p>

        <h2 style={heading2Style}>4. Age Restrictions</h2>
        <p>
          Comnecter is not intended for children under 13.
        </p>
        <p>
          Users aged 13–17 must comply with all safety rules and may be subject to additional protections.
        </p>

        <h2 style={heading2Style}>5. Child Safety Contact</h2>
        <p>
          For child safety inquiries or law enforcement requests:
        </p>
        <p>
          <strong>Child Safety Team — Comnecter</strong><br />
          Email: <a href="mailto:safety@comnecter.com" style={linkStyle}>safety@comnecter.com</a><br />
          Website: <a href="https://comnecter.com" style={linkStyle} rel="noopener noreferrer" target="_blank">https://comnecter.com</a>
        </p>
      </main>

      <footer
        style={{
          backgroundColor: colors.darkBg,
          color: colors.white,
          padding: '2rem 1.5rem',
          textAlign: 'center',
          fontSize: '0.95rem',
        }}
      >
        <p style={{ marginBottom: '0.75rem' }}>
          <Link to="/privacy-policy" style={{ color: colors.accent, textDecoration: 'none' }}>Privacy Policy</Link>
          {' · '}
          <Link to="/terms-of-service" style={{ color: colors.accent, textDecoration: 'none' }}>Terms of Service</Link>
          {' · '}
          <Link to="/child-safety" style={{ color: colors.accent, textDecoration: 'none' }}>Child Safety</Link>
          {' · '}
          <Link to="/" style={{ color: colors.accent, textDecoration: 'none' }}>Home</Link>
        </p>
        <p>&copy; {new Date().getFullYear()} Comnecter. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ChildSafety;
