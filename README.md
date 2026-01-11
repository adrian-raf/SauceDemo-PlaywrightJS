# SauceDemo Test Automation

Project ini berisi automated test untuk website [SauceDemo](https://www.saucedemo.com) menggunakan Playwright. Test yang dibuat mencakup skenario login, sorting produk, dan end-to-end checkout flow.

## Tech Stack

- **Playwright** - Framework automation testing modern yang support multiple browser
- **Node.js** - Runtime environment JavaScript
- **dotenv** - Untuk manage environment variables

## Struktur Project

```
testAutomation_ESB/
├── data/              # Data test (user credentials, product info)
├── pages/             # Page Object Model classes
├── tests/             # Test scenarios
├── .env               # Environment variables (jangan di-commit!)
├── playwright.config.js
└── package.json
```

### Penjelasan Folder

- **data/** - Menyimpan data yang dipakai untuk testing seperti user credentials dan checkout data
- **pages/** - Implementasi Page Object Model, setiap page punya class sendiri
- **tests/** - Semua test scenarios diletakkan di sini

## Prerequisites

Sebelum menjalankan project ini, pastikan sudah install:

- Node.js (versi 16 atau lebih baru)
- npm (biasanya sudah include sama Node.js)

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

4. Setup environment variables

   Buat file `.env` di root folder, lalu tambahkan:

   ```
   PASSWORD_USERS=secret_sauce
   ```

   > **Note**: File `.env` sudah di-ignore di git untuk keamanan

## Cara Menjalankan Test

### Jalankan semua test (headed mode)

```bash
npm test
```

Command ini akan membuka browser dan kamu bisa lihat test berjalan secara visual.

### Jalankan dengan UI Mode (recommended untuk debugging)

```bash
npm run ui
```

UI Mode memberikan interface yang bagus untuk:

- Lihat test berjalan step-by-step
- Debug test yang gagal
- Time travel debugging

### Jalankan test spesifik

```bash
npx playwright test tests/login.spec.js
```

## Test Scenarios

### 1. Login Tests (`login.spec.js`)

- ✅ Login dengan user yang valid
- ✅ Validasi error message untuk user yang invalid

### 2. Checkout Flow (`checkout.spec.js`)

Test end-to-end yang mencakup:

1. Login ke aplikasi
2. Menambahkan 2 produk ke cart
3. Verifikasi cart badge menampilkan jumlah yang benar
4. Proceed ke checkout
5. Mengisi informasi checkout
6. **Validasi matematika** - Memastikan Subtotal + Tax = Total
7. Finish order dan validasi success message

### 3. Sorting Test (`sorting.spec.js`)

- ✅ Validasi sorting produk berdasarkan harga dan nama

## Page Object Model

Project ini menggunakan Page Object Model pattern untuk maintainability yang lebih baik:

- **LoginPage** - Handle login functionality
- **InventoryPage** - Handle product listing dan add to cart
- **CartPage** - Handle shopping cart operations
- **CheckoutPage** - Handle checkout process dan payment

## Environment Variables

Saat ini project menggunakan 1 environment variable:

| Variable         | Description                            | Example        |
| ---------------- | -------------------------------------- | -------------- |
| `PASSWORD_USERS` | Password default untuk semua test user | `secret_sauce` |

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
- Retry on CI: 2 kali
- Trace: Capture saat retry test yang gagal

## Tips Development

1. **Debugging**: Gunakan `npm run ui` untuk development, jauh lebih mudah debug
2. **Inspect Element**: Gunakan Playwright Inspector dengan command:
   ```bash
   npx playwright test --debug
   ```
3. **Slow Motion**: Untuk lihat test berjalan lebih lambat, tambahkan di config:
   ```javascript
   use: {
     launchOptions: {
       slowMo: 50;
     }
   }
   ```

## Known Issues

Tidak ada issue yang terdeteksi saat ini. Kalau menemukan bug, silakan buat issue di GitHub.

## Contributing

Kalau mau contribute:

1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## License

Project ini dibuat untuk keperluan learning dan testing.

---

**Happy Testing!** 🚀
