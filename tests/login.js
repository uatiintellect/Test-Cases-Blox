const puppeteer = require("puppeteer");
// require('dotenv').config();

(async () => {

    const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ["--start-maximized"],
    }); 

    var page = await browser.newPage(); 

    // await page.setViewport({
    //     width: 1920,
    //     height: 1080,
    //     deviceScaleFactor: 1,
    //   });
    // await page.setDefaultNavigationTimeout(0);

    

    await page.goto("https://www.vsblox.com/");
    await page.waitForTimeout(5000); // delay for 5 second

    await page.evaluate(() => {
    document.querySelector("#__next > nav > div.\\32 xl\\:container.\\32 xl\\:mx-auto.\\32 xl\\:px-4.md\\:px-6.px-4.py-6.relative.z-20 > div > button.hidden.lg\\:flex.py-3.px-6.text-center.border.text-base.leading-4.text-white.rounded.border-gray-500.hover\\:bg-white.hover\\:text-gray-900").click();
    });
  
    await page.waitForTimeout(5000); 

    await page.click("#__next > div > div > div.w-full.xl\\:w-1\\/2.h-full.relative.z-20 > div > div.mt-9.md\\:mt-78.xl\\:mt-140.flex.items-center.xl\\:items-start.flex-col.w-full > div > form > div:nth-child(1) > div > input");

    await page.type("#__next > div > div > div.w-full.xl\\:w-1\\/2.h-full.relative.z-20 > div > div.mt-9.md\\:mt-78.xl\\:mt-140.flex.items-center.xl\\:items-start.flex-col.w-full > div > form > div:nth-child(1) > div > input", "test.mail@gmail.com");

    await page.waitForTimeout(5000); 


    await page.click("#__next > div > div > div.w-full.xl\\:w-1\\/2.h-full.relative.z-20 > div > div.mt-9.md\\:mt-78.xl\\:mt-140.flex.items-center.xl\\:items-start.flex-col.w-full > div > form > div.w-full.mt-6 > div > input");
    await page.type("#__next > div > div > div.w-full.xl\\:w-1\\/2.h-full.relative.z-20 > div > div.mt-9.md\\:mt-78.xl\\:mt-140.flex.items-center.xl\\:items-start.flex-col.w-full > div > form > div.w-full.mt-6 > div > input", "testing123")

    await page.waitForTimeout(5000); 


    await page.click("#__next > div > div > div.w-full.xl\\:w-1\\/2.h-full.relative.z-20 > div > div.mt-9.md\\:mt-78.xl\\:mt-140.flex.items-center.xl\\:items-start.flex-col.w-full > div > form > button");
    await page.waitForTimeout(5000); 
    
    await page.screenshot({
        path: "./screenshots/login.png",
      });
  await browser.close();
})();