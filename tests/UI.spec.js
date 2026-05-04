// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('#shuffle')).toContainText('Shuffle the Cards:');
  await expect(page.locator('#shuffle + pre')).toContainText('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
  await expect(page).toHaveTitle(/Deck of Cards API/);
});


