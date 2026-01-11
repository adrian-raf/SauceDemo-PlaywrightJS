export class CheckoutPage {
  constructor(page) {
    this.page = page;
    // Form
    this.firstNameInput = page.locator('#first-name');
    this.lastNameInput = page.locator('#last-name');
    this.zipInput = page.locator('#postal-code');
    this.continueBtn = page.locator('#continue');

    // Summary
    this.subtotalLabel = page.locator('.summary_subtotal_label');
    this.taxLabel = page.locator('.summary_tax_label');
    this.totalLabel = page.locator('.summary_total_label');
    this.finishBtn = page.locator('#finish');
    this.completeHeader = page.locator('.complete-header');
  }

  async fillInformation(first, last, zip) {
    await this.firstNameInput.fill(first);
    await this.lastNameInput.fill(last);
    await this.zipInput.fill(zip);
    await this.continueBtn.click();
  }

  async getPriceValues() {
    const subtext = await this.subtotalLabel.innerText();
    const taxtext = await this.taxLabel.innerText();
    const totaltext = await this.totalLabel.innerText();

    return {
      itemTotal: parseFloat(subtext.replace('Item total: $', '')),
      tax: parseFloat(taxtext.replace('Tax: $', '')),
      total: parseFloat(totaltext.replace('Total: $', '')),
    };
  }

  async finishOrder() {
    await this.finishBtn.click();
  }

  async getCompletionMessage() {
    return await this.completeHeader.innerText();
  }
}
