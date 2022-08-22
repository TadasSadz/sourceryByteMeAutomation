// @ts-check
const { test, expect } = require("@playwright/test");
const { LunchappAuth } = require("../Pages/LunchappAuth");

test.describe("Lunch website testing", () => {
  test.describe("Authentication testing", () => {
    test("Should be able to log-in and log-out with admin credentials", async ({
      page,
    }) => {
      let lunchApp = new LunchappAuth(page);
      await lunchApp.navigateLoginForm();
      await lunchApp.Authentication(
        "admin7@sourceryacademy.com",
        "nera_svarbus62"
      );

      await page.locator("text=Atsijungti").click();
      await expect(page).toHaveURL("https://lunch.devbstaging.com/login");
    });

    test("Should be able to log-in and log-out with user credentials", async ({
      page,
    }) => {
      let lunchApp = new LunchappAuth(page);
      await lunchApp.navigateLoginForm();
      await lunchApp.Authentication(
        "Tadas.Sadzevicius@sourceryacademy.com",
        "nera_svarbus49"
      );

      await page.locator("text=Atsijungti").click();
      await expect(page).toHaveURL("https://lunch.devbstaging.com/login");
    });
  });

  test.describe("Website Component testing", () => {
    //This will be done on admin credentials
    test('Website should have "Patiekalu redagavimas', async ({ page }) => {
      let lunchApp = new LunchappAuth(page);
      await lunchApp.navigateLoginForm();
      await lunchApp.Authentication(
        "admin7@sourceryacademy.com",
        "nera_svarbus62"
      );

      await page.locator("text=Patiekalų Redagavimas").click();
      await expect(page).toHaveURL(
        "https://lunch.devbstaging.com/edit/2022-08-22"
      );
    });

    test('Website should have "Vartotoju islaidos', async ({ page }) => {
      let lunchApp = new LunchappAuth(page);
      await lunchApp.navigateLoginForm();
      await lunchApp.Authentication(
        "admin7@sourceryacademy.com",
        "nera_svarbus62"
      );

      await page.locator("text=Vartotojų Išlaidos").click();
      await expect(page).toHaveURL(
        "https://lunch.devbstaging.com/monthlyExpenses/2022-08"
      );
    });

    test('Website should have "Uzsakymu istorija', async ({ page }) => {
      let lunchApp = new LunchappAuth(page);
      await lunchApp.navigateLoginForm();
      await lunchApp.Authentication(
        "admin7@sourceryacademy.com",
        "nera_svarbus62"
      );

      await page.locator("text=Užsakymų istorija").click();
      await expect(page).toHaveURL(
        "https://lunch.devbstaging.com/ordersHistory/2022-08"
      );
    });

    test('Website should have "Uzsakymu sarasas', async ({ page }) => {
      let lunchApp = new LunchappAuth(page);
      await lunchApp.navigateLoginForm();
      await lunchApp.Authentication(
        "admin7@sourceryacademy.com",
        "nera_svarbus62"
      );

      await page.locator("text=Užsakymų Sąrašas").click();
      await expect(page).toHaveURL(
        "https://lunch.devbstaging.com/ordersList/2022-08-22"
      );
    });

    test('Website should have "Uzsakymu kiekiai', async ({ page }) => {
      let lunchApp = new LunchappAuth(page);
      await lunchApp.navigateLoginForm();
      await lunchApp.Authentication(
        "admin7@sourceryacademy.com",
        "nera_svarbus62"
      );

      await page.locator("text=Užsakymų Kiekiai").click();
      await expect(page).toHaveURL(
        "https://lunch.devbstaging.com/ordersCounts/2022-08-22"
      );
    });

    test('Website should have "Patiekalu ivertinimai', async ({ page }) => {
      let lunchApp = new LunchappAuth(page);
      await lunchApp.navigateLoginForm();
      await lunchApp.Authentication(
        "admin7@sourceryacademy.com",
        "nera_svarbus62"
      );

      await page.locator("text=Patiekalų Įvertinimai").click();
      await expect(page).toHaveURL(
        "https://lunch.devbstaging.com/ratings/2022-08-23"
      );
    });

    test('Website should have "nustatymai', async ({ page }) => {
      let lunchApp = new LunchappAuth(page);
      await lunchApp.navigateLoginForm();
      await lunchApp.Authentication(
        "admin7@sourceryacademy.com",
        "nera_svarbus62"
      );

      await page.locator("text=Nustatymai").click();
      await expect(page).toHaveURL("https://lunch.devbstaging.com/settings");
    });
  });
});
