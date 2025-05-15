import { test, expect } from '@playwright/test';
import * as c from '../common/common.js';

test.describe('Tes Form Pendaftaran Cermati', () => {
  test('Isi dan submit form gabung', async ({ page }) => {
    await page.goto('/app/gabung');

    // Isi form
    await page.getByRole('textbox', { name: 'No. Handphone' }).fill(`0851${c.generateRandomText('NUMERIC', 8)}`);
    await page.getByRole('textbox', { name: 'Email' }).fill(`${c.generateRandomText('ALPHANUMERIC', 10)}@example.com`);
    await page.getByRole('textbox', { name: 'Nama Depan' }).fill(`${c.generateRandomText('ALPHABET', 10)}`);
    await page.getByRole('textbox', { name: 'Nama Belakang' }).fill(`${c.generateRandomText('ALPHABET', 5)} ${c.generateRandomText('ALPHABET', 5)}`);
    
    // Submit
    await page.getByRole('button', { name: 'Daftar' }).click();

    // Verify 
    await page.getByRole('heading', { name: 'Kode OTP Terkirim' }).isVisible();
  });
});
