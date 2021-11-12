const puppeteer = require("puppeteer");
// require('dotenv').config();

(async () => {

    const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    //executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ["--start-maximized"],
    }); 

    var page = await browser.newPage(); 

    // await page.setViewport({
    //     width: 1920,
    //     height: 1080,
    //     deviceScaleFactor: 1,
    //   });
    await page.setDefaultNavigationTimeout(0);

    

    await page.goto("https://www.vsblox.com/");
    await page.waitForTimeout(9000); // delay for 8 second


    //scrolling till the newsletter input field
    let input_field = page.waitForSelector(
        "input[placeholder='Enter your email']",
        { visible: true }
    );
    (await input_field).evaluate((b) =>
      b.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      })
    );
    await page.waitForTimeout(6000);


    let email = "tester@testing" + Math.random() + ".com";
    (await input_field).type(email);
    await page.waitForTimeout(5000);


    await page.click("button[aria-label='Subscribe Now!']");
    await page.waitForTimeout(10000);


    await page.screenshot({
        path: "./screenshots/newsletter.png",
      });
    await page.waitForTimeout(3000);
    console.log("Test case passed => newsletter.js");
    await browser.close();
})();