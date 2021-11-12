const puppeteer = require("puppeteer");
// require('dotenv').config();

(async () => {

    const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
    // executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ["--start-maximized"],
    }); 

    var page = await browser.newPage(); 

    // await page.setViewport({
    // width: 1920,
    // height: 1080,
    // deviceScaleFactor: 1,});
    // await page.setDefaultNavigationTimeout(0);

    

    await page.goto("https://www.vsblox.com/");
    await page.waitForTimeout(5000); // delay for 5 second


   await page.click("#__next > nav > div.\\32 xl\\:container.\\32 xl\\:mx-auto.\\32 xl\\:px-4.md\\:px-6.px-4.py-6.relative.z-20 > div > ul > li:nth-child(1) > a");
   await page.waitForTimeout(5000);

   await page.click("#__next > main > section.mt-10.lg\\:mt-12.w-full.md\\:w-\\[534px\\].lg\\:w-\\[900px\\].lg\\:h-\\[415px\\].relative.z-10.\\32 xl\\:px-4.px-4.mx-auto.container.mb-3 > div > section.lg\\:pt-0.pt-4.w-full.flex.flex-col.rounded-t-md.md\\:rounded-l-md.md\\:rounded-t-0.lg\\:w-1\\/2.h-full.bg-\\[\\#27272A\\] > div:nth-child(3) > div");
   await page.waitForTimeout(5000);

   await page.click("#__next > main > section.mt-10.lg\\:mt-12.w-full.md\\:w-\\[534px\\].lg\\:w-\\[900px\\].lg\\:h-\\[415px\\].relative.z-10.\\32 xl\\:px-4.px-4.mx-auto.container.mb-3 > div > section.lg\\:pt-0.pt-4.w-full.flex.flex-col.rounded-t-md.md\\:rounded-l-md.md\\:rounded-t-0.lg\\:w-1\\/2.h-full.bg-\\[\\#27272A\\] > div.px-8.py-4.relative > button");
   await page.waitForTimeout(5000);

   await page.click("#__next > main > section.mt-10.lg\\:mt-12.w-full.md\\:w-\\[534px\\].lg\\:w-\\[900px\\].lg\\:h-\\[415px\\].relative.z-10.\\32 xl\\:px-4.px-4.mx-auto.container.mb-3 > div > section.lg\\:pt-0.pt-4.w-full.flex.flex-col.rounded-t-md.md\\:rounded-l-md.md\\:rounded-t-0.lg\\:w-1\\/2.h-full.bg-\\[\\#27272A\\] > div:nth-child(3) > div");

    await page.screenshot({
        path: "./screenshots/pricing.png",
      });
  await browser.close();
})();