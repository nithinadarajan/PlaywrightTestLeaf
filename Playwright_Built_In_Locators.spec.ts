// 5 November 2026

import { test } from "@playwright/test";

test("LeafGround - built-in locators exploration", async ({ page }) => {
  await page.goto("https://www.leafground.com");

  // ---- getByRole: links in the sidebar menu (names confirmed from the page) ----
  const elementMenu = page.getByRole("link", { name: "Element", exact: true });
  await elementMenu.click();

  const textBoxLink = page.getByRole("link", { name: "Text Box" });
  await textBoxLink.click();

  // ---- getByText: visible headings on the Text Box page (confirmed) ----
  const typeYourNameHeading = page.getByText("Type your name");
  await typeYourNameHeading.click();

  // ---- getByPlaceholder: the first textbox (VERIFY the placeholder in DevTools) ----
  const nameTextbox = page.getByPlaceholder("Babu Manickam");
  await nameTextbox.fill("Nithi");

  // ---- getByLabel: floating-label field (VERIFY it is a real <label for=...>) ----
  const usernameField = page.getByLabel("Username");
  await usernameField.fill("nithi");

  // ---- Dashboard: label, role and checkbox examples ----
  await page.getByRole("link", { name: "Dashboard", exact: true }).click();

  // getByLabel: "E-mail Address" in Resolution Center (VERIFY)
  const emailField = page.getByLabel("E-mail Address");
  await emailField.fill("test@example.com");

  // getByRole with name: the Send button (confirmed text)
  const sendButton = page.getByRole("button", { name: "Send" });
  await sendButton.click();

  // getByText: "Daily Quiz" task (confirmed text)
  const dailyQuizTask = page.getByText("Daily Quiz");
  await dailyQuizTask.click();
});

// ---- Locators I could not confirm: declared only, no actions ----
// Locators are lazy, so these do not fail until you use them.
test("LeafGround - alt, title, testid (verify first)", async ({ page }) => {
  await page.goto("https://www.leafground.com");

  const profileImage = page.getByAltText("Babu Manickam"); // VERIFY alt text
  const homeMenuItem = page.getByTitle("Home");            // VERIFY title text
  const dynamicIdElement = page.getByTestId("j_idt88:name"); // see testid note below
});