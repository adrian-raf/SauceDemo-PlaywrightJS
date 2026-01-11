export class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutBtn = page.locator('#checkout');
  }

  getItemLocator(itemName) {
    return this.page.locator('.inventory_item_name', { hasText: itemName });
  }

  async proceedToCheckout() {
    await this.checkoutBtn.click();
  }
}
