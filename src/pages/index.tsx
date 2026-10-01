import type {ReactNode} from 'react';
import clsx from 'clsx';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import SearchBar from '@theme/SearchBar';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const APP_URL = 'https://ziterp.zinkintech.com';

function HomepageHeader() {
  return (
    <header className={clsx('homepage-hero', styles.heroBanner)}>
      <div className={clsx('container', styles.heroInner)}>
        <Heading as="h1" className={styles.heroTitle}>
          Documentación de Zink ERP
        </Heading>
        <p className={styles.heroSubtitle}>
          Guías para configurar y operar Zink ERP en el día a día.
        </p>
        <div className={styles.search}>
          <SearchBar />
        </div>
        <p className={styles.searchHint}>
          Buscá cualquier tema con el buscador o con <kbd>Ctrl</kbd> + <kbd>K</kbd>{' '}
          (<kbd>⌘</kbd> + <kbd>K</kbd> en Mac).
        </p>
        <div className={styles.buttons}>
          <Link className={styles.buttonPrimary} to="/primeros-pasos">
            🚀 Primeros pasos
          </Link>
          <Link className={styles.buttonSecondary} to="/intro">
            📖 Explorar documentación
          </Link>
          <Link
            className={styles.buttonSecondary}
            to={APP_URL}
            target="_blank"
            rel="noopener noreferrer">
            Ingresar a Zink ERP ↗
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Documentación"
      description="Guías para configurar y operar Zink ERP: ventas, compras, inventario, finanzas, configuración e integraciones.">
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
