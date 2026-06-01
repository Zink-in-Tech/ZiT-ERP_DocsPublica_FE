import type {ReactNode} from 'react';
import clsx from 'clsx';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Documentación ZinkERP
        </Heading>
        <p className="hero__subtitle">
          Guías operativas, configuración y troubleshooting para tu día a día.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/primeros-pasos">
            🚀 Primeros pasos
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/intro">
            📖 Explorar documentación
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Documentación ZinkERP"
      description="Guías operativas, configuración y troubleshooting de ZinkERP para implementación, operación diaria y soporte.">
      <Head>
        <meta name="algolia-site-verification" content="7E47B8905C7F835D" />
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
