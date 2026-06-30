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
    <header className={clsx('homepage-hero', styles.heroBanner)}>
      <div className={clsx('container', styles.heroInner)}>
        <Heading as="h1" className={styles.heroTitle}>
          Documentación Zink ERP
        </Heading>
        <p className={styles.heroSubtitle}>
          Guías operativas, configuración y troubleshooting para tu día a día.
        </p>
        <div className={styles.buttons}>
          <Link className={styles.buttonPrimary} to="/primeros-pasos">
            🚀 Primeros pasos
          </Link>
          <Link className={styles.buttonSecondary} to="/intro">
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
      description="Guías operativas, configuración y troubleshooting de Zink ERP para implementación, operación diaria y soporte.">
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
