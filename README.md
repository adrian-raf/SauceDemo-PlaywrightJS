# SauceDemo Test Automation

Project ini berisi automated test untuk website [SauceDemo](https://www.saucedemo.com) menggunakan Playwright. Test yang dibuat mencakup skenario login, sorting produk, dan end-to-end checkout flow.

## Tech Stack

- **Playwright** 
- **Node.js** 
- **dotenv** 

## Struktur Project

```
testAutomation_ESB/
├── data/              # Data test (user credentials, product info)
├── pages/             # Page Object Model0
├── tests/             # Test scenarios
├── .env              
├── playwright.config.js
└── package.json
```

### Penjelasan Folder

- **data/** - Menyimpan data yang dipakai untuk testing seperti user credentials dan data produk
- **pages/** - Implementasi Page Object Model, setiap page punya class sendiri
- **tests/** - Semua test scenarios diletakkan di sini

## Prerequisites

Sebelum menjalankan project ini, pastikan sudah install:

- Node.js (versi 16 atau lebih baru)
- npm 

## Setup Project

1. Clone repository ini

   ```bash
   git clone <repository-url>
   cd testAutomation_ESB
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Install browser untuk Playwright

   ```bash
   npx playwright install chromium
   ```

## Cara Menjalankan Test

### Jalankan semua test (headed mode)

```bash
npm test
```

### Jalankan dengan UI Mode

```bash
npm run ui
```

### Jalankan test spesifik

```bash
npx playwright test tests/login.spec.js
```

## Test Scenarios

### 1. Login Tests (`login.spec.js`)

-  Login dengan user yang valid
-  Validasi error message untuk user yang invalid

### 2. Checkout Flow (`checkout.spec.js`)

Test end-to-end yang mencakup:

1. Login ke aplikasi
2. Menambahkan 2 produk ke cart
3. Verifikasi cart badge menampilkan jumlah yang benar
4. Proceed ke checkout
5. Mengisi informasi checkout
6. Memastikan Subtotal + Tax = Total
7. Menyelesaikan order dan validasi success message

### 3. Sorting Test (`sorting.spec.js`)

-  Validasi sorting produk berdasarkan harga dan nama

## Page Object Model

Project ini menggunakan Page Object Model pattern untuk maintainability yang lebih baik:

- **LoginPage** - Handle login functionality
- **InventoryPage** - Handle product listing dan add to cart
- **CartPage** - Handle shopping cart operations
- **CheckoutPage** - Handle checkout process dan payment


## Test Reports

Setelah menjalankan test, Playwright akan generate HTML report otomatis. Untuk membukanya:

```bash
npx playwright show-report
```

Report ini berisi:

- Pass/fail status untuk setiap test
- Screenshots untuk test yang gagal
- Execution time
- Trace files untuk debugging

## Configuration

Setup konfigurasi ada di file `playwright.config.js`. Beberapa hal yang sudah di-configure:

- Base URL: `https://www.saucedemo.com`
- Browser: Chromium (bisa di-uncomment untuk Firefox dan WebKit)
- Parallel execution: Enabled


