// Puppeteer and Headless Chrome (or Firefox)
// npm init -y
// add "type":"module" to package.json
// npm install puppeteer@19.11.1

import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1600,
    height: 1000,
    isMobile: false,
    isLandscape: true,
    hasTouch: false,
    deviceScaleFactor: 1,
  });

  await page.goto("http://127.0.0.1:5500/index.html");

  const url = await page.url();
  console.log(url);
  const content = await page.content();
  console.log(content);

  await page.screenshot({
    path: "./screens/samplechapters1.jpg",
    fullPage: true,
  });

  // await page.type('input.selector', 'text');
  // await page.waitForSelector('.someselector')

  await browser.close();
})();
