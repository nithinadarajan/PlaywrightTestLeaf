//16th November 2026

import test, { expect } from "@playwright/test";

//Simple Alert 
test ("Test to handle Sweet Alert", async({page})=> {

await page.goto("https://leafground.com/alert.xhtml");

  // Click "Show" under "Sweet Alert (Simple Dialog)"
  await page.locator("//span[text()='Show']").nth(2).click();

  // Sweet Alert is a regular DOM element, so wait for it to be visible
 const dialog = page.locator(".ui-dialog:visible");
  await expect(dialog).toBeVisible();

  // Capture the message
  const message = await dialog.locator(".ui-dialog-content").innerText();
  console.log("Sweet Alert message:", message);

  // Close it using Dismiss
  await dialog.locator("//span[@class='ui-button-text ui-c' and text()='Dismiss']").click();

  // Confirm it is closed
  await expect(dialog).toBeHidden();
});

//Sweet Modal Dismiss
test ("Test to handle Sweet Modal Dialog", async({page})=> {

    await page.goto("https://leafground.com/alert.xhtml");

    // Click "Show" under "Sweet Modal Alert"
  await page.locator("//span[text()='Show']").nth(3).click();

  // Sweet Alert is a regular DOM element, so wait for it to be visible
  const dialog = page.locator(".ui-dialog:visible");
  await expect(dialog).toBeVisible();

   // Capture the message
  const message = await dialog.locator(".ui-dialog-content").innerText();
  console.log("Sweet Modal Alert message:", message);

  // Close it using Dismiss
  await page.getByRole("button", {name : "Close"}).click();

  // Confirm it is closed
  await expect(dialog).toBeHidden();

});

//Sweet Modal - Confirmation Dialog
test ("Test to handle Sweet Dialog - Confirmation", async({page})=> {

    await page.goto("https://leafground.com/alert.xhtml");

    // Click "Delete" under "SweetAlert - Confirmation"
  await page.locator("//span[text()='Delete']").click();

  // Sweet Alert is a regular DOM element, so wait for it to be visible
  const dialog = page.locator(".ui-dialog:visible");
  await expect(dialog).toBeVisible();

   // Capture the message
  const message = await dialog.locator(".ui-dialog-content").innerText();
  console.log("Sweet Alert Confirmation message:", message);

  // Close it using Dismiss
  await page.getByRole("button", {name : "Yes"}).click();

  // Confirm it is closed
  await expect(dialog).toBeHidden();

});

//Minimize and Maximize
test ("Test to handle Sweet Modal Dialog", async({page})=> {

    await page.goto("https://leafground.com/alert.xhtml");

    // Click "SweetAlert - Minimize and Maximize"
  await page.locator("//span[text()='Show']").nth(5).click();

  // Sweet Alert is a regular DOM element, so wait for it to be visible
  const dialog = page.locator(".ui-dialog:visible");
  await expect(dialog).toBeVisible();

   // Capture the message
  const message = await dialog.locator(".ui-dialog-content").innerText();
  console.log("Sweet Alert Min and Max message:", message);

  // Close it using Dismiss
  await page.getByRole("button", {name : "Close"}).click();

  // Confirm it is closed
  await expect(dialog).toBeHidden();

});