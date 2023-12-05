const puppeteer = require("puppeteer"); // v20.7.4 or later

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  {
    const targetPage = page;
    await targetPage.setViewport({
      width: 1313,
      height: 258,
    });
  }
  {
    const targetPage = page;
    const promises = [];
    const startWaitingForEvents = () => {
      promises.push(targetPage.waitForNavigation());
    };
    startWaitingForEvents();
    await targetPage.goto("https://academy.quales.tech/");
    await Promise.all(promises);
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(Sign In)"),
      targetPage.locator("div.css-48p1y4 > button"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"root\\"]/header/div/div/div[3]/button)'
      ),
      targetPage.locator(":scope >>> div.css-48p1y4 > button"),
      targetPage.locator("::-p-text(Sign In)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 41.046875,
          y: 31,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("[data-testid='EmailAddress']"),
      targetPage.locator('::-p-xpath(//*[@data-testid=\\"EmailAddress\\"])'),
      targetPage.locator(":scope >>> [data-testid='EmailAddress']"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 202.5,
          y: 33,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("[data-testid='EmailAddress']"),
      targetPage.locator('::-p-xpath(//*[@data-testid=\\"EmailAddress\\"])'),
      targetPage.locator(":scope >>> [data-testid='EmailAddress']"),
    ])
      .setTimeout(timeout)
      .fill("ay@mail.com");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("[data-testid='Password']"),
      targetPage.locator('::-p-xpath(//*[@data-testid=\\"Password\\"])'),
      targetPage.locator(":scope >>> [data-testid='Password']"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 149.5,
          y: 7,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("[data-testid='Password']"),
      targetPage.locator('::-p-xpath(//*[@data-testid=\\"Password\\"])'),
      targetPage.locator(":scope >>> [data-testid='Password']"),
    ])
      .setTimeout(timeout)
      .fill("pass1234");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(LOGIN)"),
      targetPage.locator("button.MuiButton-contained"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"root\\"]/div[2]/div[2]/div/button[2])'
      ),
      targetPage.locator(":scope >>> button.MuiButton-contained"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 173.5,
          y: 17,
        },
      });
  }

  await browser.close();
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
