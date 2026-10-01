import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: string;
  links: {
    label: string;
    to: string;
    external?: boolean;
  }[];
};

const FeatureList: FeatureItem[] = [
  {
    title: '🆕 Arrancar con el sistema',
    description:
      'Primera vez en Zink ERP. Configuración inicial, arquitectura y primeros 4 días.',
    links: [
      {label: 'Primeros pasos', to: '/primeros-pasos'},
      {label: 'Cómo funciona Zink ERP', to: '/arquitectura'},
      {label: 'Novedades', to: '/novedades'},
    ],
  },
  {
    title: '⚙️ Operar el día a día',
    description:
      'Ventas, compras, finanzas e inventario. Lo que usás todos los días.',
    links: [
      {label: 'Flujo de ventas', to: '/ventas/flujo-ventas'},
      {label: 'Flujo de compras', to: '/compras/flujo-compras'},
      {label: 'Caja diaria', to: '/finanzas/caja-diaria'},
      {label: 'Inventario', to: '/inventario/inventarios'},
    ],
  },
  {
    title: '🛠️ Resolver un problema',
    description:
      'Algo no funciona. Problemas frecuentes, errores y soporte.',
    links: [
      {
        label: 'Problemas de integración',
        to: '/integraciones/problemas-frecuentes',
      },
      {label: 'Guía rápida por necesidad', to: '/intro#por-dónde-empezar'},
      {
        label: 'Soporte 24x7 por WhatsApp →',
        to: 'https://wa.me/5491135598389',
        external: true,
      },
      {label: 'Sitio web Zink ERP →', to: 'https://zinkerp.com', external: true},
    ],
  },
];

function Feature({title, description, links}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <article className={styles.featureCard}>
        <div className={styles.featureCardHeader}>
          <Heading as="h3" className={styles.featureCardTitle}>
            {title}
          </Heading>
        </div>
        <div className={styles.featureCardBody}>
          <p>{description}</p>
          <ul className={styles.linkList}>
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  {...(link.external
                    ? {target: '_blank', rel: 'noopener noreferrer'}
                    : {})}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          ¿Qué necesitás hacer?
        </Heading>
        <div className={clsx('row', styles.featureGrid)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
