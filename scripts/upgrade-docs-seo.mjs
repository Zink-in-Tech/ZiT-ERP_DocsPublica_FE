import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.join(__dirname, '..');
const DOCS_DIR = path.join(REPO_ROOT, 'docs');

const TITLE_OVERRIDES = {
  'docs/admin/tablero.md': 'Tablero de control: indicadores, alertas y accesos rápidos | Zink ERP',
  'docs/administracion/administracion.md':
    'Administración en Zink ERP: productos, contactos, usuarios y permisos | Zink ERP',
  'docs/administracion/contactos-importacion-masiva.md':
    'Importación masiva de contactos: carga desde archivo | Zink ERP',
  'docs/administracion/notificaciones-recibidas-precio.md':
    'Recepción de cambios de precio: aplicar actualizaciones en sucursales | Zink ERP',
  'docs/administracion/notificar-cambio-precio.md':
    'Enviar cambios de precio a sucursales o franquicias | Zink ERP',
  'docs/administracion/organizacion-alta.md':
    'Alta de organizaciones y sucursales en Zink ERP | Zink ERP',
  'docs/administracion/productos-importacion-masiva.md':
    'Importación masiva de productos desde CSV o Excel | Zink ERP',
  'docs/administracion/productos.md':
    'Productos en Zink ERP: catálogo, datos comerciales y stock | Zink ERP',
  'docs/arquitectura.md':
    'Cómo funciona Zink ERP: ventas, compras, stock y finanzas | Zink ERP',
  'docs/compras/compras.md':
    'Compras en Zink ERP: mercadería, pagos y cuenta corriente | Zink ERP',
  'docs/compras/flujo-compras.md':
    'Flujo de compras: de la orden de compra al ingreso de mercadería | Zink ERP',
  'docs/configuracion/configuracion.md':
    'Configuración de Zink ERP: preferencias, datos fiscales y cobros | Zink ERP',
  'docs/configuracion/datos-org.md':
    'Datos de la organización: razón social, CUIT y domicilios | Zink ERP',
  'docs/configuracion/preferencias.md':
    'Preferencias de Zink ERP: configuración general e integraciones | Zink ERP',
  'docs/finanzas/finanzas.md':
    'Finanzas en Zink ERP: caja, pagos, ingresos y cuenta corriente | Zink ERP',
  'docs/glosario.md': 'Glosario de Zink ERP: estados, módulos y términos operativos | Zink ERP',
  'docs/guias/facturacion-electronica-arca.md':
    'Facturación electrónica en Argentina: guía para pymes y ARCA | Zink ERP',
  'docs/informes/informes.md':
    'Informes en Zink ERP: ventas, stock, caja y cuenta corriente | Zink ERP',
  'docs/integraciones/como-funciona.md':
    'Cómo funcionan las integraciones: OAuth, claves REST y mapeos | Zink ERP',
  'docs/integraciones/delegacion-autorizacion-comprobantes-arca.md':
    'Cómo delegar Facturación Electrónica en ARCA para Zink ERP | Zink ERP',
  'docs/integraciones/facturante.md':
    'Facturante en Zink ERP: alta de facturación electrónica | Zink ERP',
  'docs/integraciones/intro.md':
    'Integraciones de Zink ERP: facturación, cobros y tiendas online | Zink ERP',
  'docs/integraciones/mercado-libre.md':
    'Mercado Libre y otros servicios: integraciones disponibles | Zink ERP',
  'docs/integraciones/mercado-pago.md':
    'Mercado Pago en Zink ERP: autorización, sucursal y cobranzas | Zink ERP',
  'docs/integraciones/problemas-frecuentes.md':
    'Problemas frecuentes de integraciones: OAuth, enlaces y errores 401 | Zink ERP',
  'docs/integraciones/seguridad.md':
    'Seguridad de integraciones: claves, secretos y buenas prácticas | Zink ERP',
  'docs/integraciones/woocommerce.md':
    'WooCommerce en Zink ERP: claves REST, mapeo y sincronización | Zink ERP',
  'docs/intro.md': 'Documentación de Zink ERP: guías, módulos e integraciones | Zink ERP',
  'docs/inventario/inventario.md':
    'Inventario en Zink ERP: stock, ajustes y toma por ubicación | Zink ERP',
  'docs/inventario/inventarios-ubicacion.md':
    'Toma de inventario por ubicación: conteo y actualización de stock | Zink ERP',
  'docs/inventario/inventarios.md':
    'Ajustes de inventario: registrar diferencias de stock | Zink ERP',
  'docs/inventario/productos-consulta-inter-org.md':
    'Consulta de stock por organización: disponibilidad inter-sucursal | Zink ERP',
  'docs/primeros-4-dias.md':
    'Primeros resultados con Zink ERP: plan de adopción en pocos días | Zink ERP',
  'docs/primeros-pasos.md':
    'Primeros pasos en Zink ERP: configuración inicial y primera operación | Zink ERP',
  'docs/problemas-frecuentes.md':
    'Problemas frecuentes en Zink ERP: login, permisos, rendimiento y soporte | Zink ERP',
  'docs/ventas/consulta-precio.md':
    'Consulta de precios: listas, stock visible y atención en mostrador | Zink ERP',
  'docs/ventas/flujo-ventas.md':
    'Flujo de ventas: de la cotización a la venta final | Zink ERP',
  'docs/ventas/pos.md':
    'POS en Zink ERP: ventas rápidas, cobro inmediato y mostrador | Zink ERP',
  'docs/ventas/ventas.md':
    'Ventas en Zink ERP: entrega, cobro, stock y cuenta corriente | Zink ERP',
};

