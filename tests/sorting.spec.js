import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { USERS } from '../data/users.js';

test('Sorting price High to Low', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login(USERS.STANDARD.username, USERS.STANDARD.password);

  await inventoryPage.sortBy('hilo');

  // Assert item pertama termahal ($49.99)
  const price = await inventoryPage.getFirstItemPrice();
  expect(price).toBe(49.99);
});
