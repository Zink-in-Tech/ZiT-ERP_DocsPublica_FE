/**
 * Genera una matriz de auditoria para cruzar documentacion, pantallas y material visual.
 *
 * Uso:
 *   npm run audit:docs
 *   node scripts/audit-docs-media.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.join(__dirname, '..');
const DOCS_DIR = path.join(REPO_ROOT, 'docs');
const OUT_PATH = path.join(REPO_ROOT, 'AUDITORIA-MATRIZ-MEDIA.md');

const REQUIRED_SECTIONS = [
  '## Resumen',
  '## Antes de empezar',
  '## Procedimiento',
  '## Casos frecuentes',
  '## Si algo sale mal',
  '## Ver también',
];

const LEGACY_SECTIONS = [
  '## CuandoUsar',
  '## Flujo',
  '## Campos',
  '## Reglas',
  '## BuenasPracticas',
];

const HIGH_VISUAL_TERMS = [
  'flujo',
  'pos',
  'caja diaria',
  'pago',
  'pagos',
  'inventario',
  'importacion',
  'importación',
  'actualizacion masiva',
  'actualización masiva',
  'integracion',
  'integración',
  'woocommerce',
  'mercado pago',
  'facturante',
  'informe',
  'informes',
  'exportar',
  'imprimir',
  'estado',
  'confirmar',
  'guardar',
  'vincular',
  'enlazar',
  'desvincular',
];

const VIDEO_TERMS = [
  'flujo',
  'pos',
  'primeros',
  'caja diaria',
  'importacion',
  'importación',
  'woocommerce',
  'mercado pago',
  'integracion',
  'integración',
];

const PRIORITY_DOCS = new Set([
  'docs/primeros-pasos.md',
  'docs/primeros-4-dias.md',
  'docs/ventas/flujo-ventas.md',
  'docs/ventas/pos.md',
  'docs/ventas/ventas.md',
  'docs/finanzas/caja-diaria.md',
  'docs/finanzas/pagos.md',
  'docs/inventario/inventarios.md',
  'docs/administracion/productos-importacion-masiva.md',
  'docs/administracion/contactos-importacion-masiva.md',
  'docs/administracion/productos-actualizacion-masiva.md',
  'docs/integraciones/intro.md',
  'docs/integraciones/woocommerce.md',
  'docs/integraciones/mercado-pago.md',
  'docs/integraciones/facturante.md',
]);

function walk(dir) {
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    return fullPath;
  });
}

function stripAccents(value) {
  return value.normalize('NFD').replace(/\p{Diacritic}/gu, '');
}

function slugify(value) {
  return stripAccents(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function countMatches(content, regex) {
  return (content.match(regex) || []).length;
}

function hasExactHeading(content, heading) {
  const escapedHeading = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`^${escapedHeading}\\s*$`, 'm').test(content);
}

function hasAnyTerm(content, terms) {
  const normalized = stripAccents(content).toLowerCase();
  return terms.some((term) => normalized.includes(stripAccents(term).toLowerCase()));
}

function classifyPriority(doc) {
  if (doc.todos > 0 || doc.legacySections.length > 0 || PRIORITY_DOCS.has(doc.relPath)) return 'Alta';
  if (doc.missingSections.length > 0 || doc.words < 220) return 'Media';
  if (doc.screenshotCandidate) return 'Media';
  return 'Baja';
}

function collectDocs() {
  return walk(DOCS_DIR)
    .filter((file) => /\.mdx?$/.test(file))
    .sort()
    .map((file) => {
      const raw = fs.readFileSync(file, 'utf8');
      const parsed = matter(raw);
      const relPath = path.relative(REPO_ROOT, file);
      const moduleName = path.relative(DOCS_DIR, path.dirname(file)).split(path.sep)[0] || 'raiz';
      const title = parsed.data.title || path.basename(file, path.extname(file));
      const body = parsed.content;
      const words = body.trim().split(/\s+/).filter(Boolean).length;
      const missingSections = REQUIRED_SECTIONS.filter((section) => !hasExactHeading(raw, section));
      const legacySections = LEGACY_SECTIONS.filter((section) => hasExactHeading(raw, section));
      const images = countMatches(raw, /!\[/g);
      const todos = countMatches(raw, /TODO/g);
      const screenshotCandidate = images === 0 && hasAnyTerm(`${title}\n${body}`, HIGH_VISUAL_TERMS);
      const videoCandidate = hasAnyTerm(`${title}\n${body}`, VIDEO_TERMS) && words > 300;
      const slug = slugify(path.basename(file, path.extname(file)));

      const doc = {
        relPath,
        moduleName,
        title,
        words,
        missingSections,
        legacySections,
        images,
        todos,
        screenshotCandidate,
        videoCandidate,
        suggestedImageDir: `static/img/ayuda/${moduleName}`,
        suggestedFirstImage: `static/img/ayuda/${moduleName}/${slug}-01.png`,
      };

      return {
        ...doc,
        priority: classifyPriority(doc),
      };
    });
}

function tableRow(cells) {
  return `| ${cells.map((cell) => String(cell).replace(/\n/g, '<br>').replace(/\|/g, '\\|')).join(' |')} |`;
}

function renderReport(docs) {
  const totalTodos = docs.reduce((sum, doc) => sum + doc.todos, 0);
  const docsWithTodos = docs.filter((doc) => doc.todos > 0).length;
  const docsWithImages = docs.filter((doc) => doc.images > 0).length;
  const legacyDocs = docs.filter((doc) => doc.legacySections.length > 0).length;
  const screenshotCandidates = docs.filter((doc) => doc.screenshotCandidate).length;
  const videoCandidates = docs.filter((doc) => doc.videoCandidate).length;

  const highPriority = docs
    .filter((doc) => doc.priority === 'Alta')
    .sort((a, b) => b.todos - a.todos || b.legacySections.length - a.legacySections.length);

  const lines = [
    '# Matriz de auditoria multimedia',
    '',
    '**Uso interno del equipo.** Archivo generado automaticamente con `npm run audit:docs`.',
    '',
    '## Resumen',
    '',
    `- Paginas revisadas: ${docs.length}.`,
    `- Articulos con imagenes: ${docsWithImages}.`,
    `- Articulos candidatos a capturas: ${screenshotCandidates}.`,
    `- Articulos candidatos a video corto: ${videoCandidates}.`,
    `- Articulos con TODOs: ${docsWithTodos}.`,
    `- TODOs totales: ${totalTodos}.`,
    `- Articulos con secciones heredadas de semilla: ${legacyDocs}.`,
    '',
    '## Como usar esta matriz',
    '',
    '1. Revisar primero los articulos de prioridad Alta.',
    '2. Validar cada articulo contra la pantalla real del ERP en staging o demo.',
    '3. Guardar capturas limpias en la ruta sugerida.',
    '4. Insertar las capturas en el articulo cuando la UI ya este validada.',
    '5. Volver a ejecutar `npm run audit:docs` y `npm run build`.',
    '',
    '## Prioridad alta',
    '',
    tableRow([
      'Articulo',
      'Modulo',
      'TODOs',
      'Secciones heredadas',
      'Captura',
      'Video',
      'Ruta sugerida',
    ]),
    tableRow(['---', '---', '---:', '---', '---', '---', '---']),
    ...highPriority.map((doc) =>
      tableRow([
        `\`${doc.relPath}\``,
        doc.moduleName,
        doc.todos,
        doc.legacySections.length ? doc.legacySections.map((section) => section.replace('## ', '')).join(', ') : '-',
        doc.screenshotCandidate ? 'Si' : 'No',
        doc.videoCandidate ? 'Si' : 'No',
        `\`${doc.suggestedFirstImage}\``,
      ]),
    ),
    '',
    '## Matriz completa',
    '',
    tableRow([
      'Prioridad',
      'Articulo',
      'Titulo',
      'Palabras',
      'Imagenes',
      'Faltan secciones',
      'Captura sugerida',
    ]),
    tableRow(['---', '---', '---', '---:', '---:', '---', '---']),
    ...docs.map((doc) =>
      tableRow([
        doc.priority,
        `\`${doc.relPath}\``,
        doc.title,
        doc.words,
        doc.images,
        doc.missingSections.length ? doc.missingSections.map((section) => section.replace('## ', '')).join(', ') : '-',
        doc.screenshotCandidate ? `\`${doc.suggestedFirstImage}\`` : '-',
      ]),
    ),
    '',
    '## Convencion de capturas',
    '',
    '- Usar datos demo o anonimizados.',
    '- Evitar claves, tokens, datos fiscales reales, correos personales o informacion sensible.',
    '- Nombrar archivos con orden de lectura: `articulo-01.png`, `articulo-02.png`, etc.',
    '- Preferir capturas de decisiones importantes antes que capturas de cada clic.',
    '- Si una captura muestra un boton o estado clave, agregar un alt descriptivo en Markdown.',
  ];

  return `${lines.join('\n')}\n`;
}

function main() {
  const docs = collectDocs();
  const report = renderReport(docs);
  fs.writeFileSync(OUT_PATH, report, 'utf8');
  console.log(`OK ${path.relative(REPO_ROOT, OUT_PATH)}`);
}

main();
