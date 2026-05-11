/**
 * Captura pantallas reales del ERP para la documentacion.
 *
 * Requiere Playwright. Si este repo no lo tiene instalado, lee la instalacion
 * del frontend hermano `../ZiT-ERP_FE`, donde ya viven las pruebas E2E.
 * Este script no escribe ni modifica archivos dentro de `../ZiT-ERP_FE`.
 *
 * Uso:
 *   ERP_SCREENSHOT_USER="admin@test.com" ERP_SCREENSHOT_PASSWORD="***" npm run capture:erp
 *
 * Opcionales:
 *   ERP_SCREENSHOT_BASE_URL="https://testziterp.azurewebsites.net"
 *   ERP_SCREENSHOT_ROUTES="scripts/erp-screenshot-routes.json"
 *   ERP_SCREENSHOT_HEADLESS="false"
 */

import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.join(__dirname, '..');
const DEFAULT_FRONTEND_PACKAGE = path.resolve(REPO_ROOT, '..', 'ZiT-ERP_FE', 'package.json');
const DEFAULT_ROUTES = path.join(REPO_ROOT, 'scripts', 'erp-screenshot-routes.json');
const REPORT_PATH = path.join(REPO_ROOT, 'AUDITORIA-CAPTURAS-ERP.md');

const baseUrl = process.env.ERP_SCREENSHOT_BASE_URL || 'https://testziterp.azurewebsites.net';
const user = process.env.ERP_SCREENSHOT_USER;
const password = process.env.ERP_SCREENSHOT_PASSWORD;
const routesPath = path.resolve(REPO_ROOT, process.env.ERP_SCREENSHOT_ROUTES || DEFAULT_ROUTES);
const headless = process.env.ERP_SCREENSHOT_HEADLESS !== 'false';

if (!user || !password) {
  console.error('Faltan credenciales. Defini ERP_SCREENSHOT_USER y ERP_SCREENSHOT_PASSWORD.');
  process.exit(1);
}

function loadPlaywright() {
  try {
    const localRequire = createRequire(path.join(REPO_ROOT, 'package.json'));
    return localRequire('@playwright/test');
  } catch {
    if (!fs.existsSync(DEFAULT_FRONTEND_PACKAGE)) {
      throw new Error('No se encontro Playwright local ni el repo hermano ../ZiT-ERP_FE.');
    }
    const frontendRequire = createRequire(DEFAULT_FRONTEND_PACKAGE);
    return frontendRequire('@playwright/test');
  }
}

function absoluteUrl(routeUrl) {
  return new URL(routeUrl, baseUrl).toString();
}

function markdownRow(cells) {
  return `| ${cells.map((cell) => String(cell).replace(/\n/g, '<br>').replace(/\|/g, '\\|')).join(' |')} |`;
}

async function login(page) {
  await page.goto(absoluteUrl('/login'), {waitUntil: 'domcontentloaded'});
  await page.locator('input[name="user"], input[type="email"]').first().waitFor({
    state: 'visible',
    timeout: 30000,
  });
  await page.locator('input[name="user"], input[type="email"]').first().fill(user);
  await page.locator('input[name="password"], input[type="password"]').first().fill(password);
  await Promise.all([
    page.waitForURL(/\/admin\/dashboard/, {timeout: 30000}),
    page.locator('button[type="submit"], button:has-text("INICIAR SESIÓN")').first().click(),
  ]);
  await page.waitForLoadState('domcontentloaded');
}

async function captureRoute(page, route) {
  const targetUrl = absoluteUrl(route.url);
  const outputPath = path.join(REPO_ROOT, route.output);
  await fsp.mkdir(path.dirname(outputPath), {recursive: true});

  await page.goto(targetUrl, {waitUntil: 'domcontentloaded'});
  await page.waitForLoadState('networkidle', {timeout: 15000}).catch(() => {});

  if (route.waitForText) {
    await page.getByText(route.waitForText, {exact: false}).first().waitFor({
      state: 'visible',
      timeout: 30000,
    });
  }

  await page.screenshot({
    path: outputPath,
    fullPage: route.fullPage === true,
  });

  return {
    id: route.id,
    doc: route.doc,
    url: targetUrl,
    output: route.output,
    ok: true,
  };
}

async function writeReport(results) {
  const now = new Date().toISOString();
  const lines = [
    '# Capturas ERP',
    '',
    '**Uso interno del equipo.** Archivo generado automaticamente con `npm run capture:erp`.',
    '',
    `- Fecha: ${now}.`,
    `- Base URL: ${baseUrl}.`,
    `- Capturas correctas: ${results.filter((result) => result.ok).length}.`,
    `- Capturas con error: ${results.filter((result) => !result.ok).length}.`,
    '',
    markdownRow(['Estado', 'ID', 'Doc', 'URL', 'Archivo', 'Detalle']),
    markdownRow(['---', '---', '---', '---', '---', '---']),
    ...results.map((result) =>
      markdownRow([
        result.ok ? 'OK' : 'ERROR',
        result.id,
        result.doc ? `\`${result.doc}\`` : '-',
        result.url,
        result.output ? `\`${result.output}\`` : '-',
        result.error || '-',
      ]),
    ),
    '',
    '## Siguiente paso',
    '',
    'Revisar visualmente las capturas antes de insertarlas en articulos publicados. Si muestran datos sensibles o una pantalla equivocada, eliminar la imagen y ajustar `scripts/erp-screenshot-routes.json`.',
  ];

  await fsp.writeFile(REPORT_PATH, `${lines.join('\n')}\n`, 'utf8');
}

async function main() {
  const {chromium} = loadPlaywright();
  const routes = JSON.parse(await fsp.readFile(routesPath, 'utf8'));
  const browser = await chromium.launch({
    headless,
    args: [
      '--disable-crashpad',
      '--disable-breakpad',
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
  });

  const context = await browser.newContext({
    viewport: {width: 1440, height: 1000},
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  const results = [];

  try {
    await login(page);

    for (const route of routes) {
      try {
        const result = await captureRoute(page, route);
        results.push(result);
        console.log(`OK ${route.id} -> ${route.output}`);
      } catch (error) {
        results.push({
          id: route.id,
          doc: route.doc,
          url: absoluteUrl(route.url),
          output: route.output,
          ok: false,
          error: error instanceof Error ? error.message : String(error),
        });
        console.error(`ERROR ${route.id}: ${error instanceof Error ? error.message : String(error)}`);
      }
    }
  } finally {
    await browser.close();
    await writeReport(results);
  }

  if (results.some((result) => !result.ok)) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
