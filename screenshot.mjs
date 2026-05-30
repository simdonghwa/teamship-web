import { chromium } from '@playwright/test';

const PAGES = [
  { path: '/', name: 'home' },
  { path: '/corporate', name: 'corporate' },
  { path: '/family', name: 'family' },
  { path: '/diagnosis', name: 'diagnosis' },
  { path: '/diagnosis/parent', name: 'diagnosis-parent' },
  { path: '/about', name: 'about' },
  { path: '/contact', name: 'contact' },
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

for (const { path, name } of PAGES) {
  await page.goto(`http://localhost:3001${path}`, { waitUntil: 'networkidle', timeout: 15000 });
  await page.screenshot({ path: `C:/Users/MSI/Desktop/ts-${name}.png`, fullPage: false });
  console.log(`✓ ${name}`);
}

await browser.close();
