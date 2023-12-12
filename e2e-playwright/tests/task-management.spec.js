const { test, expect } = require("@playwright/test");

test("Main page has expected title and headings.", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Task application!");
  await expect(page.locator("h1")).toHaveText("Tasks");
  await expect(page.locator("h2")).toHaveText(["Active tasks", "Add a task"]);
});

test("Can create a task.", async ({ page }) => {
  await page.goto("/");

});