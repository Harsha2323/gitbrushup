import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://v3-lts-eetestsystem.tooljet.com/login/qa-automation?redirectTo=/');
  await page.getByPlaceholder('Enter your work email').click();
  await page.getByPlaceholder('Enter your work email').fill('test1@tooljet.com');
  await page.getByPlaceholder('Enter password').dblclick();
  await page.getByPlaceholder('Enter password').fill('password');
  await page.getByPlaceholder('Enter password').press('Enter');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Create an app' }).click();
  await page.getByPlaceholder('Enter app name').click();
  await page.getByPlaceholder('Enter app name').fill('kk');
});