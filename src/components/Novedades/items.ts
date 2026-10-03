import type {NovedadTipo} from './tipos';

export type NovedadIndexItem = {
  id: string;
  fechaISO: string;
  tipo: NovedadTipo;
  titulo: string;
  lead?: string;
  href: string;
};

/** Si hay más de una nota el mismo día, la más nueva usa la fecha; las otras agregan el id. */
export function hrefNovedad(
  fechaISO: string,
  id: string,
  items: ReadonlyArray<{fechaISO: string; id: string}>,
): string {
  const mismoDia = items.filter((item) => item.fechaISO === fechaISO);
  const idMasNueva = mismoDia.reduce(
    (max, item) => (Number(item.id) > Number(max) ? item.id : max),
    mismoDia[0]?.id ?? id,
  );

  if (mismoDia.length <= 1 || id === idMasNueva) {
    return `/novedades/${fechaISO}`;
  }

  return `/novedades/${fechaISO}-${id}`;
}

const NOVEDADES_FUENTE: Array<Omit<NovedadIndexItem, 'href'>> = [
  {
    id: '45',
    fechaISO: '2026-09-30',
    tipo: 'feature',
    titulo: 'Detalle de pagos, centro de notificaciones y más formas de duplicar ventas',
    lead: 'Consultá a qué comprobantes se aplicó cada pago, duplicá una venta como pedido o presupuesto, respondé comentarios mencionando al autor y revisá todas tus notificaciones desde el centro de notificaciones.',
  },
  {
    id: '44',
    fechaISO: '2026-09-21',
    tipo: 'feature',
    titulo: 'Envío de comprobantes, fiscal A4 y descuentos del día',
    lead: 'Enviá el comprobante de una venta por correo, elegí Ticket o A4 en el fiscal con ARCA, y consultá descuentos del día en el Dashboard.',
  },
  {
    id: '43',
    fechaISO: '2026-09-18',
    tipo: 'feature',
    titulo: 'Más acciones directas en contactos, documentos, stock y caja',
    lead: 'Historial comercial del cliente en la ficha, documentos y stock desde donde ya estás, compartir saldo y comprobantes, altas en Caja y conceptos sin salir del formulario.',
  },
  {
    id: '42',
    fechaISO: '2026-09-16',
    tipo: 'feature',
    titulo: 'Importar pedido desde texto e importación asistida de productos',
    lead: 'Importar pedido desde texto, importación asistida de productos, Formularios V2 definitivos y descuentos en el Dashboard.',
  },
  {
    id: '41',
    fechaISO: '2026-08-20',
    tipo: 'bugfix',
    titulo: 'Cobros con Mercado Pago, duplicar venta y facturación más confiables',
    lead: 'Ajustes en cobro QR, duplicar venta, notas de crédito y débito, y configuración fiscal ARCA.',
  },

  {
    id: '40',
    fechaISO: '2026-08-18',
    tipo: 'feature',
    titulo: 'Documentos más rápidos, contactos completos y productos actualizados en lote',
    lead: 'Duplicar documentos, consulta ARCA en contactos, Excel en artículos vendidos y actualización masiva.',
  },
  {
    id: '39',
    fechaISO: '2026-08-10',
    tipo: 'improvement',
    titulo: 'Costos en dólares, Formularios V2 y una operación más confiable',
    lead: 'Costo en ARS o USD, Formularios V2 por defecto e inicio más liviano.',
  },
  {
    id: '38',
    fechaISO: '2026-08-01',
    tipo: 'improvement',
    titulo: 'Más velocidad, listados más cómodos y pantallas más claras',
    lead: 'Listados que recuerdan preferencias, cobros más claros y menú renovado.',
  },
  {
    id: '37',
    fechaISO: '2026-07-31',
    tipo: 'bugfix',
    titulo: 'Corregido el cobro con tarjeta de crédito y débito',
    lead: 'El cobro con tarjeta se guarda con normalidad; solo se piden los últimos 4 dígitos.',
  },
  {
    id: '36',
    fechaISO: '2026-07-23',
    tipo: 'improvement',
    titulo: 'Módulos y formularios V2 que recuerdan tu preferencia',
    lead: 'Catálogo de módulos próximos y Formularios V2 que respetan Probar V2.',
  },
  {
    id: '35',
    fechaISO: '2026-07-21',
    tipo: 'improvement',
    titulo: 'Cobros y atajos más claros, impresión más fiable',
    lead: 'F2 y F4 en cobro, consumidor final más limpio e impresión sin cortes.',
  },
  {
    id: '34',
    fechaISO: '2026-07-20',
    tipo: 'feature',
    titulo: 'Operá más rápido, con menos pasos',
  },
  {
    id: '33',
    fechaISO: '2026-06-19',
    tipo: 'improvement',
    titulo: 'Monitor global de caja diaria, impresión y ventas más resistentes',
  },
  {
    id: '32',
    fechaISO: '2026-06-05',
    tipo: 'improvement',
    titulo: 'Listados que recuerdan tus preferencias, Dashboard renovado y ventas más seguras',
  },
  {
    id: '31',
    fechaISO: '2026-04-06',
    tipo: 'improvement',
    titulo: 'Actualización más confiable, ventas más ágiles y mayor estabilidad',
  },
  {
    id: '30',
    fechaISO: '2026-03-31',
    tipo: 'improvement',
    titulo: 'Mejoras en punto de venta, precios y experiencia general',
  },
  {
    id: '29',
    fechaISO: '2026-03-31',
    tipo: 'bugfix',
    titulo: 'Mejoras en pagos, ventas y manejo de importes',
  },
  {
    id: '28',
    fechaISO: '2026-03-23',
    tipo: 'feature',
    titulo: 'Nuevos informes de compras, pagos y cobranzas',
  },
  {
    id: '27',
    fechaISO: '2026-03-22',
    tipo: 'improvement',
    titulo: 'Nuevo informe, ventas más ágiles y formularios mejorados',
  },
  {
    id: '26',
    fechaISO: '2026-03-03',
    tipo: 'improvement',
    titulo: 'Filtros de fecha, escaneo por cámara e informes mejorados',
  },
  {
    id: '25',
    fechaISO: '2026-03-01',
    tipo: 'improvement',
    titulo: 'Mejoras de experiencia general y control operativo',
  },
  {
    id: '24',
    fechaISO: '2026-02-27',
    tipo: 'improvement',
    titulo: 'Cuenta corriente y visualización más claras',
  },
  {
    id: '23',
    fechaISO: '2026-02-25',
    tipo: 'improvement',
    titulo: 'Sistema más rápido y fluido',
  },
  {
    id: '22',
    fechaISO: '2026-02-24',
    tipo: 'improvement',
    titulo: 'Mejoras en acceso, pagos y productos',
  },
  {
    id: '21',
    fechaISO: '2026-02-23',
    tipo: 'improvement',
    titulo: 'Compras y productos más ágiles',
  },
  {
    id: '20',
    fechaISO: '2026-02-23',
    tipo: 'feature',
    titulo: 'Redondeo configurable en precios',
  },
  {
    id: '19',
    fechaISO: '2026-02-23',
    tipo: 'improvement',
    titulo: 'Mayor estabilidad y consistencia operativa',
  },
  {
    id: '18',
    fechaISO: '2026-02-23',
    tipo: 'improvement',
    titulo: 'Interfaz más clara y navegación optimizada',
  },
  {
    id: '17',
    fechaISO: '2026-02-23',
    tipo: 'feature',
    titulo: 'Listados renovados en todo el sistema',
  },
  {
    id: '16',
    fechaISO: '2026-02-23',
    tipo: 'feature',
    titulo: 'Nuevo módulo de Cotizaciones',
  },
  {
    id: '15',
    fechaISO: '2026-02-09',
    tipo: 'improvement',
    titulo: 'Listas de precios más flexibles y mensajes más claros',
  },
  {
    id: '13',
    fechaISO: '2026-02-04',
    tipo: 'bugfix',
    titulo: 'Hotfix: confirmación con Enter y actualización masiva de precios',
  },
  {
    id: '12',
    fechaISO: '2026-02-02',
    tipo: 'improvement',
    titulo: 'Mejoras generales y correcciones',
  },
  {
    id: '14',
    fechaISO: '2026-01-20',
    tipo: 'improvement',
    titulo: 'Búsqueda de productos y contactos más clara y consistente',
  },
  {
    id: '11',
    fechaISO: '2025-12-15',
    tipo: 'feature',
    titulo: 'Pagos y configuración con Mercado Pago',
  },
  {
    id: '10',
    fechaISO: '2025-12-15',
    tipo: 'improvement',
    titulo: 'Mejoras en contactos, créditos y experiencia de uso',
  },
  {
    id: '9',
    fechaISO: '2025-11-16',
    tipo: 'feature',
    titulo: 'Nuevas funcionalidades en productos, inventarios y pagos',
  },
  {
    id: '8',
    fechaISO: '2025-11-05',
    tipo: 'bugfix',
    titulo: 'Corrección en informes',
  },
  {
    id: '7',
    fechaISO: '2025-11-03',
    tipo: 'improvement',
    titulo: 'Contactos: nueva experiencia con tabs y atajos inteligentes',
  },
  {
    id: '6',
    fechaISO: '2025-10-23',
    tipo: 'feature',
    titulo: 'Gestión de productos totalmente renovada',
  },
  {
    id: '5',
    fechaISO: '2025-09-29',
    tipo: 'feature',
    titulo: 'Nueva versión con mejoras en reportes y pagos',
  },
  {
    id: '4',
    fechaISO: '2025-09-22',
    tipo: 'feature',
    titulo: 'Nueva versión con informes y mejoras importantes',
  },
  {
    id: '3',
    fechaISO: '2025-09-14',
    tipo: 'improvement',
    titulo: 'Nueva versión con múltiples mejoras',
  },
  {
    id: '2',
    fechaISO: '2025-06-11',
    tipo: 'feature',
    titulo: 'Mejoras en filtros y gestión de productos',
  },
  {
    id: '1',
    fechaISO: '2025-04-17',
    tipo: 'breaking',
    titulo: 'Correcciones importantes y nuevas funcionalidades',
  },
];

