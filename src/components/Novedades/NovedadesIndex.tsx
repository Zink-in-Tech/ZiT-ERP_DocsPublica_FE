import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';

import {TIPO_LABEL} from './tipos';
import {
  agruparPorMes,
  formatFechaCorta,
  formatFechaLarga,
  NOVEDADES_RECIENTES,
  novedadesOrdenadas,
  type NovedadIndexItem,
} from './items';
import styles from './NovedadesIndex.module.css';

function NovedadCard({item}: {item: NovedadIndexItem}): ReactNode {
  return (
    <li className={styles.card} data-tipo={item.tipo}>
      <p className={styles.cardMeta}>
        <span className={styles.tipo}>{TIPO_LABEL[item.tipo]}</span>
        <time dateTime={item.fechaISO}>{formatFechaLarga(item.fechaISO)}</time>
      </p>
      <h3 className={styles.titulo}>
        <Link to={item.href}>{item.titulo}</Link>
      </h3>
      {item.lead ? <p className={styles.lead}>{item.lead}</p> : null}
      <Link className={styles.leer} to={item.href}>
        Leer la explicación
      </Link>
    </li>
  );
}

function NovedadFila({item}: {item: NovedadIndexItem}): ReactNode {
  return (
    <li className={styles.fila} data-tipo={item.tipo}>
      <Link className={styles.filaLink} to={item.href}>
        <time className={styles.filaFecha} dateTime={item.fechaISO}>
          {formatFechaCorta(item.fechaISO)}
        </time>
        <span className={styles.tipo}>{TIPO_LABEL[item.tipo]}</span>
        <span className={styles.filaTitulo}>{item.titulo}</span>
      </Link>
    </li>
  );
}

export default function NovedadesIndex(): ReactNode {
  const ordenadas = novedadesOrdenadas();
  const recientes = ordenadas.slice(0, NOVEDADES_RECIENTES);
  const anteriores = agruparPorMes(ordenadas.slice(NOVEDADES_RECIENTES));

  return (
    <div className={styles.wrap}>
      <section className={styles.seccion} aria-labelledby="novedades-recientes">
        <h2 id="novedades-recientes" className={styles.seccionTitulo}>
          Recientes
        </h2>
        <ol className={styles.list}>
          {recientes.map((item) => (
            <NovedadCard key={item.id} item={item} />
          ))}
        </ol>
      </section>

      {anteriores.length > 0 ? (
        <section className={styles.seccion} aria-labelledby="novedades-archivo">
          <h2 id="novedades-archivo" className={styles.seccionTitulo}>
            Anteriores
          </h2>
          <div className={styles.archivo}>
            {anteriores.map((grupo) => (
              <details key={grupo.clave} className={styles.mes}>
                <summary className={styles.mesResumen}>
                  <span>{grupo.etiqueta}</span>
                  <span className={styles.mesCuenta}>
                    {grupo.items.length}{' '}
                    {grupo.items.length === 1 ? 'nota' : 'notas'}
                  </span>
                </summary>
                <ol className={styles.filas}>
                  {grupo.items.map((item) => (
                    <NovedadFila key={item.id} item={item} />
                  ))}
                </ol>
              </details>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
