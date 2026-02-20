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
const heading3Style = { fontSize: '1.15rem', marginTop: '1.25rem', marginBottom: '0.5rem', color: colors.textPrimary };
const listStyle = { marginLeft: '1.5rem', marginBottom: '1rem' };
const linkStyle = { color: colors.primary, textDecoration: 'none', fontWeight: 500 };

function TermsOfService() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      <MobileStoreBanner />
      <NavBar />
      <main style={sectionStyle}>
        <h1 style={heading1Style}>Terms of Service for Comnecter Mobile App</h1>
        <p style={{ color: colors.textSecondary, marginBottom: '2rem' }}>
          <strong>Effective Date:</strong> January 2025
        </p>

        <h2 style={heading2Style}>1. Acceptance of Terms</h2>
        <p>By downloading, installing, or using the Comnecter mobile application ("App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.</p>

        <h2 style={heading2Style}>2. Description of Service</h2>
        <p>Comnecter is a social networking application that allows users to:</p>
        <ul style={listStyle}>
          <li><strong>Connect with nearby users</strong> using radar technology</li>
          <li><strong>Build friendships</strong> through mutual connections</li>
          <li><strong>Share content</strong> including photos, videos, and text</li>
          <li><strong>Communicate</strong> through messaging and chat features</li>
          <li><strong>Manage profiles</strong> with personal information and interests</li>
        </ul>

        <h2 style={heading2Style}>3. User Accounts</h2>
        <h3 style={heading3Style}>3.1 Account Creation</h3>
        <ul style={listStyle}>
          <li>You must be at least 13 years old to create an account</li>
          <li>You must provide accurate and complete information</li>
          <li>You are responsible for maintaining the security of your account</li>
          <li>You may not share your account credentials with others</li>
        </ul>
        <h3 style={heading3Style}>3.2 Account Responsibilities</h3>
        <ul style={listStyle}>
          <li>You are responsible for all activities under your account</li>
          <li>You must notify us immediately of any unauthorized use</li>
          <li>We reserve the right to suspend or terminate accounts for violations</li>
        </ul>

        <h2 style={heading2Style}>4. Acceptable Use</h2>
        <h3 style={heading3Style}>4.1 You May:</h3>
        <ul style={listStyle}>
          <li>Use the App for its intended purpose</li>
          <li>Connect with other users in a respectful manner</li>
          <li>Share appropriate content that complies with our guidelines</li>
          <li>Report inappropriate behavior or content</li>
        </ul>
        <h3 style={heading3Style}>4.2 You May Not:</h3>
        <ul style={listStyle}>
          <li><strong>Harass, bully, or threaten</strong> other users</li>
          <li><strong>Share inappropriate content</strong> including nudity, violence, or hate speech</li>
          <li><strong>Impersonate others</strong> or create fake accounts</li>
          <li><strong>Spam or send unwanted messages</strong> to other users</li>
          <li><strong>Use the App for illegal activities</strong> or to harm others</li>
          <li><strong>Attempt to hack or compromise</strong> the App or other users' accounts</li>
          <li><strong>Collect personal information</strong> from other users without consent</li>
          <li><strong>Use automated tools</strong> to interact with the App</li>
        </ul>

        <h2 style={heading2Style}>5. Content Guidelines</h2>
        <h3 style={heading3Style}>5.1 Prohibited Content</h3>
        <ul style={listStyle}>
          <li><strong>Explicit sexual content</strong> or nudity</li>
          <li><strong>Violence or graphic content</strong> that could harm others</li>
          <li><strong>Hate speech</strong> or discriminatory content</li>
          <li><strong>Personal information</strong> of others without consent</li>
          <li><strong>Copyrighted material</strong> you don't have rights to use</li>
          <li><strong>Spam or misleading information</strong></li>
        </ul>
        <h3 style={heading3Style}>5.2 Content Moderation</h3>
        <ul style={listStyle}>
          <li>We reserve the right to review and remove content</li>
          <li>Users can report inappropriate content</li>
          <li>Repeated violations may result in account suspension</li>
          <li>We may use automated tools to detect violations</li>
        </ul>

        <h2 style={heading2Style}>6. Privacy and Data</h2>
        <h3 style={heading3Style}>6.1 Data Collection</h3>
        <ul style={listStyle}>
          <li>We collect and use data as described in our <Link to="/privacy-policy" style={linkStyle}>Privacy Policy</Link></li>
          <li>By using the App, you consent to our data practices</li>
          <li>You can control your privacy settings within the App</li>
        </ul>
        <h3 style={heading3Style}>6.2 Location Services</h3>
        <ul style={listStyle}>
          <li>The App requires location access for radar functionality</li>
          <li>Your location is shared with nearby users</li>
          <li>You can control location sharing in your privacy settings</li>
          <li>Location data is automatically deleted after 30 days</li>
        </ul>

        <h2 style={heading2Style}>7. Safety and Security</h2>
        <h3 style={heading3Style}>7.1 User Safety</h3>
        <ul style={listStyle}>
          <li><strong>Meet in public places</strong> when meeting users from the App</li>
          <li><strong>Trust your instincts</strong> and report suspicious behavior</li>
          <li><strong>Don't share personal information</strong> with strangers</li>
          <li><strong>Report safety concerns</strong> immediately</li>
        </ul>
        <h3 style={heading3Style}>7.2 Security Measures</h3>
        <ul style={listStyle}>
          <li>We implement security measures to protect your data</li>
          <li>You should use strong passwords and enable two-factor authentication</li>
          <li>Report any security vulnerabilities you discover</li>
        </ul>

        <h2 style={heading2Style}>8. Intellectual Property</h2>
        <h3 style={heading3Style}>8.1 App Ownership</h3>
        <ul style={listStyle}>
          <li>The App and its content are owned by Comnecter</li>
          <li>You retain ownership of content you create and share</li>
          <li>By sharing content, you grant us a license to display it</li>
        </ul>
        <h3 style={heading3Style}>8.2 User Content License</h3>
        <ul style={listStyle}>
          <li>You grant us a worldwide, non-exclusive license to use your content</li>
          <li>This license allows us to provide and improve the App</li>
          <li>You can revoke this license by deleting your content</li>
        </ul>

        <h2 style={heading2Style}>9. Subscription and Payments</h2>
        <h3 style={heading3Style}>9.1 Premium Features</h3>
        <ul style={listStyle}>
          <li>Some features may require a subscription</li>
          <li>Subscription terms and pricing are clearly displayed</li>
          <li>Subscriptions automatically renew unless cancelled</li>
        </ul>
        <h3 style={heading3Style}>9.2 Payment Terms</h3>
        <ul style={listStyle}>
          <li>Payments are processed through secure third-party providers</li>
          <li>Refunds are subject to our refund policy</li>
          <li>We may change pricing with notice</li>
        </ul>

        <h2 style={heading2Style}>10. Termination</h2>
        <h3 style={heading3Style}>10.1 User Termination</h3>
        <ul style={listStyle}>
          <li>You may delete your account at any time</li>
          <li>Deletion removes your content and data</li>
          <li>Some information may be retained for legal purposes</li>
        </ul>
        <h3 style={heading3Style}>10.2 Company Termination</h3>
        <ul style={listStyle}>
          <li>We may terminate accounts for Terms violations</li>
          <li>We may discontinue the App with notice</li>
          <li>Termination does not affect your rights to your content</li>
        </ul>

        <h2 style={heading2Style}>11. Disclaimers and Limitations</h2>
        <h3 style={heading3Style}>11.1 Service Availability</h3>
        <ul style={listStyle}>
          <li>The App is provided "as is" without warranties</li>
          <li>We do not guarantee uninterrupted service</li>
          <li>We may modify or discontinue features</li>
        </ul>
        <h3 style={heading3Style}>11.2 User Interactions</h3>
        <ul style={listStyle}>
          <li>We are not responsible for user interactions</li>
          <li>Users are responsible for their own safety</li>
          <li>We do not verify user identities or information</li>
        </ul>
        <h3 style={heading3Style}>11.3 Limitation of Liability</h3>
        <ul style={listStyle}>
          <li>Our liability is limited to the amount you paid for the App</li>
          <li>We are not liable for indirect or consequential damages</li>
          <li>Some jurisdictions do not allow liability limitations</li>
        </ul>

        <h2 style={heading2Style}>12. Indemnification</h2>
        <p>You agree to indemnify and hold harmless Comnecter from any claims, damages, or expenses arising from your use of the App or violation of these Terms.</p>

        <h2 style={heading2Style}>13. Governing Law</h2>
        <p>These Terms are governed by the laws of the United States. Any disputes will be resolved in the courts of the United States.</p>

        <h2 style={heading2Style}>14. Changes to Terms</h2>
        <p>We may update these Terms from time to time. We will notify you of material changes through the App or email. Your continued use constitutes acceptance of the new Terms.</p>

        <h2 style={heading2Style}>15. Contact Information</h2>
        <p>For questions about these Terms, please contact us:</p>
        <p><strong>Email:</strong> <a href="mailto:legal@comnecter.com" style={linkStyle}>legal@comnecter.com</a></p>
        <p><strong>Website:</strong> <a href="https://comnecter.com" style={linkStyle} rel="noopener noreferrer" target="_blank">https://comnecter.com</a></p>

        <h2 style={heading2Style}>16. Severability</h2>
        <p>If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in effect.</p>

        <h2 style={heading2Style}>17. Entire Agreement</h2>
        <p>These Terms constitute the entire agreement between you and Comnecter regarding the App.</p>

        <p style={{ marginTop: '2.5rem', color: colors.textSecondary, fontSize: '0.95rem' }}>
          <strong>Last Updated:</strong> January 2025
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

export default TermsOfService;