export const NOVEDADES: NovedadIndexItem[] = NOVEDADES_FUENTE.map((item) => ({
  ...item,
  href: hrefNovedad(item.fechaISO, item.id, NOVEDADES_FUENTE),
}));

export function novedadPorHref(href: string): NovedadIndexItem | undefined {
  const normalizado = href.replace(/\/$/, '') || '/';
  return NOVEDADES.find((item) => item.href === normalizado);
}

/** Anterior = más antigua. Siguiente = más reciente. */
export function novedadesVecinas(href: string): {
  actual?: NovedadIndexItem;
  anterior?: NovedadIndexItem;
  siguiente?: NovedadIndexItem;
} {
  const lista = novedadesOrdenadas();
  const actual = novedadPorHref(href);
  if (!actual) {
    return {};
  }

  const indice = lista.findIndex((item) => item.href === actual.href);
  if (indice < 0) {
    return {actual};
  }

  return {
    actual,
    anterior: lista[indice + 1],
    siguiente: lista[indice - 1],
  };
}

export const NOVEDADES_RECIENTES = 7;

export function fechaLocal(iso: string): Date {
  return new Date(`${iso}T12:00:00`);
}

export function formatFechaLarga(iso: string): string {
  return fechaLocal(iso).toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function formatFechaCorta(iso: string): string {
  return fechaLocal(iso).toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export function formatMesAnio(iso: string): string {
  const label = fechaLocal(iso).toLocaleDateString('es-AR', {
    month: 'long',
    year: 'numeric',
  });
  return label.charAt(0).toUpperCase() + label.slice(1);
}

export function mesClave(iso: string): string {
  return iso.slice(0, 7);
}

export function novedadesOrdenadas(
  items: NovedadIndexItem[] = NOVEDADES,
): NovedadIndexItem[] {
  return [...items].sort((a, b) => {
    const byDate = b.fechaISO.localeCompare(a.fechaISO);
    if (byDate !== 0) {
      return byDate;
    }
    return Number(b.id) - Number(a.id);
  });
}

export type NovedadMesGrupo = {
  clave: string;
  etiqueta: string;
  items: NovedadIndexItem[];
};

export function agruparPorMes(items: NovedadIndexItem[]): NovedadMesGrupo[] {
  const grupos = new Map<string, NovedadMesGrupo>();

  for (const item of items) {
    const clave = mesClave(item.fechaISO);
    const actual = grupos.get(clave);
    if (actual) {
      actual.items.push(item);
    } else {
      grupos.set(clave, {
        clave,
        etiqueta: formatMesAnio(item.fechaISO),
        items: [item],
      });
    }
  }

  return [...grupos.values()];
}
