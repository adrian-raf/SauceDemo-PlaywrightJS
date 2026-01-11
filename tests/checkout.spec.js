import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { CartPage } from '../pages/CartPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';
import { USERS, CHECKOUT_DATA } from '../data/users.js';
import { PRODUCTS } from '../data/products.js';

test('End to end checkout flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // 1. Login
  await loginPage.goto();
  await loginPage.login(USERS.STANDARD.username, USERS.STANDARD.password);

  // 2. Add Items
  await inventoryPage.addItemToCart(PRODUCTS[0].name);
  await inventoryPage.addItemToCart(PRODUCTS[1].name);

  // Assert Cart Badge
  await expect(inventoryPage.cartBadge).toHaveText('2');

  // 3. Cart Verification
  await inventoryPage.goToCart();
  // Validate item in cart
  await expect(cartPage.getItemLocator(PRODUCTS[0].name)).toBeVisible();
  await expect(cartPage.getItemLocator(PRODUCTS[1].name)).toBeVisible();

  await cartPage.proceedToCheckout();

  // 4. Fill Checkout Form
  await checkoutPage.fillInformation(
    CHECKOUT_DATA.firstName,
    CHECKOUT_DATA.lastName,
    CHECKOUT_DATA.zip,
  );

  // 5. Total price
  const prices = await checkoutPage.getPriceValues();
  // console.log(`Total price: ${prices.itemTotal} + ${prices.tax} = ${prices.total}`);

  // Validate (Subtotal + Tax = Total)
  expect(prices.itemTotal + prices.tax).toBeCloseTo(prices.total, 2);

  // 6. Finish Order
  await checkoutPage.finishOrder();
  const msg = await checkoutPage.getCompletionMessage();
  expect(msg).toBe('Thank you for your order!');
});
