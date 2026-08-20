import type {ReactNode} from 'react';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import Heading from '@theme/Heading';

import {getNovedadHeroTitle} from '../../utils/docDisplayTitle';
import {novedadPorHref} from './items';
import NovedadMeta from './NovedadMeta';
import NovedadVolver from './NovedadVolver';
import type {NovedadTipo} from './tipos';
import styles from './NovedadCabecera.module.css';

type Props = {
  tipo: NovedadTipo;
  fecha: string;
};

export default function NovedadCabecera({tipo, fecha}: Props): ReactNode {
  const {metadata} = useDoc();
  const titulo =
    novedadPorHref(metadata.permalink)?.titulo ??
    getNovedadHeroTitle(metadata.title);

  return (
    <header className={styles.hero}>
      <NovedadVolver />
      <NovedadMeta tipo={tipo} fecha={fecha} />
      <Heading as="h1" className={styles.titulo}>
        {titulo}
      </Heading>
    </header>
  );
}
