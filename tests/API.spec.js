const { test, expect } = require('@playwright/test');
const { log } = require('node:console');

test('API test example', async ({ request }) => {
    const response = await request.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    expect(response.status()).toBe(200);
    const data = await response.json();
    log(data);
    expect(data).toHaveProperty('success', true);
    expect(data).toHaveProperty('deck_id');
    expect(data).toHaveProperty('shuffled', true);
    expect(data).toHaveProperty('remaining', 52);
});