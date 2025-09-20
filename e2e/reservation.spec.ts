import { test, expect } from '@playwright/test';

const nextButton = (page: any, label: string) => page.getByRole('button', { name: label });

test('complete reservation wizard', async ({ page }) => {
  await page.goto('/fr/billetterie');
  await page.getByLabel('Date souhaitée').fill('2024-06-20');
  await nextButton(page, 'Étape suivante').click();
  await page.getByLabel('Participants total').fill('6');
  await nextButton(page, 'Étape suivante').click();
  await page.getByRole('radio', { name: /Mini GP/ }).check();
  await nextButton(page, 'Étape suivante').click();
  await page.getByLabel('Prénom').fill('Camille');
  await page.getByLabel('Nom', { exact: true }).fill('Durand');
  await page.getByLabel('Email').fill('camille@example.com');
  await page.getByLabel('Téléphone').fill('+33012345678');
  await page.getByLabel('Précisions').fill('Test Playwright');
  await nextButton(page, 'Valider la réservation').click();
  await expect(page.getByText('Merci !')).toBeVisible();
});
