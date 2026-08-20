import type {ReactNode} from 'react';

import {TIPO_LABEL, type NovedadTipo} from './tipos';
import styles from './NovedadMeta.module.css';

type Props = {
  tipo: NovedadTipo;
  fecha: string;
};

export default function NovedadMeta({tipo, fecha}: Props): ReactNode {
  return (
    <p className={styles.meta} data-tipo={tipo}>
      <span className={styles.tipo}>{TIPO_LABEL[tipo]}</span>
      <span className={styles.fecha}>{fecha}</span>
    </p>
  );
}
