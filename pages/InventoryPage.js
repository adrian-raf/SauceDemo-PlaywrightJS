export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.sortDropdown = page.locator('.product_sort_container');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('.shopping_cart_link');
    this.itemPrices = page.locator('.inventory_item_price');
  }

  async addItemToCart(itemName) {
    const selectorId = itemName.toLowerCase().replace(/ /g, '-');
    await this.page.locator(`[data-test="add-to-cart-${selectorId}"]`).click();
  }

  async sortBy(option) {
    await this.sortDropdown.selectOption(option);
  }

  async getFirstItemPrice() {
    const text = await this.itemPrices.first().innerText();
    return parseFloat(text.replace('$', ''));
  }

  async goToCart() {
    await this.cartLink.click();
  }
}
