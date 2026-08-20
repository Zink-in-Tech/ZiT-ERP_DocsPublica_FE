import type {ReactNode} from 'react';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import Link from '@docusaurus/Link';

import {novedadesVecinas} from './items';
import styles from './NovedadVolver.module.css';

export default function NovedadVolver(): ReactNode {
  const {metadata} = useDoc();
  const {anterior, siguiente} = novedadesVecinas(metadata.permalink);

  return (
    <nav className={styles.barra} aria-label="Navegación de la entrega">
      <Link className={styles.volver} to="/novedades">
        ← Todas las novedades
      </Link>
      {anterior || siguiente ? (
        <span className={styles.atajos}>
          {anterior ? (
            <Link to={anterior.href} title={anterior.titulo}>
              ← Anterior
            </Link>
          ) : null}
          {siguiente ? (
            <Link to={siguiente.href} title={siguiente.titulo}>
              Siguiente →
            </Link>
          ) : null}
        </span>
      ) : null}
    </nav>
  );
}
