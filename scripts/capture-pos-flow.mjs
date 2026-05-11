/**
 * Captura pasos del flujo POS sin confirmar una venta.
 *
 * Requiere Playwright. Si este repo no lo tiene instalado, lee la instalacion
 * del frontend hermano `../ZiT-ERP_FE`. No escribe ni modifica archivos dentro
 * de `../ZiT-ERP_FE`.
 *
 * Uso:
 *   ERP_SCREENSHOT_USER="admin@test.com" ERP_SCREENSHOT_PASSWORD="***" npm run capture:pos
 */

import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.join(__dirname, '..');
const DEFAULT_FRONTEND_PACKAGE = path.resolve(REPO_ROOT, '..', 'ZiT-ERP_FE', 'package.json');
const OUT_DIR = path.join(REPO_ROOT, 'static', 'img', 'ayuda', 'ventas');
const REPORT_PATH = path.join(REPO_ROOT, 'AUDITORIA-CAPTURAS-POS.md');

const baseUrl = process.env.ERP_SCREENSHOT_BASE_URL || 'https://testziterp.azurewebsites.net';
const user = process.env.ERP_SCREENSHOT_USER;
const password = process.env.ERP_SCREENSHOT_PASSWORD;
const headless = process.env.ERP_SCREENSHOT_HEADLESS !== 'false';
const productSearch = process.env.POS_SCREENSHOT_PRODUCT || 'limpiador cremoso';

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

async function openPos(page) {
  await page.goto(absoluteUrl('/admin/pos'), {waitUntil: 'domcontentloaded'});
  await page.waitForLoadState('networkidle', {timeout: 15000}).catch(() => {});
  await page.getByTestId('pos-input-producto').waitFor({state: 'visible', timeout: 30000});
}

async function shot(page, filename, description, results) {
  const output = path.join(OUT_DIR, filename);
  await fsp.mkdir(path.dirname(output), {recursive: true});
  await page.screenshot({path: output, fullPage: false});
  results.push({filename, description, ok: true});
  console.log(`OK ${filename} - ${description}`);
}

async function shotLocator(locator, filename, description, results) {
  const output = path.join(OUT_DIR, filename);
  await fsp.mkdir(path.dirname(output), {recursive: true});
  await locator.screenshot({path: output});
  results.push({filename, description, ok: true});
  console.log(`OK ${filename} - ${description}`);
}

async function writeReport(results) {
  const lines = [
    '# Capturas POS',
    '',
    '**Uso interno del equipo.** Archivo generado automaticamente con `npm run capture:pos`.',
    '',
    `- Fecha: ${new Date().toISOString()}.`,
    `- Base URL: ${baseUrl}.`,
    `- Producto usado para captura: ${productSearch}.`,
    '',
    '| Archivo | Descripcion |',
    '|---|---|',
    ...results.map((result) => `| \`static/img/ayuda/ventas/${result.filename}\` | ${result.description} |`),
    '',
    'Estas capturas no confirman ventas. Revisarlas visualmente antes de publicarlas en artículos.',
  ];

  await fsp.writeFile(REPORT_PATH, `${lines.join('\n')}\n`, 'utf8');
}

async function main() {
  const {chromium} = loadPlaywright();
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
    await openPos(page);

    const productInput = page.getByTestId('pos-input-producto');
    await productInput.fill(productSearch);
    await productInput.press('Enter');
    await page.getByTestId('pos-item-row').first().waitFor({state: 'visible', timeout: 30000});
    await shot(page, 'pos-02-producto-agregado.png', 'Producto agregado al POS', results);

    await page.keyboard.press('F3');
    await page.getByRole('heading', {name: /Seleccionar cliente/i}).waitFor({
      state: 'visible',
      timeout: 15000,
    });
    await page.waitForTimeout(700);
    await shotLocator(
      page.locator('[role="dialog"]').filter({hasText: /Seleccionar cliente/i}).first(),
      'pos-03-seleccionar-cliente.png',
      'Dialogo para seleccionar cliente',
      results,
    );
    await page.keyboard.press('Escape');

    await page.keyboard.press('F6');
    const descuento = page.getByRole('heading', {name: /Descuento \(F6\)/i});
    if (await descuento.isVisible({timeout: 6000}).catch(() => false)) {
      await page.waitForTimeout(700);
      await shotLocator(
        page.locator('[role="dialog"]').filter({hasText: /Descuento \(F6\)/i}).first(),
        'pos-04-descuento.png',
        'Dialogo de descuento general',
        results,
      );
      await page.keyboard.press('Escape');
    }

    await page.getByTestId('pos-boton-finalizar').click();
    const finalizarDialog = page.locator('[role="dialog"]').filter({hasText: /FINALIZAR/i}).first();
    await finalizarDialog.waitFor({
      state: 'visible',
      timeout: 15000,
    });
    await page.waitForTimeout(700);
    await shotLocator(
      finalizarDialog,
      'pos-05-finalizar.png',
      'Confirmacion antes de finalizar y cobrar',
      results,
    );
    await page.getByRole('button', {name: /^Cancelar$/i}).first().click();

    await openPos(page);
    await productInput.fill('INEXISTENTE');
    await productInput.press('Enter');
    await page.getByText(/No se encontró un producto con ese código o descripción/i).waitFor({
      state: 'visible',
      timeout: 15000,
    });
    await shot(page, 'pos-06-producto-no-encontrado.png', 'Mensaje de producto no encontrado', results);
  } finally {
    await browser.close();
    await writeReport(results);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
