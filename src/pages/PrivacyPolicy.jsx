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

function PrivacyPolicy() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      <MobileStoreBanner />
      <NavBar />
      <main style={sectionStyle}>
        <h1 style={heading1Style}>Privacy Policy for Comnecter Mobile App</h1>
        <p style={{ color: colors.textSecondary, marginBottom: '2rem' }}>
          <strong>Effective Date:</strong> January 2025
        </p>

        <h2 style={heading2Style}>1. Introduction</h2>
        <p>
          Welcome to Comnecter, a mobile application designed to help you connect with people nearby using radar technology. This Privacy Policy explains how we collect, use, and protect your information when you use our app.
        </p>

        <h2 style={heading2Style}>2. Information We Collect</h2>
        <h3 style={heading3Style}>2.1 Information You Provide</h3>
        <ul style={listStyle}>
          <li><strong>Profile Information:</strong> Name, username, bio, location, interests, profile picture</li>
          <li><strong>Account Information:</strong> Email address, phone number (optional)</li>
          <li><strong>Content:</strong> Photos, videos, text posts, messages, friend requests</li>
        </ul>
        <h3 style={heading3Style}>2.2 Information We Collect Automatically</h3>
        <ul style={listStyle}>
          <li><strong>Location Data:</strong> Precise location to detect nearby users and provide radar functionality</li>
          <li><strong>Device Information:</strong> Device type, operating system, app version</li>
          <li><strong>Usage Data:</strong> App interactions, features used, time spent in app</li>
          <li><strong>Technical Data:</strong> IP address, device identifiers, crash reports</li>
        </ul>
        <h3 style={heading3Style}>2.3 Permissions We Request</h3>
        <ul style={listStyle}>
          <li><strong>Location:</strong> Required for radar functionality to detect nearby users</li>
          <li><strong>Camera:</strong> For taking photos and videos for your profile and posts</li>
          <li><strong>Microphone:</strong> For recording audio in video posts and voice messages</li>
          <li><strong>Photo Library:</strong> For selecting and saving images/videos</li>
          <li><strong>Notifications:</strong> To keep you informed about friend requests, messages, and nearby users</li>
        </ul>

        <h2 style={heading2Style}>3. How We Use Your Information</h2>
        <h3 style={heading3Style}>3.1 Core App Functionality</h3>
        <ul style={listStyle}>
          <li><strong>Radar Detection:</strong> Use location data to show nearby users</li>
          <li><strong>Friend Connections:</strong> Manage friend requests and connections</li>
          <li><strong>Messaging:</strong> Enable chat functionality between friends</li>
          <li><strong>Profile Management:</strong> Display and manage your profile information</li>
        </ul>
        <h3 style={heading3Style}>3.2 App Improvement</h3>
        <ul style={listStyle}>
          <li><strong>Performance Optimization:</strong> Analyze app usage to improve performance</li>
          <li><strong>Feature Development:</strong> Understand user needs to develop new features</li>
          <li><strong>Bug Fixes:</strong> Identify and resolve technical issues</li>
        </ul>
        <h3 style={heading3Style}>3.3 Communication</h3>
        <ul style={listStyle}>
          <li><strong>App Updates:</strong> Notify you about new features and updates</li>
          <li><strong>Service Messages:</strong> Important information about your account or the app</li>
          <li><strong>Marketing:</strong> Promotional content (with your consent)</li>
        </ul>

        <h2 style={heading2Style}>4. Information Sharing</h2>
        <h3 style={heading3Style}>4.1 With Other Users</h3>
        <ul style={listStyle}>
          <li><strong>Profile Information:</strong> Visible to other users based on your privacy settings</li>
          <li><strong>Location Data:</strong> Shared with nearby users for radar functionality</li>
          <li><strong>Posts and Content:</strong> Shared according to your privacy preferences</li>
        </ul>
        <h3 style={heading3Style}>4.2 With Service Providers</h3>
        <ul style={listStyle}>
          <li><strong>Cloud Services:</strong> Store your data securely</li>
          <li><strong>Analytics Services:</strong> Understand app usage patterns</li>
          <li><strong>Payment Processors:</strong> Handle subscription payments (if applicable)</li>
        </ul>
        <h3 style={heading3Style}>4.3 Legal Requirements</h3>
        <ul style={listStyle}>
          <li><strong>Law Enforcement:</strong> When required by law or court order</li>
          <li><strong>Safety:</strong> To protect user safety or prevent harm</li>
          <li><strong>Terms Violations:</strong> To enforce our terms of service</li>
        </ul>

        <h2 style={heading2Style}>5. Data Security</h2>
        <p>We implement industry-standard security measures to protect your information:</p>
        <ul style={listStyle}>
          <li><strong>Encryption:</strong> Data is encrypted in transit and at rest</li>
          <li><strong>Access Controls:</strong> Limited access to your personal information</li>
          <li><strong>Regular Audits:</strong> Security practices are regularly reviewed</li>
          <li><strong>Secure Storage:</strong> Data is stored on secure, encrypted servers</li>
        </ul>

        <h2 style={heading2Style}>6. Data Retention</h2>
        <ul style={listStyle}>
          <li><strong>Account Data:</strong> Retained while your account is active</li>
          <li><strong>Content:</strong> Kept according to your privacy settings</li>
          <li><strong>Location Data:</strong> Automatically deleted after 30 days</li>
          <li><strong>Deletion:</strong> You can request deletion of your data at any time</li>
        </ul>

        <h2 style={heading2Style}>7. Your Rights</h2>
        <h3 style={heading3Style}>7.1 Access and Control</h3>
        <ul style={listStyle}>
          <li><strong>View Data:</strong> Access your personal information</li>
          <li><strong>Update Data:</strong> Correct or update your information</li>
          <li><strong>Delete Data:</strong> Request deletion of your account and data</li>
          <li><strong>Export Data:</strong> Download your data in a portable format</li>
        </ul>
        <h3 style={heading3Style}>7.2 Privacy Settings</h3>
        <ul style={listStyle}>
          <li><strong>Profile Visibility:</strong> Control who can see your profile</li>
          <li><strong>Location Sharing:</strong> Manage location sharing preferences</li>
          <li><strong>Content Privacy:</strong> Set who can see your posts and content</li>
          <li><strong>Notification Preferences:</strong> Control notification types and frequency</li>
        </ul>

        <h2 style={heading2Style}>8. Children's Privacy</h2>
        <p>Our app is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.</p>

        <h2 style={heading2Style}>9. International Transfers</h2>
        <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data during such transfers.</p>

        <h2 style={heading2Style}>10. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of any material changes through the app or email. Your continued use of the app after changes become effective constitutes acceptance of the new policy.</p>

        <h2 style={heading2Style}>11. Contact Us</h2>
        <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
        <p><strong>Email:</strong> <a href="mailto:privacy@comnecter.com" style={linkStyle}>privacy@comnecter.com</a></p>
        <p><strong>Website:</strong> <a href="https://comnecter.com" style={linkStyle} rel="noopener noreferrer" target="_blank">https://comnecter.com</a></p>

        <h2 style={heading2Style}>12. California Privacy Rights</h2>
        <p>California residents have additional rights under the California Consumer Privacy Act (CCPA). Please contact us for more information about your CCPA rights.</p>

        <h2 style={heading2Style}>13. GDPR Compliance</h2>
        <p>If you are in the European Union, you have additional rights under the General Data Protection Regulation (GDPR). Please contact us for more information about your GDPR rights.</p>

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

export default PrivacyPolicy;
