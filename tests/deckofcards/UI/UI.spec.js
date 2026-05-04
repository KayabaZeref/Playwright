// @ts-check
import { test, expect } from '@playwright/test';

test('URL and API endpoint are corrected ', async ({ page }) => {
  // Navigate to the root URL of the application
  //await page.goto('/');
  await page.goto('https://deckofcardsapi.com/');

  // Assert that the page contains the expected text and API endpoint
  await expect(page.locator('#shuffle')).toContainText('Shuffle the Cards:');
  await expect(page.locator('#shuffle + pre')).toContainText('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
  // Assert that the page title is correct
  await expect(page).toHaveTitle(/Deck of Cards API/);
});


