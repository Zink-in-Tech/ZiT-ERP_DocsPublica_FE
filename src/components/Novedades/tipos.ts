export type NovedadTipo = 'feature' | 'improvement' | 'bugfix' | 'breaking';

export const TIPO_LABEL: Record<NovedadTipo, string> = {
  feature: 'Nueva funcionalidad',
  improvement: 'Mejora',
  bugfix: 'Corrección',
  breaking: 'Cambio importante',
};
