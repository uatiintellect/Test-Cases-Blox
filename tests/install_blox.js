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


    await page.click("#wow > section:nth-child(1) > div > a > div");
    await page.waitForTimeout(10000);

    await page.waitForSelector("#id__0");
    await page.waitForTimeout(5000);
    
    await page.click("#id__0");
    await page.waitForTimeout(5000);


    page.on("dialog", async (dialog) => {
      console.log("Inside page on");
      console.log(dialog.message());
      if (dialog.message().endsWith("wants to open this application.")) 
      {
          console.log("Inside if");
          await dialog.accept();
      }
  });
  await page.waitForTimeout(10000); 


    await page.screenshot({
        path: "./screenshots/install_blox.png",
      });
  await browser.close();
})();