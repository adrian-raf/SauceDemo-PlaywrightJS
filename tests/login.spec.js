import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { USERS } from '../data/users.js';

test.describe('Login Scenarios', () => {
  test('Login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(USERS.STANDARD.username, USERS.STANDARD.password);

    await expect(page).toHaveURL(/.*inventory.html/);
  });

  test('Show error for invalid user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(USERS.INVALID.username, USERS.INVALID.password);

    await expect(loginPage.errorMsg).toContainText(
      'Username and password do not match any user in this service',
    );
  });
});
