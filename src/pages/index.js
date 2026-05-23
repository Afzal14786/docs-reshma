import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function Hero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.hero}>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroInner}>
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroTagline}>{siteConfig.tagline}</p>
        <div className={styles.heroButtons}>
          <Link className="button button--primary button--lg" to="/docs/getting-started/local-development">
            Get Started →
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/api/authentication">
            API Reference
          </Link>
          <Link className="button button--outline button--lg" href="https://github.com/Afzal14786">
            🐙 GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}

function Feature({ title, description, icon }) {
  return (
    <div className={styles.feature}>
      <div className={styles.featureIcon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function CTA() {
  return (
    <div className={styles.cta}>
      <div className="container">
        <h2>Ready to integrate?</h2>
        <p>Explore the docs, run the examples, and start building on top of Reshma‑Core.</p>
        <Link className="button button--primary button--lg" to="/docs/getting-started/local-development">
          Start Building
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  const features = [
    {
      title: 'Polymorphic Catalog',
      description: 'Single collection, five product types – Bangles, Apparel, Fabric, Innerwear, Accessories – with Mongoose discriminators.',
      icon: '🐘',
    },
    {
      title: 'Two‑Token JWT',
      description: 'Short‑lived access tokens (memory) + HttpOnly refresh tokens – XSS and CSRF safe.',
      icon: '🔐',
    },
    {
      title: 'Sub‑50ms Search',
      description: 'Typesense RAM cluster – typo‑tolerant, faceted filtering, eventual consistency with BullMQ.',
      icon: '⚡',
    },
    {
      title: 'Razorpay Payments',
      description: 'HMAC webhooks, refunds, and atomic order transactions.',
      icon: '💸',
    },
    {
      title: 'Shiprocket Logistics',
      description: 'Automated dispatch, AWB generation, and delivery tracking webhooks.',
      icon: '📦',
    },
    {
      title: 'DPDP / GDPR Compliant',
      description: 'Right to be Forgotten (anonymisation) + Right to Access (JSON data export).',
      icon: '🔒',
    },
  ];

  return (
    <Layout title="Home" description="High‑performance polymorphic e‑commerce backend engine">
      <Hero />
      <div className={styles.features}>
        <div className="container">
          <h2 className={styles.featuresTitle}>Why Reshma‑Core?</h2>
          <div className={styles.featuresGrid}>
            {features.map((feature, idx) => (
              <Feature key={idx} {...feature} />
            ))}
          </div>
        </div>
      </div>
      <CTA />
    </Layout>
  );
}

