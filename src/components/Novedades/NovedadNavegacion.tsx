import type {ReactNode} from 'react';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import Link from '@docusaurus/Link';

import {novedadesVecinas} from './items';
import styles from './NovedadNavegacion.module.css';

export default function NovedadNavegacion(): ReactNode {
  const {metadata} = useDoc();
  const {anterior, siguiente} = novedadesVecinas(metadata.permalink);

  return (
    <nav className={styles.nav} aria-label="Navegación de novedades">
      <div className="pagination-nav">
        {anterior ? (
          <Link
            className="pagination-nav__link pagination-nav__link--prev"
            to={anterior.href}>
            <div className="pagination-nav__sublabel">← Anterior</div>
            <div className="pagination-nav__label">{anterior.titulo}</div>
          </Link>
        ) : (
          <span className={styles.hueco} />
        )}
        {siguiente ? (
          <Link
            className="pagination-nav__link pagination-nav__link--next"
            to={siguiente.href}>
            <div className="pagination-nav__sublabel">Siguiente →</div>
            <div className="pagination-nav__label">{siguiente.titulo}</div>
          </Link>
        ) : (
          <span className={styles.hueco} />
        )}
      </div>
      <p className={styles.volver}>
        <Link to="/novedades">Volver a novedades</Link>
      </p>
    </nav>
  );
}
