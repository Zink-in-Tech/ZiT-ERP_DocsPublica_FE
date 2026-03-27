/**
 * Importa los .md de ayuda del ERP (frontmatter YAML + cuerpo) a docs/ para Docusaurus.
 *
 * Uso:
 *   node scripts/import-erp-help.mjs
 *   node scripts/import-erp-help.mjs /ruta/a/ZiT-ERP_FE/src/help/content
 *
 * Por defecto usa la ruta hermana ../ZiT-ERP_FE/src/help/content respecto a la raíz del repo.
 */

import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.join(__dirname, '..');

const DEFAULT_SOURCE = path.join(
  REPO_ROOT,
  '..',
  'ZiT-ERP_FE',
  'src',
  'help',
  'content',
);

/** Metadatos de categoría por carpeta (module del ERP) */
const MODULE_CATEGORY = {
  admin: {label: 'Tablero', position: 10},
  administracion: {label: 'Administración', position: 20},
  compras: {label: 'Compras', position: 30},
  configuracion: {label: 'Configuración', position: 40},
  finanzas: {label: 'Finanzas', position: 50},
  informes: {label: 'Informes', position: 60},
  inventario: {label: 'Inventario', position: 70},
  ventas: {label: 'Ventas', position: 80},
};

/** Convierte # Sección del ERP en ## para no duplicar H1 (el título va en frontmatter). */
function demoteH1InBody(content) {
  const lines = content.split('\n');
  let inFence = false;
  const out = [];
  for (const line of lines) {
    if (line.trim().startsWith('```')) {
      inFence = !inFence;
      out.push(line);
      continue;
    }
    if (!inFence && /^# [^#]/.test(line)) {
      out.push(line.replace(/^# /, '## '));
    } else {
      out.push(line);
    }
  }
  return out.join('\n').trim() + '\n';
}

function main() {
  const sourceDir = path.resolve(process.argv[2] || DEFAULT_SOURCE);
  const docsDir = path.join(REPO_ROOT, 'docs');

  if (!fs.existsSync(sourceDir)) {
    console.error(`No existe la carpeta de origen: ${sourceDir}`);
    console.error('Pasá la ruta como argumento o colocá el repo ZiT-ERP_FE junto a este proyecto.');
    process.exit(1);
  }

  const files = fs
    .readdirSync(sourceDir)
    .filter((f) => f.endsWith('.md'))
    .sort();

  let count = 0;
  const usedModules = new Set();

  for (const file of files) {
    const srcPath = path.join(sourceDir, file);
    const raw = fs.readFileSync(srcPath, 'utf8');
    const {data, content} = matter(raw);

    const moduleKey = String(data.module || 'administracion').trim();
    usedModules.add(moduleKey);

    const destDir = path.join(docsDir, moduleKey);
    fs.mkdirSync(destDir, {recursive: true});

    const title = data.title || path.basename(file, '.md');
    const order =
      typeof data.order === 'number' ? data.order : parseInt(data.order, 10) || 100;

    const newData = {
      title,
      sidebar_position: order,
    };

    const body = demoteH1InBody(content);
    const out = matter.stringify(body, newData);

    const destPath = path.join(destDir, file);
    fs.writeFileSync(destPath, out, 'utf8');
    count++;
    console.log(`OK ${moduleKey}/${file}`);
  }

  for (const mod of usedModules) {
    const meta = MODULE_CATEGORY[mod] || {
      label: mod.charAt(0).toUpperCase() + mod.slice(1),
      position: 50,
    };
    const catDir = path.join(docsDir, mod);
    const catPath = path.join(catDir, '_category_.json');
    fs.writeFileSync(
      catPath,
      JSON.stringify(
        {
          label: meta.label,
          position: meta.position,
          collapsed: true,
        },
        null,
        2,
      ) + '\n',
      'utf8',
    );
    console.log(`Categoría ${mod} -> _category_.json`);
  }

  console.log(`\nListo: ${count} archivos importados desde ${sourceDir}`);
}

main();