const DESCRIPTION_OVERRIDES = {
  'docs/intro.md':
    'Accedé a la documentación de Zink ERP con guías de ventas, compras, inventario, finanzas, configuración e integraciones para equipos operativos y administración.',
  'docs/arquitectura.md':
    'Entendé cómo se conectan ventas, compras, inventario y finanzas en Zink ERP para registrar operaciones con impacto claro en stock, caja y deuda.',
  'docs/guias/facturacion-electronica-arca.md':
    'Aprendé qué es la facturación electrónica en Argentina, qué rol cumple ARCA y qué datos necesita una pyme para emitir comprobantes correctamente.',
  'docs/integraciones/delegacion-autorizacion-comprobantes-arca.md':
    'Seguí el paso a paso para crear un punto de venta en ARCA y delegar Facturación Electrónica, sin compartir clave fiscal, para habilitar Zink ERP.',
  'docs/integraciones/intro.md':
    'Configurá integraciones de Zink ERP con facturación electrónica, cobros y ecommerce, y encontrá rápido los requisitos, enlaces y problemas frecuentes.',
  'docs/problemas-frecuentes.md':
    'Resolvé bloqueos comunes de Zink ERP, desde acceso y permisos hasta rendimiento, orientación de uso y cuándo conviene escalar a soporte.',
};

function listDocFiles(dir) {
  const entries = fs.readdirSync(dir, {withFileTypes: true});
  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return listDocFiles(fullPath);
    }
    return entry.name.endsWith('.md') ? [fullPath] : [];
  });
}

function sentenceCaseBrand(text) {
  return text
    .replaceAll('ZinK ERP', 'Zink ERP')
    .replaceAll('ZinkERP', 'Zink ERP')
    .replaceAll('Docs', '')
    .replace(/\s+\|\s*$/, '')
    .trim();
}

function normalizeTitle(fileKey, currentTitle) {
  if (TITLE_OVERRIDES[fileKey]) {
    return TITLE_OVERRIDES[fileKey];
  }

  const cleanTitle = sentenceCaseBrand(currentTitle);
  if (cleanTitle.includes('| Zink ERP')) {
    return cleanTitle;
  }
  return `${cleanTitle} | Zink ERP`;
}

