const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 3
  });
  await page.goto('file:///Users/thtrgng/Desktop/Menu Landing Page/index.html');
  await page.click('button[data-menu="omakase"]');
  await page.waitForTimeout(1000); // Wait for sheet animation
  await page.screenshot({ path: 'screenshot.png' });
  await browser.close();
})();
