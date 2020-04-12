
const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://twitter.com/navspeak');
  await page.waitForNavigation({ waitUntil: 'networkidle0' });
  await page.screenshot({ path: './puppeteer/navspeak.png' });

  browser.close();
}

run();