function stripMarkdown(text) {
  return text
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/_{1,2}([^_]+)_{1,2}/g, '$1')
    .replace(/^>+\s?/gm, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function trimDescription(text, maxLength = 165) {
  if (text.length <= maxLength) {
    return text;
  }

  const sliced = text.slice(0, maxLength + 1);
  const lastPunctuation = Math.max(
    sliced.lastIndexOf('.'),
    sliced.lastIndexOf(','),
    sliced.lastIndexOf(';'),
  );

  if (lastPunctuation >= 110) {
    return sliced.slice(0, lastPunctuation).trim();
  }

  const lastSpace = sliced.lastIndexOf(' ');
  return sliced.slice(0, lastSpace).trim();
}

function splitSentences(text) {
  const matches = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g);
  return matches ? matches.map((sentence) => sentence.trim()).filter(Boolean) : [text];
}

function extractSummarySection(content) {
  const summaryMatch = content.match(/##\s+Resumen([\s\S]*?)(\n##\s+|\n#\s+|$)/i);
  if (summaryMatch) {
    return summaryMatch[1];
  }

  const firstSectionMatch = content.match(/##\s+[^\n]+([\s\S]*?)(\n##\s+|\n#\s+|$)/);
  if (firstSectionMatch) {
    return firstSectionMatch[1];
  }

  return content;
}

function extractParagraphs(markdownSection) {
  const lines = markdownSection.split('\n');
  const paragraphs = [];
  let current = [];
  let inFence = false;
  let inAdmonition = false;

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (line.startsWith('```')) {
      inFence = !inFence;
      continue;
    }

    if (line.startsWith(':::')) {
      inAdmonition = !inAdmonition;
      continue;
    }

    if (inFence || inAdmonition) {
      continue;
    }

    if (!line || line === '---') {
      if (current.length > 0) {
        paragraphs.push(current.join(' '));
        current = [];
      }
      continue;
    }

    if (
      line.startsWith('#') ||
      line.startsWith('![') ||
      line.startsWith('|') ||
      /^[-*]\s/.test(line) ||
      /^\d+\.\s/.test(line)
    ) {
      continue;
    }

    current.push(line);
  }

  if (current.length > 0) {
    paragraphs.push(current.join(' '));
  }

  return paragraphs.map(stripMarkdown).filter(Boolean);
}

function generateDescription(fileKey, title, content) {
  if (DESCRIPTION_OVERRIDES[fileKey]) {
    return DESCRIPTION_OVERRIDES[fileKey];
  }

  const paragraphs = extractParagraphs(extractSummarySection(content));
  const titleBase = sentenceCaseBrand(title).replace(/\s+\|\s+Zink ERP$/, '').trim();

  let candidate = paragraphs.slice(0, 2).join(' ');
  if (!candidate) {
    candidate = titleBase;
  }

  candidate = candidate.replace(/\s+/g, ' ').trim();

  if (!/Zink ERP|ARCA|WooCommerce|Mercado Pago|Mercado Libre|Facturante/i.test(candidate)) {
    candidate = `${candidate} en Zink ERP.`;
  }

  const sentences = splitSentences(candidate);
  let combined = '';

  for (const sentence of sentences) {
    const next = combined ? `${combined} ${sentence}` : sentence;
    if (next.length > 165) {
      break;
    }
    combined = next;
  }

  if (combined) {
    return combined;
  }

  return trimDescription(candidate);
}

function demoteBodyH1(content) {
  const lines = content.split('\n');
  let inFence = false;

  return (
    lines
      .map((line) => {
        if (line.trim().startsWith('```')) {
          inFence = !inFence;
          return line;
        }

        if (!inFence && /^# [^#]/.test(line)) {
          return line.replace(/^# /, '## ');
        }

        return line;
      })
      .join('\n')
      .trimEnd() + '\n'
  );
}

function main() {
  const files = listDocFiles(DOCS_DIR);

  for (const filePath of files) {
    const fileKey = path.relative(REPO_ROOT, filePath).replaceAll(path.sep, '/');
    const raw = fs.readFileSync(filePath, 'utf8');
    const parsed = matter(raw);
    const data = {...parsed.data};

    if (!data.title) {
      continue;
    }

    data.title = normalizeTitle(fileKey, String(data.title));
    data.description = generateDescription(fileKey, data.title, parsed.content);

    const content = demoteBodyH1(parsed.content);
    const next = matter.stringify(content, data);
    fs.writeFileSync(filePath, next, 'utf8');
    console.log(`SEO OK ${fileKey}`);
  }
}

main();
